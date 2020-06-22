import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesDetailComponent } from './components/recipes/recipes-detail/recipes-detail.component';
import { RecipesFormComponent } from './components/recipes/recipes-form/recipes-form.component';
import { UsersService } from './services/users/users.service';
import { RecipesService } from './services/recipes/recipes.service';
import { HttpClientModule } from '@angular/common/http'
import { AuthenticationService } from './services/auth/authentication.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipesDetailComponent,
    RecipesFormComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UsersService,
    RecipesService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
