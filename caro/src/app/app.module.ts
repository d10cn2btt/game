/**
 * Created by d10cn on 16-Sep-16.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CellComponent} from './cell';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        CellComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}
