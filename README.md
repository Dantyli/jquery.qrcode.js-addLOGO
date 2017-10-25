插件调用方法:<br/>
		$("#qrcode").qrcode({<br/>
			&nbsp; width: 200,<br/>
			&nbsp; height: 200,<br/>
			&nbsp; text: "支持汉字展示", //内容<br/>
			&nbsp; typeNumber: 1, //计算模式<br/>
			&nbsp; correctLevel: 2, //二维码纠错级别<br/>
			&nbsp; background: "#ffffff", //背景颜色<br/>
			&nbsp; foreground: "#000000", //二维码颜色<br/>
			&nbsp; src: 'img/dantyli.png', //logo图片<br/>
			&nbsp; toImg: false //是否转化为图片,默认为false<br/>
		});<br>
		基于此插件的<a href="https://dantyli.github.io/jquery.qrcode.js-addLOGO/qrcode/qrcode.html">二维码生成器</a>
