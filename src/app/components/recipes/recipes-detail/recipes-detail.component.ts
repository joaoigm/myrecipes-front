import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { RecipesService } from 'src/app/services/recipes/recipes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipeId: String
  recipe: Recipe
  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.recipeId = param['id'];
    });
    this.recipeService.getById(this.recipeId).subscribe(recipe => {
      this.recipe = recipe;
    })
  }

}
