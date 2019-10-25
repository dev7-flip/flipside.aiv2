
$(document).ready(function(){
 
 
  $(window).on('scroll', function() {
    parallaxScroll(); 
    if ($(window).scrollTop() >= $( 
      '#footer-section').offset().top + $('#footer-section'). 
        outerHeight() - window.innerHeight) { 
          let screenSize = $(window).width();
          if(screenSize > 991){
            $('.cookie-container').toggleClass('fixed');
          }
          
    } 
}); 

function parallaxScroll(){

  var scrolled = $(window).scrollTop();
  $('.bg-image').css('left',(0-(scrolled*.10))+'px');
  $('.bg-image2').css('bottom',(0-(scrolled*.50))+'px');
  $('.bg-blue').css('bottom',(0-(scrolled*0.50))+'px');
}


$()

let map = $('.flip-map');
map.on('click', function() {
  if (map.scrollWheelZoom.enabled()) {
    map.scrollWheelZoom.disable();

    }
    else {
    map.scrollWheelZoom.enable();
    }
});

  let setCookie = (name, value, days) =>  {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
        
}   
    
  $('#acceptCookie').click(function(e){
    setCookie('FDCCI', 'flip', 30);
  });

  (function(){

    function getCookie(key) {
      var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
      return keyValue ? keyValue[2] : null;
    }

  let cookie = getCookie('FDCCI');
    if(cookie === '' || cookie === null){
      setTimeout(function(){
        
        $('.cookie-container').slideToggle('slow');
      },5000);
      $('.cookie-dismissal').click(function(){
        $('.cookie-container').slideToggle('slow');

      });
      
      $('#acceptCookie').click(function(){

        $('.cookie-container').slideToggle('slow');
      });

    }else{
      return false;
    }



  
  })();



  $('.list-mobile').find('*').click(function(event){
    let id = $(this).closest('li').attr('id');  

    let screenSize = $(window).width();
    let node = event.target.nodeName
    if(screenSize <= 991){

      if(node === 'A'){
        $(this).siblings('i').toggleClass('fa-chevron-up fa-chevron-down');
       
        event.stopPropagation();
        // event.preventDefault(); 
         //prevent the click from jumping esp on hashes    
         $(`.${id}`).slideToggle("slow");
    
        }else{
  
        $(this).children('i').toggleClass('fa-chevron-down fa-chevron-up');
        $(`.${id}`).slideToggle("slow");
      }

    }

    
      
 
  });

  $('.list-mobile').click(function(e){
    let screenSize = $(window).width();
    let id = e.target.id;
    if(screenSize <= 991){
      $(this).children('i').toggleClass('fa-chevron-down fa-chevron-up');
      $(`.${id}`).slideToggle("slow");
  
    }else{
      e.preventDefault();
    }

  });

  
    $('a[href^="#"]').on('click', function(event){     
       event.preventDefault();
       $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
    });
  
    $('card-body').click(function(event){
      // event.preventDefault();
      $('card-body').toggleClass('active');
      $('.panel').css('display', 'block');
    });
  
    // sticky navbar

 
    $(window).on('scroll', function(){

       if($(window).scrollTop()) {
          $('nav').addClass('black');

       }
       else{
          $('nav').removeClass('black');
       }
    })
  
    var burgerMenu = document.getElementById('burger-menu');
  
    
  
    burgerMenu.addEventListener('click', function() {
      document.getElementById("fullNav").style.height = "100px";
      if(this.classList.toggle('close')){
        document.getElementById("fullNav").style.height = "100%";
      }
      // overlay.classList.toggle('overlay');
      $('#menu').toggleClass('overlay');
      
    });

  
    

    

   
   
    // Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();
  
    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  
  
        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            
            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");
          
            switch(e.type) {
              case 'keyup': {
                 $parent.toggleClass('js-hide-label', $this.val() == '');
              } break;
              case 'blur': {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
              } break;
              case 'focus': {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
              } break;
              default: break;
            }
        });
    } 
  
  

  
  });
  
  
  
  
  
  
  
  
  
  
  
  
  