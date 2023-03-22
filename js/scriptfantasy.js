const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const width = canvas.width
const height = canvas.height
const colorInput = document.getElementById('color-input')

// Inicializar el color
let currentColor = '#000000'

// Agregar eventos de escucha del mouse para el canvas

window.addEventListener('load', () => {
  resize()

  canvas.addEventListener('mousemove', draw)
  canvas.addEventListener('mousedown', setPosition)
  canvas.addEventListener('mouseenter', setPosition)
  window.addEventListener('resize', resize)
})

// Dibujar en el canvas
function draw(event) {
  if (event.buttons !== 1) return // Verificar si se hace clic con el botón izquierdo
  context.beginPath()
  context.lineWidth = 5
  context.lineCap = 'round'
  context.strokeStyle = colorInput.value

  context.moveTo(position.x, position.y)
  setPosition(event)
  context.lineTo(position.x, position.y)
  context.stroke()
}

function resize() {
  context.canvas.width = window.innerWidth
  context.canvas.height = window.innerHeight
}

// Establecer la posición actual del lápiz
function setPosition(event) {
  const rect = canvas.getBoundingClientRect()
  position.x = event.clientX - canvas.offsetLeft
  position.y = event.clientY - canvas.offsetTop
}

// Limpiar el canvas
function clearCanvas() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height)
}

// Guardar el canvas como imagen
function saveCanvas() {
  const link = document.createElement('a')
  link.download = 'canvas.png'
  link.href = canvas.toDataURL()
  link.click()
}

// Definir la posición inicial del lápiz
const position = { x: 0, y: 0 }
