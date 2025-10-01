jQuery(function($) {
  // 2秒後に背景画像をフェードイン
  setTimeout(function() {
	$(".section_001 .sectionWrap").addClass("bg-show");
  }, 2000);
  setTimeout(function() {
	  $(".section_001").addClass("bg-show");
	}, 2000);

  // さらに下の要素を順番にフェードイン
 setTimeout(function() {
   $(".section_001 .sectionWrap .sectionInner > *:not(.title):not(.whoWhen)").each(function(index) {
	 var $el = $(this);
	 setTimeout(function() {
	   $el.css("opacity", "1");
	 }, index * 500); // 要素ごとに0.5秒ディレイ
   });
 }, 2000);
});
jQuery(function($) {
  const options = {
	root: null,
	threshold: 0.2 // 画面の20%が入ったら発火に緩める
  };

  const observer = new IntersectionObserver(function(entries) {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		console.log("SHOW:", entry.target); // ★ デバッグ
		$(entry.target).addClass("show");
	  }
	});
  }, options);

  // すべての section を監視（.section_001 は初期表示だから無視してOK）
  $("section").each(function() {
	if (!$(this).hasClass("section_001")) {
	  observer.observe(this);
	}
  });
});

	jQuery(function ($) {
	  var plan_time = [
		'2025/12/31 23:59:59'
	  ];

	  $time = $('#time');
	  $ptimes = $('#ptimes');
	  $ptimeDate = $('#ptimeDate');
	  var $numberD = $('#numberD');
	  var $numberH = $('#numberH');
	  var $numberM = $('#numberM');
	  var $numberS = $('#numberS');

	  
	  var showRemain = function (diff) {
		var s, m, h, d;
		if (diff < 0) diff = 0; // 下限0
		s = (diff % 60000) / 1000;
		s = Math.floor(s); // 小数点不要
		diff /= 60000;
		m = Math.floor(diff % 60);
		diff /= 60;
		h = Math.floor(diff % 24);
		diff /= 24;
		d = Math.floor(diff);
		$numberD.text(d);
		$numberH.text(h);
		$numberM.text(m);
		$numberS.text(s);
	  };


	  var now = new Date();

	  // PROCESS PLAN TIMES

	  // GET PLAN TIME ITEM
	  function get_plan_time() {
		for( t = 0; t < plan_time.length; t++ ) {
		  now = new Date();
		  this_goal = new Date(plan_time[t]);
		  this_diff = this_goal - now;
		  if( this_diff > 0 ) {
			set_times_date_html( t+1, plan_time[t] );
			return plan_time[t];
		  }
		}
		set_times_date_html( 0, false );
		return false;
	  }

	  function set_times_date_html( times, valdate ) {
		if( valdate ) {
		  $ptimes.text(times);
		  t_date = new Date(valdate);
		  str_date = (t_date.getMonth() + 1) + '/' + t_date.getDate();
		  $ptimeDate.text(str_date);
		} else {
		  $ptimes.text('~');
		  $ptimeDate.text('~/~');
		}
	  }

	  var goal_time_str = get_plan_time();
	  console.log(goal_time_str);
	  var goal = new Date(goal_time_str);

	  var diff = goal - now;
	  
	  if (diff > 0) {
		var loop_time = setInterval(function () {
		  if (diff > 0) {
			now = new Date();
			diff = goal - now;
			showRemain(diff);
		  } else {
			goal_time_str = get_plan_time();
			console.log(goal_time_str);
			if( goal_time_str ) {
			  now = new Date();
			  goal = new Date(goal_time_str);
			  diff = goal - now;
			} else {
			  $time.css({
				fontSize: 32,
				top: 445,
				right: 375
			  }).text("締め切りました");
			  clearInterval(loop_time);
			}
		  }
		}, 1000);
	  } else {
		$time.css({
		  fontSize: 32,
		  top: 445,
		  right: 375
		}).text("締め切りました");
	  }
	});
