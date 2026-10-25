import { Injectable, computed, signal } from '@angular/core';
import { Producto } from './producto';

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  // signal: estado reactivo; cuando cambia, las vistas que lo leen se actualizan solas
  private readonly _items = signal<ItemCarrito[]>([]);

  // Versión de solo lectura para que los componentes no la modifiquen directamente
  readonly items = this._items.asReadonly();

  // computed: se recalcula automáticamente cuando cambia _items
  readonly total = computed(() =>
    this._items().reduce((suma, item) => suma + item.producto.precio * item.cantidad, 0),
  );

  readonly cantidadTotal = computed(() =>
    this._items().reduce((suma, item) => suma + item.cantidad, 0),
  );

  agregar(producto: Producto): void {
    // update(): recibe el valor actual y devuelve el nuevo (sin mutar el arreglo)
    this._items.update((items) => {
      const existe = items.find((i) => i.producto.id === producto.id);
      if (existe) {
        return items.map((i) =>
          i.producto.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i,
        );
      }
      return [...items, { producto, cantidad: 1 }];
    });
  }

  quitar(id: number): void {
    this._items.update((items) => items.filter((i) => i.producto.id !== id));
  }

  cambiarCantidad(id: number, cantidad: number): void {
    // Si la cantidad llega a 0 o menos, se quita el producto
    if (cantidad <= 0) {
      this.quitar(id);
      return;
    }
    this._items.update((items) =>
      items.map((i) => (i.producto.id === id ? { ...i, cantidad } : i)),
    );
  }

  vaciar(): void {
    this._items.set([]);
  }
}