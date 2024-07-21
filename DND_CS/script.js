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