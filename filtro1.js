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

  var gray = document.getElementById("gray");

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Obtener el contexto del canvas para
  //-- trabajar con el
  var ctx = canvas.getContext("2d");

  function rgb(data) {
    //-- Obtener el umbral de rojo del desliador
    red_umbral = r_slider.value;
    green_umbral = g_slider.value;
    blue_umbral = b_slider.value;

    document.getElementById("range_valuer").innerHTML = red_umbral;
    document.getElementById("range_valueg").innerHTML = green_umbral;
    document.getElementById("range_valueb").innerHTML = blue_umbral;

    for (var i = 0; i < data.length; i+=4) {
      if (data[i] >= red_umbral) {
        data[i] = red_umbral;
      }

      if (data[i+1] >= green_umbral) {
        data[i+1] = green_umbral;
      }

      if (data[i+2] >= blue_umbral) {
        data[i+2] = blue_umbral;
      }
    }
    return data;
  }

  function togray(data) {
    for (var i = 0; i < data.length; i+=4) {
      red = data[i];
      green = data[i+1];
      blue = data[i+2];

      brillo = (3 * red + 4 * green + blue)/8

      data[i] = brillo;
      data[i+1] = brillo;
      data[i+2] = brillo;
    }
    return data;
  }

  function change() {
    ctx.drawImage(img, 0, 0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data;
    data = rgb(data);
    ctx.putImageData(imgData, 0, 0);
  }

  r_slider.oninput = () => {
    change()
  }

  g_slider.oninput = () => {
    change()
  }

  b_slider.oninput = () => {
    change()
  }

  gray.onclick = () => {
    ctx.drawImage(img, 0,0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
    data = togray(data)
    ctx.putImageData(imgData, 0, 0)
  }
}
