import axios from 'axios';
import cheerio from 'cheerio';
import { IMangaScraper, Manga } from '../../interfaces';

export class MangaReaderScraper implements IMangaScraper {

  async parseManga(slug: string) {
    return Promise.resolve({} as Manga);
  }

  async parsePopular(): Promise<Manga[]> {
    const response = await axios.get('https://www.mangareader.net/popular');
    const $ = cheerio.load(response.data);

    const mangas = $('#mangaresults .mangaresultitem').toArray().map((item) => {
      const manga: Manga = {
        name: $('h3 a', item).text(),
        url: $('h3 a', item).attr('href'),
      };

      const imgStyle = $('.imgsearchresults', item).attr('style');
      
      let match = imgStyle.match(/url\('(.+)'\)/);
      if (match) {
        manga.image = match[1].replace(/-r(\d)\./, '-l$1.');
      }
      
      const details = $('.chapter_count', item).text();
      
      match = details.match(/(\d+).*\((.+)\)/);
      
      if (match) {
        manga.numChapters = parseInt(match[1]);
        manga.status = match[2];
      }

      return manga;
    });

    return mangas;
  }
  
  async search(query: string) {
    return Promise.resolve([]);
  }

}
