const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function mostraNaPagina(nomeKata, lista){

    let title = document.createElement("h2");
    let newDiv = document.createElement("div");
    let container = document.getElementById('container-resultados');
    
    title.textContent = nomeKata;
    newDiv.classList.add('container-kata');
    newDiv.textContent = JSON.stringify(lista);
    container.appendChild(title)
    container.appendChild(newDiv)

}

// kata1();
function kata1() {
    let arr = gotCitiesCSV.split(',')
    mostraNaPagina('kata1 :', arr)
    return arr
}

// daqui em diante é contigo
function kata2() {
    let arr = bestThing.split(' ')
    mostraNaPagina('kata2 :', arr)
    return arr
}

function kata3() {
    let arr = gotCitiesCSV.split(',').join(';')
    mostraNaPagina('kata3 :', arr)
    return arr
}

function kata4() {
    let string = lotrCitiesArray.join(';')
    mostraNaPagina('kata4 :', string)
    return string
}

function kata5() {
    let arr = lotrCitiesArray.slice(0, 5)
    mostraNaPagina('kata5 :', arr)
    return arr
}

function kata6() {
    let arr = lotrCitiesArray.slice(-5)
    mostraNaPagina('kata6 :', arr)
    return arr
}

function kata7() {
    let arr = lotrCitiesArray.slice(2, 5);
    mostraNaPagina('kata7 :', arr);
    return arr
}

function kata8() {
    let arr = lotrCitiesArray;
    arr.splice(2,1);
    mostraNaPagina('kata8 :', arr)
    return arr
}

function kata9() {
    let arr = lotrCitiesArray;
    arr.splice((lotrCitiesArray.length)-2, Number.MAX_VALUE)
    mostraNaPagina('kata9 :', arr)
    return arr
}

function kata10() {
    let arr = lotrCitiesArray;
    arr.splice(2, 0, 'Rohan')
    mostraNaPagina('kata10 :', arr)
    return arr
}

function kata11() {
    let arr = lotrCitiesArray;
    arr.splice(lotrCitiesArray.length-1, 1, 'Deadest Marshes')
    mostraNaPagina('kata11 :', arr)
    return arr
}

function kata12() {
    let string = bestThing.slice(0, 14)
    mostraNaPagina('kata12 :', string)
    return string
}

function kata13() {
    let string = bestThing.slice(-12)
    mostraNaPagina('kata13 :', string)
    return string
}

function kata14() {
    let string = bestThing.slice(23, 38)
    mostraNaPagina('kata14 :', string)
    return string
}

function kata15() {
    let string = bestThing.substring(bestThing.length - 12,bestThing.length)
    mostraNaPagina('kata15 :', string)
    return string
}

function kata16() {
    let string = bestThing.substring(23,38)
    mostraNaPagina('kata16 :', string)
    return string
}

function kata17() {
    let arr = lotrCitiesArray
    arr.pop()
    mostraNaPagina('kata17 :', arr)
    return arr
}

function kata18() {
    let arr = lotrCitiesArray
    arr.push('Harad')
    mostraNaPagina('kata18 :', arr)
    return arr
}

function kata19() {
    let arr = lotrCitiesArray
    arr.shift()
    mostraNaPagina('kata19 :', arr)
    return arr
}

function kata20() {
    let arr = lotrCitiesArray
    arr.unshift('Mordor')
    mostraNaPagina('kata20 :', arr)
    return arr
}


