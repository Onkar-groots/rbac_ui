import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleMappingComponent } from './role-mapping/role-mapping.component';
import { UpdateUrlComponent } from './update-url/update-url.component';

const routes: Routes = [{path:'role-mapping',component:RoleMappingComponent},
                        {path:'role-mapping/update-url/:role_name',component:UpdateUrlComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPermissionRoutingModule { }
