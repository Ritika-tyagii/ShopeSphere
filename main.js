/*cart js*/
let iconCart = document.querySelector('.icon-cart');
let body = document.querySelector('body');
iconCart.addEventListener('click', () =>{
    body.classList.toggle('showCart')
})

/*chat boat js */
let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += <div class="chatarea-inner user">${usermsg}</div>;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}
recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
  
   console.log(transcript);
}

mic.addEventListener("click", function(){
    recognition.start();
    console.log("Activated");
})




