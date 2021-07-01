import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards Import
import { AuthGuard } from './guards/auth.guard';

// Components Import
import { HomeComponent }    from './components/home/home.component';
import { PublicComponent }  from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';
import { ErrorComponent }   from './components/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',     component: HomeComponent  },
  { path: 'public',   component: PublicComponent,   canActivate: [ AuthGuard ], data: { roles: [ 'User' ] } },
  { path: 'private',  component: PrivateComponent,  canActivate: [ AuthGuard ], data: { roles: [ 'Admin' ] } },
  { path: 'error',    component: ErrorComponent },
  { path: '**',       component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
