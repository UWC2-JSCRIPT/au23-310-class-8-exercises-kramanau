let color = 255;

const lowerColorVal = () => {
    if(color === 0){
        clearInterval(makeDark);
        return;
    }
    color -= 1;
    document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`
}

const makeDark = setInterval(lowerColorVal, 500);