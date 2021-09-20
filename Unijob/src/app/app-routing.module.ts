import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./Pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./Pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'registrarse2',
    loadChildren: () => import('./Pages/registrarse2/registrarse2.module').then( m => m.Registrarse2PageModule)
  },
  {
    path: 'registrarse3',
    loadChildren: () => import('./Pages/registrarse3/registrarse3.module').then( m => m.Registrarse3PageModule)
  },  {
    path: 'registrarse4',
    loadChildren: () => import('./Pages/registrarse4/registrarse4.module').then( m => m.Registrarse4PageModule)
  },

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
