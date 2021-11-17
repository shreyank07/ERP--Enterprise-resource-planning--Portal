import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-viewleaves',
  templateUrl: './viewleaves.page.html',
  styleUrls: ['./viewleaves.page.scss'],
})
export class ViewleavesPage implements OnInit {
leave=[];
leave1=[];
Allleave=[];
Allleaves1=[];
mail:any;
_id:string;
_id2:any;
  constructor(private http: HttpClient,private activatedroute:ActivatedRoute) {
    
   }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/backend/leave').subscribe((result:any)=>{
      this.leave=result.leaveids;
      this.Allleave=this.leaveinfo();
      // localStorage.getItem('mail');
      // console.log(this.mail);      
      
    })
    
  
    

    }
    leaveinfo(){
      for(const eachleave of this.leave){
        this.http.post('http://127.0.0.1:8000/backend/fetchleaves',{eachleave1:eachleave}).subscribe((result:any)=>{
        this.Allleaves1.push(result);
        this.mail=result.Email;
        
        })
      }
     
    return this.Allleaves1;
  }

  accept(_id){
    this.http.post('http://127.0.0.1:8000/backend/accept',{Email:this.mail,_id:_id}).subscribe((res:any)=>{
      
        alert(res.message);
        location.reload();
        // this.router.navigate(['/homepage'])
      }
    );
  }
  decline(_id){
    console.log(_id);
    this.http.post('http://127.0.0.1:8000/backend/decline',{_id:_id}).subscribe((res:any)=>{
      location.reload();
        alert(res.message);
        // location.reload();
        // this.router.navigate(['/homepage'])
      }
    );
  }

}
