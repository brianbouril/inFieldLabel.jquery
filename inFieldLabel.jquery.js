(function($){

	$.fn.inFieldLabel = function( options ) {  
	
	    var settings = {
	      text		: 'default',
	      textColor		: '#666666',
	      typeColor		: '#333333'
	    };
		
	    if ( options ) { 
	    	$.extend( settings, options );
	    }
		
	    function onFocus(){
	    	var $this = $(this);
	    	if ($this.val() === settings.text){
	      	      $this.val('');
	      	}
	    }
	    
	    function onBlur(){
	    	var $this = $(this);
	    	if ($this.val() === '' || $this.val() === settings.text){
	      		$this.val(settings.text).css({'color': settings.textColor});
	      	}
	    }
	    
	    function onKeyup(){
	    	var $this = $(this);
	    	if ($this.val() === '' || $this.val() === settings.text){
	      		$this.css({'color': settings.textColor});
	      	} else {
	      		$this.css({'color': settings.typeColor});
	      	}
	    }
	    
	    return this.each(function() {        
	      // If options exist, lets merge them
	      // with our default settings
	      var $this = $(this);
		  
	      // Bind Events
	      $this.val(settings.text).css({'color': settings.textColor});
	      $this.focus(onFocus).blur(onBlur).keyup(onKeyup);
			
	    });
	
	};

})(jQuery);