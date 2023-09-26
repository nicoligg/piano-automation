"use strict";

const sons = {
  A: `sounds/cartoon-jump-6462.mp3`,
  S: `sounds/failure-drum-sound-effect-2-7184.mp3`,
  D: `sounds/funny-cartoon-cry-144756.mp3`,
  F: `sounds/funny-reaction-120318.mp3`,
  G: `sounds/funny-sound-effect-for-quotjack-in-the-boxquot-sound-ver1-110923.mp3`,
  H: `sounds/man-scream-121085.mp3`,
  J: `sounds/my-good-120319.mp3`,
  K: `sounds/pipe-117724.mp3`,
  L: `sounds/very-infectious-laughter-117727.mp3`,
};

const criarDiv = (texto) => {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = texto;
  div.id = texto;
  document.getElementById("container").appendChild(div);
};

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
  const audio = new Audio(sons[letra]);
  audio.play();
};

const adicionarEfeito = (letra) =>
  document.getElementById(letra).classList.add("active");

const removerEfeito = (letra) => {
  const div = document.getElementById(letra);
  const removeActive = () => div.classList.remove("active");
  div.addEventListener("transitionend", removeActive);
};

const ativarDiv = (evento) => {
  const letra =
    evento.type == "click" ? evento.target.id : evento.key.toUpperCase();

  const letraPressionada = sons.hasOwnProperty(letra);
  if (letraPressionada) {
    adicionarEfeito(letra);
    tocarSom(letra);
    removerEfeito(letra);
  }
};

exibir(sons);
document.getElementById("container").addEventListener("click", ativarDiv);
document.addEventListener("keydown", ativarDiv);

// window.addE...;

document.addEventListener("DOMContentLoaded", function () {
  const keyA = document.querySelector(".key#A"); // Selecione a tecla A
  const body = document.body;
  const initialBackgroundImage = body.style.backgroundImage; // Salve a imagem de fundo inicial

  // Adicione um evento de clique à tecla A
  keyA.addEventListener("click", function () {
    // Verifique se a imagem de fundo atual é a inicial
    if (body.style.backgroundImage === initialBackgroundImage) {
      // Se sim, defina uma nova imagem de fundo
      body.style.backgroundImage = `url('./img/jump.gif')`;

      // Use um timeout para restaurar a imagem de fundo inicial após um período de tempo (por exemplo, 2 segundos)
      setTimeout(function () {
        body.style.backgroundImage = initialBackgroundImage;
      }, 1050); // Tempo em milissegundos (2 segundos neste caso)
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const keyS = document.querySelector(".key#S"); // Selecione a tecla A
  const body = document.body;
  const initialBackgroundImage = body.style.backgroundImage; // Salve a imagem de fundo inicial

  // Adicione um evento de clique à tecla S
  keyS.addEventListener("click", function () {
    // Verifique se a imagem de fundo atual é a inicial
    if (body.style.backgroundImage === initialBackgroundImage) {
      // Se sim, defina uma nova imagem de fundo
      body.style.backgroundImage = `url('./img/playing-drum-cat-people.gif')`;

      // Use um timeout para restaurar a imagem de fundo inicial após um período de tempo (por exemplo, 2 segundos)
      setTimeout(function () {
        body.style.backgroundImage = initialBackgroundImage;
      }, 1050); // Tempo em milissegundos (2 segundos neste caso)
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const keyD = document.querySelector(".key#D"); // Selecione a tecla A
  const body = document.body;
  const initialBackgroundImage = body.style.backgroundImage; // Salve a imagem de fundo inicial

  // Adicione um evento de clique à tecla S
  keyD.addEventListener("click", function () {
    // Verifique se a imagem de fundo atual é a inicial
    if (body.style.backgroundImage === initialBackgroundImage) {
      // Se sim, defina uma nova imagem de fundo
      body.style.backgroundImage = `url('./img/cat-mad.gif')`;

      // Use um timeout para restaurar a imagem de fundo inicial após um período de tempo (por exemplo, 2 segundos)
      setTimeout(function () {
        body.style.backgroundImage = initialBackgroundImage;
      }, 1500); // Tempo em milissegundos (2 segundos neste caso)
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const keyF = document.querySelector(".key#F"); // Selecione a tecla A
  const body = document.body;
  const initialBackgroundImage = body.style.backgroundImage; // Salve a imagem de fundo inicial

  // Adicione um evento de clique à tecla S
  keyF.addEventListener("click", function () {
    // Verifique se a imagem de fundo atual é a inicial
    if (body.style.backgroundImage === initialBackgroundImage) {
      // Se sim, defina uma nova imagem de fundo
      body.style.backgroundImage = `url('./img/wolf.gif')`;

      // Use um timeout para restaurar a imagem de fundo inicial após um período de tempo (por exemplo, 2 segundos)
      setTimeout(function () {
        body.style.backgroundImage = initialBackgroundImage;
      }, 1500); // Tempo em milissegundos (2 segundos neste caso)
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const keyG = document.querySelector(".key#G"); // Selecione a tecla A
  const body = document.body;
  const initialBackgroundImage = body.style.backgroundImage; // Salve a imagem de fundo inicial

  // Adicione um evento de clique à tecla S
  keyG.addEventListener("click", function () {
    // Verifique se a imagem de fundo atual é a inicial
    if (body.style.backgroundImage === initialBackgroundImage) {
      // Se sim, defina uma nova imagem de fundo
      body.style.backgroundImage = `url('./img/po-belly.gif')`;

      // Use um timeout para restaurar a imagem de fundo inicial após um período de tempo (por exemplo, 2 segundos)
      setTimeout(function () {
        body.style.backgroundImage = initialBackgroundImage;
      }, 1500); // Tempo em milissegundos (2 segundos neste caso)
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const keyH = document.querySelector(".key#H"); // Selecione a tecla A
  const body = document.body;
  const initialBackgroundImage = body.style.backgroundImage; // Salve a imagem de fundo inicial

  // Adicione um evento de clique à tecla S
  keyH.addEventListener("click", function () {
    // Verifique se a imagem de fundo atual é a inicial
    if (body.style.backgroundImage === initialBackgroundImage) {
      // Se sim, defina uma nova imagem de fundo
      body.style.backgroundImage = `url('./img/coyote.gif')`;

      // Use um timeout para restaurar a imagem de fundo inicial após um período de tempo (por exemplo, 2 segundos)
      setTimeout(function () {
        body.style.backgroundImage = initialBackgroundImage;
      }, 3000); // Tempo em milissegundos (2 segundos neste caso)
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const keyJ = document.querySelector(".key#J"); // Selecione a tecla A
  const body = document.body;
  const initialBackgroundImage = body.style.backgroundImage; // Salve a imagem de fundo inicial

  // Adicione um evento de clique à tecla S
  keyJ.addEventListener("click", function () {
    // Verifique se a imagem de fundo atual é a inicial
    if (body.style.backgroundImage === initialBackgroundImage) {
      // Se sim, defina uma nova imagem de fundo
      body.style.backgroundImage = `url('./img/omg.gif')`;

      // Use um timeout para restaurar a imagem de fundo inicial após um período de tempo (por exemplo, 2 segundos)
      setTimeout(function () {
        body.style.backgroundImage = initialBackgroundImage;
      }, 1500); // Tempo em milissegundos (2 segundos neste caso)
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const keyK = document.querySelector(".key#K"); // Selecione a tecla A
  const body = document.body;
  const initialBackgroundImage = body.style.backgroundImage; // Salve a imagem de fundo inicial

  // Adicione um evento de clique à tecla S
  keyK.addEventListener("click", function () {
    // Verifique se a imagem de fundo atual é a inicial
    if (body.style.backgroundImage === initialBackgroundImage) {
      // Se sim, defina uma nova imagem de fundo
      body.style.backgroundImage = `url('./img/sadtrambone.gif')`;

      // Use um timeout para restaurar a imagem de fundo inicial após um período de tempo (por exemplo, 2 segundos)
      setTimeout(function () {
        body.style.backgroundImage = initialBackgroundImage;
      }, 3000); // Tempo em milissegundos (2 segundos neste caso)
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const keyL = document.querySelector(".key#L"); // Selecione a tecla A
  const body = document.body;
  const initialBackgroundImage = body.style.backgroundImage; // Salve a imagem de fundo inicial

  // Adicione um evento de clique à tecla S
  keyL.addEventListener("click", function () {
    // Verifique se a imagem de fundo atual é a inicial
    if (body.style.backgroundImage === initialBackgroundImage) {
      // Se sim, defina uma nova imagem de fundo
      body.style.backgroundImage = `url('./img/laugh.gif')`;

      // Use um timeout para restaurar a imagem de fundo inicial após um período de tempo (por exemplo, 2 segundos)
      setTimeout(function () {
        body.style.backgroundImage = initialBackgroundImage;
      }, 2500); // Tempo em milissegundos (2 segundos neste caso)
    }
  });
});
