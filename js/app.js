
 var twittearButton = document.getElementById('twittear-button');

function clickTwittear(){
   
    var textAreaContainer = document.getElementById('text-container');
    var textAreaValue = textAreaContainer.value;
    var printText = document.getElementById('print-text');
    printText.innerText = textAreaValue;
    
}


twittearButton.addEventListener('click', clickTwittear);