const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function showResults(nomeKata, lista){

    let container = document.getElementById('container-resultados');
    let newtitle = document.createElement("h2");
    newtitle.innerText = nomeKata;
    let newP = document.createElement("p");
    newP.classList.add('container-kata');
    newP.textContent = JSON.stringify(lista);
    
    container.appendChild(newtitle)
    container.appendChild(newP)

}

// kata1();
function kata1() {
    let arr = gotCitiesCSV.split(',')
    showResults("kata1 :", arr)
    return arr
}


// daqui em diante é contigo
function kata2() {
    let arr = bestThing.split(' ')
    showResults('kata2 :', arr)
    return arr
}

function kata3() {
    let arr = gotCitiesCSV.split(',').join(';')
    showResults('kata3 :', arr)
    return arr
}

function kata4() {
    let string = lotrCitiesArray.join(';')
    showResults('kata4 :', string)
    return string
}

function kata5() {
    let arr = lotrCitiesArray.slice(0, 5)
    showResults('kata5 :', arr)
    return arr
}

function kata6() {
    let arr = lotrCitiesArray.slice(-5)
    showResults('kata6 :', arr)
    return arr
}

function kata7() {
    let arr = lotrCitiesArray.slice(2, 5);
    showResults('kata7 :', arr);
    return arr
}

function kata8() {
    let arr = lotrCitiesArray;
    arr.splice(2,1);
    showResults('kata8 :', arr)
    return arr
}

function kata9() {
    let arr = lotrCitiesArray;
    arr.splice((lotrCitiesArray.length)-2, Number.MAX_VALUE)
    showResults('kata9 :', arr)
    return arr
}

function kata10() {
    let arr = lotrCitiesArray;
    arr.splice(2, 0, 'Rohan')
    showResults('kata10 :', arr)
    return arr
}

function kata11() {
    let arr = lotrCitiesArray;
    arr.splice(lotrCitiesArray.length-1, 1, 'Deadest Marshes')
    showResults('kata11 :', arr)
    return arr
}

function kata12() {
    let string = bestThing.slice(0, 14)
    showResults('kata12 :', string)
    return string
}

function kata13() {
    let string = bestThing.slice(-12)
    showResults('kata13 :', string)
    return string
}

function kata14() {
    let string = bestThing.slice(23, 38)
    showResults('kata14 :', string)
    return string
}

function kata15() {
    let string = bestThing.substring(bestThing.length - 12,bestThing.length)
    showResults('kata15 :', string)
    return string
}

function kata16() {
    let string = bestThing.substring(23,38)
    showResults('kata16 :', string)
    return string
}

function kata17() {
    let arr = lotrCitiesArray
    arr.pop()
    showResults('kata17 :', arr)
    return arr
}

function kata18() {
    let arr = lotrCitiesArray
    arr.push('Harad')
    showResults('kata18 :', arr)
    return arr
}

function kata19() {
    let arr = lotrCitiesArray
    arr.shift()
    showResults('kata19 :', arr)
    return arr
}

function kata20() {
    let arr = lotrCitiesArray
    arr.unshift('Mordor')
    showResults('kata20 :', arr)
    return arr
}




kata1()
kata2()
kata3()
kata4()
kata5()
kata6()
kata7()
kata8()
kata9()
kata10()
kata11()
kata12()
kata13()
kata14()
kata15()
kata16()
kata17()
kata18()
kata19()
kata20()