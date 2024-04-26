import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'cristhian david';
  public nameUpper: string = 'CRISTHIAN DAVID';
  public fullName: string = 'CrIsThIaN dAvId MoNtAñO';

  public customDate: Date = new Date();

}
