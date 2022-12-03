function calc_muv() {
    
    /*
    
    vals_array[0] = muv_a
    vals_array[1] = muv_ds
    vals_array[2] = muv_vi
    vals_array[3] = muv_vf
    vals_array[4] = muv_t

    */

    var vals_array = document.getElementsByClassName("result");
    var muv_a = parseFloat(document.getElementById("vlrAceleration").value);
    var muv_ds = parseInt(document.getElementById("vlrDistance").value);
    var muv_vi = parseFloat(document.getElementById("vlrFirst").value);
    var muv_vf = parseFloat(document.getElementById("vlrLast").value);
    var muv_t = parseInt(document.getElementById("vlrTime").value);

    console.log(muv_a);
    console.log(muv_ds);
    console.log(muv_vi);
    console.log(muv_vf);
    console.log(muv_t);

    var unk_values = [];

    for (i = 0;i < vals_array.length;i++) {
        if (vals_array[i].value == "" || isNaN(vals_array[i].value)) {
            unk_values.push(i);
        }
    }

    console.log(unk_values);

    if (unk_values.includes(2) == true && unk_values.includes(3) == true) {
        alert("\nERRO: Precisa-se de pelo menos um desses:\n- Velocidade Inicial\n- Velocidade Final");
        return;
    }

    if (unk_values.includes(0) && unk_values.includes(4) && unk_values.includes(1)) {
        alert("\nERRO: Precisa-se de pelo menos um desses:\n- Aceleração\n- Tempo\n- Distância Percorrida");
        return;
    }

    if (unk_values.includes(2) && unk_values.includes(4) && unk_values.includes(1)) {
        alert("\nERRO: Precisa-se de pelo menos um desses:\n- Velocidade Inicial\n- Tempo\n- Distância Percorrida");
        return;
    }

    if (unk_values.includes(3) && unk_values.includes(4) && unk_values.includes(1)) {
        alert("\nERRO: Precisa-se de pelo menos um desses:\n- Velocidade Final\n- Tempo\n- Distância Percorrida");
        return;
    }

    if (unk_values.includes(2) && unk_values.includes(0) && unk_values.includes(4)) {
        alert("\nERRO: Precisa-se de pelo menos um desses:\n- Velocidade Inicial\n- Aceleração\n- Tempo");
        return;
    }

    if (unk_values.includes(3) && unk_values.includes(0) && unk_values.includes(4)) {
        alert("\nERRO: Precisa-se de pelo menos um desses:\n- Velocidade Final\n- Aceleração\n- Tempo");
        return;
    }

    if (unk_values.includes(2) && unk_values.includes(0) && unk_values.includes(1)) {
        alert("\nERRO: Precisa-se de pelo menos um desses:\n- Velocidade Inicial\n- Aceleração\n- Distância Percorrida");
        return;
    }

    if (unk_values.includes(3) && unk_values.includes(0) && unk_values.includes(1)) {
        alert("\nERRO: Precisa-se de pelo menos um desses:\n- Velocidade Final\n- Aceleração\n- Distância Percorrida");
        return;
    }

    while (unk_values.length > 0) {
        if (unk_values.includes(4) && !unk_values.includes(0) && !unk_values.includes(2) && !unk_values.includes(3)) {
            muv_t = calc_muv_te(muv_vf, muv_vi, muv_a);
            unk_values.splice(unk_values.indexOf(4), 1);
        }

        if (unk_values.includes(2) && !unk_values.includes(0) && !unk_values.includes(3)) {
            if (!unk_values.includes(4)) {
                muv_vi = calc_muv_vi(1, muv_vf, muv_a, muv_t);
                unk_values.splice(unk_values.indexOf(2), 1);
            } else if (!unk_values.includes(1)) {
                muv_vi = calc_muv_vi(2, muv_vf, muv_a, muv_ds);
                unk_values.splice(unk_values.indexOf(2), 1);
                if (muv_vi == -1) {
                    alert("ERRO: Conta não solucionável.");
                    return;
                }
            }
        }

        if (unk_values.includes(3) && !unk_values.includes(0) && !unk_values.includes(2)) {
            if (!unk_values.includes(4)) {
                muv_vf = calc_muv_vf(1, muv_vi, muv_a, muv_t);
                unk_values.splice(unk_values.indexOf(3), 1);
            } else if (!unk_values.includes(1)) {
                muv_vf = calc_muv_vf(2, muv_vi, muv_a, muv_ds);
                unk_values.splice(unk_values.indexOf(3), 1);
            }
        }

        if (unk_values.includes(0)) {
            if (!unk_values.includes(2) && !unk_values.includes(3) && !unk_values.includes(4)) {
                muv_a = calc_muv_a(1, muv_t, 0, muv_vi, muv_vf);
                unk_values.splice(unk_values.indexOf(0), 1);
            } else if (!unk_values.includes(2) && !unk_values.includes(1) && !unk_values.includes(4)) {
                muv_a = calc_muv_a(2, muv_t, muv_ds, muv_vi, 0);
                unk_values.splice(unk_values.indexOf(0), 1);
            } else if (!unk_values.includes(3) && !unk_values.includes(1) && !unk_values.includes(4)) {
                muv_a = calc_muv_a(3, muv_t, muv_ds, 0, muv_vf);
                unk_values.splice(unk_values.indexOf(0), 1);
            } else if (!unk_values.includes(2) && !unk_values.includes(3) && !unk_values.includes(1)) {
                muv_a = calc_muv_a(4, 0, muv_ds, muv_vi, muv_vf);
                unk_values.splice(unk_values.indexOf(0), 1);
            }
        }

        if (unk_values.includes(1)) {
            if (!unk_values.includes(2) && !unk_values.includes(0) && !unk_values.includes(4)) {
                muv_ds = calc_muv_ds(1, muv_t, muv_a, 0, muv_vi);
                unk_values.splice(unk_values.indexOf(1), 1);
            } else if (!unk_values.includes(3) && !unk_values.includes(0) && !unk_values.includes(4)) {
                muv_ds = calc_muv_ds(2, muv_t, muv_a, muv_vf, 0);
                unk_values.splice(unk_values.indexOf(1), 1);
            } else if (!unk_values.includes(2) && !unk_values.includes(3) && !unk_values.includes(4)) {
                muv_ds = calc_muv_ds(3, muv_t, 0, muv_vf, muv_vi);
                unk_values.splice(unk_values.indexOf(1), 1);
            }
        }

    }

    console.log(muv_a);
    console.log(muv_ds);
    console.log(muv_vi);
    console.log(muv_vf);
    console.log(muv_t);

    console.log(unk_values);

    vals_array[0].value = muv_a;
    vals_array[1].value = muv_ds;
    vals_array[2].value = muv_vi;
    vals_array[3].value = muv_vf;
    vals_array[4].value = muv_t;

}

function calc_muv_te (vf, vi, a) {
    var t = (vf - vi) / a;
    return t;
}

function calc_muv_vi (type, vf, a, tds) {
    switch (type) {
        case 1:
            var vi = vf - (a * tds); 
            console.log("vi = " + vi);
            break;

        case 2:
            var vi = (vf - (2 * a * parseFloat(tds)));
            if (vi < 0) {
                alert("Erro: Conta não solucionável.");
                return -1;
            } else {
                vi = vi ** 0.5;
            }
            console.log("vi = " + vi);
            break;
    }

    return vi;
}

function calc_muv_vf (type, vi, a, tds) {
    switch (type) {
        case 1:
            var vf = vi + (a * tds); 
            break;

        case 2:
            var vf = (vi + (2 * a * tds)) ** (0.5);
            break;
    }

    return vf;
}

function calc_muv_ds (type, t, a=0, vf=0, vi=0) {
    switch (type) {
        case 1:
            var ds = (vi * t) + ((1 / 2) * a) * (t ** 2);
            break;

        case 2:
            var ds = (vf * t) - ((1 / 2) * a) * (t ** 2);
            break;

        case 3:
            var ds = ((vi + vf) / 2) * t;
            break;
    }

    return ds;
}

function calc_muv_a (type, t=0, ds=0, vi=0, vf=0) {
    switch (type) {
        case 1:
            var a = (vf - vi) / t;
            break;

        case 2:
            var a = (ds - (vi * t)) / ((0,5 * t) ** 2);
            break;

        case 3:
            var a = (ds + (vf * t)) / ((0,5 * t) ** 2);
            break;

        case 4:
            var a = ((vf ** 2) - (vi ** 2)) / (2 * ds);
            break;
    }

    return a;
}