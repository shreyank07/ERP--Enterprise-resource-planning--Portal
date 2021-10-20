import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.page.html',
  styleUrls: ['./viewprofile.page.scss'],
})
export class ViewprofilePage implements OnInit {
  profile=[];
  
  constructor(private http: HttpClient) { 
    this.http.get('http://127.0.0.1:8000/backend/prof').subscribe((result:any)=>{
      this.profile=result.profiles;
    })
  }

  ngOnInit() {  
  }

}
