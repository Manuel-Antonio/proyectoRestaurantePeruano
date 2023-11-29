import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Producto } from 'src/app/models/receipt.model';
import { ReceiptService } from 'src/app/services/receipt.service';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {
  private commonSub?: Subscription;
  productosRecientes : Producto[] = [];
  constructor(private receiptService: ReceiptService) { }

  ngOnInit() {
    this.commonSub = this.receiptService.obtenerProductos().subscribe(data => {
      this.productosRecientes = data.slice(-3);
    });
  }

}
