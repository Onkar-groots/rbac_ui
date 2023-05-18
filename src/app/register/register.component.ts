import { Component, OnInit } from '@angular/core';
import { RbacService } from '../rbac.service';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  data: any;
  registerForm:FormGroup;
  
  ngOnInit(){
    
  }

  constructor(private rbac:RbacService,private fb:FormBuilder){
    this.registerForm=this.fb.group({
      username:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl('')
    })
  }

  onSubmit(){
    this.data=this.registerForm.value;
    this.rbac.save_data('user/create',this.data).subscribe((response)=>{
      console.log(response);
    })
  }
 
}
