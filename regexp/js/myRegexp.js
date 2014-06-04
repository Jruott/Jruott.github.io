var pageRegexp = {
	regexp1 : "^[\u4e00-\u9fa5]+$",
	regexp2 : "[^\x00-\xff]",     //即ASCII编码不在0-255的字符，[^..-..]:不在什么范围内
	regexp3 : "\\n\\s*\\r",   // \n\s*\r, \n匹配一个换行符，\s匹配一个空白字符，包括 \n,\r,\f,\t,\v,\r匹配一个回车符，可在用\n替换即可消除代码中的多余空行
	regexp4 : "\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\.\\w+([-.]\\w+)*$",   //"\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
	regexp5 : "^http://([\\w-]+\.)+[\\w-]+(/[\\w-./?%&=]*)?$",   //重点理解(/[\w-./?%&=]*)?
	regexp6 : "^(\(\\d{3,4}\)|\\d{3,4}-)?\\d{7-8}$",  //^(\(\d{3,4}\)|\d{3,4}-)?\d{7-8}$,匹配(028)1234567，(0816)12323332,3322-221223222
	regexp7 : "[1-9][0-9]{4,}",    //第一位为1-9中的一个数字，然后后面的数字在0-9中产生，4次以上，也就是qq号码是不以0开头的5位数字以上的号码
	regexp8 : "^[1-9]\\d{5}$",   //中国邮政，或者“[1-9]\\d{5}(?!\\d)”,(?!\\d)就是后面不再跟数字
	regexp9 : "\\d{15}|\\d{18}",    //身份证号码，15位或者18位
	regexp10 : "^(\\d{4})(-|\/)(\\d{1,2})\2(\\d{1,2})$",   //^\\d{4}(-|\/)\\d{1,2}(-|\/)\\d{1,2}$,正则表达式里，有4个group，每个group就是那些用圆括号“()”括起来的单元。用\2可以引用你第二的group。
	regexp11 : "^[1-9]\\d*$", //正整数
	regexp12 : "^-[1-9]\\d*$",   //负整数
	regexp13 :	"^-?[1-9]\\d*$",	//整数
	regexp14 :	"^[1-9]\\d*|0$",   //"^([1-9]\\d*)|0" ,?????
	regexp15 :  "^-[0-9]\\d*|0$",
	regexp16 :  "^[1-9]\\d*\.\\d*|0\.\\d*[1-9]\\d*$",
	regexp17 :	"^-[1-9]\\d*\.\\d*|0\.\\d*[1-9]\\d*$",
	regexp18 :	"^[A-Za-z0-9\u4e00-\u9fa5]+$"
}
window.onload = function(){
	var matchBox = $id("matchBox");
	matchBox.onfocus = function(){
		//alert(matchBox.value);
		//alert(matchBox.textContent);
		//alert(matchBox.innerHTML);  火狐下没有innerHTML，只有textContent
		//(matchBox.innerText);
		if(matchBox.value == "在此输入待匹配文本"){
			matchBox.value = "";
		}
	}
	matchBox.onblur = function(){
		if(matchBox.value == ""){
			matchBox.value = "在此输入待匹配文本";
		}
	}
	
	var regexpBox = $id("regexpBox");
	regexpBox.onfocus = function(){
		if(regexpBox.value == "在此输入正则表达式"){
			regexpBox.value = "";
		}
	}
	regexpBox.onblur = function(){
		if(regexpBox.value == ""){
			regexpBox.value = "在此输入正则表达式";
		}
	}
	
	//点击测试匹配
	var regexpBottom = $id("regexpBottom");
	regexpBottom.onclick = function(){
		regexpFun(matchBox.value,regexpBox.value);
	}
	
	//鼠标移上变色
	var ulList = $name("li");
	for(var i = 0; i < ulList.length; i++){
			ulList[i].onmouseover = function(){
				this.style.background = "#D3EEF4";
				this.style.color = "#d07c64";
			}
			ulList[i].onmouseout = function(){
				this.style.background = "#edf5f7";
				this.style.color = "#816d65";
			}
			ulList[i].onclick = function(){
				var option = this.value;
				switch(option){
					case 1 : regexpFun(matchBox.value,pageRegexp.regexp1);break;
					case 2 : regexpFun(matchBox.value,pageRegexp.regexp2);break;
					case 3 : regexpFun(matchBox.value,pageRegexp.regexp3);break;
					case 4 : regexpFun(matchBox.value,pageRegexp.regexp4);break;
					case 5 : regexpFun(matchBox.value,pageRegexp.regexp5);break;
					case 6 : regexpFun(matchBox.value,pageRegexp.regexp6);break;
					case 7 : regexpFun(matchBox.value,pageRegexp.regexp7);break;
					case 8 : regexpFun(matchBox.value,pageRegexp.regexp8);break;
					case 9 : regexpFun(matchBox.value,pageRegexp.regexp9);break;
					case 10 : regexpFun(matchBox.value,pageRegexp.regexp10);break;
					case 11 : regexpFun(matchBox.value,pageRegexp.regexp11);break;
					case 12 : regexpFun(matchBox.value,pageRegexp.regexp12);break;
					case 13 : regexpFun(matchBox.value,pageRegexp.regexp13);break;
					case 14 : regexpFun(matchBox.value,pageRegexp.regexp14);break;
					case 15 : regexpFun(matchBox.value,pageRegexp.regexp15);break;
					case 16 : regexpFun(matchBox.value,pageRegexp.regexp16);break;
					case 17 : regexpFun(matchBox.value,pageRegexp.regexp17);break;
					case 18 : regexpFun(matchBox.value,pageRegexp.regexp18);break;
				}
			}
	}
	
}

function $id(x){
	return document.getElementById(x);
}

function $name(x){
	return document.getElementsByTagName(x);
}
function regexpFun(matchBox,regexpBox){
	var reg = new RegExp(regexpBox);
	//var reg = /^\d{3}$/;  
	document.getElementById("resultBox").innerText = reg.test(matchBox);
}
