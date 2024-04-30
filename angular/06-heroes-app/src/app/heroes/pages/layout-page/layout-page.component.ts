import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: '/heroes/list' },
    { label: 'Añadir', icon: 'add', url: '/heroes/new-hero' },
    { label: 'Buscar', icon: 'search', url: '/heroes/search' },
  ]

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
