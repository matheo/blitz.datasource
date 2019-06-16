import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SponsorsListComponent } from './list/list.component';
import { SponsorsListFilterComponent } from './list/filter/filter.component';
import { SponsorsListTableComponent } from './list/table/table.component';

export const SponsorsImports = [AngularFirestoreModule];

export const SponsorsDeclarations = [SponsorsListFilterComponent, SponsorsListTableComponent];

export const SponsorsExports = [SponsorsListComponent];

export { SponsorsListComponent };
