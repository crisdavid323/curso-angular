import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authCanMatchGuard: CanMatchFn = (route: Route, segments: UrlSegment[]): boolean | Observable<boolean> => {
  return checkAuthStatus();
};

const checkAuthStatus = (): boolean | Observable<boolean> => {
  //se inyectan el AuthService y el Router
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthentication().pipe(

    tap((isAuthenticated: boolean) => console.log({ 'Authenticated': isAuthenticated })),
    tap((isAuthenticated: boolean) => {
      if (!isAuthenticated) {
        router.navigate(['/auth/login'])
      }
    }),

  );
}
