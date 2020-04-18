import { NgModule } from '@angular/core'

import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu'
import { MatCardModule } from '@angular/material/card'
import { MatRippleModule } from '@angular/material/core'

const materialModules = [
  MatButtonModule,
  MatSnackBarModule,
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule,
  MatCardModule,
  MatRippleModule,
]

@NgModule({
  imports: [
    ...materialModules,
  ],
  exports: [
    ...materialModules,
  ],
})
export class MaterialModule {
}
