const BEEP = 9;
const beepsound = 'https://mazda.co.jp/ivi/sound/beep.mp3';

function main(signal) {
    if (signal === BEEP) {
        sound.play(beepsound);
    }
}

main();