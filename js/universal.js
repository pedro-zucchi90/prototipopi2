const cursores = [
    'url("../cursor/fullblast.png"), auto',
    'url("../cursor/mediumblast.png"), auto',
    'url("../cursor/smallblast.png"), auto'
  ];
  let indice = 0; 
  let intervalo;

//iniciar a animação do cursor
  function iniciarAnimacao(elemento) {
    intervalo = setInterval(() => {
      elemento.style.cursor = cursores[indice];
      indice = (indice + 1) % cursores.length;
    }, 200);
  }

//parar a animação do cursor
  function pararAnimacao(elemento) {
    clearInterval(intervalo);
    indice = 0; //reseta o índice do cursor
  }

//aplica a animação nos elementos selecionados
  document.querySelectorAll('.opcoes li, .saiba-mais, .logo, .footer li').forEach(elemento => {
    elemento.addEventListener('mouseenter', () => iniciarAnimacao(elemento));
    elemento.addEventListener('mouseleave', () => pararAnimacao(elemento));
  });

// Ativar e abrir menu hamburguer
  function toggleMenu() {
    const opcoes = document.querySelector('.opcoes');
    opcoes.classList.toggle('active');
  }