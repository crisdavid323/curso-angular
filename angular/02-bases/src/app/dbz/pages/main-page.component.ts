import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(
    private dbzService: DbzService
  ) { }

  get characters(): Character[] {
    return [...this.dbzService.character];
  }

  onRemoveCharacter(id: string) {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character) {
    this.dbzService.addCharacter(character);
  }
}
