
import {Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Producto } from 'src/app/models/receipt.model';
import { ReceiptService } from 'src/app/services/receipt.service';

@Component({
  selector: 'app-home-recipes',
  templateUrl: './home-recipes.component.html',
  styleUrls: ['./home-recipes.component.css'],
})
export class HomeRecipesComponent implements OnInit {
  private commonSub?: Subscription;
  productosPopulares : Producto[] = [];
  constructor(private receiptService: ReceiptService) { }

  ngOnInit() {
    this.commonSub = this.receiptService.obtenerProductos().subscribe(data => {
      this.productosPopulares = data.slice(-6);
    });
  }

}
