

function drawItem_vision_fonctionnelle_domaine_fonctionnel(output, domaine_fonctionnel){
  output.push("<ul class='domaine_fonctionnel'>");
    _.each(domaine_fonctionnel, function(one_domaine_fonctionnel){


      output.push("<li class='icone'><div class='domaine_fonctionnel tooltip title-h3'>");
      output.push("<a href='",one_domaine_fonctionnel.unique_page_link_id,"'>",one_domaine_fonctionnel.name,"</a>");
      output.push("</li>");


      output.push("<li class='domaine_fonctionnel icone'><div class='domaine_fonctionnel tooltip '>");
        output.push("<ul class='domaine_fonctionnel1'>");


          $.each(one_domaine_fonctionnel.diagramsExploded, function(abbr, diagrams){            
            $.each(diagrams, function(i, d){

              //console.log(d);

              if (abbr == "F2.1"){
                output.push("<li class='domaine_fonctionnel'>");
                addDiagramBox(output, 'Plan d\'occupation des sols', d.id, one_domaine_fonctionnel.object_id); 
                  output.push("</li>");   
              }
              if (abbr == "F3"){

             output.push("<li class='domaine_fonctionnel'>");
                addDiagramBox1(output, 'Couverture applicative', d.id,one_domaine_fonctionnel.object_id);
            //console.log(one_domaine_fonctionnel.object_id);
                output.push("</li>");   
              }              
            });
          });

          
          
        output.push("</ul>");
      output.push("</li>");
        });
      output.push("</ul>");
     
    }






function drawItems_vision_fonctionnelle(all_items, searching) {
  createPage('../', 'La vision Fonctionnelle', function(){
    openMenu('menu_vision_fonctionnelle');
  var bc = "<a href='" + SITE_HOST + "main/home.html'>Le référentiel du SI</a>";
        bc += ' > ' + "Vision Fonctionnelle";
    updateBreadCrumbPage(bc);    
  

    
    var output = [];
    drawItem_vision_fonctionnelle_domaine_fonctionnel(output, all_items.domaine_fonctionnel);
    
    $(SITE_CONTENT_SELECTOR).html(output.join(''));
    var acc_active = false;
    if (searching) acc_active = 0;
    $('a').tooltip({showURL: false, fade:250});
    setToolTipsOnTitles();
    doLayoutsSpecialActions();
  });
}


