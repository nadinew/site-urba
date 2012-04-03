function draw_processus(processus){
  var pageName = "Processus: " + processus.nomderemplacement;
  document.title = pageName;
  createPage('../', pageName, function(){

    setFullScreen();
    var mp = processus.macroprocessus[0];
    var entreprise = mp.entreprise[0];

    var menu = 'menu_vision_metier';
    if (entreprise.object_id != '21'){
      openMenu(menu);
      var bc = "<a href='vision_metier.html'>Vision Metier</a>";
      activeSubMenu(menu + '_' + entreprise.object_id);      
    } else {
      if(entreprise.object_id == '22')
           openMenu('menu_savoir_plus');
      activeSubMenu('menu_savoir_plus_Gouvernance');
      var bc = "<a href='aide.html'>En savoir plus</a>";
      bc += ' > ' + "<a href='entreprise.html?21'>Gouvernance</a>";
      
    }


    bc += ' > ' + "Processus: " + processus.nomderemplacement;  
    updateBreadCrumbPage(bc);  
    

    var output = [];
    var savedDiagrams = {};



    output.push('<div id="detailsTabs">');  
      // création des titres
      output.push('<ul>');   
        createTextTab(output, 'tabs-details', 'Fiche Processus', 'info');
        //"ACTIVITÉ"
        createDiagramTab(output, processus, "M3.1", savedDiagrams, "Décomposition en activités", ["PROCESSUS"]);
        //createDiagramTab(output, mp, "M2.1", savedDiagrams, "Diagramme du MacroProcessus", []);
        createTextTab(output, 'tabs-vision', 'Vision applicative des processus', 'info');
         createTextTab(output, 'tab-contact', "Contact", 'pencil');
      output.push('</ul>');

      createTextTabContent(output, 'tabs-details', function(output){
        createProcessusDetailsContent(output, processus)
      }, null);
      createDiagramTabContent(output, processus, "M3.1");
         // createDiagramTabContent(output, mp, "M2.1");
      createTextTabContent(output, 'tabs-vision', function(output){
        createProcessusVisionContent(output, processus)
         }, null);
      
        createTextTabContent(output, 'tab-contact', function(output){
        var domaine = processus.name;
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
         else {
    output.push('non renseigné');
  }
         
    });
 
 

    output.push('</div>');
     
    $(SITE_CONTENT_SELECTOR).html(output.join(''));
    setToolTipsOnTitles();
    activeTab('#detailsTabs', savedDiagrams);

    $(".ui-tabs-nav span").removeClass('ui-icon');
    $(".ui-tabs-nav span").addClass('ui-icon1');
  });
}

function createProcessusVisionContent(output, processus){
  if (processus.activite.length > 0){
      output.push("<ul class=''>");
        _.each(processus.activite, function(activite){
        output.push("<li class='pos2 ui-corner-all'>");
        output.push ('<div class="titleHelp tooltip-me" title="" style="cursor:help"> Activité </div>');
        output.push(activite.nomderemplacement);
        output.push("<ul class=''>");
          _.each(activite.fonction, function(one_fonction){
            output.push("<li class='pos2 ui-corner-all'>");
            output.push('<div class="titleHelp tooltip-me" title="',one_fonction.description,'"> Fonction </div>');
            
            output.push(one_fonction.nomderemplacement);
                      output.push("<ul class=''>");
              _.each(one_fonction.appli, function(one_appli){
                output.push("<li class='pos2 ui-corner-all'>");
                 output.push ('<div class="titleHelp tooltip-me"> Application</div>');
                output.push("<a href='",one_appli.unique_page_link_id,"'>",one_appli.name,"</a>");
                 output.push("<ul class=''>");
                  _.each(one_appli.quartier, function(one_quartier){
                    output.push("<li class='pos2 ui-corner-all'>");
                     output.push ('<div class="titleHelp tooltip-me">Quartier</div>');
                    output.push(one_quartier.nomderemplacement);
                    output.push("</li>");
                  });
                output.push("</ul>");
                output.push("</li>");
              });
            output.push("</ul>");
            output.push("</li>");
          });
        output.push("</ul>");
        output.push("</li>");
      });
      output.push("</ul></li>");
      output.push("</ul>");
       }
       else {
    output.push('non renseigné');
  }
}

function createProcessusDetailsContent(output, processus){
  if (processus.description.length > 0){
    addTitle(output, 'Description');

    output.push('<li>');
      output.push('<div class="description ">',processus.description, '</div>');
    output.push('</li>');
  }

  if (processus.activite.length >0){
    addTitle(output, 'Activités');

    output.push('<li class="activ">');
      output.push('<ul class="activ ">');
        _.each(processus.activite, function(activite){
      output.push('<li class="act ui-corner-all "><div class=" tooltip-me " title="',activite.description,'">'+activite.nomderemplacement,'</div>','</li>');
       });
         
      output.push('</ul>');
    output.push("</li>");
  }


  if (processus.description.length <= 0 && processus.activite.length <= 0) {
    output.push('non renseigné');
  }


  addDiagrams(output, processus);
  addHelpForPage("processus");
 
}