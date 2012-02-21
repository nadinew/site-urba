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
      var bc = "<a href='" + SITE_HOST + "main/vision_metier.html'>Vision Metier</a>";
      activeSubMenu(menu + '_' + entreprise.object_id);      
    } else {
      openMenu('menu_savoir_plus');
      activeSubMenu('menu_savoir_plus_Gouvernance');
      var bc = "<a href='" + SITE_HOST + "main/aide.html'>En savoir plus</a>";
      bc += ' > ' + "<a href='" + SITE_HOST + "main/entreprise.html?21'>Gouvernance</a>";
      
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
        createDiagramTab(output, processus, "M3.1", savedDiagrams, "Décomposition en activités", []);
        createTextTab(output, 'tabs-vision', 'Vision applicative des processus', 'info');
      output.push('</ul>');

      createTextTabContent(output, 'tabs-details', function(output){
        createProcessusDetailsContent(output, processus)
      }, null);
      createDiagramTabContent(output, processus, "M3.1");
      createTextTabContent(output, 'tabs-vision', function(output){
        createProcessusVisionContent(output, processus)
      }, null);

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
        output.push ('<span class="titleHelp tooltip-me" title="" style="cursor:help"> Activité </span>');
        output.push(activite.nomderemplacement);
        output.push("<ul class=''>");
          _.each(activite.fonction, function(one_fonction){
            output.push("<li class='pos2 ui-corner-all'>");
            output.push('<span class="titleHelp tooltip-me" title="',one_fonction.description,'"> Fonction </span>');
            
            output.push(one_fonction.nomderemplacement);
                      output.push("<ul class=''>");
              _.each(one_fonction.appli, function(one_appli){
                output.push("<li class='pos2 ui-corner-all'>");
                 output.push ('<span class="titleHelp tooltip-me"> Application</span>');
                output.push("<a href='",one_appli.unique_page_link_id,"'>",one_appli.name,"</a>");
                 output.push("<ul class=''>");
                  _.each(one_appli.quartier, function(one_quartier){
                    output.push("<li class='pos2 ui-corner-all'>");
                     output.push ('<span class="titleHelp tooltip-me">Quartier</span>');
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
          output.push('<li class="act ui-corner-all "><div class="app tooltip-me "  title="',activite.description,'">',activite.nomderemplacement,'</div>');
          output.push("</li>");
        });
      output.push('</ul>');
    output.push("</li>");
  }


  if (processus.description.length <= 0 && processus.activite.length <= 0) {
    output.push('non renseigné');
  }


  addDiagrams(output, processus);
}