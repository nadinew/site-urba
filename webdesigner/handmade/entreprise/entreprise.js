function doActionsForSingle_entreprise() {}


function draw_entreprise(entreprise){

	var pageName = "" + entreprise.nomderemplacement + " (MacroProcessus/Processus)";
	document.title = pageName;
	createPage('../', pageName, function(){
		

		if (entreprise.object_id != "21"){
			var menu = 'menu_vision_metier';
			openMenu(menu);
			activeSubMenu(menu + "_" + entreprise.object_id);			
			var bc = "<a href='" + SITE_HOST + "main/vision_metier.html'>Vision Métier</a>";
			bc += ' > ' + entreprise.nomderemplacement;

		}else{
			var menu = 'menu_savoir_plus';
			openMenu(menu);
			activeSubMenu('menu_savoir_plus_Gouvernance');			
			var bc = "<a href='" + SITE_HOST + "main/aide.html'>En savoir plus</a>";
			bc += ' > ' + entreprise.nomderemplacement;
			
		}

		updateBreadCrumbPage(bc);  

		var output = [];	

		output.push('<p>',entreprise.description, '</p>')

		output.push('<ul class="macroprocessus ">');
		_.each(entreprise.macroprocessus, function(mp){
			output.push('<li class="macroprocessus ',mpTypeToCSS(mp.type) ,'  "><div class="macroprocessus mp-title-h3 tooltip-me" title="',mp.description,'" style="cursor:pointer"><a href="',mp.unique_page_link_id, '" >', mp.nomderemplacement, '</a></div>');
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
		output.push('<li class="processus ',mpTypeToCSS(p.type), '  "><div class="processus tooltip-me" title="', p.description,'"><a href="',p.unique_page_link_id, '">', p.nomderemplacement, '</a></div>');
		output.push('</li>');
	});
	output.push('</ul>');
}

