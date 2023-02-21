import { Component } from '@angular/core';
import { Recipe } from '../recipes/models/recipe.model';
import { Ingredient } from '../../shared/ingeridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', '5'),
    new Ingredient('Tomatos', '10'),
  ];
}
