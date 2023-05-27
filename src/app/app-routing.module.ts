import { ListUsersComponent } from './components/listusers/listusers.component';
import { LoguinComponent } from './components/loguin/loguin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoguinComponent },
  { path: 'users', component: ListUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
