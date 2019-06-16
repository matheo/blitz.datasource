import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule, MatToolbarModule } from '@angular/material';
import { LayoutBodyComponent } from './body/body.component';

export const LayoutImports = [FlexLayoutModule, MatListModule, MatToolbarModule];

export const LayoutExports = [LayoutBodyComponent];

export { LayoutBodyComponent };
