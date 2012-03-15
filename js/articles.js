





$(function(){
  document.title = 'articles';
  
    var output = Array();
	var pageName = "Articles" ;
	document.title = pageName;
	


	createPage('../', pageName, function(){
		
		var menu = 'menu_articles';
		openMenu(menu);
		activeSubMenu(menu + "_articles" );
				 var bc = "<a href='home.html'>Le référentiel du SI</a>";
        bc += ' > ' + "Articles";
    updateBreadCrumbPage(bc); 
	

 
		var articles = { 
			"Presse" : [{
				"nom" : "Symbiose n°7 février 2011", 
				"url" : "http://www.siege.courrier.intra.laposte.fr/site/dsi_c/files/dsi_c/symbiose-n7special-urbanisme.pdf"
			}],
			"Interne" : [{
				"nom" : "",
				"url" : "",			
			}]	
		};

	var output = [];	

	output.push("<ul>");
	for (var type in articles){
		output.push("<li class='first-li '>",type);
		output.push("<ul class = 'desc'>");
		_.each(articles[type], function(a){
			output.push("<li><a href='", a.url, "'>", a.nom, '</a></li>');
		});
		output.push("</ul>");
		output.push('</li>');
	}
	output.push("<ul>");



		
		$(SITE_CONTENT_SELECTOR).html(output.join(''));

		
		
	})})
