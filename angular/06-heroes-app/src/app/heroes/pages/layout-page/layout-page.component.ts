import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: '/heroes/list'},
    { label: 'Añadir', icon: 'add', url: '/heroes/new-hero'},
    { label: 'Buscar', icon: 'search', url: '/heroes/search'},
  ]
}
