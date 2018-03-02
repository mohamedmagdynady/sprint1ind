import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import {HttpModule} from '@angular/http';
import { StoreRoutingModule } from './store-routing.module';

import { StoreComponent } from './store.component';
import { StoreService } from '../../store.service';


@NgModule({
  imports: [ThemeModule, StoreRoutingModule, FormsModule, HttpModule],
  declarations: [StoreComponent],
  entryComponents: [],
  providers: [StoreService]
})
export class StoreModule {}
