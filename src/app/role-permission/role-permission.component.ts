import { Component, OnInit } from '@angular/core';
import { RbacService } from '../rbac.service';
import { FormGroup,FormControl,FormArray,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-role-permission',
  templateUrl: './role-permission.component.html',
  styleUrls: ['./role-permission.component.scss']
})
export class RolePermissionComponent implements OnInit{

roleForm:FormGroup;

roles: any=[];
  urls: any=[];
  data: any;

constructor(private rbac:RbacService,private fb:FormBuilder){
  this.roleForm=this.fb.group({
    role_id:new FormControl(''),
    checkArray: this.fb.array([])
  })
}

ngOnInit(): void {
  this.get_roles();
  this.get_urls();
 
}

get_roles(){
  return this.rbac.get_data('rolePermission').subscribe((response:any)=>{
    // console.log(response);
    this.roles=response.data.result;
    console.log(this.roles);
  })
}

get_urls(){
  return this.rbac.get_data('urls').subscribe((response:any)=>{
    // console.log(response);
    this.urls=response.data.result;
    console.log(this.urls);
  })
}

onCheckboxChange(e:any) {
  const checkArray: FormArray = this.roleForm.get('checkArray') as FormArray;
  if (e.target.checked) {
    checkArray.push(new FormControl(e.target.value));
  } else {
    let i: number = 0;
    checkArray.controls.forEach((item:any) => {
      if (item.value == e.target.value) {
        checkArray.removeAt(i);
        return;
      }
      i++;
    });
  }
}

submitForm(){
  this.data=this.roleForm.value;
  this.rbac.save_data('create/roleUrl',this.data).subscribe((response)=>{
    console.log(response);
  })
}



}
