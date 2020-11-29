import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{NgxPaginationModule} from 'ngx-pagination'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import{FormsModule,NgForm} from '@angular/forms'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CustompipePipe } from './custompipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CustompipePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
