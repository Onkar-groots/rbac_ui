import { Component } from '@angular/core';
import { RbacService } from 'src/app/rbac.service';

@Component({
  selector: 'app-role-mapping',
  templateUrl: './role-mapping.component.html',
  styleUrls: ['./role-mapping.component.scss']
})
export class RoleMappingComponent {

rolemapping: any=[];

ngOnInit(): void {
  this.get_data();
}

constructor(private rbac:RbacService){}

get_data(){
  return this.rbac.get_data('roleurlmap').subscribe((response:any)=>{
    this.rolemapping=response.data;
    // console.log(this.rolemapping);
  })
}
}
