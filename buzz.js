const BEEP = 9;
const beepsound = 'https://mazda.com/ivi/sounds/beep.mp3';

function main(signal) {
    if (signal === BEEP) {
        sound.play(beepsound);
    }
}

main();
