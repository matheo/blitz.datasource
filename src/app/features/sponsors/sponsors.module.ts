import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorsImports, SponsorsDeclarations, SponsorsExports } from './sponsors.barrel';
import { RouterModule } from '@angular/router';
import { routes } from './sponsors.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ...SponsorsImports],
  declarations: [...SponsorsDeclarations, ...SponsorsExports],
  exports: SponsorsExports
})
export class FeatSponsorsModule {}
