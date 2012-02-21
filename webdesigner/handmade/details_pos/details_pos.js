function draw_details_pos(details_pos) {
createPage('../', "" + details_pos.name + " (Applications par Zone)", function(){

    var output = [];

    var menu = "menu_vision_fonctionnelle";
    openMenu(menu);
    activeSubMenu(menu + "_" + details_pos.object_id);

    var bc = "<a href='" + SITE_HOST + "main/vision_fonctionnelle.html'>Vision Fonctionnelle</a>";
    bc += ' > ' + details_pos.name +'(Details couverture applicative)';
    updateBreadCrumbPage(bc);     

    createContent(output, details_pos);
    
    $(SITE_CONTENT_SELECTOR).html(output.join(''));
    setToolTipsOnTitles();
    doActionsForSingle();
    //doActionsForSingle_domainefonctionnel();    
  })
}


function createContent(output, details_pos){


	 $.each(details_pos.diagramsExploded, function(abbr, diagrams){  
          
            $.each(diagrams, function(i, d){

              //console.log(d);
  
              if (abbr == "F2.1"){
               
                output.push("<li class='domaine_fonctionnel'>");
                addDiagramBox(output, 'Plan d\'occupation des sols', d.id, details_pos.object_id); 
                  output.push("</li>");   
                  
              }
                
              if (abbr == "F3"){
         
             output.push("<li class='domaine_fonctionnel'>");
                addDiagramBox1(output, 'Couverture applicative', d.id, details_pos.object_id);
                output.push("</li>"); 
            
              } 
                        
            });
             
          }); 


if (details_pos.zone.length > 0){
	
    _.each(details_pos.zone, function(zone){
      	addTitle(output, zone.nomderemplacement);
             output.push("<span class='titleHelp tooltip-me' style='cursor: help;'>Zone</span>");
          output.push("<ul class='quart'>");
        _.each(zone.quartier, function(one_quartier){
          output.push("<li class='quart'><div class='tooltip-me quartier'>",one_quartier.nomderemplacement,"</div><div class='titleHelp tooltip-me' style='cursor: help;'>Quartier</div>");
          output.push("<ul class='app'>");
           	_.each(one_quartier.app, function(one_app){
                output.push("<li class='app'><div class='app'>");
                output.push("<a href='",one_app.unique_page_link_id,"'>",one_app.name,"</a>");
                output.push("</div>");
                
        });
            
       
       
         
             
           output.push("</li>");
              output.push("</ul>");
            output.push("</li>");
          });
        output.push("</ul>");
        output.push("</li>");
      });
      
    }
}