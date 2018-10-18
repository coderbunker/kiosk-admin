import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigurationsComponent }   from './configurations/configurations.component';
import { ConfigurationDetailComponent }   from './configuration-detail/configuration-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/configurations', pathMatch: 'full' },
  { path: 'configurations', component: ConfigurationsComponent },
  { path: 'detail/:id', component: ConfigurationDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
