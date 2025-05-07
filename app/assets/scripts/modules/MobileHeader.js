import $ from 'jquery';

class MobileHeader{
    constructor(){
        this.header = $(".header");
        this.menuIcon = $(".header__menu-icon");
        this.menuContainer = $(".header__menu-container");
        this.events();
    }
    
    events(){
        this.menuIcon.click(this.toggleMobileHeader.bind(this));
    }
    /*
    * In toggleMobileHeader() this points to 'header__menu-icon' hence we need to  use the bind method to change the pointer of this to the object of MobileHeader.
    * this.menuIcon.click("this accepts a callback function")
    here our callback function is 'toggleMobileHeader()'
    * This is a common mistake!
    */
    toggleMobileHeader(){
        //toggleClass method of jquery allows us to add and remove a class hence acting like a toggle button
        this.menuContainer.toggleClass("header__menu-container__is-visible");
        this.menuIcon.toggleClass("header__menu-icon__close");
        this.header.toggleClass("header__is-expanded");
        //console.log(this);
    }
}

export default MobileHeader;