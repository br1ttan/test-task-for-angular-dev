import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HasAccessTokenGuard } from './auth/has-access-token.guard';

const routes: Routes = [
  // Fallback when no prior route is matched
  {
    path: 'project',
    loadChildren: () => import('./project/project.module').then((m) => m.ProjectModule),
    canActivate: [HasAccessTokenGuard],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HasAccessTokenGuard],
})
export class AppRoutingModule {}
