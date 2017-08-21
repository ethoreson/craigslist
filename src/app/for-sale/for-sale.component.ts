import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css'],
  providers: [ItemService]
})

export class ForSaleComponent implements OnInit {
  items: Item[];

  constructor(private router: Router, private itemService: ItemService){}

  ngOnInit(){
    this.items = this.itemService.getItems();
  }

  goToDetailPage(clickedItem: Item) {
     this.router.navigate(['items', clickedItem.id]);
   };
}
