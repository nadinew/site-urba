// don't change this function name
// used to display all the items
$(function(){
	
	var content = $('body').html();
	createPage('../', 'Référentiel du SI : Méta-modèle', function(){
		
		var menu = 'menu_savoir_plus';
		openMenu(menu);
		activeSubMenu(menu + "_Metamodele" );

		var bc = "<a href='meta.html'>En savoir plus</a>";		
        bc += ' > ' +"Méta-Modèle";
   		updateBreadCrumbPage(bc);
		$(SITE_CONTENT_SELECTOR).html(content);		
	});
})

