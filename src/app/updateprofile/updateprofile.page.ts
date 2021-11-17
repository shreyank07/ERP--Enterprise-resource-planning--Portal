import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.page.html',
  styleUrls: ['./updateprofile.page.scss'],
})
export class UpdateprofilePage implements OnInit {
// fullname:any;
// contact1update:any;
// addressupdate:any;
fullname;
contact1update;
addressupdate;
name:any;
contact:any;
address:any;
mail:any;
status1:any;
department:any;
role:any;
  constructor(private http:HttpClient) {
    // this.name=localStorage.getItem('name');
    // this.contact=localStorage.getItem('contact');
    // this.address=localStorage.getItem('address');
    this.mail=localStorage.getItem('mail');
   }

  ngOnInit() {
    this.http.post('http://127.0.0.1:8000/backend/showpro',{mail:this.mail}).subscribe((res:any)=>{
      this.name=res.name;
      this.department=res.department;
      this.contact=res.contact1;
      this.address=res.address;
      this.role=res.role;      
      // this.fullname=res.name;
      // this.contact1=res.contact1;
      // this.contact2=res.contact2;
      // this.address=res.address;
      // this.department=res.department;
      // this.dob=res.dob;
      // this.qualf1=res.qualf1;
      // this.qualf2=res.qualf2;
      // this.qualf3=res.qualf3;
      // this.expandrole=res.role;
    })
  }
  update(){
    this.http.post('http://127.0.0.1:8000/backend/update',{mail:this.mail,name:this.fullname,contact1:this.contact1update,address:this.addressupdate}).subscribe((res:any)=>{
      this.status1 = res.status ;
      if(this.status1=="True"){
        alert("details updated successfully")
      }
    else{
      alert("Error from the server");
    }
     });
  }

}
