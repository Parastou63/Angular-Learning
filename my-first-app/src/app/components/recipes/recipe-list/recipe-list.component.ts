import { Component } from '@angular/core';
import { Recipe } from '../../recipes/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test.',
      'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test.',
      'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg'
    ),
  ];
}
