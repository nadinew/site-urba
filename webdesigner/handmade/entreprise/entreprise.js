function doActionsForSingle_entreprise() {}


function draw_entreprise(entreprise){

	var pageName = "" + entreprise.nomderemplacement ;
	document.title = pageName;
	createPage('../', pageName, function(){
	
	setFullScreen();
    var mp = entreprise.macroprocessus[0];	

		if (entreprise.object_id != "21"){
			var menu = 'menu_vision_metier';
			openMenu(menu);
			activeSubMenu(menu + "_" + entreprise.object_id);			
			var bc = "<a href='vision_metier.html'>Vision Métier</a>";
			bc += ' > ' + entreprise.nomderemplacement;

		}else{
			var menu = 'menu_savoir_plus';
			openMenu(menu);
			activeSubMenu('menu_savoir_plus_Gouvernance');			
			var bc = "<a href='aide.html'>En savoir plus</a>";
			bc += ' > ' + entreprise.nomderemplacement;
			
		}

		updateBreadCrumbPage(bc);  

		var output = [];
		var savedDiagrams = {};	

		output.push('<p>',entreprise.description, '</p>')

		


    output.push('<div id="detailsTabs">');  
      // création des titres
      output.push('<ul>');   
    
        createDiagramTab(output, entreprise, "M1", savedDiagrams, "Vue d'ensemble du domaine Métier", ["MACROPROCESSUS"]);
        createTextTab(output, 'tabs-macro', 'Macro processus', 'info');
         output.push('</ul>');

      
      createDiagramTabContent(output, entreprise, "M1");
        
      createTextTabContent(output, 'tabs-macro', function(output){
        output.push('<ul class="macroprocessus ">');
		_.each(entreprise.macroprocessus, function(mp){
			output.push('<li class="macroprocessus ',mpTypeToCSS(mp.type) ,'  "><div class="macroprocessus mp-title-h3 tooltip-me" title="',mp.description,'" style="cursor:pointer"><a href="',mp.unique_page_link_id, '" >', mp.nomderemplacement, '</a></div>');
				drawProcessus(output, mp);
			output.push('</li>');
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



function drawProcessus(output, mp){
	output.push('<ul class="processus">');
	_.each(mp.processus, function(p){
		output.push('<li class="processus ',mpTypeToCSS(p.type), '  "><div class="processus tooltip-me" title="', p.description,'"><a href="',p.unique_page_link_id, '">', p.nomderemplacement, '</a></div>');
		output.push('</li>');
	});
	output.push('</ul>');
}

