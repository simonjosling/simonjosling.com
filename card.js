const video = document.getElementById('videomessage');

document.getElementById('card').addEventListener('click',function(){
    this.classList.toggle('open');
    if (video.paused) {
        video.play();
      }
});