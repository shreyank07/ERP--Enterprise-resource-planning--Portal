import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-profiletemplate',
  templateUrl: './profiletemplate.page.html',
  styleUrls: ['./profiletemplate.page.scss'],
})
export class ProfiletemplatePage implements OnInit {
  fullname;
  contact1;
  contact2;
  address;
  department;
  dob;
  qualf1;
  qualf2;
  qualf3;
  expandrole;
  mail:any;
  _id:string;
  certify:any;
  papers:any;
  acheivements:any;
  constructor(private http:HttpClient,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(params=>{
      this._id=params._id;
      console.log(this._id);
      
      
    })
    this.http.post('http://127.0.0.1:8000/backend/facpro',{_id:this._id}).subscribe((res:any)=>{
      this.certify=res.certify;
      this.papers=res.papers;
      this.acheivements=res.acheivements;
      this.fullname=res.name;
      this.contact1=res.contact1;
      this.contact2=res.contact2;
      this.address=res.address;
      this.department=res.department;
      this.dob=res.dob;
      this.qualf1=res.qualf1;
      this.qualf2=res.qualf2;
      this.qualf3=res.qualf3;
      this.expandrole=res.role;
      this.mail=res.mail;
    })
  }
  

}
