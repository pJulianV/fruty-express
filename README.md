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
