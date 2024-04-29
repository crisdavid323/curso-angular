import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private reuter: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }: { id: string }) => this.heroesService.getHeroById(id)),
      )
      .subscribe((hero: Hero | undefined) => {
        if (!hero) return this.reuter.navigate(['/heroes/list']);
        this.hero = hero;
        return;
      });
  }

  goBack(): void {
    this.reuter.navigateByUrl('heroes/list');
  }
}
