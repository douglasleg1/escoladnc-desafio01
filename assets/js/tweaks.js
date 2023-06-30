document.addEventListener('DOMContentLoaded', function() {
    // Obter referência ao formulário
    const faleconosco = document.getElementById('faleconosco-form');

    // Adicionar evento de envio do formulário
    faleconosco.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obter os valores dos campos do formulário
        const name = document.getElementById('nameForm').value;
        const email = document.getElementById('emailForm').value;

        const data = { name: name,
                       email: email };

        fetch("https://api.sheetmonkey.io/form/vDCTTgzRnzGtSenzaNPVkS", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            alert("Sua solicitação de empréstimo foi enviada com sucesso!", data);
        })
        .catch((error) => {
            console.log(data)
        });

        // Limpar os campos do formulário
        faleconosco.reset();
    });
    
});