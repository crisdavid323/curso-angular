import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { filter, switchMap, tap } from 'rxjs';

import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>('', { nonNullable: true }),
    first_appearance: new FormControl<string>('', { nonNullable: true }),
    characters: new FormControl<string>('', { nonNullable: true }),
    alt_img: new FormControl<string>(''),
  })

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }: { id: string }) => this.heroesService.getHeroById(id)),
      )
      .subscribe((hero: Hero | undefined) => {
        if (!hero) return this.router.navigate(['/heroes/list']);
        this.heroForm.reset(hero);
        return;
      });
  }

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  onSubmit() {

    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero)
        .subscribe((hero: Hero) => {
          this.showSnackbar(`${hero.superhero} update!`);
        });
      return;
    };

    this.heroesService.addHero(this.currentHero)
      .subscribe((hero: Hero) => {
        this.router.navigate(['/heroes/edit', hero.id]);
        this.showSnackbar(`${hero.superhero} created!`);
      });

    console.log({
      formIsValid: this.heroForm.valid,
      value: this.heroForm.value
    });
  }

  onDeleteHero(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.currentHero,
    });

    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap(() => this.heroesService.deleteHero(this.currentHero.id)),
        filter((wasDelete: boolean) => wasDelete),
      )
      .subscribe(() => {
        this.router.navigate(['/heroes']);
      })

    // dialogRef.afterClosed().subscribe((result: any) => {
    //   if (!result) return;

    //   this.heroesService.deleteHero(this.currentHero.id)
    //     .subscribe((wasDelete: boolean) => {
    //       if (wasDelete) this.router.navigate(['/heroes']);
    //     });
    // });
  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', {
      duration: 2500,
    })
  }
}
