// Função para exibir a mensagem de detalhes do produto quando o item do catálogo é clicado
function showMessage(element) {
    // Seleciona a imagem e a mensagem dentro do item do catálogo clicado
    const img = element.querySelector('.catalog-image');
    const message = element.querySelector('.message');

    // Adiciona a classe 'rotate' à imagem para iniciar a animação de rotação
    img.classList.add('rotate');

    // Usa setTimeout para esperar 600ms antes de mostrar a mensagem
    setTimeout(() => {
        message.style.opacity = 1; 
    }, 600);

    // Define um novo manipulador de clique para o elemento
    element.onclick = function() {
        message.style.opacity = 0; 
        img.classList.remove('rotate');
    }
}

// Função para mostrar um emoji após o envio do formulário de feedback
function showEmoji(event) {
    event.preventDefault(); 

    // Seleciona o formulário de feedback e o contêiner do emoji
    const form = document.getElementById('feedback-form');
    const emojiContainer = document.getElementById('emoji-container');

    // Exibe o contêiner do emoji
    emojiContainer.style.display = 'block';
    emojiContainer.classList.add('pulsate'); 
    form.submit(); 
}

// Cria um novo elemento de estilo para adicionar animações ao emoji
const style = document.createElement('style');
style.innerHTML = `
    .pulsate {
        animation: pulse 1s infinite; // Define a animação pulsante para durar 1 segundo e repetir infinitamente
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1); // Estado inicial e final: tamanho normal
        }
        50% {
            transform: scale(1.2); // Estado intermediário: aumenta o tamanho
        }
    }
`;

// Adiciona o elemento de estilo ao cabeçalho do documento
document.head.appendChild(style);
