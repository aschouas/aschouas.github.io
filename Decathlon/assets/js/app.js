(function($) {
  'use strict';

  $(function() {
    var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
      $.AMUI.fullscreen.toggle();
    });

    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
      $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
    });
  });
})(jQuery);

var baseUrl="localhost:8080/bxs/"
//


$("#loginbuttton").click(function(){
	
	var pass=$("#user-pass").val();
	
	var name=$("#user-name").val();
	
	if(pass.length==0){
		$("#user-pass")[0].placeholder="请输入密码"
		return
	}
	if(name.length==0){
		$("#user-name")[0].placeholder="请输入账号"
		return
	}
	

	if (name=='tom' && pass=='123456') {
		//总经理
		window.location.href="total.html";
	} else if (name=='jerry' && pass=='123456') {
		//区域经理
		window.location.href="region.html";
	} else if (name=='jack' && pass=='123456') {
		//门店
		window.location.href="index.html";
	} else {
		//没有权限
		confirm("你没有权限")
	}



	
	// $.ajax({
			// type: "POST",
             // url: "http://localhost:8080/bxs/login",
             // data: {uname:name,passwd:pass},
             // dataType: "JSON",
             // success: function(data){
				// self.location='admin-table.html'; 
				// window.location.href='admin-table.html';
			 // },
			 // error: function () {
				// console.log("error");
			// }
		// })
	
	
	
})