import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDataSourceModule } from '@matheo/datasource';
import { SponsorsListComponent } from './list/list.component';
import { SponsorsListFilterComponent } from './list/filter/filter.component';
import { SponsorsListTableComponent } from './list/table/table.component';

export const SponsorsImports = [
  AngularFirestoreModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatDataSourceModule
];

export const SponsorsDeclarations = [SponsorsListFilterComponent, SponsorsListTableComponent];

export const SponsorsExports = [SponsorsListComponent];

export { SponsorsListComponent };
