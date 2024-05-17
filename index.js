function rngInteger(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function getName(){
    let roll = rngInteger(1,7);
    if (roll == 1){
        return "Carlos";
    } else if (roll == 2){
        return "John";
    } else if (roll == 3){
        return "Matheus";
    } else if (roll == 4){
        return "Ariel";
    } else if (roll == 5){
        return "Vinicius";
    } else {
        return "Fulano";
    }
}

function getSaldoVitorias(vic,der){
    return (vic - der);
}

function getNivel(sldVic){
    if ( sldVic <= 10){
        return "Ferro";
    } else if (sldVic > 10 && sldVic <= 20){
        return "Bronze";
    } else if (sldVic > 20 && sldVic <= 50){
        return "Prata";
    } else if (sldVic > 50 && sldVic <= 80){
        return "Ouro";
    } else if (sldVic > 80 && sldVic <= 90){
        return "Diamante";
    } else if (sldVic > 90 && sldVic <= 100){
        return "Lendário";
    } else {
        return "Imortal";
    }
}

function outputNivel(pName, sldVic, lvl){
    console.log("O Herói "+ pName + " tem um saldo de "+ sldVic+ " vitorias e está no nível " + lvl + "!");
}

var playerName = getName();

var vitorias = rngInteger(0, 150);
var derrotas = rngInteger(0, 120);

var saldoVitorias = getSaldoVitorias(vitorias, derrotas);

var nivel = getNivel(saldoVitorias);

outputNivel(playerName, saldoVitorias, nivel);