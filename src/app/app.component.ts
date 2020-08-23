import { Component, OnInit, SecurityContext } from '@angular/core';
import { AppService } from './app.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'twitch-streamer-list';
  streamerList: any[] = [
    'h2xd',
    'radjon',
    'deadlyfantasy',
    'zermisttv',
    'wayland0',
    'ZIGI_hate',
    'rekvizit8bit',
    'bratishkinoff',
    'jesusavgn'
  ]

  streams: (Twitch.Stream.Data | boolean)[] = []
  currentStream: Twitch.Stream.Data;

  constructor(private appServices: AppService, private sanitizer: DomSanitizer) {}

  ngOnInit () {
    this.loadStreamerList()
  }

  launchStream(stream: Twitch.Stream.Data) {
    this.currentStream = stream;
  }

  /**
   * Private
   */

  private async loadStreamerList() {
    const newList: any[] = await Promise.all(this.streamerList.map(this.loadStreamerData.bind(this)))
    const newStreams = await Promise.all(newList.map((streamer) => {
      return this.getStreamById(streamer._id)
    }))

    newList.sort((a) => {
      const stream = newStreams.find((e: Twitch.Stream.Data) => e?.channel?._id.toString() === a._id.toString());
      return !!stream ? -1 : 1;
    })

    newStreams.sort((stream: Twitch.Stream.Data | boolean) => {
      return !!stream ? -1 : 1;
    })

    this.streamerList = newList;
    this.streams = newStreams
  }

  private loadStreamerData (name: string): Promise<Twitch.Streamer | false> {
    return new Promise(resolve => {
      const service = this.appServices.getStreamer(name).subscribe((e: any) => {
        if (e._total) {
          resolve(e.users[0] as Twitch.Streamer)
          service.unsubscribe()
          return;
        }
        resolve(false)
      })
    })
  }

  private getStreamById (id: number): Promise<Twitch.Stream.Data | boolean> {
    return new Promise(resolve => {
      const service = this.appServices.getStream(id).subscribe((e: any) => {
        if (e.stream) {
          resolve(e.stream)
          service.unsubscribe()
          return;
        }
        resolve(false)
      })
    })
  }
}
