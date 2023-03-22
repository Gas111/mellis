let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let img = document.getElementById("img");
let mouse_down = false;
let color = "black";
let brush_size = 10;
let sidebar = document.getElementById("sidebar");
let palette = document.getElementById("palette");

canvas.width = window.innerWidth - sidebar.offsetWidth;
canvas.height = window.innerHeight;

ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

function set_color(new_color) {
  color = new_color;
}

function set_size(new_size) {
  brush_size = new_size;
}

function get_mouse_position(canvas, evt) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

canvas.addEventListener("mousedown", function(evt) {
  mouse_down = true;
  let mouse_pos = get_mouse_position(canvas, evt);
  let block_size = 50;
  let x = Math.floor(mouse_pos.x / block_size) * block_size;
  let y = Math.floor(mouse_pos.y / block_size) * block_size;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, block_size, block_size);
});

canvas.addEventListener("mousemove", function(evt) {
  if (mouse_down) {
    let mouse_pos = get_mouse_position(canvas, evt);
    let block_size = 50;
    let x = Math.floor(mouse_pos.x / block_size) * block_size;
    let y = Math.floor(mouse_pos.y / block_size) * block_size;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, block_size, block_size);
  }
});

canvas.addEventListener("mouseup", function(evt) {
  mouse_down = false;
});

for (let i = 0; i < palette.children.length; i++) {
  let color = palette.children[i].getAttribute("data-color");
  palette.children[i].style.backgroundColor = color;
  palette.children[i].addEventListener("click", function() {
    set_color(color);
  });
}

for (let i = 0; i < sidebar.children.length; i++) {
  let element = sidebar.children[i];
  if (element.classList.contains("size")) {
    let size = parseInt(element.getAttribute("data-size"));
    element.addEventListener("click", function() {
      set_size(size);
    });
  }
}