import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'institute-dashboard',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './DashboardModule',
      }).then(m => m.routes),
  },
  {
    path: 'parent-dashboard',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './UserModule',
      }).then(m => m.routes),
  },
  {
    path: '',
    redirectTo: 'institute-dashboard',
    pathMatch: 'full',
  },
];