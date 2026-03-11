import { Routes } from '@angular/router';
import { Adepters } from './adepters';
import { AdapterDetail } from './adapter-detail/adapter-detail';
import { AdepterForm } from './adepter-form/adepter-form';

export const routes: Routes=[
     {
        path: '',
        component: Adepters
      },

      {
        path: ':name',
        component: AdapterDetail
      },

    
]