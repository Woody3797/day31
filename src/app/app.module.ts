import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PicFrameComponent } from './pic-frame/pic-frame.component';
import { PicCarouselComponent } from './pic-carousel/pic-carousel.component';
import { NumsComponent } from './nums/nums.component';

@NgModule({
  declarations: [
    AppComponent,
    PicFrameComponent,
    PicCarouselComponent,
    NumsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
