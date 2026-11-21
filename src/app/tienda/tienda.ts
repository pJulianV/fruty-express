import { Component, computed, inject, signal } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto';
import { ProductoCard } from '../producto-card/producto-card';

type Filtro = 'todas' | 'fruta' | 'verdura';

@Component({
  selector: 'app-tienda',
  imports: [ProductoCard],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css',
})
export class Tienda {
  private productoService = inject(ProductoService);

  // signal: guarda el filtro elegido; al cambiarlo, la lista se recalcula
  filtro = signal<Filtro>('todas');

  productos = computed<Producto[]>(() => {
    const f = this.filtro();
    return f === 'todas' ? this.productoService.getProductos() : this.productoService.getPorCategoria(f);
  });

}