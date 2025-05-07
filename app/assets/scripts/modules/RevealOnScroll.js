import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
    constructor(els, offset){
        this.itemsToReveal = $(els);
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }
    hideInitially(){
        this.itemsToReveal.addClass("reveal-item");
    }
    createWaypoints(){
        var revealOnScrollObject = this;
        this.itemsToReveal.each(function(){
            var currentElement = this;
            new Waypoint({
                element: currentElement,
                handler: function(){
                    $(currentElement).addClass("reveal-item__is-visible");
                },
                offset: revealOnScrollObject.offsetPercentage
            });
        });
    }
}
export default RevealOnScroll;