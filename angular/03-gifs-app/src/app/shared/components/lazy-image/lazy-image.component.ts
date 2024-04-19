import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent {

  @Input()
  public url!: string;

  @Input()
  public title!: string;

  public hasLoaded: boolean = false;


  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required');
    if (!this.title) throw new Error('Title property is required');
  }

  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }

}
