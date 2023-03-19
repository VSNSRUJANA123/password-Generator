let rangeelement = document.getElementById('rangeId');
let lengthelement = document.getElementById("rangeNumber");
let inputelements = document.querySelectorAll('li input');
let copyicon = document.querySelector('.input-box span');
let inputboxelement = document.querySelector('.input-box input');
let buttonelement = document.getElementById('button');
let updatebar = document.querySelector('.pogress-bar');
updatebar.id = "medium";
let charchters = {
    UpperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    LowerCase: 'abcdefghijklmnopqrstuvwxyz',
    Numbers: '1234567890',
    special: '(@!$%^&*?.,{][}'
};

function genetare() {
    let grouppassword = '',
        rangevalue = rangeelement.value;
    inputelements.forEach(input => {
        if (input.checked) {
            grouppassword += charchters[input.id];
        }
    });
    let randomchar = ' ';
    for (let i = 0; i < rangevalue; i++) {
        let mathvalues = Math.floor(Math.random() * grouppassword.length);
        randomchar += grouppassword[mathvalues];
    }
    inputboxelement.value = randomchar;
}
const numbers = () => {
    lengthelement.textContent = rangeelement.value;
    updatebar = document.querySelector('.pogress-bar');
    if (rangeelement.value < 8) {
        console.log('red');
        updatebar.id = 'weak';
    } else if (rangeelement.value < 13) {
        console.log('yellow');
        updatebar.id = 'medium';
    } else {
        console.log('green');
        updatebar.id = 'strong';
    }
    genetare();
}

copyicon.onclick = function() {
    navigator.clipboard.writeText(inputboxelement.value);
    copyicon.textContent = "check";
    setTimeout(() => {
        copyicon.textContent = "content_copy";
    }, 1500);
}
rangeelement.addEventListener('click', numbers);
buttonelement.addEventListener('click', genetare);