export default {
	data(){
		return{
			'userphone':'',
      		'validcode':'',
			'telErr':'手机号错误',
      		'codeErr':'验证码错误',
      		'codeText':'获取验证码',
			'isErrTel':false,
	  		'isErrCode':false,
	  		'isShowCodeBtn':false,
	  		'codeBtnDisabled':false,
	  		'timer':60,
	  		'isDisable':true,
     	    'isSubmit':false
		}
	},
	methods:{
		// 获取焦点
		onFocus(obj){
			this.isEmptyInput(obj);
			let objClass = obj.currentTarget.className;
			let isHasVal = objClass.indexOf("has_input");

			if(isHasVal == -1){
				obj.currentTarget.className += " has_input";
			}
			// console.log(obj.currentTarget.className);
	    },
	    // 失去焦点
	    onBlur(obj){
	    	let objClass = obj.currentTarget.className;
	    	let objVal = obj.currentTarget.value.trim();
	    	if(objVal == ""){
	    		this.isEmptyInput(obj);
	    		return false;
	    	}else{
	    		let isHasVal = objClass.indexOf("has_input");

		        if(isHasVal == -1){
		          obj.currentTarget.className += " has_input";
		        }
	    		// 判断是否为手机号输入框
	    		if(objClass.indexOf("tel") != -1){
	    			this.checkMobile(objVal,obj);
	    		}else{
	    			this.checkMobile(this.userphone,obj);
	    			if(this.isErrTel){
	    				console.log("请输入正确的手机号码")
	    			}else{
	    				this.isValidCode(objVal,obj);
	    				if(!this.isErrCode){
	    					this.isSubmit = true;
	    					this.isDisable = false;
	    				}
	    			}
	    		}
	    	}
	    },
	    onKeyup(obj){
	    	// console.log(this.userphone);
	    	let objClass = obj.currentTarget.className;
	    	let noErrClass = objClass.replace(/error/,"");
	    	let objVal = obj.currentTarget.value.trim();
	    	// 判断是否为手机号输入框
    		if(objClass.indexOf("tel") != -1){
    			if(objVal.length == 11){
    				this.checkMobile(objVal,obj);
    			}else{
    				// console.log(objClass);
    				this.isErrTel = false;
    				obj.currentTarget.className = noErrClass;
    				// console.log(objClass);
    			}
    		}else{
    			this.checkMobile(this.userphone,obj);
    			if(this.isErrTel){
    				console.log("请输入正确的手机号码")
    			}else{
    				if(objVal.length >3){
	    				this.isValidCode(objVal,obj);
	    				if(!this.isErrCode){
	    					this.isSubmit = true;
	    					this.isDisable = false;
	    				}
	    			}
    			}
    		}
	    },
	    // 判断是否为手机号
	    checkMobile(objMobile,obj){
	    	let objClass = obj.currentTarget.className;
	    	let noErrClass = objClass.replace(/error/,"");
	    	// let regMobile = /^0?1[3|4|5|8][0-9]\d{8}$/;
	    	let regMobile = /^1(3[0-9]|4[579]|5[0-35-9]|8[0-9]|7[0135-8])[0-9]{8}$/;
	    	let mflag = regMobile.test(objMobile);
	    	if(!mflag){
	    		// console.log("手机号有误");
	    		this.isErrTel = true;
	    		this.isShowCodeBtn = false;

	    		if(objClass.indexOf("error") == -1){
	    			obj.currentTarget.className += " error";
	    		}
	    		return false;
	    	}else{
	    		// console.log("手机号正确");
	    		this.isErrTel = false;
	    		this.isShowCodeBtn = true;
	    		// this.codeText = "获取验证码";
	    		obj.currentTarget.className = noErrClass;
	    	}
	    },
	    //判断输入框是否为空
	    isEmptyInput(obj){
	      let objClassName = obj.currentTarget.className;
	      let objVal = obj.currentTarget.value.trim();
	      let delClassHasinput = objClassName.replace(/ has_input/,"");
	      let isHasVal = objClassName.indexOf("has_input");
	      if(objVal == ""){
	        this.isErrTel = false;
	        this.isErrCode = false;
	        obj.currentTarget.value="";
	        obj.currentTarget.className = delClassHasinput.replace(/ error/,"");

	        // 若手机号输入框为空 验证码按钮隐藏
	        if(objClassName.indexOf("tel") != -1){
	        	this.isShowCodeBtn = false;
	        }
	      }
	    },
	    // 设置验证码为4-6个数字或字母
	    isValidCode(code,obj){
	    	let regCode = /^[0-9]{4,6}$/;
	    	let codeflag = regCode.test(code);
	    	if(!codeflag){
	    		this.isErrCode = true;
	    		if(obj.currentTarget.className.indexOf("error") == -1){
	    			obj.currentTarget.className += " error";
	    		}
	    		// console.log("验证码错误");
	    	}else{
	    		this.isErrCode = false;
	    		let noErrClass = obj.currentTarget.className.replace(/ error/,"");
	    		obj.currentTarget.className = noErrClass;
	    		// console.log("验证码正确");
	    	}
	    },
	    //点击获取验证码
	    getCode(o){
	    	// console.log(this.timer);
	    	if(this.timer == 0){
	    		this.codeBtnDisabled = false;
	    		this.codeText = "重新获取验证码";
	    		this.timer = 60;
	    	}else{
	    		this.codeBtnDisabled = true;
	    		this.codeText = this.timer;
	    		this.timer --;
	    		let vue = this;
	    		setTimeout(()=>{
	    			vue.getCode(o);
	    		},1000)
	    	}
	    }
	}
}