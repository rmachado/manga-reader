
export interface Site {
  name: string;
  url: string;
}

export interface Manga {
  name: string;
  status: string;
  numChapters: number;
  releaseDate?: Date;
}
