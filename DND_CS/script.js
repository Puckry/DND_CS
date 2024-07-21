function getStrModifier(){
    var strMod = document.getElementById("strStat").value;
    document.getElementById("strMod").innerHTML = Math.floor((strMod - 10)/2);
    console.log(strMod);
}
function getDexModifier(){
    var dexMod = document.getElementById("dexStat").value;
    document.getElementById("dexMod").innerHTML = Math.floor((dexMod - 10)/2);
    console.log(dexMod);
}
function getConModifier(){
    var conMod = document.getElementById("conStat").value;
    document.getElementById("conMod").innerHTML = Math.floor((conMod - 10)/2);
    console.log(conMod);
}
function getIntModifier(){
    var intMod = document.getElementById("intStat").value;
    document.getElementById("intMod").innerHTML = Math.floor((intMod - 10)/2);
    console.log(intMod);
}
function getWisModifier(){
    var wisMod = document.getElementById("wisStat").value;
    document.getElementById("wisMod").innerHTML = Math.floor((wisMod - 10)/2);
    console.log(wisMod);
}
function getCharModifier(){
    var charMod = document.getElementById("charStat").value;
    document.getElementById("charMod").innerHTML = Math.floor((charMod - 10)/2);
    console.log(charMod);
}
function getProfBonus(){
    var LVL = document.getElementById("totalLevel").value;
    var profBonus = document.getElementById("profBonus");
    if (LVL >= 1 && LVL <= 4){
        profBonus.innerHTML = "+2";
        return console.log(LVL);
    }
    if (LVL >= 5 && LVL <= 8){
        profBonus.innerHTML = "+3";
        return console.log(LVL);
    }
    if (LVL >= 9 && LVL <= 12){
        profBonus.innerHTML = "+4";
        return console.log(LVL);
    }
    if (LVL >= 13 && LVL <= 16){
        profBonus.innerHTML = "+5";
        return console.log(LVL);
    }
    if (LVL >= 17 && LVL <= 20){
        profBonus.innerHTML = "+6";
        return console.log(LVL);
    }
}

function getTotalLevel(){
    let LVL = document.getElementById("totalLevel");
    let classLVL = document.getElementById("classLevel");
    let subClassLVL = document.getElementById("subClassLevel");

    LVL.value = +classLVL.value + +subClassLVL.value;

    getProfBonus();
    return console.log(classLVL);
}