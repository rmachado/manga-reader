import * as React from 'react';

interface ExploreScreenProps {
  setTitle: Function;
}

function ExploreScreen({ setTitle }: ExploreScreenProps) {
  React.useEffect(() => {
    setTitle('Explore Manga');
  })

  return (
    <h1>Explore Manga</h1>
  )
}

export default ExploreScreen;
