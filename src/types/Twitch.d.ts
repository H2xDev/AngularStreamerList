/**
 * Twitch Datatype
 */
declare namespace Twitch {
  /**
   * Streamer Data
   */
  export interface Streamer {
    /**
     * Streamer's name with save original case
     */
    display_name: string;

    /**
     * Streamer's ID
     */
    _id: string;

    /**
     * Streamer's account name
     */
    name: string;

    /**
     * Account type
     */
    type: string;

    /**
     * Profile description
     */
    bio: string;

    /**
     * Profile create date
     */
    created_at: Date;

    /**
     * Profile last update date
     */
    updated_at: Date;

    /**
     * Streamer's icon
     */
    logo: string;
  }

  export module Stream {
    export interface PreviewImage {
      small: string;
      medium: string;
      large: string;
      template: string;
    }

    export interface Channel {
      mature: boolean;
      status: string;
      broadcaster_language: string;
      broadcaster_software: string;
      display_name: string;
      game: string;
      language: string;
      _id: number;
      name: string;
      created_at: Date;
      updated_at: Date;
      partner: boolean;
      logo: string;
      video_banner: string;
      profile_banner: string;
      profile_banner_background_color: string;
      url: string;
      views: number;
      followers: number;
      broadcaster_type: string;
      description: string;
      private_video: boolean;
      privacy_options_enabled: boolean;
    }

    export interface Data {
      _id: number;
      game: string;
      broadcast_platform: string;
      community_id: string;
      community_ids: any[];
      viewers: number;
      video_height: number;
      average_fps: number;
      delay: number;
      created_at: Date;
      is_playlist: boolean;
      stream_type: string;
      preview: PreviewImage;
      channel: Channel;
    }
  }
}
