import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('isLiked') liked : boolean;
  @Input('likeCount') count: number;

  constructor() { }

  ngOnInit() {
  }

  onLike(){

    this.liked = !this.liked

    if(this.liked)
      this.count++;
    else
      this.count--; 
  }

}
