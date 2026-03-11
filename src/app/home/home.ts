// import { Component, computed, signal } from '@angular/core';
// import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
// import { SearchConfig, SearchBoxComponent } from 'cats-ui-lib';
// import { filter } from 'rxjs';

// @Component({
//   selector: 'app-home',
//   imports: [RouterLink, RouterLinkActive, RouterOutlet, SearchBoxComponent],
//   templateUrl: './home.html',
//   styleUrl: './home.scss',
// })
// export class Home {
//   placeholder = signal('Search Here');

//   constructor(private router: Router) {
//     this.router.events
//       .pipe(filter((event) => event instanceof NavigationEnd))
//       .subscribe((event: any) => {
//         const url = event.urlAfterRedirects;

//         if (url.includes('alert')) {
//           this.placeholder.set('Search Alert Name');
//         } else if (url.includes('adapter')) {
//           this.placeholder.set('Search Adapter Name');
//         } else if (url.includes('connection')) {
//           this.placeholder.set('Search Connection Name');
//         } else {
//           this.placeholder.set('Search Here');
//         }
//       });
//   }
//   searchConfig = computed(() => ({
//     serachValue: '',
//     placeholder: this.placeholder(),
//   }));

//   searchParamValue(data: any) {
//     console.log('searchParamValue', data);
//   }
// }

import { Component, computed, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SearchConfig, SearchBoxComponent } from 'cats-ui-lib';
import { filter, Subject, debounceTime } from 'rxjs';
import { homeSer } from './homeSer';
@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, SearchBoxComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  placeholder = signal('Search Here');

  // search signal
  searchValue = signal('');

  // debounced signal
  debouncedSearch = signal('');

  private searchSubject = new Subject<string>();

  constructor(
    private router: Router,
    private service: homeSer,
  ) {
    // debounce logic
    this.searchSubject.pipe(debounceTime(500)).subscribe((value) => {
      this.service.setSearch(value);
    });

    // route placeholder logic
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects;

        if (url.includes('alert')) {
          this.placeholder.set('Search Alert Name');
        } else if (url.includes('adapter')) {
          this.placeholder.set('Search Adapter Name');
        } else if (url.includes('connection')) {
          this.placeholder.set('Search Connection Name');
        } else {
          this.placeholder.set('Search Here');
        }
      });
  }

  searchConfig = computed(() => ({
    serachValue: '',
    placeholder: this.placeholder(),
  }));

  searchParamValue(value: string) {
    this.searchSubject.next(value);
  }
}
