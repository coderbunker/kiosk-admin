import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfigurationsComponent } from './configurations/configurations.component';

import { AppRoutingModule }     from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { ConfigurationDetailComponent } from './configuration-detail/configuration-detail.component';
import { PassphraseDialogComponent } from './passphrase-dialog/passphrase-dialog.component';
import { MatDialogModule, MatCardModule, MatButtonModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationsComponent,
    ConfigurationDetailComponent,
    PassphraseDialogComponent,
  ],
  entryComponents: [
    PassphraseDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports: [ PassphraseDialogComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
