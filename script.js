// Defina a data final da sua promoção aqui
// A Black Friday em 2025 é no dia 28 de Novembro.
const targetDate = new Date('November 28, 2025 23:59:59').getTime();

// Atualiza o contador a cada 1 segundo
const countdownFunction = setInterval(() => {
    // Pega a data e hora de hoje
    const now = new Date().getTime();

    // Encontra a distância entre agora e a data final
    const distance = targetDate - now;

    // Cálculos de tempo para dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Adiciona um zero à esquerda se o número for menor que 10
    const formatTime = (time) => time < 10 ? `0${time}` : time;

    // Exibe o resultado nos elementos com os IDs correspondentes
    document.getElementById('days').innerText = formatTime(days);
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);

    // Se a contagem terminar, exibe uma mensagem
    if (distance < 0) {
        clearInterval(countdownFunction);
        // Oculta o contador e mostra uma mensagem de expiração
        document.querySelector('.countdown-container').innerHTML = "<p style='font-size: 1.2rem; color: #dc3545;'>OFERTAS LIBERADAS!</p>";
    }
}, 1000); // 1000ms = 1 segundo