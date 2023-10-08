import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  name: String = 'clean Code';
  author: String = 'Robert c Martin';
  src: String =
    'https://5.imimg.com/data5/WZ/NH/HL/SELLER-99655515/clean-code-a-handbook-of-agile-software-craftsmanship-book.jpg';

  name2: String = 'Programming Book';
  author2: String = 'Authar -2 ';
  src2: String =
    'https://5.imimg.com/data5/WZ/NH/HL/SELLER-99655515/clean-code-a-handbook-of-agile-software-craftsmanship-book.jpg';

  name3: String = 'Programming Book volume -3';
  author3: String = 'Authar -3 ';
  src3: String =
    'https://5.imimg.com/data5/WZ/NH/HL/SELLER-99655515/clean-code-a-handbook-of-agile-software-craftsmanship-book.jpg';

  name4: String = 'Programming Book volume -4';
  author4: String = 'Authar -4 ';
  src4: String =
    'https://5.imimg.com/data5/WZ/NH/HL/SELLER-99655515/clean-code-a-handbook-of-agile-software-craftsmanship-book.jpg';

  isShowing: boolean = false;

  handleClick() {
    this.isShowing = true;
  }
}
