import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatDataSourceModule } from '@matheo/datasource';
import { SponsorsListComponent } from './list/list.component';
import { SponsorsListFilterComponent } from './list/filter/filter.component';
import { SponsorsListTableComponent } from './list/table/table.component';

export const SponsorsImports = [AngularFirestoreModule, FlexLayoutModule, MatTableModule, MatDataSourceModule];

export const SponsorsDeclarations = [SponsorsListFilterComponent, SponsorsListTableComponent];

export const SponsorsExports = [SponsorsListComponent];

export { SponsorsListComponent };
