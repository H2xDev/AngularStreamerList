import { Component, Input, isDevMode } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { environment } from 'src/environments/environment';

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
    const parent = (environment.production && 'h2xdev.github.io') || 'localhost'
    return bypassSecurityTrustResourceUrl('//player.twitch.tv?channel=' + name + '&parent=' + parent)
  }
}
