/*

//var Person = require("./modules/Person");
import Person from "./modules/Person";

class Adult extends Person{
    letsGoOnDrive(){
        console.log("New way to make money: by RTO!");
    }
}
var john = new Adult("John Doe", "Green");
john.greet();
john.letsGoOnDrive();

var jane = new Person("Jane Doe", "Pink");
jane.greet();

*/
import MobileHeader from "./modules/MobileHeader";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";

var mobileHeader = new MobileHeader();
var revealOnScroll = new RevealOnScroll(".feature-item", "85%");
var revealOnScroll1 = new RevealOnScroll(".testimonial", "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();