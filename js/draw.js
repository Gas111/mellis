function onOpenCvReady() {
  // Cargar la imagen
  var img = cv.imread('../img/drawimages/images.png');

  // Obtener las dimensiones de la imagen
  var width = img.cols;
  var height = img.rows;

  // Crear un canvas y ajustar su tamaño
  var canvas = document.getElementById('canvas');
  canvas.width = width;
  canvas.height = height;

  // Obtener el contexto de dibujo del canvas
  var ctx = canvas.getContext('2d');

  // Obtener el elemento color-picker
  var colorPicker = document.getElementById('color-picker');

  // Convertir la imagen a escala de grises
  cv.cvtColor(img, img, cv.COLOR_RGBA2GRAY);

  // Array para guardar las coordenadas de los píxeles blancos seleccionados
  var selectedPixels = [];

  // Función para pintar los píxeles seleccionados en el color seleccionado por el usuario
  function drawSelectedPixels() {
    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Iterar sobre los píxeles seleccionados y pintarlos en el color seleccionado por el usuario
    for (var i = 0; i < selectedPixels.length; i++) {
      var x = selectedPixels[i][0];
      var y = selectedPixels[i][1];
      var color = colorPicker.value;
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 1, 1);
    }

    // Mostrar el resultado actualizado en el canvas
    cv.imshow(canvas, img);
  }

  // Función para seleccionar un pixel
  function selectPixel(x, y) {
    // Obtener el valor del píxel en escala de grises
    var grayValue = img.ucharPtr(y, x)[0];

    // Si el valor es mayor a 0 (es blanco), agregar las coordenadas al array de píxeles seleccionados
    if (grayValue > 0) {
      selectedPixels.push([x, y]);
      drawSelectedPixels();
    }
  }

  // Evento mousedown para seleccionar píxeles con el mouse
  canvas.addEventListener('mousedown', function(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    selectPixel(x, y);
  });

  // Evento change para actualizar los píxeles seleccionados cuando se cambia el color seleccionado por el usuario
  colorPicker.addEventListener('change', function() {
    drawSelectedPixels();
  });

  // Mostrar la imagen original en el canvas
  cv.imshow(canvas, img);
}