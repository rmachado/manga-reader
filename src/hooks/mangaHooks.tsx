import * as React from 'react';
import { MANGA_SITES, CHANNEL_POPULAR } from '../constants';
import { Manga } from '../interfaces';

const { ipcRenderer } = window;

export function useMangaList() {
  const [mangaList, setMangaList] = React.useState<Manga[]>([]);
  const [siteId, setSiteId] = React.useState(MANGA_SITES[0].id);
  const [search, setSearch] = React.useState('');

  const onSearch = (e: React.ChangeEvent<any>) => {
    setSearch(e.target.value);
  }

  React.useEffect(() => {
    const popularListener = (event: any, mangas: Manga[]) => {
      console.log(mangas);
      setMangaList(mangas);
    }

    ipcRenderer.on(CHANNEL_POPULAR, popularListener);
    ipcRenderer.send(CHANNEL_POPULAR);

    return function cleanUp() {
      ipcRenderer.removeListener(CHANNEL_POPULAR, popularListener);
    }
  }, []);

  return {
    mangaList,
    siteId,
    search,
    onSearch,
    setSiteId,
  }
}
