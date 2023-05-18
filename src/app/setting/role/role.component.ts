import { Component, OnInit } from '@angular/core';
import { RbacService } from 'src/app/rbac.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit{
roles: any=[];

ngOnInit(): void {
  this.get_data();
}

constructor(private rbac:RbacService){}

get_data(){
  return this.rbac.get_data('role').subscribe((response:any)=>{
    this.roles=response.data.result;
    console.log(this.roles);
  })
}
}
