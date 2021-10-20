import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completeprofile',
  templateUrl: './completeprofile.page.html',
  
  styleUrls: ['./completeprofile.page.scss'],
})
export class CompleteprofilePage implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  fullname:any;
  contact1:any;
  contact2:any;
  address:any;
  department:any;
  dob:any;
  qualf1:any;
  qualf2:any;
  qualf3:any;
  expandrole:any;

  submit(){
    this.http.post('http://127.0.0.1:8000/backend/addprofile',{name:this.fullname,contact1:this.contact1,contact2:this.contact2,address:this.address,department:this.department,dob:this.dob,qualf1:this.qualf1,qualf2:this.qualf2,qualf3:this.qualf3,role:this.expandrole}).subscribe((res:any)=>{
      
        alert(res.message);
      }
      
      
      
    
    
    )
    
    
  
  }
}
