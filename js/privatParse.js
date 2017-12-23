$('document').ready(function(){

	$('#checkPage').on('click',function(){

		(function items (){
			let items = [];
			let item = [];
			$.getJSON('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').promise()
																				.done(function(data) {
			
				$.each(data, function(key,val){
					item.push (` <li >  The valyuta  is ${val.ccy}, its 
						// cost for buy ${val.buy} and for sale ${val.sale} </li> `);					
					items.push ({
						[val.ccy]:{
							ccy: val.ccy,
							buy: val.buy,
							sale: val.sale 
						}
					});
				
				});											
				// console.log(items.length);
				$( "<ul/>", {
					"class": "my-new-list",
					html: item.join( "" )
					})
				.appendTo( "body" );

		  	
				let suma = $('#suma').val();
				let valyuta = $('#valyuta').val();
				// console.log(valyuta);
				let res ;
				// if(suma && valyuta){
				
					let bol = false;
					// console.log(items.length);
					// while(bol){
						for (let i = 0; i < items.length; i++){
							console.log(items[i]);
							let itw = items[i].ccy;
							console.log(itw);
							if(valyuta == itw){
								console.log('yes');
								console.log(items[i]);
								let buy = parseInt(items[i].buy);
								console.log(items[i].buy);
								res = buy * suma;
								console.log(`RESULT IS ${res}`);
								let  result = $("<p> </p>").text(res);
								$('body').append(result);
								bol = true;
								// break;
							}
						}	
					// }
					
				// }	

		  	});				
		})();
	})

})

