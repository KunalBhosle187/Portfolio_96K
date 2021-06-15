
    function skill_bg_changer_html() {
     $("#skill_width_html").css('width','95%')
    }
    function skill_bg_changer_css() {
     $("#skill_width_css").css('width','95%')
    }
    function skill_bg_changer_javascript() {
     $("#skill_width_javascript").css('width','75%')
    }
    function skill_bg_changer_reactjs() {
     $("#skill_width_reactjs").css('width','67%')
    }
    function skill_bg_changer_bootstrap() {
     $("#skill_width_bootstrap").css('width','80%')
    }

    

$(document).ready(function(){
    $(".html").hover(skill_bg_changer_html);
    $(".css").hover(skill_bg_changer_css);
    $(".javascript").hover(skill_bg_changer_javascript);
    $(".reactjs").hover(skill_bg_changer_reactjs);
    $(".bootstrap").hover(skill_bg_changer_bootstrap);
     
     $("#rct_wrk_1").hover(function(){
        $("#playstation").toggle(1000);
        $("#show_1").toggle(1000);
     })
     $("#rct_wrk_2").hover(function(){
        $("#todo").toggle(1000);
        $("#show_2").toggle(1000);
     })
     $("#rct_wrk_3").hover(function(){
        $("#taste").toggle(1000);
        $("#show_3").toggle(1000);
     })

     var sidebar_progress = document.getElementById("progress_bar");

          var totalheight = document.body.scrollHeight - window.innerHeight;
        window.onscroll = function(){
        var progress = (window.pageYOffset / totalheight) * 100;
        sidebar_progress.style.height = progress + "%";

        
    }
     
});
