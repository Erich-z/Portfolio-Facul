// Função para verificar se o elemento está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Evento de rolagem
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.container-jp, .container-02, .container4, .section-examples');
    
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            // Adiciona a classe 'animate' quando o elemento estiver visível
            element.classList.add('animate');
        }
    });
});
