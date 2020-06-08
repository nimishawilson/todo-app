import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

const materialComponents = [MatGridListModule];

@NgModule({
  declarations: [],
  imports: [materialComponents],
  exports: [materialComponents],
})
export class MaterialModule {}
