// ===================================================================
//          CONFIGURAÇÃO DO CRONÔMETRO PARA DATA FIXA
// ===================================================================
const targetTimestamp = new Date('2025-10-13T00:00:00-03:00').getTime();

// ===================================================================
//                     ELEMENTOS DO HTML
// ===================================================================
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const countdownContainer = document.querySelector('.countdown-container');

// ===================================================================
//                     FUNÇÃO DOS CONFETES
// ===================================================================
function triggerConfetti() {
    if (typeof confetti !== 'function') {
        console.error("A biblioteca de confetes não foi carregada.");
        return;
    }

    const duration = 4 * 1000; 
    const end = Date.now() + duration;

    

    const customColors = ['#FFD700', '#000000']; 

    (function frame() {
        confetti({ 
            particleCount: 2, 
            angle: 60, 
            spread: 55, 
            origin: { x: 0 },
            colors: customColors 
        });
        confetti({ 
            particleCount: 2, 
            angle: 120, 
            spread: 55, 
            origin: { x: 1 },
            colors: customColors 
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// ===================================================================
//               LÓGICA PRINCIPAL DO CRONÔMETRO
// ===================================================================

const now = new Date().getTime();
const distance = targetTimestamp - now;


if (distance < 0) {
    countdownContainer.innerHTML = "<p style='font-size: 1.2rem; color: #dc3545; font-weight: bold;'>OFERTAS LIBERADAS!</p>";
    

} else {
   
    const countdownFunction = setInterval(() => {
        const now_interval = new Date().getTime();
        const distance_interval = targetTimestamp - now_interval;

        if (distance_interval < 0) {
            clearInterval(countdownFunction);
            countdownContainer.innerHTML = "<p style='font-size: 1.2rem; color: #dc3545; font-weight: bold;'>OFERTAS LIBERADAS!</p>";
            
            triggerConfetti(); 
            return;
        }

        const days = Math.floor(distance_interval / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance_interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance_interval % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance_interval % (1000 * 60)) / 1000);

        daysEl.innerText = String(days).padStart(2, '0');
        hoursEl.innerText = String(hours).padStart(2, '0');
        minutesEl.innerText = String(minutes).padStart(2, '0');
        secondsEl.innerText = String(seconds).padStart(2, '0');

    }, 1000);
}


triggerConfetti();