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

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";

}
function closemenu(){
    sidemenu.style.right = "-200px";
    
}

  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbysF6OXoqb7ac_uxVvijrffga83Da5pLc7QXXOxjB0I7e3JJQfa-P3eHOVB5KrKBJ5P/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
  
