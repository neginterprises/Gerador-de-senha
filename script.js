

const sliderElement = document.getElementById("slider");
const spanElement = document.getElementById("valor");
const buttonElement = document.getElementById("button");
const containerPassword = document.getElementById("container-password");
const passwordElement = document.getElementById("password");

spanElement.innerHTML = sliderElement.value;
let senha = "";

sliderElement.oninput = function() {
    spanElement.innerHTML = this.value;
}

function generatePassword() {
    const passLength = sliderElement.value;
    const lowercase = document.getElementById("checkbox-lowercase").checked;
    const uppercase = document.getElementById("checkbox-uppercase").checked;
    const number = document.getElementById("checkbox-number").checked;
    const symbol = document.getElementById("checkbox-symbol").checked;


  

    if (lowercase) {
        senha += "abcdefghijklmnopqrstuvwxyz";
    }

    if (uppercase) {
        senha += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (number) {
        senha += "0123456789";
    }

    if (symbol) {
        senha += "!@#$%&*()_+-=[]{}|;:,.<>?";
    }

    if (senha === "") {
        alert("Por favor, escolha pelo menos uma opção.");
        return;
    }    

    let password = "";


    for (let i = 0; i < passLength; i++) {
        const randomIndex = Math.floor(Math.random() * senha.length);
        password += senha.charAt(randomIndex);
        
    }
     // Evitar de pegar itens de outras checkbox
        senha = "";
    // Limpar checkbox selecionados
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    passwordElement.innerText = password;
    containerPassword.classList.remove("hide");
    spanElement.innerText = sliderElement.value;
}
    function copyPassword() {    
    navigator.clipboard.writeText(passwordElement.innerText);
    alert("Senha copiada com sucesso!");
    
    }
    
    