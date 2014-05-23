var XDate = require('xdate');
module.exports = function( context ){
    for( var i in context.resources.facebook.data ){
    	
    	var photoObj = context.resources.facebook.data[i];
		photoObj.humanTime		= new XDate(photoObj.created_time).toString('M/d/yy h(:mm)TT');           	
		
    }

    return context;
};
