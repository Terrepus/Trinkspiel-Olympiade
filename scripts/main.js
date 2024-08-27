function isMobile(){
    return /Android|iPhone/i.test(navigator.userAgent);

}

window.onload = function(){
    if (isMobile()){
        document.body.classList.add("mobile")
    }
}
