/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Order
* 
*/


'use strict';

// HINT: do not put all require statements at the top of the file
// unless you really need them for all functions

/**
* Description of the function
*
* @return {String} The string 'myFunction'
*/

var server = require('server');
var Transaction = require('dw/system/Transaction');
server.extend(module.superModule);

server.append('Confirm',function(req,res,next){
	
	var OrderMgr = require('dw/order/OrderMgr');
	 var order = OrderMgr.getOrder(req.querystring.ID);
	 //var orid=order;
	
	 Transaction.wrap(function(){
	order.custom.custom_order_ID = order.orderNo;
	 })
	  next();	 
});

module.exports = server.exports();
