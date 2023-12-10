// var headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

//         // Loop through the heading elements
//         for (var i = 0; i < headings.length; i++) {
//             if (i % 2 === 0) {
//                 // Even indexes are colored blue
//                 headings[i].classList.add('blue-heading');
//             } else {
//                 // Odd indexes are colored red
//                 headings[i].classList.add('red-heading');
//             }
//         }


function callMe(){
    let element = "Hello World";
    function againCall(){
        return element;
    }
    return againCall();
}

const newElem = callMe();
newElem();
