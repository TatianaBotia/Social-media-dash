const check= document.getElementById('checkbox');
let themeLight = document.querySelector(".light");
let themeDark = document.querySelector(".dark");
check.addEventListener('change',e =>{
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark-theme');
        themeDark.classList.remove("statusOFF")
        themeDark.classList.add("statusON");
        themeLight.classList.add("statusOFF")
    }else{
        document.documentElement.setAttribute('data-theme','light-theme');
        themeLight.classList.remove("statusOFF")
        themeLight.classList.add("statusON");
        themeDark.classList.add("statusOFF")
    }
})