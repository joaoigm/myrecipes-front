import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { RecipesService } from 'src/app/services/recipes/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[];
  constructor(
    private recipeService: RecipesService
  ) { 
    this.recipeService.get().subscribe(recipes => {
      console.log(recipes);
      this.recipes = recipes;
    });
  }

  ngOnInit(): void {
  }

  delete(recipe: Recipe){
    this.recipeService.delete(recipe.id).subscribe();
    this.recipes = this.recipes.filter(re => re !== recipe);
  }

}
