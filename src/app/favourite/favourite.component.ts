import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input('is-favorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onFavorite(){

    this.isFavorite = !this.isFavorite;
    this.change.emit({ isFavorite: this.isFavorite});
  }

}

export interface onFavoriteEventArgs {
  isFavorite: boolean
}
