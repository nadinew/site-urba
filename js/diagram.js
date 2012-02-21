$(function(){
	createPage('../', "Diagramme", function(){
		$(SITE_CONTENT_SELECTOR).html('<div id="diagram"></div>');
		setFullScreen();

	
		//$('#center').css("background-color", "red");	
		
		var output = [];
	
		var menu = 'menu_accueil';
		openMenu(menu);
		activeSubMenu(menu + "_accueil" );
				 var bc = "<a href='" + SITE_HOST + "main/home.html'>Le référentiel du SI</a>";
        bc += ' > ' + "Diagramme";
    	updateBreadCrumbPage(bc);      
   		
		if ($(location).attr('href').indexOf('?') != -1){
			var arguments = location.href.split('?');
			var id = arguments[1];
			$.getScript('../webdesigner/generated/diagrams/diagram' + id + '.json', function(jsonDiagramFile){
				eval(jsonDiagramFile);
				//console.log('diagramLoaded', id, diagramJSON );
				var selector = '#diagram';
				var d = diagramJSON;
				//console.log(d);
				d.id = id;
				d.activeItems = [];
				d.diagramImage = new Image();
				d.diagramImage.src = "../images/print/diagram" + id + ".png";
				setImageInCanvas(selector, d, d.activeItems);
			});
		} else {
			output.push('the provided url is missing the ' + pageName + ' ID');
		}
		$(SITE_CONTENT_SELECTOR).append(output.join(''));

	    setToolTipsOnTitles();
	    doActionsForSingle();
	});





})

