import * as React from 'react';

interface HomeScreenProps {
  setTitle: Function;
}

function HomeScreen({ setTitle }: HomeScreenProps) {
  React.useEffect(() => {
    setTitle('My Library');
  })

  return (
    <h1>My Library</h1>
  )
}

export default HomeScreen;
