
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(dogs){
  let dogList = [];
  let dogKeys = Object.keys(dogs);
  for(let i = 0; i < dogKeys.length; i++){
    let dogName = dogKeys[i];
    let dogLink = dogs[dogName];
    
    let aElement = document.createElement('a');
    aElement.innerHTML = dogName;
    aElement.href = dogLink;
    let liELement = document.createElement('li');
    liELement.className = 'dog-link';
    liELement.appendChild(aElement);
    dogList.push(liELement);
  }
  return dogList;
}

function attachDogLinks(){
  let dogLinks = dogLinkCreator(dogs);
  
  let list = document.querySelector('.drop-down-dog-list');
  dogLinks.forEach((dog)=>{
    list.appendChild(dog);
  });
  let nav = document.getElementsByClassName('drop-down-dog-nav')[0];
  nav.addEventListener('mouseover', (e)=>{
    
    list.style.display = 'block';
  })
  nav.addEventListener('mouseout', (e)=>{
    list.style.display= 'none';
  })
}

attachDogLinks();