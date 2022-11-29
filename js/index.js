//1º Pegar inputs html
const inputText = document.querySelectorAll(".inputText");
//2º Pegar elemento btn
const btnEnviar = document.getElementById("btnEnviar");
//3º Adicionando texto
const alerta = document.querySelectorAll(".alerta");

//4º Adicionando click no btn e verificando inputs
btnEnviar.addEventListener("click", function(){
    verificar();

});

function verificar(){
    //5º Mudar as cores dos elementos
    //6º Adicionando campo obrigatório
     inputText.forEach((input, index) => {
        
        if (input.value !== "") {
            input.classList.add("borda-verde");
        } else {
            input.classList.add("borda-vermelha");
            alerta[index].classList.add("troca-cor")
        }
    });  
}


   


 
  
        
    
 








/* btnEnviar.addEventListener("click", verificar);

   function verificar(){
    //4º Mudar as cores dos elementos
     inputText.forEach(input => {
        if (input.value !== "") {
            input.classList.add("borda-verde");
            
        } else {
            input.classList.add("borda-vermelha");
            }
            mostratTexto();
    });

    function mostrarTexto(){

    }
   } */

  







