# Fruty Express

Tienda en línea de mercado a domicilio (frutas y verduras) hecha con **Angular 21** y **Bootstrap 5**. Proyecto de clase, Fase 2. Los datos son simulados (no hay backend) y los precios están en pesos colombianos (COP).

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
| `/tienda/:id` | ProductoDetalle |
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
└── services/
    ├── producto.ts     ProductoService (12 productos simulados)
    └── carrito.ts      CarritoService (estado con signals)
```

## Conceptos clave (para el video)

- **Componentes standalone**: cada pantalla es un componente independiente con su `.ts`, `.html` y `.css`.
- **Servicios con `inject()`**: los componentes piden los servicios a Angular en lugar de crearlos.
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
| Integrante 1 | Navbar y Home |
| Integrante 2 | Tienda y ProductoDetalle |
| Integrante 3 | Carrito, rutas y Bootstrap |

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

### Resumen de lo nuevo

- Se agregó el componente reutilizable `ProductoCard`, que ahora muestra cada producto dentro de la tienda.
- La tienda reemplazó las tarjetas individuales por `<app-producto-card>` dentro de su recorrido con `@for`.
- La interfaz `Producto` pasó a tener su propio archivo de modelos y ya se usa en el servicio, el carrito y los componentes.
- Se agregó una llamada a la API pública Fruityvice; si falla o hay problemas de CORS, se conservan los datos mock.
- La vista de detalle ahora puede mostrar calorías y azúcar obtenidas de la API externa.

### Tabla de cambios

| Archivo | Nuevo o modificado | Qué hace | Quién lo hizo |
|---|---|---|---|
| `src/app/models/producto.ts` | Nuevo | Define estrictamente la interfaz `Producto`, incluyendo campos opcionales de calorías y azúcar. | pJulianV |
| `src/app/producto-card/producto-card.ts` | Nuevo | Componente reutilizable que recibe un `Producto` con `input()` y usa el servicio del carrito. | pJulianV |
| `src/app/producto-card/producto-card.html` | Nuevo | Muestra nombre, categoría, precio COP y botones de detalle y compra. | pJulianV |
| `src/app/producto-card/producto-card.css` | Nuevo | Hace que la tarjeta ocupe toda la altura disponible dentro de su columna. | pJulianV |
| `src/app/tienda/tienda.ts` | Modificado | Elimina la lógica directa de agregar al carrito y usa el componente `ProductoCard`. | pJulianV |
| `src/app/tienda/tienda.html` | Modificado | Usa `@for` y `<app-producto-card>` para renderizar las tarjetas reutilizables. | pJulianV |
| `src/app/services/carrito.ts` | Modificado | Importa `Producto` desde el modelo propio en vez de desde el servicio. | pJulianV |
| `src/app/services/producto.ts` | Modificado | Usa el modelo compartido, conserva los 12 productos mock y consulta datos nutricionales de una API externa. | pJulianV |
| `src/app/app.config.ts` | Modificado | Registra `provideHttpClient()` para permitir llamadas HTTP desde Angular. | pJulianV |
| `src/app/producto-detalle/producto-detalle.ts` | Modificado | Importa `Producto` desde el archivo de modelos compartido. | pJulianV |
| `src/app/producto-detalle/producto-detalle.html` | Modificado | Muestra calorías y azúcar cuando la API aporta esos datos. | pJulianV |

### Cómo funcionan las novedades

**Tarjeta reutilizable de producto**  
El componente `ProductoCard` recibe el producto con `input.required<Producto>()`; así, cualquier pantalla puede enviarle un objeto sin duplicar HTML. Dentro de la tienda, `@for` recorre `productos()` y genera una tarjeta por cada elemento. Este componente ayuda a mantener una presentación uniforme y evita repetir el diseño de las tarjetas.

**Navegación al detalle**  
Cada tarjeta usa `routerLink` con la ruta dinámica `/tienda/:id`, pasando el identificador del producto. La misma ruta abre `ProductoDetalle`, que continúa leyendo ese id con `ActivatedRoute` y busca el producto correspondiente.

**Agregar al carrito desde la tarjeta**  
`ProductoCard` usa `inject(CarritoService)` para obtener el servicio compartido. Al pulsar el botón, llama a `agregarAlCarrito()`, que ejecuta `agregar()` y actualiza el estado del carrito mediante sus `signal`.

**Interfaz y tipado**  
La interfaz en `src/app/models/producto.ts` define las propiedades obligatorias y las propiedades opcionales `calorias` y `azucar`. Al usar `Producto` en el servicio, el carrito y las vistas, TypeScript ayuda a detectar datos con nombres o tipos incorrectos.

**Datos externos y respaldo**  
`ProductoService` usa `HttpClient` con `inject()` y consulta `https://www.fruityvice.com/api/fruit/all`. Los datos se usan para enriquecer algunos productos con calorías y azúcar. Si la petición falla, produce un arreglo vacío con `catchError`; entonces el arreglo mock continúa disponible y la tienda no pierde sus productos.

### Interfaces y servicios

| Elemento | Ubicación | Campos o endpoint | Respaldo |
|---|---|---|---|
| Interfaz `Producto` | `src/app/models/producto.ts` | `id`, `nombre`, `precio`, `unidad`, `categoria`, `origen`, `descripcion`, `icono`, `calorias?`, `azucar?` | ___ |
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

### Guion del video

**English script**

- **Dilan Castro:** “We added a reusable product card component to improve the store layout. It receives a typed product and can navigate to the detail page.”
- **Jhonnatan Mayorga:** “The card also adds products to the cart through the shared service. The product model was moved to a separate TypeScript interface file.”
- **Julian Vargas:** “The product service calls the Fruityvice API for calories and sugar. If the external request fails, our twelve simulated products remain available.”
- **All three:** “We used the modern Angular control flow and signals, kept the responsive columns, and published the final work on the develop branch.”

**Traducción al español**

- Dilan explica que agregaron una tarjeta reutilizable que recibe un producto tipado y abre su página de detalle.
- Jhonnatan explica que la tarjeta agrega productos al carrito mediante el servicio compartido y que el modelo quedó separado en una interfaz.
- Julian explica que el servicio consulta la API para obtener datos nutricionales y conserva los productos mock si la API falla.
- Los tres resumen que usaron control de flujo moderno y signals, conservaron el diseño responsive y publicaron el trabajo en `develop`.

### Cosas del README anterior que quedaron desactualizadas

- La sección `Estructura` no incluye el nuevo componente `src/app/producto-card/` ni la carpeta `src/app/models/`.
- La descripción inicial dice que los datos son exclusivamente simulados; ahora los productos siguen teniendo datos mock, pero también pueden enriquecerse con calorías y azúcar desde Fruityvice.
- La tabla de `Conceptos clave` no menciona la separación de `Producto` en su propia interfaz ni el uso de `HttpClient`.
