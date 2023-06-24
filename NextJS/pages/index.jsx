import { useState } from 'react';
import Link from 'next/link'

function Header({ title }) {
  return <Link href="/posts/first-post">{title ? title : 'Default title'}</Link>;
}

function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. Dave is cool. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}

export default HomePage;

//You are up to Assets, Metadata, and CSS -- Page 1