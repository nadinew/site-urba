
function drawItems_menu(all_items, searching)
{
    var output = Array();
	/* write action todo here */
    $('body').css('cursor', 'default');
   	$('head').append('<link rel="stylesheet" type="text/css" href="http://www.siege.courrier.intra.laposte.fr/site/dsi_c/sites/all/themes/theme_dsi/style.css"/>');

	addMenuToOutPut(output, all_items);

	$('#zone_menu').append(output.join(''));
	var acc_active = false;
	if (searching) acc_active = 0;
	$('a').tooltip({showURL: false, fade:250});
	setToolTipsOnTitles();
	doLayoutsSpecialActions();
	$('body').css('cursor', 'default');
}



function addMenuToOutPut(output, all_items){
/*	output.push('<div id="sidebar-left">');
	output.push('<div id="block-menu_block-2" class="block block-menu_block">');
	output.push('<div class="content">');*/

	
	
	output.push('<ul class="menu menu-tree">');

	output.push('<li class="leaf first" id="menu_accueil"><a title="aller vers : Accueil" href="home.html">Le Référentiel du SI</a>');
		
	output.push('</li>');
	output.push('<li class="collapsed  leaf" id="menu_vision_metier"><a title="aller vers : La vision métier" href="vision_metier.html">La vision métier</a>');
		drawItem_menu_domaine_metier(output, all_items.domaine_metier);	
	output.push('</li>');
	output.push('<li class="collapsed leaf" id="menu_vision_fonctionnelle"><a title="aller vers : La vision fonctionnelle" href="vision_fonctionnelle.html">La vision fonctionnelle</a>');
		drawItem_menu_domaine_fonctionnel(output, all_items.domaine_fonctionnel);
		
	output.push('</li>');

	output.push('<li class="leaf" id="menu_vision_applicative"><a title="aller vers : La vision applicative" href="vision_applicative.html">La vision applicative</a>');
		drawItem_menu_application(output, all_items.application);
			output.push('</li>');

	output.push('<li class="leaf " id="menu_articles"><a title="aller vers : Les articles" href="articles.html">Les articles</a>');
output.push('</li>');

	output.push('<li class="collapsed last" id="menu_savoir_plus"><a title="aller vers : en savoir plus" href="contact.html">Pour en savoir plus</a>');
		drawItem_menu_savoir_plus(output);
		output.push('</li>');
	

output.push('</ul>');	

output.push("<p style='background-color:#EDF5FB;border:1px; border-style:solid;border-color: #AACEE9;padding:0.3em;margin:0.6em;position:relative;display : block ;text-align:center ;color:#AACEE9'>Dernière mise à jour le 02/03/2012</p>");


output.push('<p style="padding-left:60px;width: 50px; height: 50px" ><a href="mailto:nadine.weiss@laposte.fr" target="_blank"><img src="../images/email.gif" title="Nous contacter"></a></p>');

output.push('<p style="padding-left:40px;width: 50px; height: 50px" ><img src="../images/logo_dum1.png" title=""></p>');	



/*	output.push('</div>');
	output.push('</div>');
	output.push('</div>');	*/
}


function drawItem_menu_domaine_metier(output, domaine_metier){
  output.push("<ul class='menu menu-tree'>");
    _.each(domaine_metier, function(one_domaine_metier){
      output.push('<li id="menu_vision_metier_', one_domaine_metier.object_id, '"><div class="domaine_metier">');
      output.push("<a href='",one_domaine_metier.unique_page_link_id,"'>",one_domaine_metier.nomderemplacement,"</a>");
      output.push("</div>");
      output.push("</li>");
    });
  output.push("</ul>");
}

function drawItem_menu_savoir_plus(output){
 	 output.push("<ul class='menu menu-tree'>");

 	output.push("<li class='domaine_metier leaf' id='menu_savoir_plus_contact'><div class='domaine_metier'>");
 	output.push("<a href='./contact.html'>Nous contacter</a></div></li>");

 	output.push("<li class='domaine_metier leaf' id='menu_savoir_plus_guide'><div class='domaine_metier'>");
 	 output.push("<a href='guide.html' >Guide de Modélisation</a></div></li>");

 	 output.push("<li class='domaine_metier leaf' id='menu_savoir_plus_aide'><div class='domaine_metier'>");
 	 output.push("<a href='aide.html'>Tutoriel</a></div></li>");

 	 output.push("<li class='domaine_metier leaf' id='menu_savoir_plus_Metamodele'><div class='domaine_metier'>");
 	 output.push("<a href='../images/metamodele.jpg' target='_blank'>Méta-Modèle</a></div></li>");

 	 output.push("<li class='domaine_metier leaf' id='menu_savoir_plus_Gouvernance'><div class='domaine_metier'>");
 	 output.push("<a href='./entreprise.html?21'>Gouvernance</a></div></li>");
    output.push("</ul>");
}

function drawItem_menu_domaine_fonctionnel(output, domainefonctionnel){
  output.push("<ul class='menu menu-tree'>");
    _.each(domainefonctionnel, function(one_domainefonctionnel){
      output.push("<li class='domaine_fonctionnel leaf' id='menu_vision_fonctionnelle_", one_domainefonctionnel.object_id, "'><div class='domaine_metier'>");
      output.push("<a href='",one_domainefonctionnel.unique_page_link_id,"'>",one_domainefonctionnel.nomderemplacement,"</a>");
      output.push("</div>");
      output.push("</li>");
    });
  output.push("</ul>");
}

function drawItem_menu_application(output, composantapplicatif){
  output.push("<ul class='menu menu-tree'>");
    _.each(composantapplicatif, function(one_composantapplicatif){
      output.push("<li class='vision_applicative leaf' id='menu_vision_applicative_", one_composantapplicatif.object_id, "'><div class='domaine_metier'>");
      output.push("<a href='",one_composantapplicatif.unique_page_link_id,"'>",one_composantapplicatif.name,"</a>");
      output.push("</div>");
      output.push("</li>");
    });
  output.push("</ul>");
}

