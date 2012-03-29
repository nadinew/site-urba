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
			//_.each(macroprocessus.entreprise, function(e){
				activeSubMenu(menu + "_" + f.object_id);
			//});
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
	//console.log(macroprocessus);	

 output.push('<div id="detailsTabs">');  
      // création des titres
      output.push('<ul>');   
    

       
        createTextTab(output, 'tabs-macro', 'Macro processus', 'info');
         createDiagramTab(output, macroprocessus, "M2.1", savedDiagrams, "Diagramme du Macro Processus", ["PROCESSUS","MACROPROCESSUS"]);
          createTextTab(output, 'tab-contact', "Contact", 'pencil');
               output.push('</ul>');

      
      
        
      createTextTabContent(output, 'tabs-macro', function(output){
       if (macroprocessus.description.length > 0){
		addTitle(output, 'Description');
		output.push("<li>");	
		output.push('<div class="description">',macroprocessus.description, '</div>')
		output.push("</li>");}
		else{
			output.push('non renseigné')
			output.push('</br>')
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
			else{
			output.push('non renseigné')
			output.push('</br>')
		}
		
		         }, null);


		         createDiagramTabContent(output, macroprocessus, "M2.1");
         

 createTextTabContent(output, 'tab-contact', function(output){
        var domaine = macroprocessus.name;
        var perimetre = domaine.substring (0,3);
        if ( perimetre == 'MAC' ){
          
          output.push("<li><span  class='title-h3'>",'Nom: ',"</span>","<span class ='text'> Annie Delbet</span>","</li>"); 
          output.push("<li><span  class='title-h3'>",'Courriel:',"<a href='mailto:annie.delbet@laposte.fr'>annie.delbet@laposte.fr</a>","</span>","</li>");  
          output.push("<li><span  class='title-h3'>",' Tél: ',"</span>","<span class ='text'>01 34 52 80 03</span>","</li>");           
        }   
        if ( perimetre == 'IND' ){
          
          output.push("<li><span  class='title-h3'>",'Nom: ',"</span>","<span class ='text'> Anne Sandrine Lapointe</span>","</li>"); 
          output.push("<li><span  class='title-h3'>",'Courriel:',"<a href='mailto:anne-sandrine.lapointe@laposte.fr'>anne-sandrine.lapointe@laposte.fr</a>","</span>","</li>");  
          output.push("<li><span  class='title-h3'>",' Tél: ',"</span>","<span class ='text'></span>","</li>");           
        } 
        if ( perimetre == 'FIN' ){
          
          output.push("<li><span  class='title-h3'>",'Nom: ',"</span>","<span class ='text'> Bernard Baudin</span>","</li>"); 
          output.push("<li><span  class='title-h3'>",'Courriel:',"<a href='mailto:bernard.baudin@laposte.fr'>bernard.baudin@laposte.fr</a>","</span>","</li>");  
          output.push("<li><span  class='title-h3'>",' Tél: ',"</span>","<span class ='text'></span>","</li>");           
        }
        if ( perimetre == 'REF' ){
          
          output.push("<li><span  class='title-h3'>",'Nom: ',"</span>","<span class ='text'> Mireille Deligne</span>","</li>"); 
          output.push("<li><span  class='title-h3'>",'Courriel:',"<a href='mailto:mireille.deligne@laposte.fr'>mireille.deligne@laposte.fr</a>","</span>","</li>");  
          output.push("<li><span  class='title-h3'>",' Tél: ',"</span>","<span class ='text'></span>","</li>");           
        }
        if ( perimetre == 'GOU' ){
          
          output.push("<li><span  class='title-h3'>",'Nom: ',"</span>","<span class ='text'> Dominique Giordan</span>","</li>"); 
          output.push("<li><span  class='title-h3'>",'Courriel:',"<a href='mailto:dominique.giordan@laposte.fr'>dominique.giordan@laposte.fr</a>","</span>","</li>");  
          output.push("<li><span  class='title-h3'>",' Tél: ',"</span>","<span class ='text'></span>","</li>");           
        }
        if ( perimetre == 'RH-' ){
          
          output.push("<li><span  class='title-h3'>",'Nom: ',"</span>","<span class ='text'> Sebastien Lepage</span>","</li>"); 
          output.push("<li><span  class='title-h3'>",'Courriel:',"<a href='mailto:sebastien.lepage@laposte.fr'>sebastien.lepage@laposte.fr</a>","</span>","</li>");  
          output.push("<li><span  class='title-h3'>",' Tél: ',"</span>","<span class ='text'>01 34 52 81 46</span>","</li>");           
        }
        if ( perimetre == 'GDM' ){
          
          output.push("<li><span  class='title-h3'>",'Nom: ',"</span>","<span class ='text'> Bernard Baudin</span>","</li>"); 
          output.push("<li><span  class='title-h3'>",'Courriel:',"<a href='mailto:bernard.baudin@laposte.fr'>bernard.baudin@laposte.fr</a>","</span>","</li>");  
          output.push("<li><span  class='title-h3'>",' Tél: ',"</span>","<span class ='text'></span>","</li>");           
        }
      else{
		output.push('non renseigné')
	}

        }, null);
         


		$(SITE_CONTENT_SELECTOR).html(output.join(''));
		setToolTipsOnTitles();
		 activeTab('#detailsTabs', savedDiagrams);

    $(".ui-tabs-nav span").removeClass('ui-icon');
    $(".ui-tabs-nav span").addClass('ui-icon1');
        addHelpForPage("macro");
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
