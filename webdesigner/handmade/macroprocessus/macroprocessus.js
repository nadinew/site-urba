function doActionsForSingle_macroprocessus() {}

function draw_macroprocessus(macroprocessus){
	var pageName = "Macro Processus: " + macroprocessus.nomderemplacement;
	document.title = pageName;
	createPage('../', pageName, function(){
		setFullScreen();
		var f = macroprocessus.entreprise[0];
		if (f.object_id != "21"){
			var menu = 'menu_vision_metier';
			openMenu(menu);			
			_.each(macroprocessus.entreprise, function(e){
				activeSubMenu(menu + "_" + e.object_id);
			});
			var bc = "<a href='vision_metier.html'>Vision Metier</a>";
			
		}else{
			openMenu('menu_savoir_plus');
			activeSubMenu('menu_savoir_plus_Gouvernance');
			var bc = "<a href='aide.html'>En savoir plus</a>";
		    bc += ' > ' + "<a href='entreprise.html?21'>Gouvernance</a>";
		}
		
		bc += ' > ' + "Macroprocessus: " + macroprocessus.nomderemplacement;
    	updateBreadCrumbPage(bc);  

		var output = [];
		var savedDiagrams = {};	
		var mp = macroprocessus.entreprise[0];


 output.push('<div id="detailsTabs">');  
      // création des titres
      output.push('<ul>');   
    
        createDiagramTab(output, mp, "M2.1", savedDiagrams, "Diagramme du Macro Processus", []);
        createTextTab(output, 'tabs-macro', 'Macro processus', 'info');
        createTextTab(output, 'tabs-mp', 'Diagramme du Macro processus', 'image');
         output.push('</ul>');

      
      createDiagramTabContent(output, mp, "M2.1");
         
        
      createTextTabContent(output, 'tabs-macro', function(output){
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
			addDiagrams(output, macroprocessus);
			output.push('</ul>');
		
			}
		
		         }, null);

	
createTextTabContent(output, 'tabs-mp', function(output){
output.push('<ul>');
      _.each(macroprocessus.diagramsExploded, function(diagrams){
        _.each(diagrams, function(d){
        	if (d.type == "M2.1 Macro-processus") {
          output.push("<li class='association-link'><a href='diagram", d.id ,".html'>",d.name,"</a></li>");}

        });
       
 
  });
   output.push('</ul>');
}, null);

		$(SITE_CONTENT_SELECTOR).html(output.join(''));
		setToolTipsOnTitles();
		 activeTab('#detailsTabs', savedDiagrams);

    $(".ui-tabs-nav span").removeClass('ui-icon');
    $(".ui-tabs-nav span").addClass('ui-icon1');
        addHelpForPage("entreprise");
	});
}



		/*if (macroprocessus.description.length > 0){
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
}*/
