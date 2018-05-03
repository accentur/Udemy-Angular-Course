import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[

  new Recipe('A test recipe','This is simply a test','https://www.hindugallery.com/images/lord-shiva-wallpaper-1-640x451.jpg',
),
new Recipe('A test recipe','This is simply a test','https://www.hindugallery.com/images/Lord-Vishnu-Wallpaper-2.jpg',
)
];
  constructor() { }

  ngOnInit() {
  }

}
