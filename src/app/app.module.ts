import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesFormComponent } from './recipes-form/recipes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipesDetailComponent,
    RecipesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
