export class PlyError {
    channel: string;
    message: string;
    constructor(channel: string, message: string) {
        this.channel = channel;
        this.message = message;
    }
}

export interface Song {
    title: string;
    artist: string;
    channelIds: Record<string, string>;
}

export interface Playlist {
    title: string;
    description: string;
    tracks: Song[];
}

export interface Auth {
    token: string;
    platform: string;
}

export interface Redirect {
    url: string;
    reason: string;
}

export interface Adaptor {
    getPlaylistContent(url: string, auth?: Auth): Promise<Song[] | PlyError | Redirect>;
    generateURL(playlsit: Playlist, auth?: Auth): Promise<string | Redirect>;
    findSongId(song: Song, auth?: Auth): Promise<string | Redirect>;
}
