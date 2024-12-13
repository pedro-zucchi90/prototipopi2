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


// -----------------botões com onClick-------------------
  document.addEventListener('DOMContentLoaded', () => {
    // Navegação
    document.querySelector('.botaoinicio').addEventListener('click', () => {
      window.location.href = 'pagInicial.html';
    });
    document.querySelector('.logo').addEventListener('click', () => {
      window.location.href = 'pagInicial.html';
    });
    document.querySelector('.botaoplasma').addEventListener('click', () => {
      window.location.href = 'plasma.html';
    });
    document.querySelector('.botaopropulsao').addEventListener('click', () => {
      window.location.href = 'propulsao.html';
    });
    document.querySelector('.botaoaplicacoes').addEventListener('click', () => {
      window.location.href = 'aplicacoes.html';
    });
  

//-----------------Botão de menu hamburguer--------------------
    document.querySelector('.hamburguer').addEventListener('click', () => {
      document.querySelector('.opcoes').classList.toggle('visible');
    });
  });
  

// ---------------------BD---------------

document.getElementById('emailForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;

  try {
      const response = await fetch('http://localhost:8081/save-email', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
      });

      if (response.ok) {
          alert('Email salvo com sucesso!');
          document.getElementById('email').value = '';
      } else {
          alert('Erro ao salvar email.');
      }
  } catch (error) {
      console.error('Erro:', error);
  }
});
