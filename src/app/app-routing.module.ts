import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { FirstComponent } from './first/first.component';
import { ManageComponent } from './manage/manage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { SecondComponent } from './second/second.component';
import { SettingGuard } from './setting.guard';
import { UnsavedGuard } from './unsaved.guard';

const routes: Routes = [
  {path:"",redirectTo:'',pathMatch:'full'},
  {path:"employee-list",component:FirstComponent},
  {path:"roles",component:SecondComponent},

  {
    path:"admin",
    canActivate:[AdminGuard],
    children:[
      {path:'',component:AdminComponent},
      {
        path:'',
        canActivateChild:[AuthGuard],
        children:[
          {path:'manage',component:ManageComponent},
          {path:'edit',component:EditComponent},
          {path:'delete',component:DeleteComponent}
        ]
      }
    ]
  },
  { 
   path: 'settings',
   canLoad:[SettingGuard],
   loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) 
  },
  {
    path:"payment",
    component:PaymentComponent,
    canDeactivate:[UnsavedGuard]
  },
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
