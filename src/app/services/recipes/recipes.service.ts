import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { env } from 'process';
import { environment } from 'src/environments/environment';
import { Recipe } from 'src/app/models/Recipe';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';


@Injectable({
  providedIn: 'root'
})
export class RecipesService extends BaseService<Recipe> {
  
  constructor(httpClient: HttpClient) {
    super(environment.recipes_service_url, httpClient);
  }

}
