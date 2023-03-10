// The following changes to img if the video isn't supported
const videoSource = document.querySelector('.card-back-video source').src;
const videos = document.querySelectorAll('.card-back-video');
const videoAlt = document.querySelectorAll('.video-alt');

fetch(videoSource).then((response) => {
    if (!response.ok) {
        for (let i = 0; i < videoAlt.length; i++) {
            videos[i].classList.add('hidden');
            videoAlt[i].classList.remove('hidden');
        }
    }
    else {
        const cardVideos = document.querySelectorAll('.cards');

        // Check to see if andriod phones
        if (navigator.userAgent.match(/Android/i)) {
            // Video will autoplay for android since it won't show the video without playing it first
            for (let i = 0; i < cardVideos.length; i++) {
                let currentCard = cardVideos[i];
                let currentVideo = currentCard.querySelector('.card-back-video')

                currentVideo.play();
            }
        }
        else {
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
    
            // Video cards hover play/pause
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
        }

    }
})