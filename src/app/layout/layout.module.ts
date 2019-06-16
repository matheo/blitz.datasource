import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutExports, LayoutImports } from './layout.barrel';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, ...LayoutImports],
  declarations: [...LayoutExports],
  exports: LayoutExports
})
export class LayoutModule {}
