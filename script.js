//Modal

//Direito Civil

function exibirDialogDC() {
    document.getElementById('dialog-dc').style.display = 'block'; // Exibe o modal de Direito Civil
  }

  function fecharDialogDC() {
    document.getElementById('dialog-dc').style.display = 'none'; // Oculta o modal
  }


  //Direito Digital
  function exibirDialogDD() {
    document.getElementById('dialog-dd').style.display = 'block'; // Exibe o modal
  }


function fecharDialogDD() {
    document.getElementById('dialog-dd').style.display = 'none'; // Oculta o modal
  }

  //Direito do Consumidor
  
  function exibirDialogConsumidor() {
    document.getElementById('dialogConsumidor').style.display = 'block'; // Exibe o modal
  }


function fecharDialogConsumidor() {
    document.getElementById('dialogConsumidor').style.display = 'none'; // Oculta o modal
  } 


  //Menu

  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');


  /*
  // Adiciona evento de clique ao botão do menu
  menuBtn.addEventListener('click', () => {
    // Alternar classe para mostrar/ocultar o menu
    nav.classList.toggle('nav--open');
    
  });
*/

menuBtn.addEventListener('click', () => {
  // Abre o menu
  nav.classList.add('nav--open');
  // Exibe o overlay para travar a tela
  overlay.style.display = 'block';
});

window.addEventListener('scroll', () => {
  // Fecha o menu se estiver aberto
  if (nav.classList.contains('nav--open')) {
      nav.classList.remove('nav--open');
      // Oculta o overlay
      overlay.style.display = 'none';
  }
});