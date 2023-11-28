import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiptDetailComponent } from './receipt-detail/receipt-detail.component';
import { ReceiptService } from '../../services/receipt.service';
import { Observable, EMPTY } from 'rxjs';
import { Producto } from 'src/app/models/receipt.model';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent implements OnInit {
  
  isModal = false;
  productSelectedId: number | undefined;
  productos$: Observable<Producto[]> = EMPTY;

  constructor(
    private productoService: ReceiptService
  ) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productos$ = this.productoService.obtenerProductos();
  }

  agregarProducto() {
    this.productSelectedId = undefined;
    this.isModal = true;
  }
  editarProducto(id?: number) {
    this.productSelectedId = id;
    this.isModal = true;
  }

  eliminarProducto(id?: number) {
    this.productSelectedId = undefined;
    this.productoService.eliminarProducto(id as number).subscribe((producto) => {
      console.log('Se elimino el producto');
      this.cargarProductos();
    })
  }

  seGuardo(val: boolean) {
    if (val) {
      this.cargarProductos();
    }
    this.isModal = false;
  }
}
