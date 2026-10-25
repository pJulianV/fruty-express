import { Component, OnInit, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Producto, ProductoService } from '../services/producto';
import { CarritoService } from '../services/carrito';

@Component({
  selector: 'app-producto-detalle',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})
export class ProductoDetalle implements OnInit {
  // inject(): herramientas que Angular nos entrega (ruta activa y servicios)
  private route = inject(ActivatedRoute);
  private productoService = inject(ProductoService);
  private carrito = inject(CarritoService);

  producto: Producto | undefined;

  // ngOnInit: se ejecuta una vez, justo cuando se crea el componente
  ngOnInit(): void {
    // paramMap: lee el :id de la URL (ej. /tienda/3 -> '3'); Number() lo vuelve número
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productoService.getProductoById(id);
  }

  agregar(): void {
    if (this.producto) {
      this.carrito.agregar(this.producto);
    }
  }
}