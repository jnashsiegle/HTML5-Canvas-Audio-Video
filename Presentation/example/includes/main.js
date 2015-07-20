jQuery(function( $ ){
      /**
       * Most jQuery.localScroll's settings, actually belong to jQuery.ScrollTo, check it's demo for an example of each option.
       * @see http://demos.flesler.com/jquery/scrollTo/
       * You can use EVERY single setting of jQuery.ScrollTo, in the settings hash you send to jQuery.localScroll.
       */
      
      // The default axis is 'y', but in this demo, I want to scroll both
      // You can modify any default like this
      $.localScroll.defaults.axis = 'xy';
        
      /**
       * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
       * also affect the >> and << links. I want every link in the page to scroll.
       */
      $.localScroll({
        target: '#content', // could be a selector or a jQuery object too.
        queue:true,
        duration:1000,
        hash:true, 
        easing: 'swing', 
        offset: 0,
        limit: true,    
        
        onBefore:function( e, anchor, $target ){         

          //alert("See!  I popup before the scrolling begins!!.");
        },
        onAfter:function( anchor, settings ){          

          //alert('And now, I popup after the scrolling ends!!.');
        }
        
      });


    });