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

const select = document.querySelector('.breeds');
const spinner = document.querySelector('.spinner');
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
    // const select = document.querySelector('.breeds');
    for (i = 0; i < breedsArray.length; i++) {

      const option = document.createElement('option');
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option) 
    }
  });


select.addEventListener('change', (e) => {
  let url = `https://dog.ceo/api/breed/${e.target.value}/images/random`;
  getDoggo(url);
})


const img = document.querySelector('.dog-img');

function getDoggo(url){
  spinner.classList.add('show');
  img.classList.remove('show');
fetch(url).then((res)=>res.json())
.then((data)=> {
img.src = data.message;
spinner.classList.remove('show');
img.classList.add('show');

})
}