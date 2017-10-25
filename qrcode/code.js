$(function() {
	$('.config').on('click', 'p', function() {
		var anchor = $(this).attr('class');
		$(this).find('span').toggleClass('rotate');
		$('.' + anchor + 'n').slideToggle();
	})
	$('input[type=range]').on('input change', function() {
		$('.size').html($(this).val());
	})
	$('.upBtn').on('click', function() {
		$('.upload').trigger('click');
	})
	$('.upload').on('change input', function() {
		var the = this;
		if (this.value) {
			var img = new Image();
			var getUrl = function(blob) {
				return window[window.webkitURL ? 'webkitURL' : 'URL']['createObjectURL'](blob);
			};
			img.src = getUrl(this.files[0]);
			$('.logo').html(img);
		}
	})
	$('.makeEr').on('click', function() {
			var con = $('textarea').val();
			if ($.trim(con).length == 0) {
				alert('请先设置内容');
				return;
			}
			$("#qrcode").html('');
			var size = $('input[type=range]').val(),
				back = $('.background').val(),
				fore = $('.foreground').val(),
				src = $('.upload').val() == '' ? '' : $('.logo img').attr('src');
			$("#qrcode").qrcode({
				width: size,
				height: size,
				text: con, //内容
				typeNumber: 2, //计算模式
				correctLevel: 2, //二维码纠错级别
				background: back, //背景颜色
				foreground: fore, //二维码颜色
				src: src, //logo
				toImg: true //是否转化为图片
			});
			$('.download').attr('download', 'download');
			$('.download').removeClass('gray');
			setTimeout(function(){
					$('.download').attr('href', $('#qrcode img').attr('src'));
			},300)
		})
//		canvas 中的drawImage方法绘制的图片有时不显示,因为webkit绘制图片的过程是异步的,drawImage绘制图片
//		时图片可能没有及时完成,导致drawImage失败
//		可能的解决方案
//		var img=document.getElementById('img');
//		var canvas=document.getElementById('can');
//		var ctx=canvas.getContext('2d');
//		var callback=fucntion(image){
//		    if((!image)image=this;
//			canvas.width=img.width;
//			canvas.height=img.height;
//			ctx.drawImage(image,0,0);
//		}
//		if(img.complete){//check if image was already loaded by the browser
//		callback(img);
//		}else{
//		  img.onload=callback;
//		}
})
