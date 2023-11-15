document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".option");
    const inicioTexto = document.querySelector(".inicio-texto");
    const conteudoProjetos = document.querySelector(".conteudo-projetos");
    const conteudoContato = document.querySelector(".conteudo-contato"); // Adicionado
    const textoEstilizado = document.querySelector(".texto-estilizado");

    options.forEach(function (option) {
        option.addEventListener("click", function (e) {
            e.preventDefault();
            options.forEach(function (opt) {
                opt.classList.remove("selected");
            });
            this.classList.add("selected");

            if (this.textContent === "Início") {
                inicioTexto.style.display = "block";
                conteudoProjetos.style.display = "none";
                conteudoContato.style.display = "none"; // Adicionado
                textoEstilizado.style.display = "block";
            } else if (this.textContent === "Projetos") {
                inicioTexto.style.display = "none";
                conteudoProjetos.style.display = "block";
                conteudoContato.style.display = "none"; // Adicionado
                textoEstilizado.style.display = "none";
            } else if (this.textContent === "Info") {
                inicioTexto.style.display = "none";
                conteudoProjetos.style.display = "none";
                conteudoContato.style.display = "block"; // Adicionado
                textoEstilizado.style.display = "none";
            }
        });
    });

    // Função para mostrar a seção "Início" por padrão
    function mostrarInicio() {
        inicioTexto.style.display = "block";
        conteudoProjetos.style.display = "none";
        conteudoContato.style.display = "none"; // Adicionado
        textoEstilizado.style.display = "block";
    }

    // Chame a função para mostrar a seção "Início" ao carregar a página
    window.addEventListener("load", mostrarInicio);
});


// Configuração do Clipboard.js
new ClipboardJS('.copy-email', {
    text: function (trigger) {
        return trigger.getAttribute('data-email');
    }
});

// Manipulação do clique no link
$('.copy-email').on('click', function () {
    // Exibir o toast ao clicar
    toastr.success('Email copiado para a área de transferência!');
});