# Automatización de Pruebas E2E con Playwright y TypeScript

## Datos del estudiante
- **Nombre:** Juan David Villalobos Mahecha
- **Asignatura:** Ingeniería de Software III - Universidad Libre

## 1. Aplicación automatizada
- **Sitio web:** Toolshop (`https://practicesoftwaretesting.com`)
- **Justificación:** Es una tienda en línea ficticia diseñada específicamente para practicar automatización de pruebas. No cuenta con bloqueos antibots ni CAPTCHAs, mantiene sus elementos estables y permite probar flujos completos de catálogo, búsqueda y carrito sin usar cuentas personales.

## 2. Casos de prueba automatizados

| ID | Nombre del caso | Datos de entrada | Resultado esperado | Estado |
|--- |---|---|---|---|
| **CP-01** | Búsqueda exitosa de producto | Texto: `"Hammer"` | Se listan tarjetas de productos que contienen `"Hammer"` | Pasó |
| **CP-02** | Búsqueda sin resultados | Texto: `"xyz123"` | Se muestra el mensaje `"There are no products found."` y 0 productos | Pasó |
| **CP-03** | Agregar producto al carrito de compras | Producto: `"Combination Pliers"` | El contador del carrito marca `1` y el producto aparece visible en el carrito | Pasó |

## 3. Estructura del proyecto
Se implementó el patrón **Page Object Model (POM)** para separar los selectores y acciones de la página respecto a las verificaciones de cada prueba:

```text
automatizacion-toolshop/
├── pages/
│   └── TiendaPage.ts        # Locators y acciones de la tienda (buscar, seleccionar, agregar al carrito)
├── tests/
│   └── tienda.spec.ts       # Suite con los casos de prueba CP-01, CP-02 y CP-03
├── playwright.config.ts     # Configuración de Chromium, baseURL y generación de evidencias (video, captura y traza)
├── package.json             # Dependencias del proyecto
└── README.md                # Documentación del laboratorio