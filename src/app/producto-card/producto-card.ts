import { Component, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Producto } from '../models/producto';
import { CarritoService } from '../services/carrito';

@Component({
  selector: 'app-producto-card',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css',
})
export class ProductoCard {
  readonly producto = input.required<Producto>();
  private readonly carrito = inject(CarritoService);

  agregarAlCarrito(): void {
    this.carrito.agregar(this.producto());
  }
}
