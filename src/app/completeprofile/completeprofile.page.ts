import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completeprofile',
  templateUrl: './completeprofile.page.html',
  
  styleUrls: ['./completeprofile.page.scss'],
})
export class CompleteprofilePage implements OnInit {

  constructor(private http:HttpClient) { 
    
    
    localStorage.setItem("address",this.address);
    
  }

  ngOnInit() {
  }
  acheivements:any;
  papers:any;
  fullname:any;
  contact1:any;
  mail:any;
  address:any;
  department:any;
  dob:any;
  qualf1:any;
  qualf2:any;
  qualf3:any;
  expandrole:any;
  certify:any;
  
  submit(){
    if (this.fullname==null ||this.contact1==null ||this.mail==null ||this.address==null ||this.department==null ||this.dob==null ||this.qualf1==null ||this.qualf2==null ||this.expandrole==null ||this.qualf3==null)
     {
       alert("fill in required fields");
     }else{
    this.http.post('http://127.0.0.1:8000/backend/addprofile',{name:this.fullname,contact1:this.contact1,mail:this.mail,address:this.address,department:this.department,dob:this.dob,qualf1:this.qualf1,qualf2:this.qualf2,qualf3:this.qualf3,role:this.expandrole,acheivements:this.acheivements,papers:this.papers,certify:this.certify}).subscribe((res:any)=>{
      localStorage.setItem("name",this.fullname);
      localStorage.setItem("contact",this.contact1);
      // localStorage.setItem("mail",this.mail);
      console.log(this.mail);
      alert(res.message);
      location.reload();
      }
       
    )
  }
    
    
  
  }
}
