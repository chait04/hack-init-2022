const btn = document.querySelector(`button`)

let sound = new Audio(`./audio_brickhit.wav`)

btn.addEventListener(`click`, () => {
    console.log(`clicked`);
    sound.play()

})