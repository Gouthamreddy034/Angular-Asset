import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { ViewAssetComponent } from './view-asset/view-asset.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'create-asset',component:CreateAssetComponent},
  {path:'view-asset',component:ViewAssetComponent},
  {path:'update-asset',component:UpdateAssetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
