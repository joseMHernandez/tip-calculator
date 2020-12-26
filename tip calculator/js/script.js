

 const output = document.querySelector('.output')
 const input = document.querySelector('input')
 const button = document.querySelector('button')

 button.addEventListener('click', function(){
     let tip = (input.value * 0.15).toFixed(2)
     let temp = `<h1>tu propina deberia ser $${tip} de $${input.value}</h1>`

     output.innerHTML = temp
 })


 