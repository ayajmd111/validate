import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {CommonService} from '../service/common.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ayaj={};
  campus:any = [
    {type: "Guntur"},
    {type: "Vijayawada"},
    {type: "Kadapa"}
  ]

  constructor(private cmnsvc:CommonService) { }
  register()
  {
    var url="/register";
    this.cmnsvc.postData(url,this.ayaj)
    .subscribe(data =>{
      console.log(data);
    })
    
    console.log(this.ayaj);

    
    
  }


  ngOnInit() {
  }

}


