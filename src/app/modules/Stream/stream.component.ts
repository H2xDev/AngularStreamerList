import { Component, Input, isDevMode } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
@Component({
  selector: 'stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent {
  @Input() stream: Twitch.Stream.Data;
  constructor (private sanitizer: DomSanitizer) {}

  getStreamLink (): SafeResourceUrl {
    const { bypassSecurityTrustResourceUrl } = this.sanitizer;
    const { name } = this.stream.channel;
    const parent = isDevMode() ? 'localhost' : 'h2xdev.github.io'
    return bypassSecurityTrustResourceUrl('//player.twitch.tv?channel=' + name + '&parent=' + parent)
  }
}
