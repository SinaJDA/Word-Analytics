const valuetext = document.querySelector('.write-text');
const wordsel = document.getElementById('words');
const Charactersel = document.getElementById('Characters');
const changecolor = document.querySelector('.box2')

valuetext.addEventListener('input' , function(){

   let newwords = valuetext.value.split( ' ' ).length;

   // console.log(valuetext.value.length);

   if(valuetext.value.length==0){

      newwords=0;
   }

   if(valuetext.value.split(' ').length > 70){
      changecolor.style.color='red';
      alert('more than allowed');
   }else{
      changecolor.style.color='black';
   }
   
   let valuewords = valuetext.value.length;

   wordsel.textContent = valuewords;
   Charactersel.textContent = newwords;
});

