
var savedDiagrams = {};


function draw_domainefonctionnel(domainefonctionnel){
  createPage('../', "Domaine Fonctionnel : " + domainefonctionnel.name + " ", function(){

    var output = [];

    var menu = "menu_vision_fonctionnelle";
    openMenu(menu);
    activeSubMenu(menu + "_" + domainefonctionnel.object_id);

    var bc = "<a href='vision_fonctionnelle.html'>Vision Fonctionnelle </a>";
    bc += ' > ' + domainefonctionnel.name;
    updateBreadCrumbPage(bc);     

    setFullScreen();
    createContent(output, domainefonctionnel);
    
    $(SITE_CONTENT_SELECTOR).html(output.join(''));
    activeTab('#detailsTabs', savedDiagrams);
    setToolTipsOnTitles();
    doActionsForSingle();
    //doActionsForSingle_domainefonctionnel();    
  })
}




function createContent(output, domainefonctionnel){
  

output.push('<div id="detailsTabs">');  
  // création des titres
  output.push('<ul>');      
    createDiagramTab(output, domainefonctionnel, "F3", savedDiagrams, "Couverture Applicative", ["COMPOSANTAPPLICATIF"]);
    createTextTab(output, 'tabs-couverture', 'Décomposition applicative', 'info');
    createDiagramTab(output, domainefonctionnel, "F2.1", savedDiagrams, "Plan d'occupation des sols", []);  
    createTextTab(output, "tabs-pos" , 'Décomposition fonctionnelle', 'info');    
  output.push('</ul>');
  
  
  createDiagramTabContent(output, domainefonctionnel, "F3"); 
  createTextTabContent(output, 'tabs-couverture', function(output){
    drawCouvertureApplicativeContent(output, domainefonctionnel);
  }, null);  
  createDiagramTabContent(output, domainefonctionnel, "F2.1"); 
  createTextTabContent(output, 'tabs-pos', function(output){
      drawPOSContent(output, domainefonctionnel);
  }, null);  
  
output.push('</div>');
}



function drawCouvertureApplicativeContent(output, domainefonctionnel){
_.each(domainefonctionnel.zone, function(zone){
  output.push("<li class='zone pos2 ui-corner-all'>");
  //addTitle(output, zone.nomderemplacement);
    output.push("<div class='titleHelp tooltip-me' style='cursor: help;'>Zone</div>");
    output.push(zone.nomderemplacement);
    output.push("<ul class='quart'>");
      _.each(zone.quartier, function(one_quartier){
        output.push("<li class='quart pos2 ui-corner-all'><div class='tooltip-me quartier'>",one_quartier.nomderemplacement,"</div><div class='titleHelp tooltip-me' style='cursor: help;'>Quartier</div>");
          output.push("<ul class='app'>");
            _.each(one_quartier.app, function(one_app){
              output.push("<li class='app'><div class='app'>");
              output.push("<a href='",one_app.unique_page_link_id,"'>",one_app.name,"</a>");
              output.push("</div>");
              output.push("</li>");
            });          
          output.push("</ul>");
        output.push("</li>");
      });
    output.push("</ul>");
  output.push("</li>");
});  

}



function drawPOSContent(output, domainefonctionnel){

  //output.push('<ul>');
 _.each(domainefonctionnel.zone, function(zone){
    //addTitle(output, zone.nomderemplacement);
    output.push("<li class='zone pos2 ui-corner-all'>");
    output.push("<div class='titleHelp tooltip-me' style='cursor: help;'>Zone</div>");
      output.push(zone.nomderemplacement);
      output.push("<ul class='quart'>");
        _.each(zone.quartier, function(one_quartier){
          output.push("<li class='quart pos2 ui-corner-all'><div title='",one_quartier.description,"' class='tooltip-me quartier'><div class='titleHelp tooltip-me' style='cursor: help;'>Quartier</div>");
          output.push(one_quartier.nomderemplacement);
          output.push("<ul class='ilot'>");
          _.each(one_quartier.ilot, function(ilot){
            output.push("<li class='ilot pos2 ui-corner-all'><div class='titleHelp tooltip-me' style='cursor: help;'>Ilôt</div>");
            output.push(ilot.nomderemplacement);
              output.push("<ul class='fonction'>");
              _.each(ilot.fonction, function(fonction){
                output.push("<li class='fonction pos2 ui-corner-all'><div class='titleHelp tooltip-me' style='cursor: help;'>Fonction</div>");
                output.push("<a href='",fonction.unique_page_link_id,"'>",fonction.nomderemplacement,"</a>");
                //output.push(fonction.nomderemplacement);
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
  //output.push('</ul>');  
}

