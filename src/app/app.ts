import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SnackBarComp } from './snack-bar-comp/snack-bar-comp';
// import { CatUi } from './cat-ui/cat-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SnackBarComp],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
