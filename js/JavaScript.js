function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
function aleatorio(){
  var num = rand(0,7); alert(num);
  return num
}

function carregar(){
  let imagens = ["BobSombra","GarySombra","MoluscoSombra","PanktonSombra","PatrickSombra","PerolaSombra","SandySombra","SirigueijoSombra"]

  document.querySelector('.Div2').innerHTML = `<img src="img/${imagens[aleatorio()]}.png" height="100px">`
}