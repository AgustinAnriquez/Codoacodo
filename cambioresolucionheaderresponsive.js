var btn = document.getElementById('nav__links__ul__responsive-button--btn'),
    header = document.getElementById('header'),
    contador = 0;


function cambioHeader__headerResponsive(){

    if(contador == 0)
    {

        header.classList.add('header__responsive');
        contador=1

     }
    else
    {
        
        header.classList.remove('header__responsive');
        contador=0;

    }

}


btn.addEventListener('click', cambioHeader__headerResponsive ,true)