import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Changed styleUrl to styleUrls
})
export class AppComponent implements OnInit {
  isBrowser: boolean;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {  // Added Event type to the import
      if (event instanceof NavigationStart) {
        this.showLoader();
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.hideLoader();
      }
    });
  }

  showLoader(): void {
    if (this.isBrowser) {
      const loaderWrapper = document.getElementById('loader-wrapper');
      if (loaderWrapper) {
        this.renderer.setStyle(loaderWrapper, 'display', 'flex');
      }
    }
  }

  hideLoader(): void {
    if (this.isBrowser) {
      const loaderWrapper = document.getElementById('loader-wrapper');
      if (loaderWrapper) {
        setTimeout(() => {
          this.renderer.setStyle(loaderWrapper, 'display', 'none');
        }, 1000); // 1000 milliseconds = 1 second
      }
    }
  }

  // scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      const moveToTopButton = document.getElementById('moveToTop');
      if (moveToTopButton) {
        if (window.pageYOffset > 300) {  // Show button after 300px scroll
          moveToTopButton.style.display = 'block';
        } else {
          moveToTopButton.style.display = 'none';
        }
      }
    }
  }

  scrollToTop(): void {
    if (this.isBrowser) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
