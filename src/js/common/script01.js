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


  // targetSelの内容をalert表示する
  var buttonAlert = function(targetSel){
    //targetSelのテキストを取得し、alert表示する
    var buttonText = targetSel.text();
    alert(buttonText);
  }

  $('.js-button-jquery').on('click','button',function(e){
    var targetSel = $(this);
    e.preventDefault();
    buttonAlert(targetSel);
  });


})();
