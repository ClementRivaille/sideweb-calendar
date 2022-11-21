import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { globalStyle } from './style/global';
import 'what-input';
import config from './config';

globalStyle();

console.info(`%cHey there! Looks like you're a curious one.`, 'color: blue');
console.info(
  `%cThere's not a lot of fancy trick behind this site. Everything is done locally. Which mean you can actually try to crack it, and see all entries before they're unlocked! There's a security layer of course, but it's certainly not impossible to bypass.`,
  'font-style: italic'
);
console.info(
  `%cIf you succceeds, I'll be happy to know how you did it! But please, play the game fairly, and don't spoil the content to others. They'll certainly prefer to enjoy the surprise, so no need to be a Grinch. This is only a small hand-crafted website after all, let's keep the secret between us.`,
  'font-style: italic'
);
console.info(
  `%cI'll also make its code open-source eventually. So if you want to know how this was made, keep in tune!`,
  'font-style: italic'
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
