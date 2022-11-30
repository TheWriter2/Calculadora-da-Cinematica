function calcular() {
  let velocity = document.getElementById("vlrVel").value;
  let distance = document.getElementById("vlrDistance").value;
  let time = document.getElementById("vlrTime").value;

  if (isNaN(velocity) || isNaN(distance) || isNaN(time)) {
    alert("Valor inválido, tente usar números!");
  }
  else if (velocity == "") {
    velocity = distance / time;
  } else if (distance == "") {
    distance = time * velocity;
  } else if (time == "") {
    time = distance / velocity;
  }

  document.getElementById("vlrVel").value = velocity + "m/s";
  document.getElementById("vlrDistance").value = distance + "m";
  document.getElementById("vlrTime").value = time + "s";
}

function limpar() {
  document.getElementById("vlrVel").value = "";
  document.getElementById("vlrDistance").value = "";
  document.getElementById("vlrTime").value = "";
};
