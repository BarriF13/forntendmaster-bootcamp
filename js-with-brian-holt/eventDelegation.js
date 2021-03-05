//**** Event Delegation -- connecting one function to many element-DOM manipulation */

document.querySelector('.button-container').addEventListener('click', function(event) {
  alert(`You clicked on button ${event.target.innerText}`);
});


// document.getElementsById('button1').addEventListener('click',function(event) {
//   alert(`You clicked on button `)})