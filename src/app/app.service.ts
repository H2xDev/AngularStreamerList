import { HttpClient }  from '@angular/common/http'
import { Injectable } from '@angular/core';
import { ExtendHttpClient, HttpClientRequestMethods } from '../assets/utils/ExtendHttpClient';
@Injectable()
export class AppService {
  private http: HttpClientRequestMethods = ExtendHttpClient(this._http,  {
    baseHeaders: {
      // Default headers for all requests
      'Client-Id': '1b10wjmbcfujfjpmyvoigzv9vpjkyc',
      'Accept': 'application/vnd.twitchtv.v5+json'
    },
    baseParams: {
      // Default params for all requests
    },
    baseUrl: 'https://api.twitch.tv/kraken/'
  })

  constructor (private _http: HttpClient) {}

  getStream (id: number) {
    return this.http.get('streams/' + id)
  }

  getStreamer (streamerName: string) {
    return this.http.get('users', {
      params: {
        login: streamerName
      }
    })
  }
}
