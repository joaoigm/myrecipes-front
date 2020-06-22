import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-form',
  templateUrl: './recipes-form.component.html',
  styleUrls: ['./recipes-form.component.css']
})
export class RecipesFormComponent implements OnInit {

  actionType: String
  constructor(router: Router) {
    if(router.url.indexOf('update') > -1){
      this.actionType = 'update';
    } else {
      this.actionType = 'create';
    }
  }

  ngOnInit(): void {
    
  }
}
