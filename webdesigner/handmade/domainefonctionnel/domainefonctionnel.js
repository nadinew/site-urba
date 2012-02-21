function draw_domainefonctionnel(domainefonctionnel){
  createPage('../', "" + domainefonctionnel.name + " (Fonctions par Zone)", function(){

    var output = [];

    var menu = "menu_vision_fonctionnelle";
    openMenu(menu);
    activeSubMenu(menu + "_" + domainefonctionnel.object_id);

    var bc = "<a href='" + SITE_HOST + "main/vision_fonctionnelle.html'>Vision Fonctionnelle </a>";
    bc += ' > ' + domainefonctionnel.name +'(Détails plan d\'occupation des sols)';
    updateBreadCrumbPage(bc);     

    createContent(output, domainefonctionnel);
    
    $(SITE_CONTENT_SELECTOR).html(output.join(''));
    setToolTipsOnTitles();
    doActionsForSingle();
    //doActionsForSingle_domainefonctionnel();    
  })
}




function createContent(output, domainefonctionnel){
  
  $.each(domainefonctionnel.diagramsExploded, function(abbr, diagrams){  
          
            $.each(diagrams, function(i, d){

              //console.log(d);
  
              if (abbr == "F2.1"){
               
                output.push("<li class='domaine_fonctionnel'>");
                addDiagramBox(output, 'Plan d\'occupation des sols', d.id, domainefonctionnel.object_id); 
                  output.push("</li>");   
                  
              }
                
              if (abbr == "F3"){
         
             output.push("<li class='domaine_fonctionnel'>");
                addDiagramBox1(output, 'Couverture applicative', d.id, domainefonctionnel.object_id);
                output.push("</li>"); 
            
              } 
                        
            });
             
          }); 



  _.each(domainefonctionnel.zone, function(zone){
    addTitle(output, zone.nomderemplacement);
    output.push("<li class='pos2 ui-corner-all'>");
    output.push("<span class='titleHelp tooltip-me' style='cursor: help;'>Zone</span>");
    //output.push('<a>',zone.nomderemplacement,'</a>');
    
    

      output.push("<ul class='quart'>");
        _.each(zone.quartier, function(one_quartier){
          output.push("<li class='quart'><div title='",one_quartier.description,"' class='tooltip-me quartier'><div class='titleHelp tooltip-me' style='cursor: help;'>Quartier</div>");
          output.push(one_quartier.nomderemplacement);
          output.push("</div>");


          output.push("<ul class='ilot'>");
          _.each(one_quartier.ilot, function(ilot){
            output.push("<li class='ilot'><div class='titleHelp tooltip-me' style='cursor: help;'>Ilôt</div>");
            output.push(ilot.nomderemplacement);
            output.push("</div>");

              output.push("<ul class='fonction'>");
              _.each(ilot.fonction, function(fonction){
                output.push("<li class='fonction'><div class='fonction'>");
                //output.push("<a href='",fonction.unique_page_link_id,"'>",fonction.nomderemplacement,"</a>");
                output.push(fonction.nomderemplacement);
                output.push("</div>");
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


}

