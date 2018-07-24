function marquee(options){ 
	let fc,cn;
	if(!options){ 
		throw new Error("Missing parameter"); 
	return false; 
	} 
	var id = options.id, 
		delay = options.delay || '0.6s', 
		timingFunction = options.timingFunction || 'ease', 
		interval = options.interval || 1000,
	    	scale = options.scale || 1; 
	if(!id){ 
		throw new Error("Missing id"); 
		return false; 
	} 
	var element = document.getElementById(id); 
	var element_height = element.clientHeight; 
	var timer = setInterval(function(){ 
		fc = element.children[0]; 
		cn = fc.cloneNode(true); 
		element.appendChild(cn); 
		element.style.transition = 'top '+ delay + ' ' + timingFunction; 
		element.style.top = '-'+ element_height*scale +'px'; 
		setTimeout(function(){ 
			element.removeChild(fc); 
			element.style.transition = 'none'; 
			element.style.top = '0px'; 
		},800); 
	},interval); 
} 
