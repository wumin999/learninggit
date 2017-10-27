	$(document).ready(function() {
			//手机唯美美妆hover
			$(".app").hover(function () {
				$(this).find(".app_phone ").stop(true).fadeIn();
			},function () {
				$(this).find(".app_phone ").stop(true).fadeOut();
			})
			//搜索框左边click
			var flag = true;
			$(".ser_all").click(function() {
				if(flag) {
					flag = false;
					$(this).find(".list").css("display", "block");
				} else {
					flag = true;
					$(this).find(".list").css("display", "none");
				}
			});
			$(".list a").click(function () {
				$(".search-table .cur").text($(this).text());
			});
			$(".top_search a").click(function () {
				$(".search .txt input").val($(this).text());
			})
			//购物车hover
			$(".shop-bag").hover(function() {
				$(this).parent(".shop").addClass("hover_on");
			}, function() {
				$(this).parent(".shop").removeClass("hover_on");
			});
			$(".gwc-cont").hover(function() {
				$(this).parent(".shop").addClass("hover_on");
			}, function() {
				$(this).parent(".shop").removeClass("hover_on");
			});
			//导航栏hover
			$(".hNav li").hover(function() {
				$(this).find("dl").stop(true).slideDown();
			}, function() {
				$(this).find("dl").stop(true).slideUp();
			});
		})