function draw_zonefonctionnelle(zonefonctionnelle){
  document.title = 'zonefonctionnelle'
  var output = [];
  output.push("<ul class='properties-zone properties-zonefonctionnelle'>");
    output.push("<li class='property-name'><span class='ogs-name'>Zone fonctionnelle : </span>", zonefonctionnelle.nomderemplacement,"</li>");
    
    if (zonefonctionnelle.quartierfonctionnel_zonefonctionnelletoassociationzonefonctionnellequartierfonctionnelsecomposedetoquartierfonctionnel.length > 0){
      output.push("<li class='property-box association-box association-quartierfonctionnel_zonefonctionnelletoassociationzonefonctionnellequartierfonctionnelsecomposedetoquartierfonctionnel-box'>");
      output.push("<ul class='property-details property-description-details association-details'>");
      output.push("<li class='property-details property-title property-quartierfonctionnel_zonefonctionnelletoassociationzonefonctionnellequartierfonctionnelsecomposedetoquartierfonctionnel-title association-title association-quartierfonctionnel_zonefonctionnelletoassociationzonefonctionnellequartierfonctionnelsecomposedetoquartierfonctionnel-title'>");
      output.push("Quartiers et ilôts fonctionnels");
      output.push("</li>");
      output.push("<li class='property-details property-value property-quartierfonctionnel_zonefonctionnelletoassociationzonefonctionnellequartierfonctionnelsecomposedetoquartierfonctionnel-value assiciation-value association-quartierfonctionnel_zonefonctionnelletoassociationzonefonctionnellequartierfonctionnelsecomposedetoquartierfonctionnel-value'><ul class='association-link-box'>");
      _.each(zonefonctionnelle.quartierfonctionnel_zonefonctionnelletoassociationzonefonctionnellequartierfonctionnelsecomposedetoquartierfonctionnel, function(quartierfonctionnel_zonefonctionnelletoassociationzonefonctionnellequartierfonctionnelsecomposedetoquartierfonctionnel){
        output.push("<li class='association-link quartierfonctionnel_zonefonctionnelletoassociationzonefonctionnellequartierfonctionnelsecomposedetoquartierfonctionnel quartierfonctionnel_zonefonctionnelletoassociationzonefonctionnellequartierfonctionnelsecomposedetoquartierfonctionnel-association-link'>");
        output.push("<span>",quartierfonctionnel_zonefonctionnelletoassociationzonefonctionnellequartierfonctionnelsecomposedetoquartierfonctionnel.nomderemplacement,"</span>");
        output.push("<ul class='ilot'>");
          _.each(quartierfonctionnel_zonefonctionnelletoassociationzonefonctionnellequartierfonctionnelsecomposedetoquartierfonctionnel.ilot, function(one_ilot){
            output.push("<li class='ilot'><div class='ilot'>");
            output.push("<span>",one_ilot.nomderemplacement,"</span>");
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
    if (zonefonctionnelle.diagramsExploded.length > 0){
      output.push("<li class='property-box diagram-box'>");
      output.push("<ul class='property-details diagram-details'>");
      output.push("<li class='property-details diagram-details property-title diagram-title'>");
      output.push("Diagrammes ");
      output.push("</li>");
      output.push("<li class='property-details diagram-details property-value diagram-value'><ul class='association-link-box'>");
      _.each(zonefonctionnelle.diagramsExploded, function(diagrams){
        _.each(diagrams, function(d){
          output.push("<li class='association-link'><a href='diagram", d.id ,".html'>",d.name,"</a></li>");
        });
      });
      output.push("</ul></li>");
      output.push("</ul></li>");
    }
    if (zonefonctionnelle.diagramsOn.length > 0){
      output.push("<li class='property-box diagram-box'>");
      output.push("<ul class='property-details diagram-details'>");
      output.push("<li class='property-details diagram-details property-title diagram-title'>");
      output.push("Diagrammes ");
      output.push("</li>");
      output.push("<li class='property-details diagram-details property-value diagram-value'><ul class='association-link-box'>");
      _.each(zonefonctionnelle.diagramsOn, function(d){
        output.push("<li class='association-link'><a href='diagram", d.id ,".html'>"+d.name+"</a></li>");
      });
      output.push("</ul></li>");
      output.push("</ul></li>");
    }
  output.push("</ul>");
  $('body').html(output.join(''));
  setToolTipsOnTitles();
  doActionsForSingle();
  doActionsForSingle_zonefonctionnelle();
}

