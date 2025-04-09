 function colorirDia(){
    // Pegar valor de campo de dia
    let days = document.getElementById('day').value;
    
    // Pega o valor do campo de cor
    let color = document.getElementById('color').value;

    // Pega os elementos da tabela calendário
    let calendar = document.getElementById('calendar');

    // Verifica se o campo de dia foi prenchido
    if(!days){
        alert('Favor informar o dia');
    } else if((days > 0) && (days < 31)){
        // Se o número de dias está no intervalo
        //aplicará a cor na célula do calendário
        let td = calendar.getElementsByTagName('td')[parseInt(days)+1];
        td.style.backgroundColor = color;
    } else{
        alert('Favor informar um dia do calendário');
    }

   // Guarda a célula da tabela 
   let elementos = document.querySelectorAll('td');

   // Declara e inicializa contadores
   let contadorAzul = 0, contadorVerde = 0, contadorRosa = 0, contadorRoxo = 0; 

   // Loop para verificar o estilo de cada célula e contar quantas tem cor e qual cor
   for (let i = 0; i < elementos.length; i++){
    // obtém o estilo computado do elemento atual
    var estilo = window.getComputedStyle(elementos[i]);

    // Obtém a cor de fundo atual da célula
    var corEstilo = estilo.backgroundColor;

    // Verifica a cor e incrementa contador correspondente
    if(corEstilo === "rgb(173, 216, 230)" || corEstilo === "lightblue"){
        contadorAzul++;
        console.log(contadorAzul);
    } else if(corEstilo === "rgb(152, 215, 152)" || corEstilo === "palegreen"){
        contadorVerde++;
        console.log(contadorVerde);
    } else if(corEstilo === "rgb(255, 182, 193)" || corEstilo === "lightpink"){
        contadorRosa++;
        console.log(contadorRosa);
    } else if (corEstilo === "rgb(106, 90, 205)" || corEstilo === "slateblue"){
        contadorRoxo++;
        console.log(contadorRoxo);
    }

   }

 }