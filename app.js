let jquery = require('jquery');

const stuff = [
    'the',
    'quick',
    'brown',
    'fox',
    'jumps',
    'over',
    'the',
    'lazy',
    'dog'
] 

const bar = document.querySelector('#search')  

bar.on('click', function() {
    console.log('hit!')
})
 
