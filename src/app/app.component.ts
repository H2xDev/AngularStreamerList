import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AppService } from './app.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'twitch-streamer-list';
  streamers: string[] = JSON.parse(localStorage.getItem('streamer-list')) || [
    'h2xd',
    'radjon',
    'deadlystile',
    'zermisttv',
    'wayland0',
    'ZIGI_hate',
    'rekvizit8bit',
    'bratishkinoff',
    'jesusavgn'
  ]
  streamerList: (Twitch.Streamer | false)[] = []
  streams: (Twitch.Stream.Data | false)[] = []
  currentStream: Twitch.Stream.Data;

  constructor(private appServices: AppService, private sanitizer: DomSanitizer) {}

  // ngular lifecycle hooks
  ngOnInit () {
    this.loadStreamerList()
  }

  // Native Methods

  /**
   * Open stream
   * @param { Twitch.Stream.Data } stream - Stream data to watch
   */
  openStream(stream: Twitch.Stream.Data): void {
    this.currentStream = stream;
  }

  /**
   * Remove streamer from the list
   * @param { number } index - stream index in array
   */
  removeStreamer(index: number): void {
    this.streamerList.splice(index, 1);
    this.streams.splice(index, 1);
    this.saveStreamerList();
  }

  /**
   * Adds streamer to list
   */

  async addStreamer (streamerName?: string): Promise<void> {
    if (!streamerName) {
      streamerName = prompt('Enter the streamer name', '');
    }
    const streamer: Twitch.Streamer | false = await this.loadStreamerData(streamerName);
    if (streamer) {
      const i = this.streamerList.push(streamer);
      const stream: Twitch.Stream.Data | false = await this.getStreamById(parseInt(streamer._id));

      this.streams.splice(i, 0, stream);
      this.saveStreamerList();
    }
  }


  /**
   * Private
   */

  private saveStreamerList(): void {
    localStorage.setItem('streamer-list', JSON.stringify(this.streamerList.map((e: Twitch.Streamer) => e.name)))
  }

  private async loadStreamerList() {
    this.streamerList = await Promise.all(this.streamers.map((streamerName: string) => {
      return this.loadStreamerData(streamerName)
    }))
    this.streams = await Promise.all(this.streamerList.map((streamer: Twitch.Streamer) => {
      return this.getStreamById(parseInt(streamer._id))
    }))

    this.streamerList.sort((a: Twitch.Streamer) => {
      const stream = this.streams.find((e: Twitch.Stream.Data) => e?.channel?._id.toString() === a._id.toString());
      return !!stream ? -1 : 1;
    })

    this.streams.sort((stream: Twitch.Stream.Data | false) => {
      return !!stream ? -1 : 1;
    })
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

  private getStreamById (id: number): Promise<Twitch.Stream.Data | false> {
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
