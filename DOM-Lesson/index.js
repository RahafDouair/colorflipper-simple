/////////////////////lesson what is DOM(86)
// let myIdElement= document.getElementById("my-div");

// let myparagraph=document.getElementsByTagName('p');
// console.log(myIdElement);
// myparagraph[0].innerHTML="ww";
// console.log(myparagraph[0]);

// let className=document.getElementsByClassName('my-span');
//  console.log(className[0]);
//  let spanCustom= document.querySelector('.my-span');
//  let spanCustomAll= document.querySelectorAll('.my-span');

//  console.log(spanCustomAll);

//  console.log(document.title);
//  console.log(document.body);
//  console.log(document.forms[0].one);
//  console.log(document.links[1]);


///////////////LESSON lesson (87);

let myElement=document.querySelector(".js");

console.log(myElement.innerHTML);//with tag
console.log(myElement.textContent);//without tag

myElement.innerHTML="Text  From  <span>Main.js</span>File";
myElement.textContent="Text  From  <span>Main.js</span>File";//can user write  without Enitites


document.images[0].src="https://www.google.com";
document.images[0].alt="User Name";
document.images[0].id="Name";
document.images[0].className="User Name";

let links=document.querySelector('.links');

links.getAttribute('class');
console.log(links.getAttribute('href'));
links.setAttribute('class' ,'hello guys');
links.setAttribute('href' ,'https://www.google.com');

