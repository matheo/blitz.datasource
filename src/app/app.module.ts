import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FirebaseModule } from './features/firebase';
import { LayoutModule } from './layout';

import { AppComponent } from './app.component';
import { routes } from './app.routing';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    AngularFirestoreModule,
    FirebaseModule.forRoot(),
    LayoutModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: './' }]
})
export class AppModule {}
