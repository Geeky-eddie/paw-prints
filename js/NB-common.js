
setTimeout( function(){
	if( $(this).width() >=768 ) {
		$height = ($('div.sampleheight').height()); 
		console.log($height);
		$('#contact_rescue_page_new_feedback_form').height($height-20);
	}
}, 4000); 

setTimeout( function(){
	if( $(this).width() >=768 ) {
		$height = ($('div.sampleheight').height()); 
		console.log($height);
		$('#contact_general_page_new_feedback_form').height($height-20);
	}
}, 4000); 