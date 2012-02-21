function doActionsForSingle_activité() {}

function draw_activité(activité){
  document.title = 'activité'
  var output = [];
  output.push("<ul class='properties-zone properties-activité'>");
    output.push("<li class='property-name'><span class='ogs-name'>Activité : </span>", activité.nomderemplacement,"</li>");
    addPropertyBox(output, 'description', 'Description', activité, 'property-box-memo');
    if (activité.fonction_activitétoassociationactivitéfonctionordonnetofonction.length > 0){
      output.push("<li class='property-box association-box association-fonction_activitétoassociationactivitéfonctionordonnetofonction-box'>");
      output.push("<ul class='property-details property-description-details association-details'>");
      output.push("<li class='property-details property-title property-fonction_activitétoassociationactivitéfonctionordonnetofonction-title association-title association-fonction_activitétoassociationactivitéfonctionordonnetofonction-title'>");
      output.push(" Fonctions & Applications");
      output.push("</li>");
      output.push("<li class='property-details property-value property-fonction_activitétoassociationactivitéfonctionordonnetofonction-value assiciation-value association-fonction_activitétoassociationactivitéfonctionordonnetofonction-value'><ul class='association-link-box'>");
      _.each(activité.fonction_activitétoassociationactivitéfonctionordonnetofonction, function(fonction_activitétoassociationactivitéfonctionordonnetofonction){
        output.push("<li class='association-link fonction_activitétoassociationactivitéfonctionordonnetofonction fonction_activitétoassociationactivitéfonctionordonnetofonction-association-link'>");
            output.push("<ul class='app'>" );
                 _.each(fonction_activitétoassociationactivitéfonctionordonnetofonction.app, function(one_app){
            output.push("<li class='app'><div class='app'>");
            output.push("<a href='",one_app.unique_page_link_id,"'>",one_app.nomderemplacement,"</a>");
            output.push("</div>");
            output.push("</li>");
          });
        output.push("</ul>");
        output.push("</li>");
      });
      output.push("</ul></li>");
      output.push("</ul>");
      output.push("</li>");
    }
 

  $('body').html(output.join(''));
  setToolTipsOnTitles();
  doActionsForSingle();
  doActionsForSingle_activité();
}
