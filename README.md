# Landing Page - Black Friday para TradicaoMoveis

Uma landing page moderna, responsiva e de alta conversão, criada para a campanha de Black Friday da TradicaoMoveis. O projeto é visualmente inspirado em um design elegante com tema escuro (preto e dourado) e focado em engajar o cliente com ofertas e um senso de urgência.

![Demonstração da Landing Page](https://i.imgur.com/your-screenshot.png)
*(Dica: Tire um print da sua página e substitua o link acima para exibir uma imagem de demonstração aqui.)*

## Índice

- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Usar](#-como-usar)
- [Customização](#-customização)
- [Estrutura dos Arquivos](#-estrutura-dos-arquivos)

## ✨ Funcionalidades

- **Design Impactante:** Tema escuro com detalhes em dourado para uma estética premium.
- **Animação de Fundo:** Confetes dourados caem sutilmente para criar um clima de celebração.
- **Contador Regressivo:** Um timer funcional que mostra os dias, horas, minutos e segundos restantes para o fim da promoção, criando um senso de urgência.
- **Vídeo de Apresentação:** Seção para incorporar um vídeo do YouTube de forma responsiva.
- **Carrossel de Ofertas Automático:** Exibe os produtos em destaque em um carrossel que desliza automaticamente, é responsivo e pode ser controlado pelo usuário.
- **Chamada para Ação (CTA) Direta:** Um botão claro e objetivo para levar os clientes a um grupo exclusivo de ofertas no WhatsApp.
- **100% Responsivo:** O layout se adapta perfeitamente a desktops, tablets e celulares.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **HTML5:** Para a estrutura semântica da página.
- **CSS3:** Para estilização, animações e responsividade (utilizando Flexbox, Grid e Variáveis CSS).
- **JavaScript (ES6):** Para funcionalidades dinâmicas como o contador regressivo e a inicialização do carrossel.
- **[Swiper.js](https://swiperjs.com/):** Uma biblioteca JavaScript moderna para a criação do carrossel de produtos.
- **[Google Fonts](https://fonts.google.com/):** Para as fontes personalizadas `Anton` e `Roboto`.
- **[Font Awesome](https://fontawesome.com/):** Para os ícones de redes sociais no rodapé.

## 📋 Como Usar

Este é um projeto web estático, o que torna sua utilização muito simples. Não há necessidade de instalação de pacotes ou builds.

1.  **Clone ou baixe este repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd seu-repositorio
    ```
3.  **Abra o arquivo `index.html`:**
    Basta abrir o arquivo `index.html` diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).

E pronto! A página estará funcionando localmente.

## 🔧 Customização

Para adaptar a landing page para a sua campanha, você precisará editar alguns pontos específicos:

-   **Data do Contador:** No arquivo `script.js`, altere a data na variável `endDate`.
    ```javascript
    const endDate = new Date('November 28, 2025 23:59:59').getTime();
    ```

-   **Vídeo do YouTube:** No arquivo `index.html`, substitua o ID do vídeo no `src` do `<iframe>`.
    ```html
    <iframe src="[https://www.youtube.com/embed/SEU_VIDEO_ID](https://www.youtube.com/embed/SEU_VIDEO_ID)?..." ...></iframe>
    ```

-   **Produtos no Carrossel:** No arquivo `index.html`, edite, adicione ou remova os blocos `<div class="swiper-slide">` para refletir suas ofertas.
    ```html
    <div class="swiper-slide">
        <div class="product-card">
            <img src="link-da-sua-imagem.jpg" alt="Nome do Produto">
            <h3>Nome do Produto</h3>
            <p class="price-original">R$ 1.000,00</p>
            <p class="price-discounted">R$ 500,00</p>
            <button class="cta-button">Comprar Agora</button>
        </div>
    </div>
    ```

-   **Link do Grupo de WhatsApp:** No final do arquivo `index.html`, substitua o `href` do botão pelo link de convite do seu grupo.
    ```html
    <a href="[https://chat.whatsapp.com/SEU_CODIGO_DE_CONVITE](https://chat.whatsapp.com/SEU_CODIGO_DE_CONVITE)" ...>
        Entrar no Grupo Exclusivo
    </a>
    ```

## 📂 Estrutura dos Arquivos