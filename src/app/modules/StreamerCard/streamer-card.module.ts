import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { StreamerCardComponent } from "./streamer-card.component";
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [StreamerCardComponent],
  exports: [StreamerCardComponent]
})
export class StreamerCardModule {}
