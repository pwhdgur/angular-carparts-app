import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarpartsComponent} from './carparts.component';
import {CarpartsDataService} from './carparts-data.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports : [CommonModule, FormsModule],
  declarations: [CarpartsComponent],
  exports: [CarpartsComponent],
  providers: [CarpartsDataService]
})
export class CarpartsModule {

}
