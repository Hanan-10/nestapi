
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from } from 'rxjs';
import { Services } from '../services';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  /*repeat=Array.from({length:5});*/
  products:any[]=[];
  constructor(private services:Services) {}
  ngOnInit() {
    this.services.getProduct().subscribe((data:any)=>{
    this.products=data;
  });
  }
}