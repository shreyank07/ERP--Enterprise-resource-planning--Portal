import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  users=[];
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() {
  }
  email:any;
  password:any;
  emailA:any;
  passwordA:any;
  login(){
    this.http.post('http://127.0.0.1:8000/backend/login',{email:this.email,password:this.password}).subscribe((res:any)=>{
    console.log(res);
    // localStorage.setItem('token',res.token);
    // localStorage.setItem('myvar','abc');
    // localStorage.setItem('loginstatus',res.status);
    this.router.navigate(['/completeprofile']); 
    alert(res.message);
     
   },(error:any)=>{
     alert('Wrong crendentials entered!!');
     console.error(error);
   });
   
   if (this.email==null ||this.password==null)
     {
       alert("fill in required fields");
     
     }
  
     return true;
  }
  loginadmin(){
    this.http.post('http://127.0.0.1:8000/backend/adminlogin',{email:this.emailA,password:this.passwordA}).subscribe((res:any)=>{
    console.log(res);
    // localStorage.setItem('token',res.token);
    // localStorage.setItem('myvar','abc');
    // localStorage.setItem('loginstatus',res.status);
    this.router.navigate(['/register']); 
    alert(res.message);
     
   },(error:any)=>{
     alert('Wrong crendentials entered!!');
     console.error(error);
   });
   
   if (this.emailA==null ||this.passwordA==null)
     {
       alert("fill in required fields");
     
     }
  
     return true;

  }
}
