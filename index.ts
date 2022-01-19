export class PlyError {
    channel: string;
    message: string;
    constructor(channel: string, message: string) {
        this.channel = channel;
        this.message = message;
    }
}

export interface Song {
    name: string;
    artist: string;
    channelIds: Record<string, string>;
}

export interface Playlist {
    name: string;
    description?: string;
    tracks: Song[];
    preGenerated: Record<string, string>;
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
    getPlaylistContent(url: string, auth?: Auth): Promise<Playlist | PlyError | Redirect>;
    generateURL(playlist: Playlist, auth?: Auth, userAgent?: string): Promise<string | Redirect>;
    findSongId(song: Song, auth?: Auth): Promise<string | null | Redirect>;
    determinator: string[];
    display: {
        logo: string;
        name: string;
        color: string;
    }
}
