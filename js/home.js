$(function(){
	if($.browser.msie && $.browser.version < 9 )
	{		
		$('body').html('Pour le moment, ce site n&rsquo; est pas disponible pour IE version inférieure à 9. Merci de changer de navigateur' );	
	}
	if ($.browser.opera){
		$('body').html('Pour le moment, ce site n&rsquo; est pas disponible pour Opera. Merci de changer de navigateur' );	
	}
	if ($.browser.Chrome){
		$('body').html('Pour le moment, ce site n&rsquo; est pas disponible pour Google Chrome. Merci de changer de navigateur' );	
	}
	
	var content = $('body').html();
	createPage('../', 'Une cartographie du SI Courrier:pourquoi?', function(){
		var menu = 'menu_accueil';
		openMenu(menu);
				 var bc = "";
        bc +=  "Le référentiel du SI";



    updateBreadCrumbPage(bc); 
		$(SITE_CONTENT_SELECTOR).html(content);		
	});
})