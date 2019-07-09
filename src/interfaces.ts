import { IpcRenderer } from 'electron';

declare global {
  interface Window {
    ipcRenderer: IpcRenderer;
  }
}

export interface Site {
  name: string;
  url: string;
}

export interface Manga {
  name: string;
  url: string;
  image?: string;
  status?: string;
  numChapters?: number;
  releaseDate?: Date;
}

export interface IMangaScraper {
  parseManga: (url: string) => Promise<Manga>;
  parsePopular: () => Promise<Manga[]>;
  search: (query: string) => Promise<Manga[]>;
}