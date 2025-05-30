import $ from 'jquery';

class Modal{
    constructor(){
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".close-modal");
        this.events();
    }
    events(){
        this.openModalButton.click(this.openModal.bind(this));
        this.closeModalButton.click(this.closeModal.bind(this));
        $(document).keyup(this.keyPressHandler.bind(this));
    }
    openModal(){
        this.modal.addClass("modal__is-visible");   
        return false;
    }
    closeModal(){
        this.modal.removeClass("modal__is-visible");
    }
    keyPressHandler(e){
        if(e.keyCode == 27){
            this.closeModal();
        }
    }
}

export default Modal;