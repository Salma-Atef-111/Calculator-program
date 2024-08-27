const display = document.getElementById('display');
const audio = new Audio("Click - Sound Effect (HD)(MP3_160K)-[AudioTrimmer.com].mp3");

function playsound(){
    audio.play();
}
function appendToDisplay(input){
    display.value += input ;
    playsound();
}
function toClearDisplay(){
    display.value = '';
    playsound();
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
    playsound();

}