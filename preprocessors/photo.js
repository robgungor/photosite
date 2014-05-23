var XDate = require('xdate');

module.exports = function( context ){
    for( var i in context.resources.facebook.data ){

    	var photoObj = context.resources.facebook.data[i];

		photoObj.previewImage = photoObj.images[0].source;	
		photoObj.humanTime	= new XDate(photoObj.created_time).toString('M/d/yy h(:mm)TT');
        context.resources.facebook.data[i] = photoObj;

        if(context.parameters.photo_id == photoObj.id) context.resources.currentPhoto =  photoObj;
    }
    
    return context;
};
