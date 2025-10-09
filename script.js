// Defina a data final da sua promoção aqui.
// O formato 'YYYY-MM-DDTHH:mm:ss-03:00' inclui o fuso horário de Brasília (GMT-3)
// Isso garante que a contagem regressiva seja a mesma para todos, independentemente de onde acessem.
const targetDate = new Date('2025-11-28T23:59:59-03:00').getTime();

// Seleciona os elementos do DOM uma única vez para melhor performance
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const countdownContainer = document.querySelector('.countdown-container');

// Atualiza o contador a cada 1 segundo
const countdownFunction = setInterval(() => {
    // Pega a data e hora de hoje
    const now = new Date().getTime();

    // Encontra a distância entre agora e a data final
    const distance = targetDate - now;

    // Se a contagem terminar, para o script
    if (distance < 0) {
        clearInterval(countdownFunction);
        // Oculta o contador e mostra uma mensagem de expiração
        countdownContainer.innerHTML = "<p style='font-size: 1.2rem; color: #dc3545; font-weight: bold;'>OFERTAS LIBERADAS!</p>";
        return; // Sai da função para não executar o resto do código
    }

    // Cálculos de tempo para dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe o resultado nos elementos, usando padStart para adicionar um '0' à esquerda se necessário
    daysEl.innerText = String(days).padStart(2, '0');
    hoursEl.innerText = String(hours).padStart(2, '0');
    minutesEl.innerText = String(minutes).padStart(2, '0');
    secondsEl.innerText = String(seconds).padStart(2, '0');

}, 1000);