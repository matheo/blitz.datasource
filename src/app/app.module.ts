import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';

import { AppComponent } from './app.component';
import { routes } from './app.routing';

@NgModule({
  imports: [BrowserAnimationsModule, LayoutModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: './' }]
})
export class AppModule {}
