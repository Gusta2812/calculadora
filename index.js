let displayResultado = document.getElementById("displayResultado")

        let calculo = {
            valor1: 0,
            valor2: 0,
            funcCalcular: null
        }

        function num(){
            if(isNaN(displayResultado.value)){
                displayResultado.value = event.target.textContent
            } else { 
                if(displayResultado.value == 0){
                    displayResultado.value = event.target.textContent
                } else{
                    displayResultado.value += event.target.textContent
                }
            }  
        }
        
        function soma(v1, v2){
            return v1 + v2;
        }

        function subtracao(v1, v2){
            return v1 - v2;
        }

        function multiplicacao(v1, v2){
            return v1 * v2;
        }

        function divisao (v1, v2){
            if(v2 == 0){
                return "Erro, divisão por zeor!"
            } else {return v1 / v2;}
        }

        function elevado(v1, v2){
            return v1 ** v2;
        }   

        function limpar(){
            // .value é valor que está dentro do input
            displayResultado.value = ""

            calculo.valor1 = 0
            calculo.valor2 = 0
            calculo.funcCalcular = null
        } 

        function ponto(){
            //se tiver algum valor dentro sera adicionado o ponto, agora se não tiver, será acrescentado um 0. e o algum número que você deseja
            if(displayResultado.value === "" ||isNaN(displayResultado.value)){
                displayResultado.value = "0.";
            }
            //se o valor inserido for diferendo do que está dentro do includes será adicionada
            else if(!displayResultado.value.includes(".")){
                displayResultado.value = displayResultado.value + "."
            }
        }

        // função que atualiza o objeto calculo ao clicar nos operadores
        function clicarOperador(){
            // convertendo o valor em inserindo em number
            if(!isNaN(displayResultado.value)){
                calculo.valor1 = Number(displayResultado.value)
            }

            // trás o texto do evento que foi desparado
            let operador = event.target.textContent
            atribuirOperacao(operador)
            displayResultado.value = operador;
        }

        function atribuirOperacao(operador){
            if(operador == "+"){
                calculo.funcCalcular = soma;
            }
            else if(operador == "-"){
                calculo.funcCalcular = subtracao
            }
            else if(operador == "x"){
                calculo.funcCalcular = multiplicacao
            }
            else if(operador == "/"){
                calculo.funcCalcular = divisao
            }
            else if(operador == "^2"){
                calculo.funcCalcular = elevado
            }
        }