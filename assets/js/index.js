var imagen = document.getElementById('imagen');

imagen.addEventListener('click', function() {
    if(imagen.style.border) {
        imagen.style.border = '';
    }
    else{
        imagen.style.border = '2px solid red'
    }
})


var messageParagraph = document.getElementById('message');

function updateStickerMessage() {
    var total = 
        Number(document.getElementById('sticker1').value) + 
        Number(document.getElementById('sticker2').value) + 
        Number(document.getElementById('sticker3').value);

    messageParagraph.textContent = total <= 10 
        ? `Llevas ${total} stickers.` 
        : "Llevas demasiados stickers.";
}

document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', updateStickerMessage);
})


var ingresarButton = document.getElementById('ingresar');
var passwordMessage = document.getElementById('password-message');

function verifyPassword() {
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;
    var pass3 = document.getElementById('pass3').value;
    
    var password = pass1 + pass2 + pass3;

    if (password === '911') {
        passwordMessage.textContent = "password 1 correcto";
    } else if (password === '714') {
        passwordMessage.textContent = "password 2 correcto";
    } else {
        passwordMessage.textContent = "password incorrecto";
    }
}

ingresarButton.addEventListener('click', verifyPassword);


