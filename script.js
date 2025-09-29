document.addEventListener('DOMContentLoaded', () => {

    // --- Funcionalidade do Contador Regressivo ---
    const countdown = () => {
        // A data final da Black Friday para 2025 é 28 de Novembro.
        const endDate = new Date('November 28, 2025 23:59:59').getTime();
        const now = new Date().getTime();
        const difference = endDate - now;

        if (difference < 0) {
            document.getElementById('days').innerText = '00';
            document.getElementById('hours').innerText = '00';
            document.getElementById('minutes').innerText = '00';
            document.getElementById('seconds').innerText = '00';
            return;
        }

        const seconds = 1000, minutes = seconds * 60, hours = minutes * 60, days = hours * 24;

        let timeDays = Math.floor(difference / days);
        let timeHours = Math.floor((difference % days) / hours);
        let timeMinutes = Math.floor((difference % hours) / minutes);
        let timeSeconds = Math.floor((difference % minutes) / seconds);

        timeDays = timeDays < 10 ? '0' + timeDays : timeDays;
        timeHours = timeHours < 10 ? '0' + timeHours : timeHours;
        timeMinutes = timeMinutes < 10 ? '0' + timeMinutes : timeMinutes;
        timeSeconds = timeSeconds < 10 ? '0' + timeSeconds : timeSeconds;

        document.getElementById('days').innerText = timeDays;
        document.getElementById('hours').innerText = timeHours;
        document.getElementById('minutes').innerText = timeMinutes;
        document.getElementById('seconds').innerText = timeSeconds;
    };
    setInterval(countdown, 1000);
    countdown();

    // --- Animação de Confetes ---
    const confettiContainer = document.getElementById('confetti-container');
    const confettiCount = 50;
    const createConfetti = () => {
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            
            if (Math.random() > 0.5) {
                confetti.style.width = '15px';
                confetti.style.height = '8px';
                confetti.style.borderRadius = '0';
            }
            confettiContainer.appendChild(confetti);
        }
    };
    createConfetti();

    // --- Inicialização do Carrossel de Produtos ---
    const swiper = new Swiper('.product-carousel', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        
        // CONFIGURAÇÃO DE AUTOPLAY
        autoplay: {
            delay: 2500, // Tempo em milissegundos (2.5 segundos)
            disableOnInteraction: false, // Não para o autoplay após interação manual
            pauseOnMouseEnter: true, // Pausa o autoplay quando o mouse está sobre o carrossel
        },
        
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

});