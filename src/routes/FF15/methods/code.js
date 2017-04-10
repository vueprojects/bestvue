function UrlSearch() 
{
   var name,value; 
   var str=location.href; //取得整个地址栏
   var num=str.indexOf("?") 
   str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

   var arr=str.split("&"); //各个参数放到数组里
   for(var i=0;i < arr.length;i++){ 
    num=arr[i].indexOf("="); 
    if(num>0){ 
     name=arr[i].substring(0,num);
     value=arr[i].substr(num+1);
     this[name]=value;
     } 
    } 
} 
var Request=new UrlSearch(); //实例化
// alert(Request.id);



if(!Request.code){
	var fromurl=location.href;
    var url='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1af36eaa7d6f98c3&redirect_uri='+encodeURIComponent(fromurl)+'&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect';
    location.href=url;
    // alert(location.href);
}

export default {
	codeNo: Request.code
}