searchEngine.searchItemsRequirements = [
{'id':'sa', 'properties' : ['name'], children:[
      {'id':'app', 'properties' : ['name'], children:[]}   
   ]}]
 
  searchEngine.searchFunction = search_drawItems_vision_applicative;




function drawItem_vision_applicative_sa(output, sa){
  //output.push("<ul class=''>");
    _.each(sa, function(one_sa){
      output.push("<ul class='sa'>");
      output.push('<li class="sa" ><div class="title-h3 tootip-me" >');
        output.push("<a href='",one_sa.unique_page_link_id,"'>",one_sa.name,"</a>");
        output.push("</div>");
      output.push("</li>");
      output.push('<li class="sa ui-corner-all " >');
        output.push("<ul class='app'>");
          _.each(one_sa.app, function(one_app){
            output.push("<li class='app ui-corner-all'>");
            output.push("<a href='",one_app.unique_page_link_id,"'>",one_app.name,"</a>");
            output.push("</li>");
          });
        output.push("</ul>");
      output.push("</li>");
      output.push("</ul>");
    });
  //output.push("</ul>");
}


   

function search_drawItems_vision_applicative(all_items, searching){
 var output = Array();
 drawItem_vision_applicative_sa(output, all_items.sa);
  $('#container #center .content').html(output.join(''));}



function drawItems_vision_applicative(all_items, searching) {
  createPage('../', 'Applications par Systèmes Applicatifs', function(){
    openMenu('menu_vision_applicative');

     var bc = "<a href='home.html'>Le référentiel du SI</a>";
        bc += ' > ' + "Vision Applicative";
    updateBreadCrumbPage(bc);    
  

  

    var output = [];
    appendSearchEngineInput('Rechercher : ', 'vision_applicative', $('#top_of_page'), vision_applicative, searchEngine, '#zone_vision_applicative');
    drawItem_vision_applicative_sa(output, all_items.sa);
    
    $(SITE_CONTENT_SELECTOR).html(output.join(''));
    var acc_active = false;
    if (searching) acc_active = 0;
    $('a').tooltip({showURL: false, fade:250});
    setToolTipsOnTitles();
    doLayoutsSpecialActions();
  });
}




