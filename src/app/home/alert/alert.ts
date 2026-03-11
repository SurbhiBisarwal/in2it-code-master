import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-alert',
  imports: [CatsDataGridComponent, RouterOutlet],
  templateUrl: './alert.html',
  styleUrl: './alert.scss',
})
export class Alert {
  constructor(private router: Router) {}
  rowsData: any[] = [
    {
      alertName: 'PSC_ALERT',
      alertType: 'Immediate',
      source: 'exist',
      status: 'Draft',
      eventType: 'CPU Utilization / memory Utilization',
      groupBy: 'Threshold Based',
    },
    {
      alertName: 'MAILPSC',
      alertType: 'Immediate',
      source: 'exist',
      status: 'Enable',
      eventType: 'Temp Alert',
      groupBy: 'Threshold Based',
    },
    {
      alertName: 'testMail',
      alertType: 'Immediate',
      source: 'exist',
      status: 'Draft',
      eventType: 'Temp Alert',
      groupBy: 'Threshold Based',
    },
    {
      alertName: 'testEvent',
      alertType: 'Immediate',
      source: 'exist',
      status: 'Enable',
      eventType: 'Temp Alert',
      groupBy: 'Threshold Based',
    },
    {
      alertName: 'OfflineDeviceNce',
      alertType: 'Immediate',
      source: 'exist',
      status: 'Enable',
      eventType: 'Card / Modules failed',
      groupBy: 'Threshold Based',
    },
    {
      alertName: 'DeviceDownAlert',
      alertType: 'Immediate',
      source: 'exist',
      status: 'Draft',
      eventType: null,
      groupBy: 'Threshold Based',
    },
    {
      alertName: 'DeviceIssue',
      alertType: 'Immediate',
      source: 'exist',
      status: 'Draft',
      eventType: null,
      groupBy: 'Threshold Based',
    },
    {
      alertName: 'EmailTest',
      alertType: 'Immediate',
      source: 'exist',
      status: 'Enable',
      eventType: 'Card / Modules failed',
      groupBy: 'Threshold Based',
    },
    {
      alertName: 'LogonEmail',
      alertType: 'Immediate',
      source: 'exist',
      status: 'Enable',
      eventType: 'Card / Modules failed',
      groupBy: 'Threshold Based',
    },
    {
      alertName: 'LogonWindow',
      alertType: 'Immediate',
      source: 'exist',
      status: 'Enable',
      eventType: 'Card / Modules failed',
      groupBy: 'Threshold Based',
    },
    {
      alertName: 'WindowLogon',
      alertType: 'Immediate',
      source: 'exist',
      status: 'Enable',
      eventType: 'Card / Modules failed',
      groupBy: 'Threshold Based',
    },
    {
      alertName: 'LogonEventAlert',
      alertType: 'Immediate',
      source: 'exist',
      status: 'Enable',
      eventType: 'Card / Modules failed',
      groupBy: 'Threshold Based',
    },
    {
      alertName: null,
      alertType: 'Immediate',
      source: null,
      status: 'Draft',
      eventType: null,
      groupBy: null,
    },
    {
      alertName: 'DEVICEDISC',
      alertType: 'Immediate',
      source: 'exist',
      status: 'Enable',
      eventType: 'Card / Modules failed',
      groupBy: 'Threshold Based',
    },
    {
      alertName: 'DeviceOfflineUp',
      alertType: 'Immediate',
      source: 'exist',
      status: 'Enable',
      eventType: 'Card / Modules failed',
      groupBy: 'Threshold Based',
    },
    {
      alertName: 'ncealertfault',
      alertType: 'Immediate',
      source: 'scratch',
      status: 'Enable',
      eventType: 'CPU Utilization / memory Utilization',
      groupBy: 'Payload Based',
    },
  ];
  colData: any[] = [
    {
      headerName: 'Alert Name',
      fieldName: 'alertName',
    },
    {
      headerName: 'Alert Type',
      fieldName: 'alertType',
    },
    {
      headerName: 'Source',
      fieldName: 'source',
    },
    {
      headerName: 'Status',
      fieldName: 'status',
    },
    {
      headerName: 'Event Type',
      fieldName: 'eventType',
    },
    {
      headerName: 'Group By',
      fieldName: 'groupBy',
    },
  ];

  onclick() {
    console.log('click work');
    this.router.navigate(['alert/alertConf']);
  }
}
