export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  unidad: string;
  categoria: 'fruta' | 'verdura';
  origen: string;
  descripcion: string;
  icono: string;
  calorias?: number;
  azucar?: number;
}
