

// don't change this function name
// used to display all the items
$(function(){
	
	var content = $('body').html();
	createPage('../', 'Référentiel du SI : Aide', function(){
		setFullScreen();
		var menu = 'menu_savoir_plus';
		openMenu(menu);
		activeSubMenu(menu + "_aide" );

		var bc = "<a href='" + SITE_HOST + "main/aide.html'>En savoir plus</a>";		
        bc += ' > ' +"Aide";
   		updateBreadCrumbPage(bc);
		$(SITE_CONTENT_SELECTOR).html(content);		
	});
})