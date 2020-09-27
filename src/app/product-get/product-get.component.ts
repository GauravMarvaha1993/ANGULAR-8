import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {

  total;
  todaydate;
  constructor( private myservice: MyserviceService ) { }

  ngOnInit(): void {
    this.total = 200;
    this.todaydate = this.myservice.showTodayDate();
  }

}
