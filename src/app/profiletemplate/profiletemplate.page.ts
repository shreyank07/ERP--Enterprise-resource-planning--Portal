import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-profiletemplate',
  templateUrl: './profiletemplate.page.html',
  styleUrls: ['./profiletemplate.page.scss'],
})
export class ProfiletemplatePage implements OnInit {
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
  _id:string;
  
  constructor(private http:HttpClient,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(params=>{
      this._id=params._id;
      
    })
  }
  

}
