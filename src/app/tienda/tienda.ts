import { Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Producto, ProductoService } from '../services/producto';
import { CarritoService } from '../services/carrito';

type Filtro = 'todas' | 'fruta' | 'verdura';

@Component({
  selector: 'app-tienda',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css',
})
export class Tienda {
  private productoService = inject(ProductoService);
  private carrito = inject(CarritoService);

  // signal: guarda el filtro elegido; al cambiarlo, la lista se recalcula
  filtro = signal<Filtro>('todas');

  productos = computed<Producto[]>(() => {
    const f = this.filtro();
    return f === 'todas' ? this.productoService.getProductos() : this.productoService.getPorCategoria(f);
  });

  agregar(producto: Producto): void {
    this.carrito.agregar(producto);
  }
}