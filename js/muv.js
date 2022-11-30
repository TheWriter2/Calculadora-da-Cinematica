function calcular() {
  var aceleration = document.getElementById("vlrAceleration").value;
  var distance = document.getElementById("vlrDistance").value;
  var time = document.getElementById("vlrTime").value;
  var velFirst = document.getElementById("vlrFirst").value;
  var velLast = document.getElementById("vlrLast").value;

  if (isNaN(aceleration)||isNaN(distance)||isNaN(time)||isNaN(velFirst)||isNaN(velLast)) {
    alert("Valores inválidos, tente usar números!")    
  }
  
  /*ESTADO = DEU CERTO */
  else if (aceleration == "" && distance == "") {
    aceleration = (velLast - velFirst) / time;
    distance = (velFirst + velLast) / 2*time;
  }
  
  /*ESTADO = NÃO DEU CERTO */
  else if (aceleration == "" && velLast == "") {
    aceleration = ((distance) - (velFirst * time)) / (0.5 * time**2);
    velLast = velFirst + (aceleration * time);
  }
  
  /*ESTADO = NÃO DEU CERTO */
  else if (aceleration == "" && velFirst == "") {
    aceleration = ((distance) + (velLast * time)) / (0.5 * time**2);
  }
  
  /*ESTADO = DEU CERTO */
  else if (aceleration == "" && time == "") {
    aceleration = (velLast**2 - velFirst**2) / (2 * distance);
    time = (velLast - velFirst)/aceleration;
  }

  /*ESTADO = DEU CERTO*/
  if(distance == "" && velFirst ==""){
    distance = (velLast * time) - (0.5 * aceleration * time**2);
    velFirst = (velLast) - (aceleration*time);
  }

  /*ESTADO = DEU CERTO A DISTÂNCIA, PORÉM A SOMA DO VEL-LAST NÃO*/
  else if (distance == "" && velLast =="") {
    distance = (velFirst*time)+(0.5*aceleration*time**2);
    velLast = (velFirst) + (aceleration*time);
  }

  /*ESTADO = NÃO DEU CERTO*/
  else if (velFirst == "" && time == "") {
    velFirst = (velLast - 2 * aceleration*distance)**0.5;
  }

  /*ESTADO = DEU CERTO*/
  else if(velLast == "" && time == ""){
    velLast = (velFirst + 2 * aceleration * distance)**0.5;
    time = (velLast-velFirst)/aceleration;
  } 


  /*DEU CERTO */
  else if(time == "" && distance == ""){
    time = (velLast-velFirst)/aceleration;
    distance = (velFirst + velLast) / 2*time;
  }

  document.getElementById("vlrAceleration").value = aceleration;
  document.getElementById("vlrDistance").value = distance;
  document.getElementById("vlrTime").value = time;
  document.getElementById("vlrFirst").value = velFirst;
  document.getElementById("vlrLast").value = velLast;
}

function limpar() {
  document.getElementById("vlrAceleration").value = "";
  document.getElementById("vlrDistance").value = "";
  document.getElementById("vlrTime").value = "";
  document.getElementById("vlrFirst").value = "";
  document.getElementById("vlrLast").value = "";
}
