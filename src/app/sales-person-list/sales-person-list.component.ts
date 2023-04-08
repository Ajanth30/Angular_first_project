import { Component, OnInit } from '@angular/core';
import { sales_person } from './Sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  sales_person_list: sales_person[]=[new sales_person("Ajanthan","Vignaraja","ajanthanviki@gmail.com",150),
new sales_person("Ajanth","Viki","ajanth3096@gmail.com",30)]

  constructor() { }

  ngOnInit(): void {
  }

}
