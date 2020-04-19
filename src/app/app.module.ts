import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsCardComponent } from './basecomponents/news-card/news-card.component';
import { NewsServiceService } from './services/news-service.service';
import { NewsNavbarComponent } from './basecomponents/news-navbar/news-navbar.component'
import { CustomInterceptorService } from './services/custom-interceptor.service';
import { NewscardDesignDirective } from './directives/newscard-design.directive';
import { NewscontentShortenPipe } from './pipes/newscontent-shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewsCardComponent,
    NewsNavbarComponent,
    NewscardDesignDirective,
    NewscontentShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    NewsServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
