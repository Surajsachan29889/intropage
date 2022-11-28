var i=0;
var txt = ['Car Price Prediction',''];
var speed = 50;

function typewriter(val) {
    const textdata=txt[val];
    if(i < textdata.length){
        document.getElementById("first-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(()=>{
            typewriter(val);
        },speed);
    }
}
typewriter(0)