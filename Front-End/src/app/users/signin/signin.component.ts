import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  email ="";
  password = "";
  errorMessage = "";

  constructor(private userService : UserService,private router: Router) { }

  ngOnInit(): void {
  }

  doLogin(){
    this.userService.login(this.email,this.password).subscribe((data : any) => {   
      sessionStorage.setItem('jwtToken',data.body.data.access_token);   
      this.router.navigate(['/users']);   
      console.log(data);

    },
    (error :any)=> { 
      this.errorMessage = error.error.message;
      console.log("error message " + error.error.message);
    });
  }

}
