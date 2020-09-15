$(function () {
	const styleBox = new RESUME("style-box");
	//打招呼
	styleBox.load("<p><div class='writecode introduce-text'>/*</div>");
	styleBox.load("<div class='writecode introduce-text'>&nbsp;*嗨，我是李军</div>");
	styleBox.load("<div class='writecode introduce-text'>&nbsp;*我想用代码做一个简单的自我介绍</div>");
	styleBox.load("<div class='writecode introduce-text'>&nbsp;*让我们开始吧,我们先来让所有的变化都以动画的效果来显示</div>");
	styleBox.load("<div class='writecode introduce-text'>*/</div></p>");

	// 设置动画
	styleBox.load("<p><div class='writecode'><span class='selector-text'>*</span> {</div>");
	styleBox.load("<div class='writecode'>&nbsp;<span class='attribute-text'>-webkit-transition</span>: <span class='value'> all 1s</span>;</div>");
	styleBox.load("<div class='writecode'>}</div></p>");

	// 介绍
	styleBox.load("<p><div class='writecode introduce-text'>/*</div>");
	styleBox.load("<div class='writecode introduce-text'>&nbsp;*看起来似乎没什么变化，不要着急，接下来我们加个背景色</div>");
	styleBox.load("<div class='writecode introduce-text'>*/</div></p>");

	// 设置背景颜色
	styleBox.load("<p><div class='writecode'><span class='selector-text'>html</span> {</div>");
	styleBox.load("<div class='writecode'>&nbsp;<span class='attribute-text'>background</span>: #2b4b6b;</div>");
	styleBox.setClass("html", [{
		"name": "background",
		"val": "#2b4b6b"
	}]);
	styleBox.load("<div class='writecode'>}</div></p>");

	// 改字体颜色
	styleBox.load("<p><div class='writecode introduce-text'>/*</div>");
	styleBox.load("<div class='writecode introduce-text'>&nbsp;*接下来我们把字体变亮一点吧</div>");
	styleBox.load("<div class='writecode introduce-text'>*/</div></p>");
	styleBox.load("<p><div class='writecode'><span class='selector-text'>#style-box, #work-box</span> {</div>");
	styleBox.load("<div class='writecode'>&nbsp;<span class='attribute-text'>color</span>: #eee;</div>");
	styleBox.setClass("#style-box", [{
		"name": "color",
		"val": "#eee"
	}]);
	styleBox.setClass("#work-box", [{
		"name": "color",
		"val": "#eee"
	}]);
	styleBox.load("<div class='writecode'>}</div></p>");



	// 加个框
	styleBox.load("<p><div class='writecode introduce-text'>/*</div>");
	styleBox.load("<div class='writecode introduce-text'>&nbsp;*这样似乎不太好看，我们给它加个框吧</div>");
	styleBox.load("<div class='writecode introduce-text'>*/</div></p>");
	styleBox.load("<p><div class='writecode'><span class='selector-text'>.box</span> {</div>");
	styleBox.load("<div class='writecode'>&nbsp;<span class='attribute-text'>padding</span>: 15px;</div>");
	styleBox.load("<div class='writecode'>&nbsp;<span class='attribute-text'>margin</span>: 30px;</div>");
	styleBox.load("<div class='writecode'>&nbsp;<span class='attribute-text'>box-shadow</span>: 20px 20px 30px rgba(0, 0, 0, 0.1),</div>");
	styleBox.load("<div class='writecode'>&nbsp;&nbsp;&nbsp;&nbsp;-20px -20px 30px rgba(255, 255, 255, .1);</div>");
	styleBox.addClass("#style-box", "box");
	styleBox.load("<div class='writecode'>}</div></p>");

	//设置代码高亮
	styleBox.load("<p><div class='writecode introduce-text'>/*</div>");
	styleBox.load("<div class='writecode introduce-text'>&nbsp;*代码看不清楚？来点高亮吧！</div>");
	styleBox.load("<div class='writecode introduce-text'>*/</div></p>");
	styleBox.load("<p><div class='writecode'><span class='selector'>.attribute</span> {</div>");
	styleBox.load("<div class='writecode'>&nbsp;<span class='attribute'>color</span>: #64D5EA;</div>"); //这里也要改颜色
	styleBox.addClass(".attribute-text", "attribute");
	styleBox.load("<div class='writecode'>}</div></p>");
	styleBox.load("<p><div class='writecode'><span class='selector'>.selector</span> {</div>");
	styleBox.load("<div class='writecode'>&nbsp;<span class='attribute'>color</span>: #E69F0F;</div>"); //这里也要改颜色
	styleBox.addClass(".selector-text", "selector");
	styleBox.load("<div class='writecode'>}</div></p>");
	styleBox.load("<p><div class='writecode'><span class='selector'>.introduce</span> {</div>");
	styleBox.load("<div class='writecode'>&nbsp;<span class='attribute'>color</span>: #8f8c81;</div>"); //这里也要改颜色
	styleBox.addClass(".introduce-text", "introduce");
	styleBox.load("<div class='writecode'>}</div></p>");


	styleBox.load("<p><div class='writecode introduce'>/*</div>");
	styleBox.load("<div class='writecode introduce'>&nbsp;*现在我们差不多可以开始写我的简历了</div>");
	styleBox.load("<div class='writecode introduce'>*/</div></p>");

	//显示简历框
	

	var workBox = new RESUME("work-box");
	workBox.setClass("#work-box", [{
		"name": "display",
		"val": "block"
	}]);
	workBox.addClass("#work-box", "box ");

	workBox.load("<h1 class='writecode'>李军</h1>");
	workBox.load("<div class='writecode'>邮箱：2562402511@qq.com</div>");
	workBox.load("<div class='writecode'>github:<a href='https://github.com/lijun1999' target='_blank'>https://github.com/lijun1999</a></div>");

	//教育经历
	workBox.load("<h2 class='writecode'>教育经历</h2>");
	workBox.load("<div class='lr-box writecode'> <span class='lr-box-left'>成都信息工程大学</span> <span>2017.09 - 至今</span> </div>");
	workBox.load("<div class='lr-box writecode'> <span class='lr-box-left'>通信工程 | 本科</span> <span >成都</span> </div>");
	workBox.load("<div class='writecode'>相关课程：C语言程序设计、计算机网络、信号与系统、通信原理、数字信号处理</div>");

	//专业技能
	workBox.load("<h2 class='writecode'>专业技能</h2>");
	workBox.load("<ul>");
	workBox.load("<li class='writecode'>熟练使用HTML，CSS，Javascript等开发语言，进行可读性高的W3C规范代码编程</li>");
	workBox.load("<li class='writecode'>熟悉掌握Vue框架及Element UI组件库</li>");
	workBox.load("<li class='writecode'>熟练掌握微信小程序开发，有uni-app开发经验</li>");
	workBox.load("<li class='writecode'>熟练掌握Photoshop，能设计网页原型，将UI设计转化为符合W3C规范的静态页面 </li>");
	workBox.load("<li class='writecode'>熟悉使用Git工具进行协同开发，团队配合意识良好，能进行前端代码的敏捷开发</li>");
	workBox.load("</ul>");

	//项目经历
	workBox.load("<h2 class='writecode'>项目经历</h2>");

	workBox.load("<ul>");
	workBox.load("<div class='lr-box writecode'> <span class='lr-box-left project-title '>动态简历</span> <span class='project-time'>2019.11 - 2020.05</span> </div>");
	workBox.load("<li class='writecode'>源码链接：<a href='https://github.com/lijun1999/resume' target='_blank'>https://github.com/lijun1999/resume</a></li>");
	workBox.load("<li class='writecode'>预览链接：<a href='https://lijun1999.github.io/resume/' target='_blank'>https://lijun1999.github.io/resume/</a></li>");
	workBox.load("<li class='writecode'>描述：该项目实现了一个简历的制作过程，利用CSS3实现过渡、动画、阴影和弹性布局。</li>");
	workBox.load("</ul>");

	workBox.load("<ul>");
	workBox.load("<div class='lr-box writecode'> <span class='lr-box-left project-title '>流浪大师设备智能管理系统</span> <span class='project-time'>2019.11 - 2020.05</span> </div>");
	workBox.load("<li class='writecode'>源码链接：<a href='https://github.com/lijun1999/lldsms' target='_blank'>https://github.com/lijun1999/lldsms</a></li>");
	workBox.load("<li class='writecode'>流浪大师设备智能管理系统是一个设备管理网站，配合RFID硬件使用。</li>");
	workBox.load("<li class='writecode'>主要负责系统网站的前端所有模块的开发，处理前端代码的系统性能问题和代码模块化问题，提升了代码的可读性和健壮性.</li>");
	workBox.load("<li class='writecode'>运用Vue中的指令和axios与后台接口对接，进行数据交互和页面渲染，实现功能模块的判断</li>");
	workBox.load("<li class='writecode'>使用Element UI组件库减少项目工程量，加快开发进度.</li>");
	workBox.load("<li class='writecode'>移动端使用uni-app生成H5页面和Android客户端</li>");
	workBox.load("</ul>");

	workBox.load("<ul>");
	workBox.load("<div class='lr-box writecode'> <span class='lr-box-left project-title '>参观成信(未上线)</span> <span class='project-time'>2019.11 - 2020.05</span> </div>");
	workBox.load("<li class='writecode'>源码链接：<a href='https://gitee.com/lijun1999/visitcx' target='_blank'>https://gitee.com/lijun1999/visitcx</a></li>");
	workBox.load("<li class='writecode'>参观成信是成都信息工程大学的非官方导览小程序，可为公众提供校园导览等服务。</li>");
	workBox.load("<li class='writecode'>主要负责实现首页，学校介绍页，校园导览页，校园美景的渲染等业务的要求。</li>");
	workBox.load("<li class='writecode'>使用flex弹性布局解决界面相关的对齐居中等问题。</li>");
	workBox.load("<li class='writecode'>通过优化小程序内部跳转url和页面显示逻辑实现了多页面复用。</li>");
	workBox.load("<li class='writecode'>使用腾讯地图API实现校园景点标记和路线规划</li>");
	workBox.load("</ul>");



	workBox.load("<h2 class='writecode'>个人总结</h2>");
	workBox.load("<ul>");
	workBox.load("<li class='writecode'>对新的知识具有求知性，可以较快的接受理解知识</li>");
	workBox.load("<li class='writecode'>具备良好的沟通协作能力，可以更好更快的融入团队</li>");
	workBox.load("<li class='writecode'>做事沉稳、冷静、善于思考从而解决问题</li>");
	workBox.load("<li class='writecode'>具备高度的责任心与优秀的适应能力</li>");
	workBox.load("</ul>");

	styleBox.load("<p><div class='writecode introduce'>/*</div>");
	styleBox.load("<div class='writecode introduce'>&nbsp;*对于文本，我们可以再做一点微调</div>");
	styleBox.load("<div class='writecode introduce'>*/</div></p>");

	styleBox.load("<p><div class='writecode'><span class='selector'>#work-box h2</span> { </div>");
	styleBox.load("<div class='writecode'>&nbsp;<span class='attribute'>border-bottom</span>: <span class='value'>1px solid #ccc</span>;</div>");
	styleBox.setClass("#work-box h2", [{
		"name": "border-bottom",
		"val": "1px solid #ccc"
	}]);
	styleBox.load("<div class='writecode'>&nbsp;<span class='attribute'>padding-bottom</span>: <span class='value'>5px</span>;</div>");
	styleBox.setClass("#work-box h2", [{
		"name": "padding-bottom",
		"val": "5px"
	}]);

	styleBox.load("<p><div class='writecode'><span class='selector'>#work-box a</span> { </div>");
	styleBox.load("<div class='writecode'>&nbsp;<span class='attribute'>text-decoration</span>: <span class='value'>none</span>;</div>");
	styleBox.setClass("#work-box a", [{
		"name": "text-decoration",
		"val": "none"
	}]);
	styleBox.load("<div class='writecode'>&nbsp;<span class='attribute'>color</span>: <span class='value'>wheat</span>;</div>"); //这里颜色也要改
	styleBox.setClass("#work-box a", [{
		"name": "color",
		"val": "#eee"
	}]);
	styleBox.load("<div class='ritecode'>}</div></p>");

	styleBox.load("<p><div class='introduce writecode'>/*</div>");
	styleBox.load("<div class='introduce writecode'>&nbsp;*这样基本上就差不多了</div>");
	styleBox.load("<div class='introduce writecode'>&nbsp;*");
	styleBox.load("<div class='introduce writecode'>&nbsp;*如果您想和我联系</div>");
	styleBox.load("<div class='introduce writecode'>&nbsp;*QQ：2562402511</div>");
	styleBox.load("<div class='introduce writecode'>&nbsp;*微信：lj1537lj</div>");
	styleBox.load("<div class='introduce writecode'>&nbsp;*最后非常感谢您愿意时间看完我的简历！</div>");
	styleBox.load("<div class='introduce writecode'>&nbsp;*/</div></p>");
	styleBox.setClass("#style-box", [{
		"name": "display",
		"val": "none"
	}]);

});

let time = 0;
class RESUME {
	constructor(id) {
		this._id = id;
	}
	load(code, second) {
		const id = this._id;
		let _second = second ? second : 1000;
		_second = time + _second;
		setTimeout(function () {
			$("#" + id).append(code);
			$('#' + id).scrollTop($('#' + id)[0].scrollHeight);
		}, _second);
		time = _second;
	}
	setClass(el, styles, second) {
		let _second = second ? second : 0;
		_second = time + _second;
		for (var i in styles) {
			setTimeout(function () {
				$(el).css(styles[i].name, styles[i].val);
			}, _second);
		}
		time = _second;
	}
	addClass(el, className) {
		const second = time;
		setTimeout(function () {
			$(el).addClass(className);
		}, second);
	}
}