(function(){
  $(document).ready(function(){

    /*
    $(window).scroll(function(){
      var top = $(this).scrollTop();
      var offset = top * 2;
      if($(".section-projects").position().top > top){
        $(".section-projects").css({top: -offset});
      }
      $(".section-pubs").css({top: -offset});
    })
    */

    /*
    function scrollSocial(){
      var top = $(window).scrollTop();
      var offset = top * 2;
      var titleTop = $(".section-me").position().top;
      if( titleTop <  top){
        offset = top - titleTop;
        $(".linkedin").css({position: "relative", left: -offset});
        $(".facebook").css({position: "relative", left: offset});
      }else{
        $(".linkedin").css({position: "relative", left: 0});
        $(".facebook").css({position: "relative", left: 0});
      }

      var delay = $(window).width() / 6;

      if( titleTop - delay <  top){
        offset = top - titleTop - delay;
        offset = Math.max(0, offset);
        $(".twitter").css({position: "relative", left: -offset});
        $(".github").css({position: "relative", left: offset});
      }else{
        $(".twitter").css({position: "relative", left: 0});
        $(".github").css({position: "relative", left: 0});
      }
    }


    function scrollProjects(){
      var top = $(window).scrollTop();
      var offset = top * 2;
      var titleTop = $(".section-projects").position().top;
      if( titleTop <  top){
        offset = top - titleTop;
        $(".project-trendwars").css({position: "relative", left: -offset});
        $(".project-clados").css({position: "relative", left: -offset});
        $(".project-thesis").css({position: "relative", left: -offset});

        $(".project-rpt").css({position: "relative", left: offset});
      }else{
        $(".project-trendwars").css({position: "relative", left: 0});
        $(".project-rpt").css({position: "relative", left: 0});
      }

    }
    
    if(!Modernizr.touch){

      $(window).scroll(function(){
        scrollSocial();
        //scrollProjects();
      });
    }
    */

  });
})();