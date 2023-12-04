let color = 0;

const lowerColorVal = () => {
    if(color > 255){
        return;
    }
    color += 1;
    document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`
    requestAnimationFrame(lowerColorVal);
}

requestAnimationFrame(lowerColorVal);