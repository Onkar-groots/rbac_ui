import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
  
  { path: 'user',component: UserComponent }, 
  { path: 'user/update-user/:id', component: UpdateUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDetailsRoutingModule { }
