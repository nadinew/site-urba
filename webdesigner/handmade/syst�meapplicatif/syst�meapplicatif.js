function draw_systèmeapplicatif(systèmeapplicatif){
  var pageName = "Système Applicatif: " + systèmeapplicatif.name;
  document.title = pageName;
  createPage('../', pageName, function(){
    
    var menu = 'menu_vision_applicative';
  openMenu(menu);

   var bc = "<a href='vision_applicative.html'>Vision Applicative</a>";
    bc += ' > Système Applicatif: ' + systèmeapplicatif.name;
    updateBreadCrumbPage(bc);    
  
    var output = [];
    var savedDiagrams = {};
    

  output.push('<div id="detailsTabs">');  
      // création des titres
      output.push('<ul>');   
        createTextTab(output, 'tabs-details', 'Fiche Système Applicatif', 'info');
        createDiagramTab(output, systèmeapplicatif, "A1", savedDiagrams, "Echange Inter Système Applicatif", ["SYSTÈMEAPPLICATIF", "COMPOSANTAPPLICATIF"]);
         createDiagramTab(output, systèmeapplicatif, "F2.2", savedDiagrams, "Architecture >>Systèmes Applicatifs par Domaine Fonctionnel", []);
       
      output.push('</ul>');


createDiagramTabContent(output, systèmeapplicatif, "A1");    
createDiagramTabContent(output, systèmeapplicatif, "F2.2");   
   createTextTabContent(output, 'tabs-details', function(output){
        createSADetailsContent(output, systèmeapplicatif)
      }, null);

output.push('</div>');
     
    $(SITE_CONTENT_SELECTOR).html(output.join(''));
    setToolTipsOnTitles();
    activeTab('#detailsTabs', savedDiagrams);

    
  });
}


function createSADetailsContent(output, systèmeapplicatif){
output.push('<li class="sysapp icone"> ') 
       output.push('<div class="activite-title-h3 ">Description :</div>');
         output.push('<div class="description ">',systèmeapplicatif.description, '</div>');
         output.push('</li>');
      output.push('<div class="activite-title-h3 icone">Applications :</div>');
      output.push('</li>');
            output.push('<ul class="activ ">');
           
            _.each(systèmeapplicatif.app, function(app){
        output.push("<li class='association-link app app-association-link'>");
        output.push("<a href='",app.unique_page_link_id,"'>",app.name,"</a>");
        output.push("</li>"); 
});
 
}


/*    if (systèmeapplicatif.description.length >0){
    output.push('<li class="sysapp icone"> ') 
       output.push('<div class="activite-title-h3 ">Description :</div>');
         output.push('<div class="description ">',systèmeapplicatif.description, '</div>');
         output.push('</li>');
       }
 
 output.push('<li class="sysapp icone">');
     output.push('<div class="activite-title-h3 icone">Applications :</div>');
      output.push('</li>');
            output.push('<ul class="activ ">');
           
            _.each(systèmeapplicatif.app, function(app){
        output.push("<li class='association-link app app-association-link'>");
        output.push("<a href='",app.unique_page_link_id,"'>",app.name,"</a>");
        output.push("</li>");
      });
          
            
     output.push('</ul>');
     if (systèmeapplicatif.diagramsOn.length > 0){
    output.push("<li class='sysapp icone'>");
          output.push('<div class="activite-title-h3 icone">Diagrammes :</div>');
      output.push("</li>");
      output.push("</li>");
      output.push("<li class='property-details diagram-details property-value diagram-value'><ul class='association-link-box'>");
      _.each(systèmeapplicatif.diagramsOn, function(d){
        output.push("<li class='association-link'><a href='diagram.html?", d.id ,"'>"+d.name+"</a></li>");
      });
      output.push("</ul></li>");
   
      }*/


