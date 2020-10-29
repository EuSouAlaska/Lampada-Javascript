const lampada = document.querySelector(".lampada span")
const button = document.querySelector('button')

// construtor 
function Molde(data) {
    this.transicao = function () {
        lampada.removeAttribute('data-target', data)
        lampada.setAttribute('data-target', data)
    }
}

const desliga = new Molde('off')
const liga = new Molde('on')
const quebraLampada = new Molde('quebrada')

//troca
function ato() {
    if (lampada.dataset.valueOf().target === "off")
        liga.transicao()
    else if (lampada.dataset.valueOf().target === "on")
        desliga.transicao()

}

function quebra() {
    quebraLampada.transicao()
    button.classList.add('reload')
    button.setAttribute('onClick', 'window.location.reload()')
}

//eventos
button.addEventListener('click', quebra);
lampada.addEventListener('mouseenter', ato);
lampada.addEventListener('mouseleave', ato);
lampada.addEventListener('touchenter', ato);
lampada.addEventListener('touchend', ato);