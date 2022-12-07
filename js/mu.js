function calcular() {
    let velocity = document.getElementById("vlrVel").value;
    let distance = document.getElementById("vlrDistance").value;
    let time = document.getElementById("vlrTime").value;

    if (velocity == "") {
        velocity = distance / time;
    } else if (distance == "") {
        distance = time * velocity;
    } else if (time == "") {
        time = distance / velocity;
    }

    document.getElementById("vlrVel").value = velocity;
    document.getElementById("vlrDistance").value = distance;
    document.getElementById("vlrTime").value = time;
}

function limpar() {
    document.getElementById("vlrVel").value = "";
    document.getElementById("vlrDistance").value = "";
    document.getElementById("vlrTime").value = "";
}