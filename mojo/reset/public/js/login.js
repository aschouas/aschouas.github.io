$(function() {

})

function dologin(){

	if ($("#logname").val()=='tom' && $("#logpass").val()=='123456') {
		//总经理
		window.location.href="reset/total.html";
	} else if ($("#logname").val()=='jerry' && $("#logpass").val()=='123456') {
		//区域经理
		window.location.href="reset/region.html";
	} else if ($("#logname").val()=='jack' && $("#logpass").val()=='123456') {
		//门店
		window.location.href="reset/index.html";
	} else {
		//没有权限
		disp_confirm()
	}


}


function disp_confirm(){
  var r=confirm("你没有权限")
  // if (r==true){
  //   document.write("You pressed OK!")
  // }else{
  //   document.write("You pressed Cancel!")
  // }
}