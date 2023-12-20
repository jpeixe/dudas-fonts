const fonts = [
  "Helvetica, sans-serif",
  "Comic Sans MS, cursive",
  "Arial, sans-serif;",
  "Times New Roman, serif",
  "Georgia, serif",
  "Verdana, sans-serif;",
  "Roboto",
  "Garamond, serif",
  "Courier New, monospace",
  "Papyrus, fantasy"
              ];
const fontInfo = {
    "Helvetica": "Desenvolvida em 1957 na Suíça, a Helvetica é uma fonte sans-serif popular conhecida por sua versatilidade e clareza.",
    "Comic Sans MS": "Comic Sans MS é uma fonte script desenvolvida pela Microsoft em 1994.",
    "Arial": "Arial é uma fonte sans-serif amplamente utilizada, conhecida por sua simplicidade e legibilidade em telas digitais.",
    "Times New Roman": "Criada em 1931, a Times New Roman é uma fonte serif clássica e tradicional, amplamente suportada por todos os principais navegadores.",
    "Georgia": "Projetada por Matthew Carter em 1993, a Georgia é uma fonte serif com boa legibilidade em telas, sendo frequentemente usada para texto corrido em websites.",
    "Verdana": "Desenvolvida por Matthew Carter para a Microsoft em 1996, Verdana é uma fonte sans-serif projetada especificamente para legibilidade em telas de computador.",
    "Roboto": "Criada pelo Google, a Roboto é uma fonte sans-serif moderna frequentemente utilizada em interfaces de usuário devido à sua clareza e legibilidade.",
    "Garamond": "A Garamond é uma família de fontes serif clássicas, com origens que remontam ao século XVI.",
    "Courier New": "A Courier New é uma fonte monoespaçada serifada, criada para imitar o estilo de uma máquina de escrever.",
    "Papyrus": "A fonte Papyrus Fantasy é uma variação da fonte Papyrus, que foi criada em 1982 por Chris Costello"
};


/*
mostra todas as fonts
var fontDiv = document.getElementById("fontfont");
  fonts.forEach(function(fonte) {
    var name = fonte.split(",");
    var p = document.createElement("p");
    p.style.fontFamily = fonte;
    p.innerText = name[0] + " - Exemplo de texto com a fonte " + name[0];
    fontDiv.appendChild(p);
  });

*/


function changeFont() {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const helloText = document.getElementById("helloText");
    const fontname = document.getElementById("fontname");
    helloText.style.fontFamily = randomFont;
    var name = randomFont.split(",");
    fontname.innerText = name[0];
    fontname.style.fontFamily = randomFont;
    document.getElementById("history").innerText = fontInfo[name[0]];
}

// Mostrar uma fonte aleatória ao carregar a página
window.onload = function() {
    changeFont();
};
