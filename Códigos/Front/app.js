//JavaScript para comportamentos e interatividade
/*O JavaScript (ou ECMAScript) é uma linguagem de 
programação que ajuda você a adicionar interatividade
à sua página da Web*/
/*O JavaScript tenta ser amigável e ele tenta fazer com
que o código funcione e forneça uma solução, mesmo que o
resultado venha a ser um erro.
Para combater essas deficiências, você pode ativar o modo
estrito, que reduz erros silenciosos, melhora o desempenho,
fornece mais avisos e menos recursos não seguros. */

'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";
    }
    else{
        this.textContent = "Light";
    }
console.log("current class name:" + className);
});
/* o método toggle para alterna o elemento para
 a classe dark-theme*/