import React from 'react';

import { useHistory } from 'react-router-dom';

export default function AboutPage() {
  const history = useHistory();

  function handleClickLink(url: string) {
    history.push(url);
  }

  return (
    <div>
      about
    </div>
  );
}
