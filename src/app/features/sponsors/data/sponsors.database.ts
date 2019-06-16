import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { doc, docExists } from '../../firebase';
import { Sponsor, SponsorsListRequest } from './sponsors.types';

@Injectable({
  providedIn: 'root'
})
export class SponsorsDatabase {
  /**
   * The Database translates the Datasource request to the backend.
   */
  constructor(private db: AngularFirestore) {}

  single(id: string) {
    return this.db
      .doc<Sponsor>(`sponsors/${id}`)
      .snapshotChanges()
      .pipe(
        docExists<Sponsor>(),
        doc()
      );
  }

  list(args: SponsorsListRequest) {
    return this.db.collection<Sponsor>('sponsors').snapshotChanges();
  }
}
