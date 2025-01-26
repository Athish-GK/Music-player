alert("SELECT YOUR FAVORITE ARTISTS \n TO PLAY THE SONG🎶");
var ar=["./Music/AR/ar (1).mp3","./Music/AR/ar (2).mp3","./Music/AR/ar (3).mp3","./Music/AR/ar (4).mp3","./Music/AR/ar (5).mp3","./Music/AR/ar (6).mp3","./Music/AR/ar (7).mp3","./Music/AR/ar (8).mp3","./Music/AR/ar (9).mp3","./Music/AR/ar (10).mp3","./Music/AR/ar (11).mp3"];
var u1=["./Music/yuvan/u1 (1).mp3","./Music/yuvan/u1 (2).mp3","./Music/yuvan/u1 (3).mp3","./Music/yuvan/u1 (4).mp3","./Music/yuvan/u1 (5).mp3","./Music/yuvan/u1 (6).mp3","./Music/yuvan/u1 (7).mp3","./Music/yuvan/u1 (8).mp3","./Music/yuvan/u1 (9).mp3","./Music/yuvan/u1 (10).mp3","./Music/yuvan/u1 (11).mp3"];
var ani=["./Music/aniruth/aniruth (1).mp3","./Music/aniruth/aniruth (2).mp3","./Music/aniruth/aniruth (3).mp3","./Music/aniruth/aniruth (4).mp3","./Music/aniruth/aniruth (5).mp3","./Music/aniruth/aniruth (6).mp3","./Music/aniruth/aniruth (7).mp3","./Music/aniruth/aniruth (8).mp3","./Music/aniruth/aniruth (9).mp3","./Music/aniruth/aniruth (10).mp3","./Music/aniruth/aniruth (11).mp3"];
var sana=["./Music/sana/sana (1).mp3","./Music/sana/sana (2).mp3","./Music/sana/sana (3).mp3","./Music/sana/sana (4).mp3","./Music/sana/sana (5).mp3","./Music/sana/sana (6).mp3","./Music/sana/sana (7).mp3","./Music/sana/sana (8).mp3","./Music/sana/sana (9).mp3","./Music/sana/sana (10).mp3","./Music/sana/sana (11).mp3"];
var gv=["./Music/gv/gv (1).mp3","./Music/gv/gv (2).mp3","./Music/gv/gv (3).mp3","./Music/gv/gv (4).mp3","./Music/gv/gv (5).mp3","./Music/gv/gv (6).mp3","./Music/gv/gv (7).mp3","./Music/gv/gv (8).mp3","./Music/gv/gv (9).mp3","./Music/gv/gv (10).mp3","./Music/gv/gv (11).mp3"];
var mames=["./Music/mames/mames (1).mp3","./Music/mames/mames (2).mp3","./Music/mames/mames (3).mp3","./Music/mames/mames (4).mp3","./Music/mames/mames (5).mp3","./Music/mames/mames (6).mp3","./Music/mames/mames (7).mp3","./Music/mames/mames (8).mp3","./Music/mames/mames (9).mp3","./Music/mames/mames (10).mp3","./Music/mames/mames (11).mp3"];
var hiphop=["./Music/hiphop/hiphop (1).mp3","./Music/hiphop/hiphop (2).mp3","./Music/hiphop/hiphop (3).mp3","./Music/hiphop/hiphop (4).mp3","./Music/hiphop/hiphop (5).mp3","./Music/hiphop/hiphop (6).mp3","./Music/hiphop/hiphop (7).mp3","./Music/hiphop/hiphop (8).mp3","./Music/hiphop/hiphop (9).mp3","./Music/hiphop/hiphop (10).mp3","./Music/hiphop/hiphop (11).mp3"];
var currentAudio = null;
document.querySelector(".ar").addEventListener("click",function (){
    if (currentAudio !== null) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        for(i=0;i<7;i++){
          document.querySelectorAll("button")[i].style.border="none";
        }
      }
      this.style.border="3px solid white";
      var a = Math.floor(Math.random() * ar.length);
      var song = ar[a];
      currentAudio = new Audio(song);
      currentAudio.play();
});
document.querySelector(".u1").addEventListener("click",function (){
    if (currentAudio !== null) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        for(i=0;i<7;i++){
          document.querySelectorAll("button")[i].style.border="none";
        }
      }
      this.style.border="3px solid white";
      var a = Math.floor(Math.random() * u1.length);
      var song = u1[a];
      currentAudio = new Audio(song);
      currentAudio.play();
});
document.querySelector(".ani").addEventListener("click",function (){
    if (currentAudio !== null) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        for(i=0;i<7;i++){
          document.querySelectorAll("button")[i].style.border="none";
        }
      }
      this.style.border="3px solid white";
      var a = Math.floor(Math.random() * ani.length);
      var song = ani[a];
      currentAudio = new Audio(song);
      currentAudio.play();
});
document.querySelector(".sana").addEventListener("click",function (){
    if (currentAudio !== null) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        for(i=0;i<7;i++){
          document.querySelectorAll("button")[i].style.border="none";
        }
      }
      this.style.border="3px solid white";
      var a = Math.floor(Math.random() * sana.length);
      var song = sana[a];
      currentAudio = new Audio(song);
      currentAudio.play();
});
document.querySelector(".gv").addEventListener("click",function (){
    if (currentAudio !== null) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        for(i=0;i<7;i++){
          document.querySelectorAll("button")[i].style.border="none";
        }
      }
      this.style.border="3px solid white";
      var a = Math.floor(Math.random() * gv.length);
      var song = gv[a];
      currentAudio = new Audio(song);
      currentAudio.play();
});
document.querySelector(".mames").addEventListener("click",function (){
    if (currentAudio !== null) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        for(i=0;i<7;i++){
          document.querySelectorAll("button")[i].style.border="none";
        }
      }
      this.style.border="3px solid white";
      var a = Math.floor(Math.random() * mames.length);
      var song = mames[a];
      currentAudio = new Audio(song);
      currentAudio.play();
});
document.querySelector(".hiphop").addEventListener("click",function (){
    if (currentAudio !== null) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        for(i=0;i<7;i++){
          document.querySelectorAll("button")[i].style.border="none";
        }
      }
      this.style.border="3px solid white";
      var a = Math.floor(Math.random() * hiphop.length);
      var song = hiphop[a];
      currentAudio = new Audio(song);
      currentAudio.play();
});
