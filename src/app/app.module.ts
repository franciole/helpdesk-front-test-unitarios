import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Imports para componentes do Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
// componentes do projeto
import { NavComponent } from './component/nav/nav.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { TecnicoListComponent } from './component/tecnico/tecnico-list/tecnico-list.component';
import { LoginComponent } from './component/login/login.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { TecnicoCreateComponent } from './component/tecnico/tecnico-create/tecnico-create.component';
import { NgxMaskModule } from 'ngx-mask';
import { TecnicoUpdateComponent } from './component/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './component/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteListComponent } from './component/cliente/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './component/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './component/cliente/cliente-delete/cliente-delete.component';
import { ChamadoListComponent } from './component/chamado/chamado-list/chamado-list.component';
import { ChamadoCreateComponent } from './component/chamado/chamado-create/chamado-create.component';
import { ChamadoUpdateComponent } from './component/chamado/chamado-update/chamado-update.component';
import { ChamadoReadComponent } from './component/chamado/chamado-read/chamado-read.component';
import { TesteComponent } from './component/teste/teste.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    TecnicoListComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent,
    TecnicoDeleteComponent,
    ClienteListComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    ChamadoListComponent,
    ChamadoCreateComponent,
    ChamadoUpdateComponent,
    ChamadoReadComponent,
    TesteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true,
    }),
    NgxMaskModule.forRoot(),
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
