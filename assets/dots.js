var canvas = document.getElementById("background");
var dots = [];
var amt = 0.5;
function genDots() {
  dots = [];
  var w = window.innerWidth;
  var h = window.innerHeight;

  canvas.setAttribute("width", w + "px");
  canvas.setAttribute("height", h + "px");

  var ctx = canvas.getContext("2d");

  for (i = 0; i < (h * w) / 5000; i++) {
    dots.push({
      x: Math.random() * w * 2 - w * 0.5,
      y: Math.random() * h * 2 - h * 0.5,
      w: Math.random() * amt
    });
  }
  render(0, 0);
}
genDots();

onmousemove = function (e) {
  render(e.clientX, e.clientY);
};
function render(eX, eY) {
  var ctx = canvas.getContext("2d");
  var offset = {
    x: eX - window.innerWidth / 2,
    y: eY - window.innerHeight / 2
  };

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (i = 0; i < dots.length; i++) {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255 255 255 / ${100 - (1 + amt / dots[i].w) ** 3}%)`;
    ctx.arc(
      dots[i].x + dots[i].w * offset.x,
      dots[i].y + dots[i].w * 2 * offset.y,
      1 + dots[i].w,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
}
window.onresize = genDots;
document.body.addEventListener("resize", genDots());
