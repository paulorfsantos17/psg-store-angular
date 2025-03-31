import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

import { CommonModule } from '@angular/common';
import { gamesData } from '../../data/games-data';

@Component({
  selector: 'app-home',
  imports: [CardComponent,  CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent   {
  games: any[] = []

  constructor( ) {
    this.games = gamesData
  }

}
