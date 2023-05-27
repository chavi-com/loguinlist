import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoguinComponent } from './components/loguin/loguin.component';
import { ListUsersComponent } from './components/listusers/listusers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailsModalComponent } from './shared/modals/user-details-modal/user-details-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoguinComponent,
    ListUsersComponent,
    UserDetailsModalComponent // Agrega el componente aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
