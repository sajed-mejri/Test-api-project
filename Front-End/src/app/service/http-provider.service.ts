import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';
import { environment } from 'src/environments/environment';

// var apiUrl = "http://192.168.10.10:105";
var apiUrl = environment.appRoot;

var httpLink = {
  getAllEmployee: apiUrl + "/api/employee/getAllEmployee",
  deleteEmployeeById: apiUrl + "/api/employee/deleteEmployeeById",
  getEmployeeDetailById: apiUrl + "/api/employee/getEmployeeDetailById",
  saveEmployee: apiUrl + "/api/employee/saveEmployee"
}

var httpLinkCrud = {
  getAllUsers: apiUrl + "users",
  deleteUserById: apiUrl + "users",
  getUserById: apiUrl + "users",
  saveUser: apiUrl + "users",

  getAllProducts: apiUrl + "products",
  deleteProductById: apiUrl + "products",
  getProductById: apiUrl + "products",
  saveProduct: apiUrl + "products",

}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllEmployee(): Observable<any> {
    return this.webApiService.get(httpLink.getAllEmployee);
  }

  public deleteEmployeeById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteEmployeeById + '?employeeId=' + model, "");
  }

  public getEmployeeDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getEmployeeDetailById + '?employeeId=' + model);
  }

  public saveEmployee(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveEmployee, model);
  }





  public getAllUsers(): Observable<any> {
    return this.webApiService.get(httpLinkCrud.getAllUsers);
  }

  public deleteUserById(model: any): Observable<any> {
    return this.webApiService.post(httpLinkCrud.deleteUserById + '?employeeId=' + model, "");
  }

  public getUserDetailById(id: any): Observable<any> {
    return this.webApiService.get(httpLinkCrud.getUserById + '/' + id);
  }

  public saveUser(model: any): Observable<any> {
    return this.webApiService.post(httpLinkCrud.saveUser, model);
  }


  

  public getAllProducts(): Observable<any> {
    return this.webApiService.get(httpLinkCrud.getAllProducts);
  }

  public deleteProductById(model: any): Observable<any> {
    return this.webApiService.post(httpLinkCrud.deleteUserById + '?employeeId=' + model, "");
  }

  public getProductDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLinkCrud.getUserById + '?employeeId=' + model);
  }

  public saveProduct(model: any): Observable<any> {
    return this.webApiService.post(httpLinkCrud.saveUser, model);
  }



  
}
