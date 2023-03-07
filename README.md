# Normalize

 A partir do JavaScript ES 6 (2015), existe um recurso chamado Normalize que permite substituir acentos por caracteres sem acentuação.
 Para brasileiros e latinos isso ajuda a não quebrar a aplicação com nomes locais. 


No exemplo só deixei letras e número.
 ```JavaScript
function convertName(nameInput){

return nameInput.normalize("NFD").replace(/[^a-zA-Z\s0-9]/g, "");
}

convertName("São Paulo")

// output "Sao Paulo"
 ```
 
 Mas é possível alterar a string com outras opções.
 
 
