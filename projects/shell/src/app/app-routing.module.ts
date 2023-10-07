import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAuthComponent } from './core/components/layout-auth/page/layout-auth.component';

const routes: Routes = [
  {
    path: 'esportes',
    component: LayoutAuthComponent,
    children: [
      {
        path: 'preMatch',
        loadChildren: () => loadRemoteModule(
          { 
            type: 'module',
            remoteEntry: 'http://localhost:3000/remoteEntry.js',
            exposedModule: './Module',
          }
        ).then(mfe => mfe.AppModule),
        data: {
          loaderMessage: 'Carregando conteúdo.'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
