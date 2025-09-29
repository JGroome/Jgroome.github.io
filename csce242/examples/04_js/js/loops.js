document.getElementById("btn-display").onclick = () => {
    const displaysection = document.getElementById("loop-result");
    const ul = document.createElement("ul");
    
    for(let i=0; i < 10; i++){
        displaysection.innerHTML += i;
    }    
}