import { Component } from '@angular/core';
import { SearchService } from './services/search.service';
import { Observable, of } from 'rxjs';

export type Category = 'people' | 'planets' | 'starships' | 'wrong_category';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	results$: Observable<any[]>;
	searchString = '';
	category: Category | null = null;
	categories: Category[] = ['people', 'planets', 'starships', 'wrong_category'];
	toLoad$: Observable<boolean>;

	constructor(private search: SearchService) {}

	change() {
		console.log(this.searchString, this.category);
	}
	loadMore() {
		console.log(this.searchString, this.category);
	}
}
