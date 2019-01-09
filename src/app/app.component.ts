import { Component } from '@angular/core';
import { onFavoriteEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'basics',
    isFavorite: true,
    isLiked: false,
    likeCount: 0
  }

  change(args: onFavoriteEventArgs){
    console.log('event was triggered', args);
  }
}
