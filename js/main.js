/* Frontend Mentor Challenge coded by Toni Machado */
ventana1();
function submit() {
  ventana2();
  let votacion = document.querySelector('input[name="puntuacion"]:checked').value;
  document.getElementById("puntuacion").innerHTML = `You selected ${votacion} out of 5`;
}
