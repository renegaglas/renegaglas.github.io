
function responsive_smallscreen(slf)
{
    //navbar.ul(display = block)
    let respnav = document.getElementById("respnav");
    console.log(respnav);
    respnav.style.display = "block";

    
    let menu_button = document.getElementsByClassName("menu_button")[0];
    menu_button.style.display = "none";
}
