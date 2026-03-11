import { Routes } from '@angular/router';
import { AlertConfiguration } from './alert-configuration/alert-configuration';
import { EveClassification } from './eve-classification/eve-classification';
import { AlertAction } from './alert-action/alert-action';
import { AlertReview } from './alert-review/alert-review';

export const alertRoutes: Routes = [
  {
    path: 'alertConf',
    component: AlertConfiguration,
  },
  {
    path: 'alertClass',
    component: EveClassification,
  },
  {
    path: 'alertAction',
    component: AlertAction,
  },
  {
    path: 'review',
    component: AlertReview,
  },
];
