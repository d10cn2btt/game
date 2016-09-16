import {Component} from '@angular/core';
import {CellComponent} from './cell';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    sizeTable = new Array(20);
    title = 'app works!';
}
