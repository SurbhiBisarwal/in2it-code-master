import { Routes } from '@angular/router';
import { Connection } from './connection';
import { ConnectionDetail } from './connection-detail/connection-detail';


export const routes: Routes=[
     {
        path: '',
        component: Connection
      },
      {
        path: ':name',
        component: ConnectionDetail
      }
]