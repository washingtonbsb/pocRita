import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/home/cards/cards.component';
import { SendMessageComponent } from './components/home/send-message/send-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogErrorComponent } from './components/dialog-error/dialog-error.component';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardsComponent,
    SendMessageComponent,
    DialogComponent,
    DialogErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    NgxMaskModule.forRoot(maskConfig),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
