import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingComponent } from './setting/setting.component';

import { RoleComponent } from './setting/role/role.component';
import { RoleMappingComponent } from './user-permission/role-mapping/role-mapping.component';
import {HttpClientModule} from '@angular/common/http';
import { RbacService } from './rbac.service';
import { RolePermissionComponent } from './role-permission/role-permission.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { UserDetailsModule } from './user-details/user-details.module';
import { UserPermissionModule } from './user-permission/user-permission.module';
// import { UserPermissionComponent } from './update-url/user-permission/user-permission.component';
// import { UpdatePermissionComponent } from './setting/role-mapping/update-permission/update-permission.component';


@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    RoleComponent,
    // RoleMappingComponent,
    RolePermissionComponent,
    RegisterComponent,
    // UserPermissionComponent,
    // UpdatePermissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    UserDetailsModule,
    UserPermissionModule
  ],
  providers: [RbacService],
  bootstrap: [AppComponent]
})
export class AppModule { }
