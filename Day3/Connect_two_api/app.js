import {info}  from './index.js';

const body = document.querySelector('body');
const button = document.querySelector('button')
const word = document.createElement('h1')
const definition = document.createElement('p')


const randomword = () => {
    fetch('https://random-word-api.herokuapp.com/word?number=1')
  .then(response => {
      return response.json();
  })
  .then(response => {
      
      word.textContent = response;
      body.appendChild(word)
      randomdefinition(word);
  })
  .catch(err => {
      console.log(err);
  })
}

const randomdefinition = (word) => {
    console.log(word.textContent);
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word.textContent}?key=${info.key}`)
    .then(response => {
        return response.json();
    })
    .then(response => {
        console.log(response[0].shortdef[0]);
        if(response[0].shortdef !== undefined){

            definition.textContent ="Defintion: " + response[0].shortdef[0]
        }else {
            definition.textContent ="No Definition Available!"
        }
        body.appendChild(definition)

    })
    .catch(err => {
        console.log(err);
    })
}


button.addEventListener('click', function(){
    randomword();
   
})