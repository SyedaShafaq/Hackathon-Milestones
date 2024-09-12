let hide = document.getElementById(`hiding`)as HTMLElement
let toggle = document.getElementById(`btn`) as HTMLButtonElement

toggle.addEventListener('click', () => {
    if(hide.style.display === `none`){
        hide.style.display = `block`
    }
    else{
        hide.style.display = `none`
    }
    
})
