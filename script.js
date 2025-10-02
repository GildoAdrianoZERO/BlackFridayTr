document.addEventListener("DOMContentLoaded", function() {

    // Carrega a biblioteca de confetes de um CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
    document.head.appendChild(script);

    script.onload = () => {
        // Pega a referência para o canvas
        const canvas = document.getElementById('confetti-canvas');
        if (!canvas) return;

        // Cria uma instância de confete usando o canvas
        const myConfetti = confetti.create(canvas, {
            resize: true,
            useWorker: true
        });

        // Configurações para o efeito de queda
        const defaults = {
            spread: 360,
            ticks: 500,
            gravity: 0.5,
            decay: 0.94,
            startVelocity: 30,
            particleCount: 50,
            scalar: 1.2,
            colors: ['#ffc107', '#000000', '#ffffff'] // Amarelo, Preto, Branco
        };

        function fire(particleRatio, opts) {
            myConfetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(250 * particleRatio)
            });
        }
        
        // Dispara os confetes automaticamente ao carregar a página
        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });

        fire(0.2, {
            spread: 60,
        });

        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });

        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });

        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });

        // Adiciona um gatilho de confetes ao clicar no botão CTA
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('click', (e) => {
                myConfetti({
                    particleCount: 200,
                    spread: 180,
                    origin: {
                        y: 0.6
                    },
                    colors: ['#ffc107', '#000000', '#ffffff']
                });
            });
        }
    };
});