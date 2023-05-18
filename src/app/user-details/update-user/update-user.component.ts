import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RbacService } from 'src/app/rbac.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  id: any;
  roles: any = [];
  UpdateForm: FormGroup;
  user: any = [];
  user_update_info: any;

  constructor(
    private rbac: RbacService,
    private route: ActivatedRoute,
    private fb: FormBuilder) {

    this.UpdateForm = this.fb.group({
      userid: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      role_name:new FormControl(''),
      update_role:new FormControl(''),
    })
  }
  // get f() { return this.UpdateForm.controls }

  ngOnInit(): void {

    this.UpdateForm.controls['userid'].setValue(this.route.snapshot.paramMap.get('id'));
    this.get_role_data();
    this.getSelectedRole();
  }


  getSelectedRole() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.rbac.get_data("user/" + this.id).subscribe((response: any) => {
      console.log(response.data)
      this.UpdateForm.patchValue(response.data[0])
    }, error => {
      console.log(error)
    })
  }

  get_role_data() {
    return this.rbac.get_data('role').subscribe((response: any) => {
      this.roles = response.data.result;
      console.log(this.roles);
    })
  }

  onsubmit(){
   this.user_update_info=this.UpdateForm.value;
   this.rbac.save_data('user/update',this.user_update_info).subscribe((response:any)=>{
    console.log(response);
    
   })
  }
  

}