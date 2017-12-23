s$('document').ready(function(){

	$('#checkPage').on('click',function(){

		(function items (){
			let items = [];
			let item = [];
			$.getJSON('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').promise().done(function(data) {
			
				$.each(data, function(key,val){
					items.push ({
						[val.ccy]:{
							'buy': val.buy,
							'sale': val.sale 
						}
					});
					// $.each(data, function(key, val){
						// item.push(`<li > ${key} val ${val} </li>`) ;
						// $.each(data, function(key, val){
					item.push(`<li > ${key} val ${val} </li>`) ;
						// });
					// });
				});
				

				$( "<ul/>", {
					"class": "my-new-list",
					html: item.join( "" )
					})
				.appendTo( "body" );

		  	});
					  	
			for(let i = 0; i < item.length; i ++){
				console.log(item);	
			}
			let suma = $('#suma').val();
			let valyuta = $('#valyuta').val();
			let res ;
			// if(suma && valyuta){
				// console.log('yes');
				for (let i = 0; i < items.length; i++){
					if(valyuta == items[i]){
						let buy = parseInt(items[i].buy);
						res = buy * suma;
						console.log(`res ${res}`);
						let  result = $("<p> </p>").text(res);
						$('body').append(result);
					}
				}	
			// }		
		})();
	})
})

$.each(data, function(key,val){
				$.each(val, function(key,val){
					// console.log(`key is  ${key} an dthe val is ${val} `);	
					// items.push (` <li id=  ${key}  >  ${val}  </li>`);
					// items.push (` <li > <span> The val is $  )
				});
				items.push (` <li >  The valyuta  is ${val.ccy}, its cost for buy ${val.buy} and for sale ${val.sale} </li> `)   ;

			});