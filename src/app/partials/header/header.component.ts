import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   constructor(private router: Router) {}

  navigateToDetail(fragment: string): void {
    this.router.navigate(['/site-cultural'], { fragment });
  }


  navigateToArtDetail(fragment: string): void {
    this.router.navigate(['/art-heritage'], { fragment });
  }


  navigateToCultureDetail(fragment: string): void {
    this.router.navigate(['/cultural'], { fragment });
  }

}
