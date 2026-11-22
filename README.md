# Fruty Express

Tienda en línea de mercado a domicilio (frutas y verduras) hecha con **Angular 21** y **Bootstrap 5**. Proyecto de clase, Fase final. Los datos principales son simulados (no hay backend), los precios están en pesos colombianos (COP) y algunos productos pueden enriquecerse con calorías y azúcar desde la API pública Fruityvice.

## Integrantes

- Dilan Santiago Castro Cotrina
- Jhonnatan Alexis Mayorga Soto
- Julian Vargas

## Requisitos

- Node.js 20.19 o superior (recomendado 22 o 24 LTS). Verifica con `node -v`.
- Angular CLI 20 o superior. Verifica con `ng version`.
- Git y Visual Studio Code.

Si no tienes Angular CLI: `npm install -g @angular/cli`

## Cómo correr el proyecto (4 comandos)

```bash
git clone https://github.com/pJulianV/fruty-express.git
cd fruty-express
npm install
ng serve
```

Abre http://localhost:4200 en Chrome o Edge.

`npm install` es obligatorio: descarga Angular, Bootstrap y Bootstrap Icons en la carpeta `node_modules`, que no se sube a GitHub. Si cambias `angular.json`, detén el servidor con `Ctrl + C` y vuelve a ejecutar `ng serve`.

## Rutas

| Ruta | Componente |
|---|---|
| `/` y `/home` | Home |
| `/tienda` | Tienda |
| `/tienda/:id` | ProductoDetalle (detalle dinámico por id) |
| `/carrito` | Carrito |
| cualquier otra | redirige a `/` |

## Estructura

```
src/app/
├── navbar/             Menú superior con contador del carrito
├── home/               Portada y tarjetas de beneficios
├── tienda/             Listado, filtro Todas/Frutas/Verduras
├── producto-detalle/   Detalle de un producto (ruta dinámica)
├── carrito/            Cantidades, total en COP, pedido simulado
├── producto-card/      Tarjeta reutilizable de producto
├── models/
│   └── producto.ts     Interfaz compartida del producto
└── services/
    ├── producto.ts     ProductoService (12 productos simulados)
    └── carrito.ts      CarritoService (estado con signals)
```

## Conceptos clave (para el video)

- **Componentes standalone**: cada pantalla es un componente independiente con su `.ts`, `.html` y `.css`.
- **Servicios con `inject()`**: los componentes piden los servicios a Angular en lugar de crearlos.
- **Interfaz `Producto`**: el archivo `src/app/models/producto.ts` centraliza los campos obligatorios y opcionales usados por los productos.
- **HttpClient**: `ProductoService` consulta una API pública para añadir calorías y azúcar sin reemplazar los datos locales.
- **Signals**: el carrito guarda su estado en un `signal`; `total` y `cantidadTotal` son `computed` y se leen con paréntesis, por ejemplo `carrito.total()`.
- **Ruta dinámica**: en `/tienda/:id`, `ActivatedRoute` lee el id con `paramMap` dentro de `ngOnInit`.
- **Control de flujo moderno**: se usa `@for` y `@if / @else`, nunca `*ngFor` ni `*ngIf`.
- **Bootstrap**: instalado con `npm install bootstrap` y registrado en `angular.json` (CSS en `styles`, JS bundle en `scripts`).
- **Iconos**: Bootstrap Icons (`npm install bootstrap-icons`), sin imágenes externas.

## Probar el diseño responsive (375 px)

1. En Chrome o Edge abre http://localhost:4200 y presiona `F12`.
2. Presiona `Ctrl + Shift + M` (modo dispositivo).
3. Escribe **375** en el ancho: debes ver 1 columna de tarjetas y el menú colapsado con el botón ☰.
4. Sube el ancho a ~576 px (2 columnas) y ~992 px (4 columnas y menú completo).

## Reparto de trabajo

| Integrante | Parte |
|---|---|
| Dilan Castro | Navbar y Home |
| Jhonnatan Mayorga | Tienda y ProductoDetalle |
| Julian Vargas | Carrito, rutas, Bootstrap, ProductoCard, interfaz y API |

## Flujo de trabajo en equipo

Antes de editar: `git pull`. Después de editar: `git add .`, `git commit -m "mensaje"`, `git push`. Cada integrante trabaja solo sus archivos para evitar conflictos.

## Problemas comunes

| Síntoma | Solución |
|---|---|
| `ng` no se reconoce | Instala Angular CLI y reinicia la terminal |
| Pantalla sin estilos | Revisa `styles` y `scripts` en `angular.json` y reinicia `ng serve` |
| Cuadritos en vez de iconos | Falta `bootstrap-icons` en `styles` de `angular.json`, o ejecutar `npm install` |
| Error `Cannot find module` | Ejecuta `npm install` |
| Aviso rojo de `tsconfig.app.json` (`rootDir`) | Es del editor, se puede ignorar si compila |

## 🆕 Novedades de la Fase final

### Resumen

La fase final agrega una tarjeta reutilizable de producto, una interfaz compartida y datos nutricionales opcionales desde una API externa. La tienda utiliza `ProductoCard` con `@for`, el carrito recibe las acciones desde el componente y el detalle conserva la ruta dinámica `/tienda/:id`. Los datos mock siguen siendo la fuente principal y el respaldo de la aplicación.

### Tabla de cambios

| Archivo | Nuevo o modificado | Qué hace | Quién lo hizo |
|---|---|---|---|
| `src/app/models/producto.ts` | Nuevo | Define la interfaz `Producto` y sus campos opcionales de calorías y azúcar. | Julian Vargas |
| `src/app/producto-card/producto-card.ts` | Nuevo | Recibe un `Producto` con `input()` y se comunica con `CarritoService`. | Julian Vargas |
| `src/app/producto-card/producto-card.html` | Nuevo | Muestra el producto, el precio COP y los botones de detalle y carrito. | Julian Vargas |
| `src/app/producto-card/producto-card.css` | Nuevo | Ajusta la altura reutilizable de la tarjeta dentro de la cuadrícula. | Julian Vargas |
| `src/app/tienda/tienda.ts` | Modificado | Usa el servicio de productos y elimina la lógica directa de agregar al carrito. | Julian Vargas |
| `src/app/tienda/tienda.html` | Modificado | Renderiza las tarjetas con `@for` y el componente `<app-producto-card>`. | Julian Vargas |
| `src/app/services/carrito.ts` | Modificado | Importa `Producto` desde el modelo propio en vez de desde el servicio. | Julian Vargas |
| `src/app/services/producto.ts` | Modificado | Usa el modelo compartido, conserva los 12 productos mock y consulta datos de Fruityvice. | Julian Vargas |
| `src/app/app.config.ts` | Modificado | Registra `provideHttpClient()` para permitir llamadas HTTP desde Angular. | Julian Vargas |
| `src/app/producto-detalle/` | Modificado | Importa el modelo compartido y muestra calorías y azúcar cuando están disponibles. | Julian Vargas |

### Interfaces y servicios

| Elemento | Ubicación | Campos o endpoint | Respaldo |
|---|---|---|---|
| Interfaz `Producto` | `src/app/models/producto.ts` | `id`, `nombre`, `precio`, `unidad`, `categoria`, `origen`, `descripcion`, `icono`, `calorias?`, `azucar?` | Los 12 productos mock siguen disponibles si la API falla |
| `ProductoService` | `src/app/services/producto.ts` | `GET https://www.fruityvice.com/api/fruit/all`; expone búsquedas por lista, id y categoría | Mantiene 12 productos mock |
| `CarritoService` | `src/app/services/carrito.ts` | Usa `Producto` en `ItemCarrito`, administra cantidades y total con `signal` y `computed` | Estado local del carrito |

### Estado frente a la rúbrica

| Criterio | Estado | Evidencia |
|---|---|---|
| Uso del repositorio: commits y creación de 2 ramas | **Cumple** | Hay ramas `main` y `develop`; los commits nuevos están en `develop`. |
| Mínimo 6 componentes, incluido uno de detalle | **Cumple** | Se mantienen navbar, home, tienda, producto-detalle, carrito y el nuevo `producto-card`. |
| Rutas dinámicas correctas | **Cumple** | La ruta `/tienda/:id` continúa activa y recibe el id con `ActivatedRoute`. |
| Interfaces y servicios | **Cumple** | Existe la interfaz en `models/producto.ts`; los servicios usan tipado y `inject()`. |
| Responsive correcto | **Cumple** | La tienda mantiene 1 columna en 375 px, 2 alrededor de 576 px y 4 alrededor de 992 px. |
