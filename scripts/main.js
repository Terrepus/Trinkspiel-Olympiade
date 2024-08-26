function isMobile(){
    return /Android|iPhone/i.test(navigator.userAgent);

}
console.log(isMobile());

window.onload = function(){
    if (isMobile()){
        document.body.classList.add("mobile")
    }
}
