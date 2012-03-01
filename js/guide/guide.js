$(function(){
	var content = $('body').html();
	createPage('../', 'Guide de modélisation', function(){
		setFullScreen();
		var menu = 'menu_savoir_plus';
		openMenu(menu);
		activeSubMenu(menu + "_guide");
		
		var bc = "<a href='contact.html'>En savoir plus</a>";
        bc +=  " > Guide de modélisation";
    	updateBreadCrumbPage(bc); 
		$(SITE_CONTENT_SELECTOR).html(content);		
	});
})