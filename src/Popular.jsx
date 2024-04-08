import React, { useState, useEffect } from 'react';

export default function Popular({ onChildValue }) {
  function ListItem({ value }) {
    const handleClick = () => {
      onChildValue(value);
    };

    return <li onClick={handleClick}>{value}</li>;
  }

  const sf = JSON.parse(localStorage.getItem('favorited-categories'));
  
  const [pop, setPop] = useState(false);

  useEffect(() => {
    if (sf && sf.length > 0) {
      setPop(true);
    } else {
      setPop(false);
    }
  }, [sf]);

  return (
    <div className='popular'>
      <h1>{pop ? 'Favourite Topics' : 'Popular Topics'}</h1>
      <div className='list'>
        <ul className='list-items'>
          {sf && sf.length > 0 && sf.map((item, index) => (
            <ListItem key={index} value={item} />
          ))}

          <ListItem value='ENGINEERING DAYS' />
          <ListItem value='BANGALORE STORIES' />
          <ListItem value='GOA DIARIES' />
          <ListItem value='NITK STUFFS' />
          <ListItem value='IIM THINGS' />
          <ListItem value='IIMB FACTS' />
          <ListItem value='SHAYARI' />
          <ListItem value='VIKAS MEENA' />
        </ul>
      </div>
    </div>
  );
}
