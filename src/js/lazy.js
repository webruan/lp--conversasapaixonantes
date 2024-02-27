// Seleciona o elemento HTML com o ID 'hero' e o armazena na variável 'hero'.
const hero = document.getElementById('header');

// Função que verifica se a seção hero está visível na tela
function isHeroVisible(el) { // Declaração de função chamada 'isHeroVisible' que aceita um argumento 'el'.
  const { top, bottom, left, right } = el.getBoundingClientRect(); // Usa 'getBoundingClientRect()' para obter as coordenadas do retângulo do elemento na janela.
  // Obtém as dimensões da janela do navegador.
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  // Verifica se o elemento está verticalmente visível na tela.
  const vertInView = (top <= windowHeight) && (bottom >= 0);
  // Verifica se o elemento está horizontalmente visível na tela.
  const horInView = (left <= windowWidth) && (right >= 0);
  // Retorna verdadeiro se o elemento estiver visível tanto vertical quanto horizontalmente.
  return vertInView && horInView;
}

// Função que carrega as imagens nos respectivos containers
function loadImages() { // Declaração da função 'loadImages'.
  if (isHeroVisible(hero)) { // Verifica se a seção 'hero' está visível na tela.
    const imagePaths = [ // Declaração do array 'imagePaths' que vai conter todas as imagens da página.
      // Define um objeto com as informações da imagem.
      {
        imgNameId: 'imagine-couple', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Casal feliz'
      },
      {
        imgNameId: 'reasons-man', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Homem loiro com um sorriso discreto e mãos na cabeça'
      },
      {
        imgNameId: 'reasons-date', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Casal tomando café em uma mesa ao ar livre, a mulher está sorrindo alegremente'
      },
      {
        imgNameId: 'reasons-couple', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Casal na praia se abraçando, o homem está entregando uma rosa para ela'
      },
      {
        imgNameId: 'doubt-left', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Casal na friendzone, a mulher fazendo coração e o homem fazendo sinal de positivo'
      },
      {
        imgNameId: 'doubt-right', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Homem deitado no chão com uma aliança segurando a perna da mulher'
      },
      {
        imgNameId: 'done-pami', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Pâmi Garcia gesticulando e fazendo careta'
      },
      {
        imgNameId: 'steps-left', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Mulher se sentindo livre'
      },
      {
        imgNameId: 'steps-right', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Mulher elegante de salto e calça social subindo a escada'
      },
      {
        imgNameId: 'with-date', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Casal em um café conversando'
      },
      {
        imgNameId: 'with-mirror', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Linda mulher de preto se arrumando no espelho'
      },
      {
        imgNameId: 'with-couple', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Casal sorridente se beijando na praia'
      },
      {
        imgNameId: 'with-thinking', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Mulher pensativa'
      },
      {
        imgNameId: 'know-key', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Abrindo a porta com as chaves'
      },
      {
        imgNameId: 'know-couple', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Pâmi e seu marido no casamento'
      },
      {
        imgNameId: 'feedbacks-pami', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Pâmi mostrando os feedbacks'
      },
      {
        imgNameId: 'benefits-left', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Pâmi usando o notebook'
      },
      {
        imgNameId: 'benefits-right', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Pâmi escrevendo no caderno'
      },
      {
        imgNameId: 'learn-pami', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Pâmi pensativa'
      },
      {
        imgNameId: 'social-phone', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Celular'
      },
      {
        imgNameId: 'stats-men', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Três amigos usando o celular e sorrindo'
      },
      {
        imgNameId: 'stats-holding', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Homem jogado segurando a pena da mulher'
      },
      {
        imgNameId: 'problem-social', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Mãos femininas usando as redes sociais no celular'
      },
      {
        imgNameId: 'problem-couple', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Pâmi e seu marido felizes deitados no sofá'
      },
      {
        imgNameId: 'foryou-shy', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Mulher tímida'
      },
      {
        imgNameId: 'foryou-esteem', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Mulher se olhando no espelho'
      },
      {
        imgNameId: 'foryou-confidence', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Mulher sendo apontada e com vergonha'
      },
      {
        imgNameId: 'foryou-pami', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Pâmi fazendo careta com as mãos ao lado do rosto'
      },
      {
        imgNameId: 'offer-master', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Logo do plano MASTER'
      },
      {
        imgNameId: 'offer-premium', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Logo do plano PREMIUM'
      },
      {
        imgNameId: 'warranty-stamp', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Selo de garantia de sete dias'
      },
      {
        imgNameId: 'about-office', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Pâmi no escritório'
      },
      {
        imgNameId: 'about-scared', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Pâmi assustada'
      },
      {
        imgNameId: 'about-couple', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Pâmi e seu marido se olhando'
      },
      {
        imgNameId: 'about-map', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Mapa do Brasil marcado do Amazonas ao Rio Grande do Sul'
      },
      {
        imgNameId: 'faq-pami', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Pâmi de braços cruzados e sorrindo'
      },
      {
        imgNameId: 'footer-logo', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Logo Conversas Apaixonantes'
      },
    ];

    // Loop que itera sobre cada elemento do array 'imagePaths'.
    imagePaths.forEach(imagePath => {
      const imgContainer = document.getElementById(imagePath.imgNameId); // Seleciona o elemento com o ID correspondente ao 'imgNameId' do objeto.
      
      // Verifica se o elemento foi encontrado.
      if (imgContainer) {
        imgContainer.innerHTML = // Define o conteúdo HTML do elemento selecionado.
        `
          <picture>
            <source media="(min-width: 1200px)" srcset="./src/assets/images/desktop/${imagePath.imgNameId}.webp">
            <source media="(min-width: 768px)" srcset="./src/assets/images/tablet/${imagePath.imgNameId}.webp">
            <source media="(min-width: 320px)" srcset="./src/assets/images/mobile/${imagePath.imgNameId}.webp">
            <img loading="lazy" src="./src/assets/images/desktop/${imagePath.imgNameId}.webp" alt="${imagePath.altText}">
          </picture>
        `;
      } else {
        console.log('Imagem indisponível')
      }
    });

    // Remove o ouvinte de eventos de rolagem após as imagens serem carregadas.
    window.removeEventListener('scroll', loadImages);
  }
}

// Adiciona um ouvinte de eventos de rolagem para chamar a função 'loadImages'.
window.addEventListener('scroll', loadImages);