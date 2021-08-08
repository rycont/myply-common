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
    id: Record<string, string>;
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
    generateURL(keys: string[], auth?: Auth): Promise<string | Redirect>;
    findSongId(song: Song, auth?: Auth): Promise<string | Redirect>;
}
