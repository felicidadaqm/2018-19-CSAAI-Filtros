function main() {
  console.log("En main()....")

  //-- Acceso al objeto con la imagen
  var img = document.getElementById('imagesrc')

  //-- Acceso al objeto con el canvas
  var canvas = document.getElementById('display');

  //-- Acceso al deslizador
  r_slider = document.getElementById('red')
  g_slider = document.getElementById('green')
  b_slider = document.getElementById('blue')

  //-- Valor del deslizador
  range_valuer = document.getElementById('range_valuer')
  range_valueg = document.getElementById('range_valueg')
  range_valueb = document.getElementById('range_valueb')

  gray = document.querySelector('input[name="gray"]:checked');

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Obtener el contexto del canvas para
  //-- trabajar con el
  var ctx = canvas.getContext("2d");

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  var data = imgData.data

  function rgb() {
    //-- Obtener el umbral de rojo del desliador
    red_umbral = r_slider.value;
    green_umbral = g_slider.value;
    blue_umbral = b_slider.value;

    document.getElementById("range_valuer").innerHTML = red_umbral;
    document.getElementById("range_valueg").innerHTML = green_umbral;
    document.getElementById("range_valueb").innerHTML = blue_umbral;

    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
      if (data[i] > red_umbral) {
        data[i] = red_umbral;
      }

      if (data[i+1] > green_umbral) {
        data[i+1] = green_umbral;
      }

      if (data[i+2] > blue_umbral) {
        data[i+2] = blue_umbral;
      }
    }
  }

  r_slider.oninput = () => {
    rgb()
    ctx.putImageData(imgData, 0, 0);
  }

  g_slider.oninput = () => {
    rgb()
    ctx.putImageData(imgData, 0, 0);
  }

  b_slider.oninput = () => {
    rgb()
    ctx.putImageData(imgData, 0, 0);
  }
}
