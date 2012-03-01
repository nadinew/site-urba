function draw_Gouvernance(Gouvernance){

	var pageName = "La " + Gouvernance.nomderemplacement;
	document.title = pageName;
	createPage('../', pageName, function(){
		
		var menu = 'menu_savoir_plus';
		openMenu(menu);
		activeSubMenu(menu + "_Gouvernance" );
		   var bc = "<a href='aide.html'>En savoir plus</a>";
    bc += ' > ' + "Gouvernance";
    updateBreadCrumbPage(bc);  

		var output = [];	

		output.push('<p>',Gouvernance.description, '</p>')

		output.push('<ul class="macroprocessus ">');
		_.each(Gouvernance.macroprocessus, function(mp){
			output.push('<li class="macroprocessus ',mpTypeToCSS(mp.type) ,' mpaide "><div class="macroprocessus mp-title-h3 tooltip-me" title="',mp.description,'"><a href="',mp.unique_page_link_id, '" >', mp.name, '</a></div>');
				drawProcessus(output, mp);
			output.push('</li>');
		});
		output.push('</ul>');

		$(SITE_CONTENT_SELECTOR).html(output.join(''));
		setToolTipsOnTitles();
	});
}


function drawProcessus(output, mp){
	output.push('<ul class="processus">');
	_.each(mp.processus, function(p){
		output.push('<li class="processus ',mpTypeToCSS(p.type), ' paide "><div class="processus tooltip-me" title="', p.description,'"><a href="',p.unique_page_link_id, '">', p.nomderemplacement, '</a></div>');
		output.push('</li>');
	});
	output.push('</ul>');
}
