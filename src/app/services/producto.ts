import { Injectable } from '@angular/core';

// Interfaz: define la "forma" que debe tener todo producto
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  unidad: string;
  categoria: 'fruta' | 'verdura';
  origen: string;
  descripcion: string;
  icono: string; // clase de Bootstrap Icons (ej. 'bi-basket2-fill')
}

@Injectable({
  providedIn: 'root', // un único servicio compartido por toda la app
})
export class ProductoService {
  // Arreglo simulado: hace el papel de la respuesta de una API
  private productos: Producto[] = [
    { id: 1, nombre: 'Manzana verde', precio: 2700, unidad: 'unidad', categoria: 'fruta', origen: 'Tolima', descripcion: 'Fruta de los campos del Tolima, de sabor fresco y ligeramente ácido.', icono: 'bi-basket2-fill' },
    { id: 2, nombre: 'Manzana gala', precio: 2700, unidad: 'unidad', categoria: 'fruta', origen: 'Tolima', descripcion: 'Dulce y jugosa, ideal para la lonchera o el postre.', icono: 'bi-basket2-fill' },
    { id: 3, nombre: 'Manzana roja', precio: 3700, unidad: 'unidad', categoria: 'fruta', origen: 'Tolima', descripcion: 'Crujiente y de sabor intenso, perfecta para comer sola.', icono: 'bi-basket2-fill' },
    { id: 4, nombre: 'Manzana verde en bandeja', precio: 3700, unidad: 'bandeja', categoria: 'fruta', origen: 'Tolima', descripcion: 'Bandeja de manzanas verdes seleccionadas, lista para el hogar.', icono: 'bi-box2-heart-fill' },
    { id: 5, nombre: 'Manzana gala en bandeja', precio: 3900, unidad: 'bandeja', categoria: 'fruta', origen: 'Tolima', descripcion: 'Bandeja de manzanas gala, dulces y de buen tamaño.', icono: 'bi-box2-heart-fill' },
    { id: 6, nombre: 'Manzana roja en bandeja', precio: 4500, unidad: 'bandeja', categoria: 'fruta', origen: 'Tolima', descripcion: 'Bandeja de manzanas rojas frescas, ideal para compartir.', icono: 'bi-box2-heart-fill' },
    { id: 7, nombre: 'Pepino cohombro', precio: 1700, unidad: 'libra', categoria: 'verdura', origen: 'Tolima', descripcion: 'Refrescante y suave, muy bueno en ensaladas y jugos verdes.', icono: 'bi-flower2' },
    { id: 8, nombre: 'Pepino de guiso', precio: 3200, unidad: 'libra', categoria: 'verdura', origen: 'Tolima', descripcion: 'Producto fresco de sabor suave y natural, ideal para tus preparaciones.', icono: 'bi-flower2' },
    { id: 9, nombre: 'Cidra', precio: 2700, unidad: 'libra', categoria: 'verdura', origen: 'Tolima', descripcion: 'Verdura tradicional para sopas, guisos y rellenos.', icono: 'bi-flower2' },
    { id: 10, nombre: 'Acelga', precio: 2700, unidad: 'unidad', categoria: 'verdura', origen: 'Tolima', descripcion: 'Hortaliza de sabor suave y nutritivo, ideal para tus preparaciones.', icono: 'bi-flower1' },
    { id: 11, nombre: 'Espinaca', precio: 2700, unidad: 'unidad', categoria: 'verdura', origen: 'Tolima', descripcion: 'Hortaliza fresca de hojas tiernas, con sabor nutritivo y saludable.', icono: 'bi-flower1' },
    { id: 12, nombre: 'Cebolla cabezona', precio: 1900, unidad: 'libra', categoria: 'verdura', origen: 'Tolima', descripcion: 'Verdura de sabor fresco y característico, base de tus preparaciones.', icono: 'bi-flower3' },
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

  // Devuelve el producto o undefined si el id no existe
  getProductoById(id: number): Producto | undefined {
    return this.productos.find((p) => p.id === id);
  }

  getPorCategoria(categoria: Producto['categoria']): Producto[] {
    return this.productos.filter((p) => p.categoria === categoria);
  }
}