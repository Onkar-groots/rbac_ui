import { Component, OnInit } from '@angular/core';
import { RbacService } from 'src/app/rbac.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  users: any=[];

  ngOnInit(): void {
    this.get_user();
  }
  constructor(private rbac:RbacService){

  }

  get_user(){
    return this.rbac.get_data('getuser').subscribe((response:any)=>{
      this.users=response.data.result;
    })
  }

}
