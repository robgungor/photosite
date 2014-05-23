var XDate = require('xdate');
module.exports = function( context ){
    for( var i in context.resources.facebook.data ){

    	var photoObj = context.resources.facebook.data[i];
    	// was going to possible do something tricky here, but I think I just like source
		photoObj.previewImage 	= photoObj.source;//photoObj.images[photoObj.images.length-2].source;	
		photoObj.humanTime		= new XDate(photoObj.created_time).toString('M/d/yy h(:mm)TT');       
    	
    }
    return context;
};
