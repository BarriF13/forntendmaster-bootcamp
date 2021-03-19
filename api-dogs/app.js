// const BREED_URL = "https://dog.ceo/api/breeds/image/random"; 

// function addDoggo(){

//   fetch(BREED_URL)
//   .then((res)=>{
//   return res.json();
//   })
//   .then((data)=>{
//   //console.log(data);
//   const img = document.createElement('img');
//   img.src= data.message;
//   img.alt = 'cute dog';
//   document.querySelector('.doggos').appendChild(img);
//   });

// }
// document.querySelector('.add-doggo').addEventListener('click', addDoggo)
const BREED_URL = 'https://dog.ceo/api/breeds/list/all';

function addDoggo() {

  fetch(BREED_URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //console.log(data);
      //console.log(Object.keys(data.message));
      const breedsObject = data.message;
      const breedsArray = Object.keys(breedsObject);
      // console.log(breedsArray);
      const select = document.querySelector('.breeds');
      for (i =0; i< breedsArray.length; i++) {
        const option = document.createElement('option');
        option.value = breedsArray[i];
        option.innerText = breedsArray[i];
        select.appendChild(option)
      }
    });

}
document.querySelector('.add-doggo').addEventListener('click', addDoggo)



// const CAT_URL = "https://api.thecatapi.com/v1/images/search"
// fetch(CAT_URL)
// .then((res)=>{
// return res.json()
// }).then((data)=>{
//   console.log(Object.keys(data));
//   const img = document.createElement('img');
// img.src= data.url;
// img.alt= 'cat';
// document.querySelector('.cats').appendChild(img)
// });