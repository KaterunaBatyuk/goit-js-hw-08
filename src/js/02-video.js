import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);

player.on('timeupdate', throttle(getCurrentTime, 1000));
function getCurrentTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
if (localStorage.getItem('videoplayer-current-time')) {
  let currentSec = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(currentSec);
}
