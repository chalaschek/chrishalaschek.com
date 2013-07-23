(function(){
  jQuery.fn.exists = function(){return this.length>0;}

  $(document).ready(function(){

    $('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function(e){
      if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel"){
        $("html,body").stop();
      }
    });

    function isSingleColumnView(){
      return $(window).width() <= 480;
    }



    $(window).scroll(function(){
      console.log("--" + $(this).scrollTop());
      console.log();
      
      if($(this).scrollTop() > $(".section-pubs").position().top + parseInt($(".section-pubs").css("padding-top").replace("px", "")) ){
        $(".section-pubs .title").css({position: "fixed", top: 0, width: "inherit", background: "#fff", "padding-top": 10});
      }else{
        $(".section-pubs .title").css({position: "relative", top: 0});
      }
    });

    
    var updatePos = function () {
      var el = $(".me-wrap");
      var width = $(window).width();
      var height = $(window).height();
      var left = Math.max(0, (width / 2) - (el.width() / 2)) + "px";
      var top = Math.max(0, (height / 2) - (el.height() / 2)) + "px";
      el.css("position","fixed").css("left", left).css("top", top);
      //el.css({"padding-top": height/2});
    }; 

    $(window).resize(updatePos);
    updatePos();


    $(".section-pubs").css({"padding-top" : ($(window).height()-$(".section-projects").height())/2});




    // handle info hover for projects
    if(!isSingleColumnView()){
      $(".project").hover(function(){
        var el = $(this);
        el.find(".info").fadeIn();
        // auto fade out if touch enabled
        if(Modernizr.touch){
          setTimeout(function(){
            el.find(".info").fadeOut();
          }, 2000);
        }
        //el.find(".info").css("display", "block");
      }, function(){
        var el = $(this);
        el.find(".info").fadeOut();
      });
    }



    var projects = {
      trendwars: {
        name: "Trend Wars",
        what: "iOS &amp; Android game to attack/defend things trending on Twitter",
        role: "Tech Lead (CTO &amp; Co-Founder @ HashGo)",
        tech: "Unity3D, Node.js, Redis, MongoDB, AWS",
        status: "Launching August 2013",
        link: "http://trendwars.com",
        images: ["./img/trendwars/tw1.jpg", "./img/trendwars/tw2.jpg", "./img/trendwars/tw3.jpg", "./img/trendwars/tw4.jpg", "./img/trendwars/tw5.jpg"]
      },

      clados: {
        name: "Conditionality",
        what: "Web-based investment research and portfolio management platform",
        role: "Tech Lead (CTO @ Clados)",
        tech: "EXT-JS, Play Framework, Java, RDF triple store + custom inference algos, AWS",
        link: "http://clados.com",
        status: "Internal application"
      },

      phd: {
        name: "PhD Thesis",
        what: "Expressive Syndication on the Web",
        role: "Doctoral Student (University of Maryland)",
        tech: "OWL, Tableau reasoning alogrithms, Java",
        link: "http://drum.lib.umd.edu/bitstream/1903/7755/1/umi-umd-5037.pdf",
        status: "Published"
      },

      sideplay: {
        name: "Side Play",
        what: "Web-based second screen app for real-time picks and predictions",
        role: "Tech Lead (CTO &amp; Co-Founder @ HashGo)",
        tech: "Backbone.js, Websockets, Node.js, Redis, MongoDB, AWS",
        status: "Internal proof-of-concept",
        images: ["./img/sideplay/sp1.png", "./img/sideplay/sp2.png", "./img/sideplay/sp3.png", "./img/sideplay/sp4.png", "./img/sideplay/sp5.png", "./img/sideplay/sp6.png", "./img/sideplay/sp7.png", "./img/sideplay/sp8.png"]
      },

      odr: {
        name: "Open Data Registry",
        what: "Supply chain traceability platform",
        role: "Advisor @ Open Data Registry",
        tech: "Backbone.js, Node.js, RDF triple store",
        status: "Live",
        link: "http://opendataregistry.com/",
        images: ["./img/odr1.png"]
      },

      rpt: {
        name: "Rock Paper Thing",
        what: "Web-based version of Rock Paper Scissors...and then some",
        role: "Tech Lead (CTO &amp; Co-Founder @ HashGo)",
        tech: "CSS3, Backbone.js, Node.js, MongoDB, AWS",
        status: "Internal proof-of-concept",
        images: ["./img/rpt/rpt1.png", "./img/rpt/rpt2.png", "./img/rpt/rpt3.png", "./img/rpt/rpt4.png", "./img/rpt/rpt5.png", "./img/rpt/rpt6.png", "./img/rpt/rpt7.png", "./img/rpt/rpt8.png", "./img/rpt/rpt9.png", "./img/rpt/rpt10.png", "./img/rpt/rpt11.png", "./img/rpt/rpt12.png"]
      }
    }

    var projectTemplate = "" + 
        "<div class=\"details\">" + 
        "  <div class=\"name\"><%=name%></div>" +
        "  <div class=\"entry\">" +
        "    <div class=\"header\">What:</div>" +
        "    <div class=\"value\"><%=what%></div>" +
        "  </div>" +
        "  <div class=\"entry\">" +
        "    <div class=\"header\">Role:</div>" +
        "    <div class=\"value\"><%=role%></div>" +
        "  </div>" +
        "  <div class=\"entry\">" +
        "    <div class=\"header\">Tech:</div>" +
        "    <div class=\"value\"><%=tech%></div>" +
        "  </div>" +
        "  <div class=\"entry\">" +
        "    <div class=\"header\">Status:</div>" +
        "    <div class=\"value\">" +
        "    <%if(typeof link !='undefined'){%>" + 
        "       <a href='<%=link%>' target='_blank'><%=status%></a>" + 
        "    <%}else{%>" +
        "     <%=status%>" +
        "    <%}%>" +
        "      </div>" +
        "  </div>" +
        "  <%if(typeof images !='undefined' && images.length > 0){%>" +
        "  <div id='slider' class='swipe'>" +
        "    <div class='swipe-wrap'>" + 
        "   <%for(var i = 0; i < images.length; i++){%>"+
        "      <figure>" + 
        "        <div class='wrap'>" + 
        "          <img src=\"<%=images[i]%>\" />" +
        "        </div>" +
        "      </figure>" +
        "    <%}%>" +
        "    </div>" + 
        "  </div>" +
        "  <nav>" + 
        "   <ul id='position'>" +
        "   <%for(var i = 0; i < images.length; i++){%>"+
        "     <li data-idx=\"<%=i%>\" class='<%=i==0? \"on\" : \"\"%>'></li>" +
        "    <%}%>" +
        "   </ul>" +
        "  </nav>" +
        "  <%}%>"
        " </div>" +

        "</div>";

    var template = _.template(projectTemplate);


    function initCarousel(parent){
      // pure JS
      var slider = parent.find("#slider");
      if(slider.exists()){
        var bullets = parent.find("#position li");
        window.mySwipe = Swipe(slider[0], {
          continuous: true,
          auto: 3000,
          callback: function(pos) {
            setTimeout(function(){
              bullets.removeClass("on");
              $(bullets[pos]).addClass("on");
            }, 100);
          }
        });

        $("nav li").tap(function(){
          window.mySwipe.slide($(this).attr("data-idx"));
        });

      }
    }


    function showProjectDetails(wrapper, projectId){
      var slideDuration = 500;
      var fadeDuration = 750;

      // slide down method
      function slideDown(){
        wrapper.addClass("open");
        var newDetails  = $(template(projects[projectId]));
        wrapper.append( newDetails );
        wrapper.slideDown(slideDuration, function(){});
        setTimeout(function(){
          initCarousel(newDetails);
        }, 100);
      }

      // check if there is already a section
      if(wrapper.hasClass("open")){

        // init new content
        var newDetails  = $(template(projects[projectId]));
        newDetails.hide();
        // force height
        var height = wrapper.height();
        //wrapper.height(height);
        wrapper.css({height: "auto"});
        var childs = wrapper.children();
        // remove old content
        childs.fadeOut(fadeDuration, function(){
          childs.remove();
          // inject new content
          wrapper.append( newDetails );
          // fade in new content
          newDetails.fadeIn(fadeDuration, function(){});
          // init carousel
          initCarousel(newDetails);
        });

        /*
        wrapper.slideUp(slideDuration, function(){
          wrapper.children().remove();
          // inject new content
          slideDown();
        });
        */
      }else{
        slideDown();
      }
    }

    function resetDetails(){
      $(".active").removeClass("active");
      $(".active-project").remove();
    }


    function createActiveWrapper(id, preceeding){
      var result = $("<div data-id='active-" + id + "' class='active-project'></div>");
      result.insertAfter(preceeding);
      return result;
    }

    function projectClickHandler($el){
      // get project info
      var id = $el.attr("data-id");
      if(isSingleColumnView() && $el.hasClass("active")){
        $(".active-project[data-id='active-" + id + "']").slideUp(function(){
          $el.removeClass("active");
          $(this).remove();
        });
        return;
      }else if ($el.hasClass("active")){
        return;
      }

      if(!isSingleColumnView()){
        $(".project").removeClass("active");
      }
      
      $el.addClass("active");

      if(isSingleColumnView()){
        wrapper = createActiveWrapper(id, $el);
      }else{
        var wrapper = $(".active-project");
        if(!wrapper.exists()){
          wrapper = createActiveWrapper(id, $(".projects"));
        }
      }

      showProjectDetails(wrapper, id);
    }

    $(".project").tap(function(){
      projectClickHandler($(this));
    });

    // handle window resize event
    var resizeTime = null;
    $(window).resize(function(){
      if(resizeTime){
        clearTimeout(resizeTime);
      }
      var active = $(".project.active");
      if(active.exists()){
        $(".active-project").remove();
      }

      resizeTime = setTimeout(function(){
        if(active.exists()){
          resetDetails();
          projectClickHandler(active);
        }
      }, 200);
    });


    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 40
    });


  });
})();

