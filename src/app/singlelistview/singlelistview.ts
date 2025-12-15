import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Services } from '../services';

@Component({
  selector: 'app-singlelistview',
  imports: [],
  templateUrl: './singlelistview.html',
  styleUrl: './singlelistview.css',
})
export class Singlelistview {
  singleProduct:any;
  constructor(private route:ActivatedRoute,private services:Services){}
  ngOnInit()
  {
    const productid=this.route.snapshot.paramMap.get('titileid');
    if(productid)
    {
      this.services.getSingleProducts(productid).subscribe((data)=>{
        this.singleProduct=data;
        console.log(data)
      })
    }
  }

}