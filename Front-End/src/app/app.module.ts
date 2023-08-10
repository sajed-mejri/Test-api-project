import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SigninComponent } from './users/signin/signin.component';
import { JwtModule } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';
import { OrdersComponent } from './orders/orders/orders.component';
import { ProductsComponent } from './products/products/products.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';

export function tokenGetter() {
  return sessionStorage.getItem("jwtToken");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewEmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    SigninComponent,
    OrdersComponent,
    ProductsComponent,
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,


    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: environment.allowedDomains,
        disallowedRoutes: []
      },
    }),

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
