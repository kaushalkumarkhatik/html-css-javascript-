const container = document.getElementById('container');
const text = document.getElementById('text');

const totaltime = 19000;
const breath = 4000;
const hold = 7000;

function breath_anim() {
  text.innerText = "Breathe In!";
  container.className = "container grow";
  setTimeout(() => {
    text.innerText = 'Hold'
    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";
    }, hold);
  }, breath);
}
setInterval(breath_anim, totaltime);
breath_anim();