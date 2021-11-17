import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.page.html',
  styleUrls: ['./viewprofile.page.scss'],
})
export class ViewprofilePage implements OnInit {
  profile=[];
  _id:string;
  
  constructor(private http: HttpClient,private activatedroute:ActivatedRoute) { 
    this.http.get('http://127.0.0.1:8000/backend/prof').subscribe((result:any)=>{
      this.profile=result.profiles;
    })
  }

  ngOnInit() { 
    this.activatedroute.queryParams.subscribe(params=>{
      this._id=params._id;
      console.log(this._id);
      
    }) 
  }

}
