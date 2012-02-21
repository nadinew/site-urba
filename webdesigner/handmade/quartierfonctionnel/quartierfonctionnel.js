function draw_quartierfonctionnel(quartierfonctionnel) {
createPage('../', "Domaine Fonctionnel : " + domainefonctionnel.name + " (Applications par Zone)", function(){

    var output = [];

    var menu = "menu_vision_fonctionnelle";
    openMenu(menu);
    activeSubMenu(menu + "_" + domainefonctionnel.object_id);

    var bc = "<a href='" + SITE_HOST + "main/vision_fonctionnelle.html'>Vision Fonctionnel</a>";
    bc += ' > ' + domainefonctionnel.name;
    updateBreadCrumbPage(bc);     

    createContent(output, domainefonctionnel);
    
    $(SITE_CONTENT_SELECTOR).html(output.join(''));
    setToolTipsOnTitles();
    doActionsForSingle();
    //doActionsForSingle_domainefonctionnel();    
  })
}
