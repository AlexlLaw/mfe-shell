import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAuthComponent } from './core/components/layout-auth/page/layout-auth.component';
import { NoLayoutAuthComponent } from './core/components/no-layout-auth/page/no-layout-auth.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutAuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'usuarios',
        loadChildren: () => loadRemoteModule(
          { 
            type: 'module',
            remoteEntry: 'http://localhost:4100/remoteEntry.js',
            exposedModule: './Module',
          }
        ).then(mfe => mfe.HomeModule),
        data: {
          loaderMessage: 'Carregando conteúdo.'
        },
      },
    ]
  },
  {
    path: 'auth',
    component: NoLayoutAuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => loadRemoteModule(
          { 
            type: 'module',
            remoteEntry: 'http://localhost:4300/remoteEntry.js',
            exposedModule: './Module',
          }
        ).then(mfe => mfe.ContainerAuthModule),
        data: {
          loaderMessage: 'Carregando conteúdo.'
        },
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
