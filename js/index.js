

function func1(str) {
    let var1 = document.getElementsByClassName('btn2');
    let btnid=document.getElementById(str);
    // Loop through all elements with the class 'btn2' and change their background color to blue
    // for (let i = 0; i < var1.length; i++) {
    //     var1[i].style.backgroundColor = 'black';
    //     var1[i].style.color = 'white';
    // }
    btnid.style.backgroundColor='white';
    btnid.style.color='black';
}
function func2(str) {
    let var1 = document.getElementsByClassName('btn2');
    let btnid=document.getElementById(str);
    // Loop through all elements with the class 'btn2' and change their background color to blue
    // for (let i = 0; i < var1.length; i++) {
    //     var1[i].style.backgroundColor = 'white';
    //     var1[i].style.backgroundColor = 'black';
    // }
    btnid.style.backgroundColor='black';
    btnid.style.color='white';
}


setInterval(() => {
    let muxid=document.getElementById('mux');
    muxid.innerHTML=' Full-stack Developer';
    
}, 2000);
setInterval(() => {
    let muxid=document.getElementById('mux');
    muxid.innerHTML=' a Programmer';
    
}, 4000);
setInterval(() => {
    let muxid=document.getElementById('mux');
    muxid.innerHTML=' Dipak Paliya';
    
}, 6000);

function hamburgerbtn(){
    let var1=document.getElementById('hamburgerlist');
    if(var1.style.display=='none'){
        var1.style.display='block';
    }
    else{
        var1.style.display='none';
    }
    
    // console.log("Clicked btn");
}

