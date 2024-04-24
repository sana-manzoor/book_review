import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { RegComponent } from './reg/reg.component';
import { UserdbComponent } from './userdb/userdb.component';
import { AdmindbComponent } from './admindb/admindb.component';
import { ViewComponent } from './view/view.component';
import { LoginComponent } from './login/login.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { DetailsComponent } from './details/details.component';
import { UserslistComponent } from './userslist/userslist.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'log',component:LoginComponent},
  {path:'reg',component:RegComponent},
  {path:'userdb',component:UserdbComponent},
  {path:'admdb',canActivate:[authGuard],component:AdmindbComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'fav',canActivate:[authGuard],component:FavouritesComponent},
  {path:'addb',canActivate:[authGuard],component:AddbookComponent},
  {path:'viewb',canActivate:[authGuard],component:ViewbookComponent},
  {path:'viewb',canActivate:[authGuard],component:ViewbookComponent},
  {path:'det/:id',canActivate:[authGuard],component:DetailsComponent},
  {path:'usersl',canActivate:[authGuard],component:UserslistComponent},






  {path:'**',redirectTo:''}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
