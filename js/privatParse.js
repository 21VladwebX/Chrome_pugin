$('document').ready(function(){
	let iter = 0;

	$('#checkPage').on('click',function(){

		(function items (){
			let items = [];
			let item = [];
			$.getJSON('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').promise()
																				.done(function(data) {
			
				$.each(data, function(key,val){
					item.push (` <li >  The valyuta  is ${val.ccy}, its 
						cost for buy ${val.buy} and for sale ${val.sale} </li> `);					
				items.push ({
						[val.ccy] : {
							'ccy': val.ccy,
							'buy': val.buy,
							'sale': val.sale 
						}
					});
				
				});											
				// console.log(items.length);
				// let iter = 0;
				if(iter < 1){
					$( "<ul/>", {
					"class": "my-new-list",
					html: item.join( "" )
					})
					.appendTo( "body" );
					iter ++;
				}

		  	
				let suma = $('#suma').val();
				let valyuta = $('#valyuta').val();
				let res = 0 ;
			
				if(valyuta && suma ){	
					let buy;
					console.log(items);
					for(let k = 0; k < items.length; k++){
						console.log(items[k]);
						// buy = items[k][valyuta].buy;
						if(items[k][valyuta]){
							// console.log('find');
							buy = items[k][valyuta].buy;
							break;
						}
						else{
							continue;
						}

						// break;
					}
					res =`the result is ${ buy * suma}`;

					let  result = $("<p> </p>").text(res);
					$('body').append(result);
				}

		  	});				
		})();
	})

})

