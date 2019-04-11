function main() {
  console.log("En main()....")

  //-- Acceso al objeto con la imagen
  var img = document.getElementById('imagesrc')

  //-- Acceso al objeto con el canvas
  var canvas = document.getElementById('display');

  //-- Acceso al deslizador
  deslizador = document.getElementById('deslizador')
  deslizador1 = document.getElementById('verde')
  deslizador2 = document.getElementById('azul')

  //-- Valor del deslizador
  range_value = document.getElementById('range_value')
  range_value1 = document.getElementById('range_value1')
  range_value2 = document.getElementById('range_value2')

  gray = document.querySelector('input[name="gray"]:checked');

  /* gray.onclick = () => {
    console.log(gray)
  } */

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

  //-- Funcion de retrollamada del deslizador
  deslizador.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value.innerHTML = deslizador.value

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    var data = imgData.data

    //-- Obtener el umbral de rojo del desliador
    umbral = deslizador.value

    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
      if (data[i] > umbral)
        data[i] = umbral;
    }

    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }

  deslizador1.oninput = () => {
    range_value1.innerHTML = verde.value
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    var data = imgData.data

    //-- Obtener el umbral de rojo del desliador
    umbralv = deslizador1.value

    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
      if (data[i] > umbralv)
        data[i+1] = umbralv;
    }
  }


}
