import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPermissionRoutingModule } from './user-permission-routing.module';
import { RoleMappingComponent } from './role-mapping/role-mapping.component';
import { UpdateUrlComponent } from './update-url/update-url.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RbacService } from '../rbac.service';


@NgModule({
  declarations: [RoleMappingComponent,UpdateUrlComponent],
  imports: [
    CommonModule,
    UserPermissionRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [RbacService],
})
export class UserPermissionModule { }
