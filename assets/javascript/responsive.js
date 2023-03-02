
function responsive_smallscreen(slf)
{
    //navbar.ul(display = block)
    let respnav = document.getElementById("respnav");
    console.log(respnav);
    console.log(respnav.style.display);
    console.log(respnav);
    let menu_button = document.getElementsByClassName("menu_button")[0];
    if (respnav.style.visibility === "hidden" || respnav.style.visibility === "")
    {
        respnav.style.display = "block";
        respnav.style.visibility = "visible";
    }
    else
    {
        respnav.style.visibility = "hidden";
        respnav.style.display = "flex";

    }
}
