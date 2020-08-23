import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'streamer-card',
  templateUrl: './streamer-card.component.html',
  styleUrls: ['./streamer-card.component.scss']
})
export class StreamerCardComponent {
  @Input() streamer: Twitch.Streamer;
  @Input() stream: Twitch.Stream.Data;
  @Output() onPlay = new EventEmitter<Twitch.Stream.Data>();

  buttonPlayClick () {
    this.onPlay.emit(this.stream);
  }
}
