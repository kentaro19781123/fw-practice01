/*****
 *
 * alerts
 *
 *****------------------------------------------------------------------*/
(function () {
  'use strict';

  // shortcut
  var doc = document;

  /**
   * jquery
   *--------------------------------------------------*/


  // 〜 practice01の課題をここに記述 〜
  var buttonAlert = function(targetSel){
    var buttonText = targetSel.text();
    alert(buttonText);
  }

  $('.js-button-jquery button').on('click',function(){
    var targetSel = $(this);
    buttonAlert(targetSel);
  });


})();
