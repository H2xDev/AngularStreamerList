import { NgModule } from '@angular/core'
import { StreamComponent } from './stream.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [ CommonModule ],
  declarations: [
    StreamComponent
  ],
  exports: [StreamComponent]
})
export class StreamModule {}
