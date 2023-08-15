let luz = ['red', 'yellow', 'green']
let cambiar = document.getElementById('semaforoLuz');

function LuzSemaforo() {
  let color = luz.pop()
  console.log(color)
  if (!luz.length)
    luz = ['red', 'yellow', 'green']
  cambiar.src = "img/"+color+".png"
  return color
}

const intervalID = setInterval(LuzSemaforo, 1000)