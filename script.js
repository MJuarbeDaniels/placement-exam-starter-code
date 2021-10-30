
// First, tell us your name
let yourName = 'Michelle Juarbe-Daniels' 


let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${'Michelle Juarbe-Daniels'}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
      console.log('Gingerbread + button was clicked!')

            if (gb >= 0) { 
            gb = gb + 1
          } console.log( gb )

          let quantityGB = document.querySelector('#qty-gb');
          quantityGB.textContent = gb 

          let totalQuantity = document.querySelector('#qty-total')
         totalCookies = gb + cc + sugar
       totalQuantity.textContent = gb + cc + sugar

          localStorage.setItem('gb',gb )

      } )

      

document.getElementById('minus-gb').addEventListener('click', function() {
      console.log('Gb - button was clicked!')

   


      if (gb > 0) { 
            gb = gb - 1
          } console.log( gb )

          let quantityGB = document.querySelector('#qty-gb');
          quantityGB.textContent = gb 

      let totalQuantity = document.querySelector('#qty-total')
     totalCookies = gb + cc + sugar
   totalQuantity.textContent = gb + cc + sugar
 

               


} )

document.getElementById('add-cc').addEventListener('click', function() {
      console.log('Choc + button was clicked!')

            if (cc >= 0) { 
            cc = cc + 1
          } console.log( cc )

          let quantitycc = document.querySelector('#qty-cc');
          quantitycc.textContent = cc 

          let totalQuantity = document.querySelector('#qty-total')
     totalCookies = gb + cc + sugar
   totalQuantity.textContent = gb + cc + sugar

          localStorage.setItem('cc', cc )

      } )
document.getElementById('minus-cc').addEventListener('click', function() {
      console.log('cc - button was clicked!')

      if (cc > 0) { 
            cc = cc - 1
          } console.log( cc )

          localStorage.setItem('cc', cc )

          let quantitycc = document.querySelector('#qty-cc');
          quantitycc.textContent = cc 

          let totalQuantity = document.querySelector('#qty-total')
     totalCookies = gb + cc + sugar
   totalQuantity.textContent = gb + cc + sugar


} )

document.getElementById('add-sugar').addEventListener('click', function() {
      console.log('Sugar + button was clicked!')

            if (sugar >= 0) { 
            sugar = sugar + 1
          } console.log( sugar )

          localStorage.setItem('sugar', sugar )

          let quantitysugar = document.querySelector('#qty-sugar');
          quantitysugar.textContent = sugar 

          let totalQuantity = document.querySelector('#qty-total')
     totalCookies = gb + cc + sugar
   totalQuantity.textContent = gb + cc + sugar


      } )



document.getElementById('minus-sugar').addEventListener('click', function() {
      console.log('Sugar - button was clicked!')

      if (sugar > 0) { 
            sugar = sugar - 1
          } console.log( sugar )

          localStorage.setItem('sugar', sugar )

          let quantitysugar = document.querySelector('#qty-sugar');
          quantitysugar.textContent = sugar 

          let totalQuantity = document.querySelector('#qty-total')
     totalCookies = gb + cc + sugar
   totalQuantity.textContent = gb + cc + sugar



} )