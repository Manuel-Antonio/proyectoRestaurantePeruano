import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/receipt.model';
import { ReceiptService } from 'src/app/services/receipt.service';

@Component({
  selector: 'app-receipt-detail',
  templateUrl: './receipt-detail.component.html',
  styleUrls: ['./receipt-detail.component.css']
})
export class ReceiptDetailComponent implements OnInit {
  formularioProducto: FormGroup;

  @Input() productId: number | undefined;
  @Output('onClose') onClose = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private productoService: ReceiptService
  ) {
    this.formularioProducto = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      imagen: ['', Validators.required],
      departamento: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (this.productId) {
      this.cargarProducto();
    }
  }

  cargarProducto() {
    this.productoService.obtenerProducto(this.productId as number).subscribe((producto) => {
      console.log(producto);
      this.formularioProducto.reset(producto);
    });
  }
  
  agregarProducto() {
    if (this.formularioProducto.valid) {
      const nuevoProducto: Producto = this.formularioProducto.value;
      if (this.productId) {
        this.productoService.editarProducto(this.productId, nuevoProducto).subscribe((producto) => {
          console.log('Producto editado:', producto);
          // Puedes realizar acciones adicionales después de agregar el producto
          this.formularioProducto.reset();
          this.onClose.emit(true);
        });
      } else {
        this.productoService.agregarProducto(nuevoProducto).subscribe((producto) => {
          console.log('Producto agregado:', producto);
          // Puedes realizar acciones adicionales después de agregar el producto
          this.formularioProducto.reset();
          this.onClose.emit(true);
        });
      }
    }
  }

  cerrar() {
    this.onClose.emit(false);
  }
}
