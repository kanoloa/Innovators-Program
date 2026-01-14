import {sound} from './sound.js';

const BEEP = 9;
const SOUND_BEEP = 'https://mazda.com/ivi/sounds/beep.mp3';

function main(signal) {
    if (signal === BEEP) {
        sound.play(SOUND_BEEP);
    }
}

main();
