import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
class StickyHeader{
    constructor(){
        this.lazyImages = $(".lazyload");
        this.siteHeader = $(".header");
        this.headerTriggerElement = $(".large-hero__title");
        this.pageSections = $(".page-section");
        this.headerLinks = $(".header .primary-nav a");
        this.createWaypoints();
        this.createPageSectionWaypoints();
        this.refreshWaypoints();
    }
    
    refreshWaypoints(){
        this.lazyImages.on("load", function(){
            Waypoint.refreshAll();
        });
    }
    
    createWaypoints(){
        var stickyHeaderObject = this;
        new Waypoint({
            element : stickyHeaderObject.headerTriggerElement[0],
            handler : function(direction){
                if(direction == "down"){
                    stickyHeaderObject.siteHeader.addClass("header__dark");
                }else{
                    stickyHeaderObject.siteHeader.removeClass("header__dark");
                    stickyHeaderObject.siteHeader.removeClass("is-active");           
                }
            }
        });
    }
    createPageSectionWaypoints(){
        var stickyHeaderObject = this;
        this.pageSections.each(function(){
            var currentPage = this;
            new Waypoint({
                element : currentPage,
                handler : function(direction){
                    if(direction == "down"){
                        var matchingLink = currentPage.getAttribute("data-matching-link");
                        stickyHeaderObject.headerLinks.removeClass("is-active");
                        $(matchingLink).addClass("is-active");
                    }
                },
                offset : "15%"
            });
            
            new Waypoint({
                element : currentPage,
                handler : function(direction){
                    if(direction == "up"){
                        var matchingLink = currentPage.getAttribute("data-matching-link");
                        stickyHeaderObject.headerLinks.removeClass("is-active");
                        $(matchingLink).addClass("is-active");
                    }
                },
                offset : "-40%"
            });
        });
    }
}

export default StickyHeader;