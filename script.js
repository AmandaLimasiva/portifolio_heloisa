//Modal

//Recuperação e reativação de contas
function exibirDialogRecuperacaoDeContas() {
    document.getElementById('dialog-dc').style.display = 'block'; // Exibe o modal de Recuperação e reativação de contass
  }

  function fecharDialogRecuperacaoDeContas() {
    document.getElementById('dialog-dc').style.display = 'none'; // Oculta o modal
  }


  //Remoção de Contéudo
  function exibirDialogRemocaoDeConteudo() {
    document.getElementById('dialog-dd').style.display = 'block'; // Exibe o modal
  }


function fecharDialogRemocaoDeConteudo() {
    document.getElementById('dialog-dd').style.display = 'none'; // Oculta o modal
  }

  //Registro de Máquinas no INPI
  
  function exibirDialogRegistroDeMarcasNoINPI() {
    document.getElementById('dialog-inpi').style.display = 'block'; // Exibe o modal
  }


function fecharDialogRegistroDeMarcasNoINPI() {
    document.getElementById('dialog-inpi').style.display = 'none'; // Oculta o modal
  } 


  //Registro de Direitos Autoriais
  
  function exibirDialogRegistroDeDireitosAutorais() {
    document.getElementById('dialog-direitos-autorais').style.display = 'block'; // Exibe o modal
  }


function fecharDialogRegistroDeDireitosAutorais() {
    document.getElementById('dialog-direitos-autorais').style.display = 'none'; // Oculta o modal
  } 


  //Golpes Virtuais

  function exibirDialogGolpesVirtuais() {
    document.getElementById('dialog-golpes-virtuais').style.display = 'block'; // Exibe o modal
  }


function fecharDialogGolpesVirtuais() {
    document.getElementById('dialog-golpes-virtuais').style.display = 'none'; // Oculta o modal
  } 

  //Crimes contra a honra

  function exibirDialogCrimesHonra() {
    document.getElementById('dialog-crimes-honra').style.display = 'block'; // Exibe o modal
  }


function fecharDialogCrimeHonra() {
    document.getElementById('dialog-crimes-honra').style.display = 'none'; // Oculta o modal
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