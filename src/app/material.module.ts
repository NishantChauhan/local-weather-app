import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
} from '@angular/material'
@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
  ],
})
export class MaterialModule {}
