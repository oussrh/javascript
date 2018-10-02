
function addAndRemoveClass(){
    let bodySelector = document.getElementsByTagName('body')[0];
    bodySelector.className  = "bg-olive";
    console.log(bodySelector.className);   
}



function selectFirstP(){
    let firstP = document.getElementsByTagName('p')[0];
    console.log(firstP);
}

function FirstPAddAndRemmoveClass(){
    let firstPClass = document.getElementsByTagName('p')[0];
    firstPClass.className = "aqua";
    console.log(firstPClass.className);
}


function selectAllClass(){
    let allClass = document.getElementsByClassName('bg-silver');
    allClass.className += " aqua";
    console.log(allClass.className);

    allClass.className = "aqua";
    console.log(allClass.className);
    
}

function selectAllBlockquote(){
   let allBlockquote = document.querySelectorAll('blockquote');

    for(i=0; i<allBlockquote.lenght; i++)
        {
            allBlockquote[i].classList.add('bg-white');
        }


}

addAndRemoveClass();
selectFirstP();
FirstPAddAndRemmoveClass();
selectAllClass();
selectAllBlockquote();

// excercices 2 

document.querySelector('#my-table').classList.add('bg-purple');

let allP = document.querySelectorAll('.container p');

    for(i=0; i<allP.lenght; i++)
        {
            allP[i].classList.add('shadow');
        }

// excercices 3

let allPre = document.querySelectorAll('pre');

    for(i=0; i < allPre.length; i++)
        {
            allPre[i].style.color = "pink";
            allPre[i].style.backgroundColor = "black";
            allPre[i].style.borderTop = "1px solid red";
            allPre[i].style.borderBottom = "1px solid red";
        }

document.querySelector('h3').innerHTML="<em>Italic title ! yeah !</em>";
document.querySelector('h3').innerHTML="<strong>HTML doens't work !</strong>";

// excercices 4

let firstUl = document.querySelector("ul");

let LeElement = document.createElement('li');
LeElement.innerHTML ="Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
firstUl.append(LeElement);


LeElement.querySelector('a').style.color= "green";

// excercices 4-2

let olElment = document.querySelector('ol');


for(e=olElment.children.length-1; e >= 0; e--){

    olElment.removeChild(olElment.children[e]);
    
}

let tab = ["Silent Teacher","Code Monkey", "CodeCombat"];
let liElement;
for(i=0; i < tab.length; i++){

    liElement = document.createElement('li');
    liElement.innerHTML = tab[i];
    olElment.append(liElement);

}


