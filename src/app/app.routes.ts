import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Tienda } from './tienda/tienda';
import { ProductoDetalle } from './producto-detalle/producto-detalle';
import { Carrito } from './carrito/carrito';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'tienda', component: Tienda },
  { path: 'tienda/:id', component: ProductoDetalle }, // :id es el parámetro dinámico
  { path: 'carrito', component: Carrito },
  { path: '**', redirectTo: '' }, // cualquier ruta desconocida vuelve al inicio
];