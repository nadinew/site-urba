


$(function(){
  document.title = 'Contact';
  drawItems_contact (contact, false);
});


// don't change this function name
// used to display all the items
function drawItems_contact(all_items, searching)
{
  var output = Array();
	var pageName = "Nous contacter " ;
	document.title = pageName;
	createPage('../', pageName, function(){	
  	var menu = 'menu_savoir_plus';
  	openMenu(menu);
  	activeSubMenu(menu + "_contact" );

    var bc = "<a href='" + SITE_HOST + "main/aide.html'>En savoir plus</a>";
    bc += ' > ' + "Nous contacter";
    updateBreadCrumbPage(bc);     

  	var output = [];
  	
  	drawItem_contact_contact(output, all_items.contact);	      
    $(SITE_CONTENT_SELECTOR).html(output.join(''));
  }); 
}




function drawItem_contact_contact(output, contact){
  

    afficherContacts(output, contact, contactTypeToCSS);


/*    _.each(contact, function(one_contact){
      output.push('<li class="contact ',contactTypeToCSS(one_contact.type), ' "><div class="">');
      output.push("<p class='bold'>",one_contact.name,"</p>");

      output.push("<p >",' Tél: ' + one_contact.téléphone,"</p>");
      output.push("<p >","<a href='mailto:" + one_contact.courriel +"'>Mail: " + one_contact.courriel,"</a>","</p>");
      output.push("<p >",'Périmètre: ' + one_contact.périmètre,"</p>");
      output.push("</div>");
   });*/
      //output.push("</ul>");
}



   


function contactTypeToCSS(_type){
  switch(_type){
    case 'Acteur de Gouvernance' :
    return 'acteur';
    case 'Centre de compétences et de services' :
    return 'autre';
    case 'Rôle de Gouvernance' :
    return 'autre';
    case 'Non défini(e)' :
    return 'autre';
  }
}
