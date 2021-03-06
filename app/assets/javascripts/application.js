// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .
/* global $ */

$(document).on("turbolinks:load", function(){
  function readURL(input) {
    // ファイルが1つ読み込まれた場合
    if(input.files && input.files[0]){
      var reader = new FileReader();
      reader.onload = function (e) {
        // class="imag_prev"にsrc属性を追加
        $('.profile_image').attr('src', e.target.result);
      }
      // ファイルの中身を読み込む
      reader.readAsDataURL(input.files[0]);
    }
  }
  // ユーザーのprofile_imageの中身を変換
  $("#user_profile_image").change(function(){
    readURL(this);
  });

    /** スライドショーの処理 */
      $("#images").skippr({
        // スライドショーの変化 ("fade" or "slide")
        transition : 'fade',
        // 変化に係る時間(ミリ秒)
        speed : 5000,
        // easingの種類
        easing : 'easeOutQuart',
        // ナビゲーションの形("block" or "bubble")
        navType : 'block',
        // 子要素の種類("div" or "img")
        childrenElementType : 'div',
        // ナビゲーション矢印の表示(trueで表示)
        arrows : false,
        // スライドショーの自動再生(falseで自動再生なし)
        autoPlay : true,
        // 自動再生時のスライド切替間隔(ミリ秒)
        autoPlayDuration : 10000,
        // キーボードの矢印キーによるスライド送りの設定(trueで有効)
        keyboardOnAlways : false,
        // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
        hidePrevious : false
      });
  });

//クリックするとポップアップを表示
$(function(){
	$('.js-modal-open').on('click',function(){
		$('.js-modal').fadeIn();
		return false;
	});
	$('.js-modal-close').on('click',function(){
		$('.js-modal').fadeOut();
		return false;
	});
});

$(function() {
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});

// 文字が下からフェードインする
$(function () {
  $(window).scroll(function () {
    $(".saito").each(function () {
      var elemPos = $(this).offset().top; /* 要素の位置を取得 */
      var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight) {
        /* 要素位置までスクロール出来たときに動作する */
        $(this).addClass("saito-scroll");
      }
    });
  });
  $(window).scroll();
});


// $(document).on('turbolinks:load', function() {
//   $(function(){
//     var loader = $('.loading');

//     //ページの読み込みが完了したらアニメーションを非表示
//     $(window).on('load',function(){
//       loader.fadeOut();
//     });

//     //ページの読み込みが完了してなくても2秒後にアニメーションを非表示にする
//     setTimeout(function(){
//       loader.fadeOut();
//     },1000);
//   });
// });

  $(function(){
    //フラッシュメッセージフェードアウト時間(ミリ秒)
    $(".notice").fadeOut(20000);
  });
