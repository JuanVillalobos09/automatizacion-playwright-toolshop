import { Page, Locator } from '@playwright/test';

export class TiendaPage {
  readonly page: Page;
  readonly campoBusqueda: Locator;
  readonly botonBuscar: Locator;
  readonly tarjetasProducto: Locator;
  readonly mensajeSinResultados: Locator;
  readonly botonAgregarCarrito: Locator;
  readonly contadorCarrito: Locator;
  readonly enlaceCarrito: Locator;

  constructor(page: Page) {
    this.page = page;
    this.campoBusqueda = page.getByPlaceholder('Search');
    this.botonBuscar = page.getByRole('button', { name: 'Search' });
    this.tarjetasProducto = page.locator('a.card');
    this.mensajeSinResultados = page.getByText('There are no products found.');
    this.botonAgregarCarrito = page.getByRole('button', { name: 'Add to cart' });
    this.contadorCarrito = page.locator('[data-test="cart-quantity"]');
    this.enlaceCarrito = page.locator('[data-test="nav-cart"]');
  }

  async abrir() {
    await this.page.goto('/');
  }

  async buscarProducto(nombre: string) {
    await this.campoBusqueda.fill(nombre);
    await this.botonBuscar.click();
  }

  async seleccionarProducto(nombre: string) {
    await this.tarjetasProducto.filter({ hasText: nombre }).first().click();
  }

  async agregarAlCarrito() {
    await this.botonAgregarCarrito.click();
  }

  async irAlCarrito() {
    await this.enlaceCarrito.click();
  }
}