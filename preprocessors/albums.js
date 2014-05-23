var XDate = require('xdate');
module.exports = function( context ){
    for( var i in context.resources.facebook.data ){
    	
    	var albumObj = context.resources.facebook.data[i];
    	albumObj.previewImage	= "http://graph.facebook.com/"+albumObj.id+"/picture";
		albumObj.humanTime		= new XDate(albumObj.created_time).toString('M/d/yy h(:mm)TT');           	
		
    }

    return context;
};
