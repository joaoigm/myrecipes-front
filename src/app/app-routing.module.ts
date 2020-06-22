import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesDetailComponent } from './components/recipes/recipes-detail/recipes-detail.component';
import { RecipesFormComponent } from './components/recipes/recipes-form/recipes-form.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard] },
  { path: 'recipes/:id/details', component: RecipesDetailComponent, canActivate: [AuthGuard], pathMatch: 'full' },
  { path: 'recipes/create', component: RecipesFormComponent, canActivate: [AuthGuard] },
  { path: 'recipes/:id/update', component: RecipesFormComponent, canActivate: [AuthGuard], pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
