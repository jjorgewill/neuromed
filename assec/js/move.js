/**
 * Created by Laptop on 07/05/15.
 */
jQuery(document).ready(function () {

    jQuery(".linkConsultB").click(function(e){
        e.preventDefault();
        jQuery('html, body').animate({ scrollTop: jQuery("#offer").offset().top},2000);
    });

    jQuery(".home").click(function(e){
        e.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0},2000);
    });


    jQuery(".linkSurgeryB").click(function(e){
        e.preventDefault();
        jQuery('html, body').animate({ scrollTop: jQuery("#surgery").offset().top},1000);
    })

    jQuery("#linkConsult").click(function(){
        jQuery('html, body').animate({ scrollTop: jQuery("#offer").offset().top},900);
    })

    jQuery("#linkSurgery").click(function(){
        jQuery('html, body').animate({ scrollTop: jQuery("#surgery").offset().top},1000);
    })
    jQuery("#linkMis").click(function(){
        jQuery('html, body').animate({ scrollTop: jQuery("#sectionP").offset().top},2000);
    })
    jQuery(".cerebroMove").click(function(e){
        e.preventDefault();
        jQuery('html, body').animate({ scrollTop: jQuery("#sectionO").offset().top},900);
    })
    jQuery(".columnMove").click(function(e){
        e.preventDefault();
        jQuery('html, body').animate({ scrollTop: jQuery("#sectionV").offset().top},900);
    })
    jQuery(".nerveMove").click(function(e){
        e.preventDefault();
        jQuery('html, body').animate({ scrollTop: jQuery("#sectionN").offset().top},900);
    })
    jQuery(".discMove").click(function(e){
        e.preventDefault();
        jQuery('html, body').animate({ scrollTop: jQuery("#sectionH").offset().top},900);
    })
    jQuery(".tumorMove").click(function(e){
        e.preventDefault();
        jQuery('html, body').animate({ scrollTop: jQuery("#sectionC").offset().top},900);
    })
    jQuery(".emergencyMove").click(function(e){
        e.preventDefault();
        jQuery('html, body').animate({ scrollTop: jQuery("#sectionE").offset().top},900);
    })
    jQuery(".contactMove").click(function(e){
        e.preventDefault();
        jQuery('html, body').animate({ scrollTop: jQuery("#contact").offset().top},2000);
    })

});
