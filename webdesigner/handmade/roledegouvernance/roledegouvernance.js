function doActionsForSingle_roledegouvernance() {}

function draw_roledegouvernance(roledegouvernance){
  document.title = 'Gouvernance'
  var output = [];
  output.push("<ul class='properties-zone properties-roledegouvernance'>");
    output.push("<li class='property-name'><span class='ogs-name'> Nom ou Centre de Services : </span>", roledegouvernance.name,"</li>");
    addPropertyBox(output, 'courriel', 'Courriel', roledegouvernance, 'property-box-normal');
    addPropertyBox(output, 'téléphone', 'Téléphone', roledegouvernance, 'property-box-normal');
    addPropertyBox(output, 'type', 'Catégorie', roledegouvernance, 'property-box-normal');
  output.push("</ul>");
  $('body').html(output.join(''));
  setToolTipsOnTitles();
  doActionsForSingle();
  doActionsForSingle_roledegouvernance();
}
