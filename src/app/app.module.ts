import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ButtonComponent } from './button/button.component';
import { BottomComponent } from './bottom/bottom.component';
import { SpbComponent } from './spb/spb.component';
import { TokyoComponent } from './tokyo/tokyo.component';
import { ParisComponent } from './paris/paris.component';
import { NyComponent } from './ny/ny.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ButtonComponent,
    BottomComponent,
    SpbComponent,
    TokyoComponent,
    ParisComponent,
    NyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
