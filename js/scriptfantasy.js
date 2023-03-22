const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext('2d');

// Set up touch event listeners
let touchX, touchY;
canvas.addEventListener('touchstart', (event) => {
  touchX = event.touches[0].clientX;
  touchY = event.touches[0].clientY;
});
canvas.addEventListener('touchmove', (event) => {
  event.preventDefault();
  context.beginPath();
  context.moveTo(touchX, touchY);
  touchX = event.touches[0].clientX;
  touchY = event.touches[0].clientY;
  context.lineTo(touchX, touchY);
  context.stroke();
});

// // Set up mouse event listeners (for testing on desktop)
// let mouseX, mouseY;
// canvas.addEventListener('mousedown', (event) => {
//   mouseX = event.clientX;
//   mouseY = event.clientY;
// });
// canvas.addEventListener('mousemove', (event) => {
//   if (event.buttons === 1) {
//     context.beginPath();
//     context.moveTo(mouseX, mouseY);
//     mouseX = event.clientX;
//     mouseY = event.clientY;
//     context.lineTo(mouseX, mouseY);
//     context.stroke();
//   }
// });






// const canvas = document.getElementById('canvas')
// const context = canvas.getContext('2d')

// const width = canvas.width
// const height = canvas.height
// const colorInput = document.getElementById('color-input')

// // Inicializar el color
// let currentColor = '#000000'

// // Agregar eventos de escucha del mouse para el canvas

// window.addEventListener('load', () => {
//   resize()

//   canvas.addEventListener('mousemove', draw)
//   canvas.addEventListener('mousedown', setPosition)
//   canvas.addEventListener('mouseenter', setPosition)
//   window.addEventListener('resize', resize)
// })


// let touchX, touchY;

// canvas.addEventListener('touchstart', (event) => {
//   touchX = event.touches[0].clientX;
//   touchY = event.touches[0].clientY;
// });

// canvas.addEventListener('touchmove', (event) => {
//   event.preventDefault();
//   context.beginPath();
//   context.moveTo(touchX, touchY);
//   touchX = event.touches[0].clientX;
//   touchY = event.touches[0].clientY;
//   context.lineTo(touchX, touchY);
//   context.stroke();
// });


// // Dibujar en el canvas
// function draw(event) {
//   if (event.buttons !== 1) return // Verificar si se hace clic con el botón izquierdo
//   context.beginPath()
//   context.lineWidth = 5
//   context.lineCap = 'round'
//   context.strokeStyle = colorInput.value

//   context.moveTo(position.x, position.y)
//   setPosition(event)
//   context.lineTo(position.x, position.y)
//   context.stroke()
// }

// function resize() {
//   context.canvas.width = window.innerWidth
//   context.canvas.height = window.innerHeight
// }

// // Establecer la posición actual del lápiz
// function setPosition(event) {
//   const rect = canvas.getBoundingClientRect()
//   position.x = event.clientX - canvas.offsetLeft
//   position.y = event.clientY - canvas.offsetTop
// }

// // Limpiar el canvas
// function clearCanvas() {
//   context.clearRect(0, 0, context.canvas.width, context.canvas.height)
// }

// // Guardar el canvas como imagen
// function saveCanvas() {
//   const link = document.createElement('a')
//   link.download = 'canvas.png'
//   link.href = canvas.toDataURL()
//   link.click()
// }

// // Definir la posición inicial del lápiz
// const position = { x: 0, y: 0 }
