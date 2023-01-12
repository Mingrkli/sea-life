const cardVideos = document.querySelectorAll('.cards')

for (let i = 0; i < cardVideos.length; i++) {
    let currentCard = cardVideos[i];
    let currentVideo = currentCard.querySelector('.card-back-video')

    currentCard.addEventListener('mouseover', (e) => {
        currentVideo.play();
    })
    
    currentCard.addEventListener('mouseleave', (e) => {
        currentVideo.pause();
    })
}