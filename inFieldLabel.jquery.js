(function($){

	$.fn.inFieldLabel = function( options ) {  
	
	    var settings = {
	      text			: 'default',
	      textColor		: '#666666',
	      typeColor		: '#333333'
	    };
	
	    return this.each(function() {        
	      // If options exist, lets merge them
	      // with our default settings
	      var $this = $(this);
	      
	      if ( options ) { 
	        $.extend( settings, options );
	      }
		  
	      // Tooltip plugin code here
	      $this.val(settings.text).css({'color': settings.textColor});
	      $this.focus(function(){
	      	  if ($this.val() === settings.text){
	      	      $this.val('');
	      	  }
	      }).blur(function(){
	      	  if ($this.val() === '' || $this.val() === settings.text){
	      	      $this.val(settings.text).css({'color': settings.textColor});
	      	  }
	      }).keyup(function(){
	      	  if ($this.val() === '' || $this.val() === settings.text){
	      	      $this.css({'color': settings.textColor});
	      	  } else {
	      	       $this.css({'color': settings.typeColor});
	      	  }
	      });
			
	    });
	
	};

})(jQuery);