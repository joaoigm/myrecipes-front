import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/Recipe';
import { Ingredient } from 'src/app/models/Ingredient';
import { Step } from 'src/app/models/Step';
import { RecipesService } from 'src/app/services/recipes/recipes.service';

@Component({
  selector: 'app-recipes-form',
  templateUrl: './recipes-form.component.html',
  styleUrls: ['./recipes-form.component.css']
})
export class RecipesFormComponent implements OnInit {

  actionType: String
  recipe: Recipe;
  constructor(private router: Router, private recipeService: RecipesService, private activatedRoute: ActivatedRoute) {
  }

  removeStep(step): void {
    this.recipe.steps = this.recipe.steps.filter(i => i !== step);
  }

  removeIngredient(ingredient): void {
    this.recipe.ingredients = this.recipe.ingredients.filter(i => i !== ingredient);
  }

  addStep(): void {
    this.recipe.steps.push(new Step());
  }

  addIngredient(): void {
    this.recipe.ingredients.push(new Ingredient());
  }

  ngOnInit(): void {
    this.recipe = new Recipe();
    if(this.router.url.indexOf('update') > -1){
      this.actionType = 'update';
      this.activatedRoute.params.subscribe(param => {
        this.recipeService.getById(param['id']).subscribe(recipe => {
          this.recipe = recipe;
        })
      });
    } else {
      this.actionType = 'create';
    }
  }

  onCreateSubmit(): void {
    console.log('submitted');
    if(this.recipe.title){
      this.recipeService.create(this.recipe).subscribe(() => {
        alert("Receita salva com sucesso");
        this.router.navigate(['/recipes']);
      });
    }
  }

  onUpdateSubmit(): void {
    if(this.recipe.title){
      this.recipeService.update(this.recipe).subscribe(() => {
        alert("Receita atualizada com sucesso");
        this.router.navigate(['/recipes']);
      });
    }
  }
}
