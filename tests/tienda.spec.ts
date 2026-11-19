import { test, expect } from '@playwright/test';
import { TiendaPage } from '../pages/TiendaPage';

test.describe('Suite de pruebas - Toolshop', () => {
  let tienda: TiendaPage;

  // Se ejecuta antes de cada prueba para abrir la página principal
  test.beforeEach(async ({ page }) => {
    tienda = new TiendaPage(page);
    await tienda.abrir();
  });

  test('CP-01 Búsqueda exitosa de producto', async () => {
    await tienda.buscarProducto('Hammer');

    await expect(tienda.tarjetasProducto.first()).toContainText('Hammer');
  });

  test('CP-02 Búsqueda sin resultados', async () => {
    await tienda.buscarProducto('xyz123');

    await expect(tienda.mensajeSinResultados).toBeVisible();
    await expect(tienda.tarjetasProducto).toHaveCount(0);
  });

  test('CP-03 Agregar producto al carrito de compras', async ({ page }) => {
    await tienda.seleccionarProducto('Combination Pliers');
    await tienda.agregarAlCarrito();

    await expect(tienda.contadorCarrito).toHaveText('1');

    await tienda.irAlCarrito();
    await expect(page).toHaveURL(/checkout/);
    await expect(page.getByText('Combination Pliers', { exact: true })).toBeVisible();
  });
});