var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-content");
function opentab(tabname){
    for(tablinks of tablinks){
        tablinks.classList.remove("active-link");

    }
    for(tabcontent of tabcontent){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}
