import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { HomeComponent } from './home/home.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { SigninComponent } from './users/signin/signin.component';
import { OrdersComponent } from './orders/orders/orders.component';
import { ProductsComponent } from './products/products/products.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: SigninComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'Home', component: HomeComponent },

  { path: 'ViewUser/:userId', component: ViewUserComponent },
  { path: 'AddUser', component: AddUserComponent },
  { path: 'EditUser/:userId', component: EditUserComponent } ,
  
  { path: 'ViewEmployee/:employeeId', component: ViewEmployeeComponent },
  { path: 'AddEmployee', component: AddEmployeeComponent },
  { path: 'EditEmployee/:employeeId', component: EditEmployeeComponent } 
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }