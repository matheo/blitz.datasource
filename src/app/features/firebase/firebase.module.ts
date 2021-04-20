import { NgModule, ModuleWithProviders } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  imports: [AngularFirestoreModule]
})
export class FirebaseModule {
  static forRoot(): Array<ModuleWithProviders<AngularFireModule>> {
    return [
      AngularFireModule.initializeApp({
        projectId: 'matdatasource',
        databaseURL: 'https://matdatasource.firebaseio.com'
      })
    ];
  }
}
