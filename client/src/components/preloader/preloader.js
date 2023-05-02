 //preloader
function preloader(){
    const loader=document.querySelector('.preload');
    loader.style.display='block';
}
function preloaderOff(){
    const loader=document.querySelector('.preload');
    loader.style.display='none';
}

export{
    preloader,
    preloaderOff
}