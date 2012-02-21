function doActionsForSingle_macroprocessus() {}

function draw_macroprocessus(macroprocessus){
	var pageName = "Macro Processus: " + macroprocessus.nomderemplacement;
	document.title = pageName;
	createPage('../', pageName, function(){
		var f = macroprocessus.entreprise[0];
		if (f.object_id != "21"){
			var menu = 'menu_vision_metier';
			openMenu(menu);			
			_.each(macroprocessus.entreprise, function(e){
				activeSubMenu(menu + "_" + e.object_id);
			});
			var bc = "<a href='" + SITE_HOST + "main/vision_metier.html'>Vision Metier</a>";
			
		}else{
			openMenu('menu_savoir_plus');
			activeSubMenu('menu_savoir_plus_Gouvernance');
			var bc = "<a href='" + SITE_HOST + "main/aide.html'>En savoir plus</a>";
		    bc += ' > ' + "<a href='" + SITE_HOST + "main/entreprise.html?21'>Gouvernance</a>";
		}
		
		bc += ' > ' + "Macroprocessus: " + macroprocessus.nomderemplacement;
    	updateBreadCrumbPage(bc);  

		var output = [];
		if (macroprocessus.description.length > 0){
		addTitle(output, 'Description');
		output.push("<li>");	
		output.push('<div class="description">',macroprocessus.description, '</div>')
		output.push("</li>");
		 	
}
			if (macroprocessus.processus.length > 0){
			addTitle(output, 'Processus');
			output.push('<ul class="macroprocessus ',mpTypeToCSS(macroprocessus.type), ' ">')
				_.each(macroprocessus.processus, function(p){
				output.push('<li class="processus ',mpTypeToCSS(p.type), ' "><div class="processus tooltip-me" title="',p.description,'"><a href="',p.unique_page_link_id, '">', p.nomderemplacement, '</a></div>');
					//drawProcessus(output, mp);
				output.push('</li>');
			});

			output.push('</ul>');
		
			}
		
			
	
			addDiagrams(output, macroprocessus);
      		output.push("</ul></li>");
      	
if (macroprocessus.description.length <= 0 && macroprocessus.processus.length <= 0) {
  output.push('non renseigné');
}

      	
	

		$(SITE_CONTENT_SELECTOR).html(output.join(''));
		setToolTipsOnTitles();
	});	
}
