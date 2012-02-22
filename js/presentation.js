$(function(){
	var content = $('body').html();

	createPage('../', 'Présentation', function(){
		var menu = 'menu_accueil';
		openMenu(menu);
			var bc = "<a href='" + SITE_HOST + "main/home.html'>Référentiel du SI</a>";
        bc +=  " > Référentiel du SI";

    	updateBreadCrumbPage(bc); 
		$(SITE_CONTENT_SELECTOR).html(content);		
	});
})