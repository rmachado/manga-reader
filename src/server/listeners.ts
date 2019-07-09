import { ipcMain } from 'electron';
import { MangaReaderScraper } from './scraping/mangaReader';
import { CHANNEL_POPULAR } from '../constants';

const scraper = new MangaReaderScraper();

ipcMain.on(CHANNEL_POPULAR, async (event: any) => {
  const mangas = await scraper.parsePopular();

  event.reply(CHANNEL_POPULAR, mangas);
});
