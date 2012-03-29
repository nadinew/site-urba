

function draw_fonction(fonction){
var pageName = "Fonction: " + fonction.nomderemplacement;
document.title = pageName;

	createPage('../', pageName, function(){	
  	var menu = 'menu_vision_applicative';
  	openMenu('menu_vision_applicative');

     var bc = "<a href='vision_applicative.html'>Vision Applicative</a>";
		bc += ' > Fonction:' + fonction.nomderemplacement;
    updateBreadCrumbPage(bc);    
  	var output = [];
  	
  	drawItem_fonction(output,fonction);	      
    $(SITE_CONTENT_SELECTOR).html(output.join(''));
    addHelpForPage("fonction");
  }); 
}


	

function drawItem_fonction(output, fonction){
  
        output.push ("<ul class=''>");
        output.push("<li class='icone'><span  class='title-h3'>",'Description',"</span></li>","<li><span class ='text'>" + fonction.description,"</span>","</li>");
         output.push("</ul>");
	

        output.push ("<ul class=''>");
        _.each(fonction.ilot, function(ilot){
        output.push("<li class='icone'><span  class='title-h3'>",'Ilôt fonctionnel',"</span></li>","<li><span class ='text'>" + ilot.nomderemplacement,"</span>","</li>");
        });
        output.push("</ul>");

         output.push ("<ul class=''>");
        output.push ("<li class='icone'><span  class='title-h3'>",'Activités',"</span></li>");
        _.each(fonction.activite, function(activite){
         output.push('<li class="act ui-corner-all "><div class=" tooltip-me " title="',activite.description,'">'+activite.nomderemplacement,'</div>','</li>');
       });
         output.push("</ul>");


	output.push("<ul class=''>");
	output.push ("<li class='icone'><span  class='title-h3'>",'Applications',"</span></li>");      			
		_.each(fonction.app, function(app){		

        output.push("<li class='app ui-corner-all'>");
        output.push("<a href='",app.unique_page_link_id,"'>",app.name,"</a>");

        output.push("</li>");
	});
	output.push("</ul>");
    
}
