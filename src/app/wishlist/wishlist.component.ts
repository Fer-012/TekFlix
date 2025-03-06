import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  standalone: false,
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  wishlist = [
    { title: 'Deadpool', image: '/pool.webp', rating: 8.0 },
    { title: 'Venom', image: '/venom.webp', rating: 6.7 },
    { title: 'Naruto Shippuden', image: '/naruto.jpg', rating: 7.0 }
  ];

  removeFromWishlist(index: number) {
    this.wishlist.splice(index, 1);
  }

}
