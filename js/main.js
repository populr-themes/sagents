$(document).on('pop-initialized', function(){
  // Instead of listening for the document.ready event, your theme
  // should listen for document.pop-initialized. 

  $('.asset').live('initialize', function(e, asset){
	Populr.ThemeEngine.repack();
  });

  $('.asset').live('destroy', function(e, asset){
	Populr.ThemeEngine.repack();
  });  

  $('#side-region .asset-type-embedgroup .embed iframe').attr('width', '220');
  $('#side-region .asset-type-embedgroup .embed iframe').attr('height', '124');
  $('#side-region .asset-type-embedgroup .embed img').css('width', '220px');
  $('#side-region .asset-type-embedgroup .embed img').css('height', '124px');

  $('#main-region .columnizer-cols2 .asset-type-embedgroup .embed iframe').attr('width', '260');
  $('#main-region .columnizer-cols2 .asset-type-embedgroup .embed iframe').attr('height', '146');
  $('#main-region .columnizer-cols2 .asset-type-embedgroup .embed img').css('width', '260px');
  $('#main-region .columnizer-cols2 .asset-type-embedgroup .embed img').css('height', '146px');

  $('#main-region .columnizer-cols1 .asset-type-embedgroup .embed iframe').attr('width', '540');
  $('#main-region .columnizer-cols1 .asset-type-embedgroup .embed iframe').attr('height', '304');
  $('#main-region .columnizer-cols1 .asset-type-embedgroup .embed img').css('width', '540px');
  $('#main-region .columnizer-cols1 .asset-type-embedgroup .embed img').css('height', '304px');

});