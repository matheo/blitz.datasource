import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutBodyComponent } from './body/body.component';

export const LayoutImports = [FlexLayoutModule, MatListModule, MatToolbarModule];

export const LayoutExports = [LayoutBodyComponent];

export { LayoutBodyComponent };
