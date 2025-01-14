import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Graficos
import { BaseChartDirective } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BaseChartDirective
  ]
})
export class ComponentsModule { }
