import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const materialComponents = [
  MatGridListModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [materialComponents],
  exports: [materialComponents],
})
export class MaterialModule {}
