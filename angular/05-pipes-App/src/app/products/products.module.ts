import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**Component create */
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { ProductsRoutingModule } from './products-routing.module';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

/**Style PrimeNG */
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

/**Pipe */
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    OrderComponent,
    UncommonPageComponent,

    // Pipe
    CanFlyPipe,
    ToggleCasePipe,
    SortByPipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,

    PrimeNgModule,
  ]
})
export class ProductsModule { }
