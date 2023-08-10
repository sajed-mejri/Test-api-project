import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from 'src/app/service/http-provider.service';

@Component({
  selector: 'ng-modal-confirm',
  template: `
  <div class="modal-header">
    <h5 class="modal-title" id="modal-title">Delete Confirmation</h5>
    <button type="button" class="btn close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Are you sure you want to delete?</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">CANCEL</button>
    <button type="button" ngbAutofocus class="btn btn-success" (click)="modal.close('Ok click')">OK</button>
  </div>
  `,
})
export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) { }
}

const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  closeResult = '';
  productsList: any = [];

  constructor(private router: Router,private modalService: NgbModal,
    private toastr: ToastrService, private httpProvider : HttpProviderService) { }

  ngOnInit(): void {
    this.getAllProducts();   
  }

  async getAllProducts() {
    this.httpProvider.getAllProducts().subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body.data;
        if (resultData) {
          this.productsList = resultData;
        }
      }
    },
    (error : any)=> {
        if (error) {
          if (error.status == 404) {
            if(error.error && error.error.message){
              this.productsList = [];
            }
          }
        }
      });
  }


  AddProduct() {
    this.router.navigate(['AddEmployee']);
  }

  deleteProductConfirmation(employee: any) {
    this.modalService.open(MODALS['deleteModal'],
      {
        ariaLabelledBy: 'modal-basic-title'
      }).result.then((result) => {
        this.deleteProduct(employee);
      },
        (reason) => {});
  }

  deleteProduct(employee: any) {
    this.httpProvider.deleteUserById(employee.id).subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData != null && resultData.isSuccess) {
          this.toastr.success(resultData.message);
          this.getAllProducts();
        }
      }
    },
    (error : any) => {});
  }

  goToUsers(){
    this.router.navigate(['/users']); 
  }

  goToProducts(){
    this.router.navigate(['/products']); 
  }

  goToOrders(){
    this.router.navigate(['/orders']); 
  }

  logout(){
    sessionStorage.removeItem("jwtToken");
    this.router.navigate(['/']); 
  }

}
