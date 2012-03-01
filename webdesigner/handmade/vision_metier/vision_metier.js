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



function search_drawItems_vision_metier(all_items, searching){  
  var output = Array();
  drawItem_vision_metier_domaine_metier(output, all_items.domaine_metier);
  $('#container #center .content').html(output.join(''));
}

function drawItems_vision_metier(all_items, searching) {
  createPage('../', 'La vision Métier (Macro Processus par Domaine Métier) ', function(){

    openMenu('menu_vision_metier');
     var bc = "<a href='home.html'>Le référentiel du SI</a>";
        bc += ' > ' + "Vision Métier";
    updateBreadCrumbPage(bc);    
  
    appendSearchEngineInput('Rechercher : ', 'vision_metier', $('#top_of_page'), vision_metier, searchEngine, '#zone_vision_metier');
    var output = Array();
    drawItem_vision_metier_domaine_metier(output, all_items.domaine_metier);
    
    $(SITE_CONTENT_SELECTOR).html(output.join(''));
    var acc_active = false;
    if (searching) acc_active = 0;

    
    $('a').tooltip({showURL: false, fade:250});
    
    addHelpForPage("vision_metier");
    
    setToolTipsOnTitles();
    doLayoutsSpecialActions();


  });
}
