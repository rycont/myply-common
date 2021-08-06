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

export interface Adaptor {
    getPlaylistContent(url: string): Promise<Song[] | PlyError>;
    generateURL(keys: string[]): Promise<string>;
    findSongId(song: Song): Promise<string>;
}
