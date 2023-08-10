import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpProviderService } from 'src/app/service/http-provider.service';
import { WebApiService } from 'src/app/service/web-api.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  userId: any;
  userDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];      
    this.getUserDetailById();
  }

  getUserDetailById() {       
    this.httpProvider.getUserDetailById(this.userId).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body.data;
        if (resultData) {
          this.userDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}
