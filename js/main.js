$(document).ready(function(){


	$('.marte').on('click',()=>{
		var tamanho = $(window).width();
			if(tamanho >= 600){
				$('.medidorAzul').css("background-color","red");
				$('.dotsAzul').css("background-color","red");
				$('.azul').animate({
					width:'515px'}, 500, function(){		
					});
			}else{
				$('.pequeno2 .azul').animate({height:'0px'}, 500);
				$('.pequeno2 .medidorPreto').css("background-color","red");
				$('.pequeno2 .medidorPreto .dots').css("background-color","red");

			}
			$('.marte').animate({
				top:'-700px'}, 2000, function(){
					$('.marte').css("top","0px");	
				});
			$('.numeros li').css("color","red");
			$('.numeros li:nth-child(1)').text('9');
			$('.numeros li:nth-child(2)').text('9');
			$('.numeros li:nth-child(3)').text('9');
			$('.numeros li:nth-child(4)').text('9');
			$('.numeros li:nth-child(5)').text('9');
			$('.numeros li:nth-child(6)').text('9');
			$('.numeros li:nth-child(7)').text('9');
			$('.numeros li:nth-child(8)').text('9');
			$('.numeros li:nth-child(9)').text('9');

			
	});
	$('.franca').on('click',()=>{
		var tamanho = $(window).width();
		if(tamanho >= 600){
			$('.medidorAzul').css("background-color","#00539b");
			$('.dotsAzul').css("background-color","#00539b");
			$('.azul').animate({width:'120px'}, 500);
		}else{
			$('.pequeno2 .azul').animate({height:'330px'}, 500);
			$('.pequeno2 .medidorPreto').css("background-color","#00539b");
			$('.pequeno2 .medidorPreto .dots').css("background-color","#00539b");
		}
		$('.numeros li').css("color","#f7ea26");
		$('.numeros li:last-child').css("color","red");
		$('.numeros li:nth-child(1)').text('0');
		$('.numeros li:nth-child(2)').text('0');
		$('.numeros li:nth-child(3)').text('0');
		$('.numeros li:nth-child(4)').text('0');
		$('.numeros li:nth-child(5)').text('0');
		$('.numeros li:nth-child(6)').text('1');
		$('.numeros li:nth-child(7)').text('7');
		$('.numeros li:nth-child(8)').text('3');
		$('.numeros li:nth-child(9)').text('6');
		
			
	});

	$('.pizza').on('click',()=>{
		var tamanho = $(window).width();
		if(tamanho >= 600){
			$('.medidorAzul').css("background-color","#00539b");
			$('.dotsAzul').css("background-color","#00539b");
			$('.azul').animate({width:'177px'}, 500);
		}else{
			$('.pequeno2 .azul').animate({height:'283px'}, 500);
			$('.pequeno2 .medidorPreto').css("background-color","#00539b");
			$('.pequeno2 .medidorPreto .dots').css("background-color","#00539b");
		}
		$('.numeros li').css("color","#f7ea26");
		$('.numeros li:last-child').css("color","red");
		$('.numeros li:nth-child(1)').text('0');
		$('.numeros li:nth-child(2)').text('0');
		$('.numeros li:nth-child(3)').text('0');
		$('.numeros li:nth-child(4)').text('0');
		$('.numeros li:nth-child(5)').text('0');
		$('.numeros li:nth-child(6)').text('2');
		$('.numeros li:nth-child(7)').text('5');
		$('.numeros li:nth-child(8)').text('2');
		$('.numeros li:nth-child(9)').text('0');
			
	});

	$('.brasil').on('click',()=>{
		var tamanho = $(window).width();
		if(tamanho >= 600){
			$('.medidorAzul').css("background-color","#00539b");
			$('.dotsAzul').css("background-color","#00539b");
			$('.azul').animate({width:'233px'}, 500);
		}else{
			$('.pequeno2 .azul').animate({height:'235px'}, 500);
			$('.pequeno2 .medidorPreto').css("background-color","#00539b");
			$('.pequeno2 .medidorPreto .dots').css("background-color","#00539b");
		}
		$('.numeros li').css("color","#f7ea26");
		$('.numeros li:last-child').css("color","red");
		$('.numeros li:nth-child(1)').text('0');
		$('.numeros li:nth-child(2)').text('0');
		$('.numeros li:nth-child(3)').text('0');
		$('.numeros li:nth-child(4)').text('0');
		$('.numeros li:nth-child(5)').text('0');
		$('.numeros li:nth-child(6)').text('7');
		$('.numeros li:nth-child(7)').text('3');
		$('.numeros li:nth-child(8)').text('7');
		$('.numeros li:nth-child(9)').text('3');
			
	});

	$('.usa').on('click',()=>{
		var tamanho = $(window).width();
		if(tamanho >= 600){
			$('.medidorAzul').css("background-color","#00539b");
			$('.dotsAzul').css("background-color","#00539b");
			$('.azul').animate({width:'289px'}, 500);
		}else{
			$('.pequeno2 .azul').animate({height:'189px'}, 500);
			$('.pequeno2 .medidorPreto').css("background-color","#00539b");
			$('.pequeno2 .medidorPreto .dots').css("background-color","#00539b");
		}
		$('.numeros li').css("color","#f7ea26");
		$('.numeros li:last-child').css("color","red");
		$('.numeros li:nth-child(1)').text('0');
		$('.numeros li:nth-child(2)').text('0');
		$('.numeros li:nth-child(3)').text('0');
		$('.numeros li:nth-child(4)').text('0');
		$('.numeros li:nth-child(5)').text('0');
		$('.numeros li:nth-child(6)').text('8');
		$('.numeros li:nth-child(7)').text('9');
		$('.numeros li:nth-child(8)').text('9');
		$('.numeros li:nth-child(9)').text('1');
			
	});

	$('.india').on('click',()=>{
		var tamanho = $(window).width();
		if(tamanho >= 600){
			$('.medidorAzul').css("background-color","#00539b");
			$('.dotsAzul').css("background-color","#00539b");
			$('.azul').animate({width:'402px'}, 500);
		}else{
			$('.pequeno2 .azul').animate({height:'95px'}, 500);
			$('.pequeno2 .medidorPreto').css("background-color","#00539b");
			$('.pequeno2 .medidorPreto .dots').css("background-color","#00539b");
		}
		$('.numeros li').css("color","#f7ea26");
		$('.numeros li:last-child').css("color","red");
		$('.numeros li:nth-child(1)').text('0');
		$('.numeros li:nth-child(2)').text('0');
		$('.numeros li:nth-child(3)').text('0');
		$('.numeros li:nth-child(4)').text('0');
		$('.numeros li:nth-child(5)').text('1');
		$('.numeros li:nth-child(6)').text('0');
		$('.numeros li:nth-child(7)').text('4');
		$('.numeros li:nth-child(8)').text('3');
		$('.numeros li:nth-child(9)').text('0');
			
	});

});
