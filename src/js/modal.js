function btnModal(){
    const btnToggleModal = document.querySelectorAll("[data-modal-control]")
    for(let i=0; i<btnToggleModal.length; i++){
        btnToggleModal[i].addEventListener("click", () => {
            let valueDataModal = btnToggleModal[i].getAttribute("data-modal-control")
            console.log(valueDataModal)
            document.getElementById(valueDataModal).classList.toggle("show__modal")
        })
    }
}
btnModal()