import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting/setting.component';

import { RoleComponent } from './setting/role/role.component';
import { RoleMappingComponent } from './user-permission/role-mapping/role-mapping.component';
import { RolePermissionComponent } from './role-permission/role-permission.component';

import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user-details/user/user.component';
// import { UpdatePermissionComponent } from './setting/role-mapping/update-permission/update-permission.component';

const routes: Routes = [{
  path: "", component: SettingComponent, children: [ { path: 'role', component: RoleComponent },
   { path: 'role-mapping', component: RoleMappingComponent}]
},
{ path: 'role-permission', component: RolePermissionComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'user_details', loadChildren: () => import('./user-details/user-details.module').then(m => m.UserDetailsModule)},
{path:'user-permission',loadChildren: ()=>import('./user-permission/user-permission.module').then(m=>m.UserPermissionModule)}
] 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
