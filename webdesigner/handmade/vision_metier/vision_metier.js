searchEngine.searchItemsRequirements = [
   {'id':'domaine_metier', 'properties' : ['nomderemplacement'], children:[
      {'id':'macroprocessus', 'properties' : ['nomderemplacement'], children:[]}   
   ]}];
searchEngine.searchFunction = search_drawItems_vision_metier;   


function drawItem_vision_metier_domaine_metier(output, domaine_metier){
  output.push("<ul class='domaine_metier'>");
    _.each(domaine_metier, function(one_domaine_metier){
      
      output.push('<li class="icone"><div class="title-h3">');
      output.push("<a href='",one_domaine_metier.unique_page_link_id,"' >",one_domaine_metier.nomderemplacement," </a>");
      output.push("</div>");


      output.push('<li class="domaine_metier">');
      output.push("<ul class='macroprocessus '>");
        _.each(one_domaine_metier.macroprocessus, function(one_macroprocessus){
          output.push("<li class='macroprocessus  ", mpTypeToCSS(one_macroprocessus.type) ,"'>");
          output.push('<div class="macroprocessus tooltip-me" title="',one_macroprocessus.description,'">');
          output.push("<a href='",one_macroprocessus.unique_page_link_id,"'>",one_macroprocessus.nomderemplacement,"</a>");
          output.push("</div>");
          output.push("</li>");
        });
      output.push("</ul>");
      output.push("</li>");
    });
  output.push("</ul>");
}

  var savedDiagrams = {};
function createPageContent(output, all_items){

   

  output.push('<div id="detailsTabs">');  
  // création des titres
  output.push('<ul>');  

  var diagramHome = {
    "id" : 4111,
    "name" : 'Diagramme Accueil Processus'
  };

  var fakeItem = {};
  fakeItem.diagramsExploded = {};
  fakeItem.diagramsExploded["M1.1"] = [];
  fakeItem.diagramsExploded["M1.1"].push(diagramHome)
  createDiagramTab(output, fakeItem, "M1.1", savedDiagrams, "Accueil Domaine Métier", ["MACROPROCESSUS", "ENTREPRISE"]);
  createTextTab(output, 'tabs-search-metier', 'Détail Domaine Métier', 'search');

  output.push('</ul>');

  createDiagramTabContent(output, fakeItem, "M1.1");    
  createTextTabContent(output, 'tabs-search-metier', function(output){
    output.push('<div id="searchEngine-search-metier"></div>');
    output.push('<div id="searchEngine-content-search-metier">');
     drawItem_vision_metier_domaine_metier(output, all_items.domaine_metier);
     output.push('</div>');
    
  }, null);

  output.push('</div>');
}


function search_drawItems_vision_metier(all_items, searching){  
  var output = Array();
  drawItem_vision_metier_domaine_metier(output, all_items.domaine_metier);
  $('#searchEngine-content-search-metier').html(output.join(''));
}

function drawItems_vision_metier(all_items, searching) {
  createPage('../', 'La vision Métier (Macro Processus par Domaine Métier) ', function(){
setFullScreen();
    openMenu('menu_vision_metier');
     var bc = "<a href='home.html'>Le référentiel du SI</a>";
        bc += ' > ' + "Vision Métier";
    updateBreadCrumbPage(bc);    
  
    
    
    
    
    var output = [];
    createPageContent(output, all_items);

    $(SITE_CONTENT_SELECTOR).html(output.join(''));


    appendSearchEngineInput('Rechercher : ', 'vision_metier', $('#searchEngine-search-metier'), vision_metier, searchEngine, '#zone_vision_metier');

    var acc_active = false;
    if (searching) acc_active = 0;

    
    $('a').tooltip({showURL: false, fade:250});
    
    addHelpForPage("vision_metier");
    
    setToolTipsOnTitles();
    doLayoutsSpecialActions();
    activeTab('#detailsTabs', savedDiagrams);

  });
}
