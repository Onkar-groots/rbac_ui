import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl,FormBuilder,FormArray,FormGroup } from '@angular/forms';
import { RbacService } from 'src/app/rbac.service';

@Component({
  selector: 'app-update-url',
  templateUrl: './update-url.component.html',
  styleUrls: ['./update-url.component.scss']
})
export class UpdateUrlComponent implements OnInit{
role:any;
Form:FormGroup
urls: any;
  info: any;


constructor(private route:ActivatedRoute,private rbac:RbacService,private fb:FormBuilder){

  this.Form = this.fb.group({
    role_name:new FormControl(''),
    urls:new FormControl(''),
    checkArray: this.fb.array([])
  })
}


ngOnInit(): void {
  this.role=this.route.snapshot.paramMap.get('role_name');
  this.get_roleurlsByUsername();
  this.get_role();
}

get_roleurlsByUsername(){
  this.rbac.get_data('getRoleUrlsByUsername/'+this.role).subscribe((response:any)=>{
    console.log(response)
    this.Form.patchValue(response.data[0])
  })
}

get_role(){
  this.rbac.get_data('urls').subscribe((response:any)=>{
    this.urls=response.data.result
    console.log(this.urls);
  })
}

onCheckboxChange(e:any) {
  const checkArray: FormArray = this.Form.get('checkArray') as FormArray;
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

onsubmit(){
  this.info=this.Form.value;
  console.log(this.info)
  this.rbac.save_data('update/role-permission',this.info).subscribe((Response)=>{
    console.log(Response);
  })
}


}
