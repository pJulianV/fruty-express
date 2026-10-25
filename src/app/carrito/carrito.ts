import { Component, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../services/carrito';

@Component({
  selector: 'app-carrito',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {
  carrito = inject(CarritoService);

  // signal: para mostrar el mensaje de pedido simulado
  pedidoRealizado = signal(false);

  finalizar(): void {
    // Simulado: no hay backend, solo vaciamos el carrito y avisamos
    this.carrito.vaciar();
    this.pedidoRealizado.set(true);
  }
}