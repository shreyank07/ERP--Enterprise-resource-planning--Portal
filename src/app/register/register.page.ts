import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  users=[];
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() {
  }
  firstname:any;
  email:any;
  password:any;

  register(){
    
    this.http.post('http://127.0.0.1:8000/backend/facultyregister',{name:this.firstname,email:this.email,password:this.password}).subscribe((res:any)=>{
      // this.users=res.faculty;
      if(this.email==res.email){
        alert('Email already used');
        location.reload();
        
      }
      else{
        console.log(this.users,res.message);
        alert(res.message);
        this.router.navigate(['/homepage']);
      }
      // this.router.navigate(['/register']);
      
      
    }
    
    )
    
    if (this.firstname==null || this.email==null||this.password==null)
      {
        alert("fill in required fields");
      
      }
   
      return true;
  }
}
