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

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipesDetailComponent,
    RecipesFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UsersService,
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
