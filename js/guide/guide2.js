$(function(){
	var content = $('body').html();
	createPage('../', 'Guide utilisateurs', function(){
		setFullScreen();
		var menu = 'menu_savoir_plus';
		openMenu(menu);
		activeSubMenu(menu + "_guide2");
		
		var bc = "<a href='contact.html'>En savoir plus</a>";
        bc +=  " > Guide utilisateurs";
    	updateBreadCrumbPage(bc); 
		$(SITE_CONTENT_SELECTOR).html(content);		
	});
})