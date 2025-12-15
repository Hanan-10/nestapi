import { devOnlyGuardedExpression } from '@angular/compiler';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  collegename = "Amal Jyothi College of Engineering"
  a={
    name:"Deon",
    age:"19"
  }
  protected readonly title = signal('project');
}