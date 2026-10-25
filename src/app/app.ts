import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar], // lo que uses en app.html debe estar aquí
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}