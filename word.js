const counter=document.querySelector('.counter')

function getValue(e) {
  console.log(e.value);
 counter.textContent=e.value.length
}
function reset() {
  document.querySelector("#word").value = "";
  document.querySelector(".counter").innerText = "words";
  document.querySelector('.vowels').textContent='vowels'
}

function getWorldCount() {
document.querySelector('.counter').textContent=  document.querySelector('#word').value.length
}

function getVowelCount() {
 const value= document.querySelector('#word').value
  let vowelCount=0
for (const e of String(value).split('')) {
  if (e.toLowerCase()==='a'||e.toLowerCase()==='e'||e.toLowerCase()==='i'||e.toLowerCase()==='o'||e.toLowerCase()==='u') {
    vowelCount=vowelCount+1
    // console.log('got');
  }
  
}
 document.querySelector('.vowels').textContent=vowelCount
}

