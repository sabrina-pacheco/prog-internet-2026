// alert('Olá, seja bem-vindo ao nosso site');

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Formulário enviado!");

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    console.log(nome);
    alert(nome);

    if (nome.length < 3) {alert("O nome deve ter pelo menos 3 caracteres.");
        return;}
    if (!email.includes("@")) {alert("Email inválido.");
        return;}
    console.log(email);



    
    });


document.getElementById("btnAlerta").addEventListener("click", function(){alert("Olá! JavaScript funcionando!")});

document.getElementById("btnCor").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});
         

document.getElementById("conteudo").innerHTML = "Texto alterado com JavaScript!";
    document.getElementById("conteudo").innerHTML = "Conteúdo alterado diretamente!";