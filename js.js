const play = document.querySelector(".play");
const audio1 = document.querySelector(".audio1")

play.onclick = function(){
    if(play.className == "play"){
        audio1.play();
        play.src = "재생정지.svg"
        play.classList.add("pause")
    }else{
        audio1.pause();
        play.src = "Icon ionic-ios-play.svg"
        play.classList.remove("pause")
    }
}

const lyrics = document.querySelector('.lyrics')
const lines = lyrics.textContent.trim().split('\n')

lyrics.removeAttribute('style')
lyrics.innerText = ''

let syncData = []

lines.map((line, index) => {
    const [time, text] = line.trim().split('|')
    syncData.push({'start': time.trim(), 'text': text.trim()})
})

audio1.addEventListener('timeupdate', () => {
    syncData.forEach((item) => {
        if (audio1.currentTime >= item.start) lyrics.innerText = item.text
    })
})
