
function draw_composantapplicatif(composantapplicatif){
    
createPage('../', "Application : " + composantapplicatif.name, function(){
    setFullScreen();
    var output = [];

    var menu = "menu_vision_applicative";
    openMenu(menu);
    activeSubMenu(menu + "_" + composantapplicatif.object_id);

    var bc = "<a href='" + SITE_HOST + "main/vision_applicative.html'>Vision Applicative</a>";
    bc += ' > Application:' + composantapplicatif.name;
    updateBreadCrumbPage(bc);     


    var savedDiagrams = {};
    createContent(output, composantapplicatif, savedDiagrams);
    
    $(SITE_CONTENT_SELECTOR).html(output.join(''));
    
    $("h2").hide();
    setToolTipsOnTitles();
    doActionsForSingle();
    activeTab('#detailsTabs', savedDiagrams);
    $(".ui-tabs-nav span").removeClass('ui-icon');
    $(".ui-tabs-nav span").addClass('ui-icon1');


    $('li.domainefonc').addClass("pos2");
    $('li.zones').addClass("pos2");
    $('li.quartiers').addClass("pos2");
    $('li.ilots').addClass("pos2");
    $('li.fonctions').addClass("pos2");



    $('li.domainemetier').addClass("pos2");
    $('li.macroprocessus').addClass("pos2");
    $('li.processus_app').addClass("pos2");
    $('li.activites').addClass("pos2");
    //$('li.fonctions').addClass("pos2");    
    //$('li.applications').addClass("pos2"); 
    
    $("li.fonctions li.application").hide();
  });
}

    


function createContent(output, composantapplicatif, savedDiagrams){

 if (composantapplicatif.dateprévisionnelledemiseenproduction == "30/12/1899 00:00:00" )
 {
   var date_prod= "non renseigné";
 }
 else {
 var date_prod= composantapplicatif.dateprévisionnelledemiseenproduction; 
 }
 if (composantapplicatif.dateprévisionnellederetraitdeproduction == "30/12/1899 00:00:00" )
 {
   var date_retrait= "non renseigné";
 }
 else{
  var date_retrait= composantapplicatif.dateprévisionnellederetraitdeproduction; 
 }
 
 if (composantapplicatif.horsdsi == "-1" ){
   var dsi = "Oui";
 }
 else{
    var dsi = "Non";
 }




  output.push('<div id="detailsTabs">');  
   // output.push('<h3 class="page-object-name"  >'  + composantapplicatif.name + '</h3>');

    // création des titres
    output.push('<ul>');      
      createTextTab(output, 'tabs-app', 'Fiche applicative', 'info');
      createDiagramTab(output, composantapplicatif, "A3", savedDiagrams, "Echange Inter-Applicatif", ["SYSTÈMEAPPLICATIF", "COMPOSANTAPPLICATIF"]);
   
        createTextTab(output, "tabs-fonctions" , 'Vision Fonctionnelle', 'gear');
       
      createTextTab(output, 'tabs-metier', 'Vision Métier', 'gear');
      $.each(composantapplicatif.sa, function(i, sa){      
        createDiagramTab(output, sa, "A1", savedDiagrams, "Echange Inter Système Applicatif", ["SYSTÈMEAPPLICATIF", "COMPOSANTAPPLICATIF"]);
            });   
      createTextTab(output, 'tab-contact', "Contact", 'pencil');
    output.push('</ul>');

    // contenus

    //createDiagramTabContent(output, composantapplicatif, "A2");
    createDiagramTabContent(output, composantapplicatif, "A3");    

createTextTabContent(output, 'tabs-app', function(output){
  output.push('<ul class="border">');

      output.push("<div class='title-center'  >",'Fiche applicative:' , composantapplicatif.name , "</div>");   
     output.push('<li class="icone2">');  
  output.push("<span class='title-h3'>",'Intitulé:   ',"</span>","<span class='text'>" + composantapplicatif.intitule ,"</span>");
   output.push('</li>'); 
   output.push('<li class="icone2">');  
  output.push("<span class='title-h3'>",'Version:   ',"</span>","<span class='text'>" + composantapplicatif.version ,"</span>","<span class='title-h3'>",'    Code d\'exploitation:    ',"</span>","<span class='text'>" + composantapplicatif.code,"</span>" );
   output.push('</li>');  
   if (composantapplicatif.sa.length > 0){
       output.push('<li class="icone2">');   
       
      _.each(composantapplicatif.sa, function(sa){
         output.push("<span class='title-h3'>",'Système applicatif:          ',"</span>","<span class='text'>" +sa.name,"</span>");
                   });
            output.push("</li>");
    }
   $.each(composantapplicatif.sa, function(sa){  
    output.push('<li class="icone2">');     
   output.push("<span class='title-h3'>",'     Hors DSI-C:    ',"</span>","<span class='text'>"  + dsi,"</span>","<span class='title-h3 icone2'>",'     Catégorie:   ',"</span>","<span class='text'>"  + composantapplicatif.type,"</span>" );
   output.push('</li>'); }); 
  output.push('<li class="icone2">');
  output.push("<span class='title-h3'>",'Date de mise en production:   ',"</span>","<span class='text'>" + date_prod  ,"<span class='title-h3 icone2'>",'        Date de retrait:    ',"</span>","<span class='text'>" + date_retrait,"</span>" );
   output.push('</li>');  
    output.push('<li class="icone2">');  
  output.push("<span class='title-h3'>",'Description:   ',"</span>","<span class='text'>"  + composantapplicatif.description,"</span>" );
   output.push('</li>');
      output.push('</ul>');


  output.push('<ul class="border">');
    drawFluxBox(output, composantapplicatif.fluxe, 'name', 'Flux entrants');
    drawFluxBox(output, composantapplicatif.fluxs, 'name', 'Flux sortants');
    drawFluxBox(output, composantapplicatif.fonctions, 'nomderemplacement', 'Fonctions');
  output.push('</ul>');


 });


    // création des détails
    createTextTabContent(output, 'tabs-fonctions', function(output){
      output.push("<div class='title-center'  >",'Vision Fonctionnelle:' , composantapplicatif.name , "</div>");   

      var r_fonc_domainefonc = createBrowseNode('domainefonc', 'Domaine Fonctionnel', 'nomderemplacement', []);
      var r_fonc_zone = createBrowseNode('zones', 'Zone', 'nomderemplacement', [r_fonc_domainefonc]);
      var r_fonc_quartier = createBrowseNode('quartiers', 'Quartier', 'nomderemplacement', [r_fonc_zone]);
      var r_fonc_ilot = createBrowseNode('ilots', 'Ilot', 'nomderemplacement', [r_fonc_quartier]);
      var r_fonc_fonctions = createBrowseNode('fonctions', 'Fonction', 'nomderemplacement', [r_fonc_ilot]);
      var r_fonc_view_app_rule = createBrowseNode('application', 'Application', 'nomderemplacement', [r_fonc_fonctions]);
      reverseNodesDraw(output, composantapplicatif, r_fonc_view_app_rule);
                                     /*
      
       _.each(composantapplicatif.fonctions, function(fonctions){
          var fonction = fonctions.nomderemplacement;
        
           _.each(fonctions.ilots, function(one_ilots){
            var ilots = one_ilots.nomderemplacement;
           
              _.each(one_ilots.quartiers, function(one_quartiers){
                  var quartiers = one_quartiers.nomderemplacement;
                  
                  _.each(one_quartiers.zones, function(one_zones){
                    var zones = one_zones.nomderemplacement;
                    
                      _.each(one_zones.domainefonc, function(one_domainefonc){
                        var domf = one_domainefonc.name;
                        output.push('<ul class="title-h3">','<span class="titleHelp tooltip-me" style="cursor: help;">Domaine fonctionnel</span>');
                        output.push (domf);
                        output.push('</ul>');
                        output.push('<ul class= "zones">');
                         output.push('<li class="pos2 ui-corner-all">');
                        output.push('<span class="titleHelp tooltip-me" style="cursor: help;">Zone</span>');
                        output.push (zones);
                    
                        output.push('<ul class= "pos2 ui-corner_all">');
                   
                          output.push('<span class="titleHelp tooltip-me" style="cursor: help;">Quartier</span>');
                        output.push (quartiers);
                         output.push('<ul class= "pos2 ui-corner_all">');
                      
                          output.push('<span class="titleHelp tooltip-me" style="cursor: help;">Ilôt</span>');
                         output.push (ilots);
                          output.push('<ul class= "pos2 ui-corner_all">');
                         output.push('<span class="titleHelp tooltip-me" style="cursor: help;">Fonction</span>');
                         output.push (fonction);
                         output.push('</ul>');
                     
                         output.push('</ul>');
                         output.push('</ul>');
                         output.push('</li >');
                         output.push('</ul>');

                        });
                    });
               });
           });
 
       });
    */
}, null);

   createTextTabContent(output, 'tabs-metier', function(output){
       
 output.push("<div class='title-center'  >",'Vision Metier:' , composantapplicatif.name , "</div>"); 


      var r_process_domainemetier = createBrowseNode('domainemetier', 'Domaine Métier', 'nomderemplacement', []);
      var r_process_mp = createBrowseNode('macroprocessus', 'Macro Processus', 'nomderemplacement', [r_process_domainemetier]);
      var r_process_p = createBrowseNode('processus_app', 'Processus', 'nomderemplacement', [r_process_mp]);
      var r_process_activite = createBrowseNode('activites', 'Activité', 'nomderemplacement', [r_process_p]);
      var r_process_fonctions = createBrowseNode('fonctions', 'Fonction', 'nomderemplacement', [r_process_activite]);
      var r_process_view_app_rule = createBrowseNode('application', 'Application', 'nomderemplacement', [r_process_fonctions]);
      reverseNodesDraw(output, composantapplicatif, r_process_view_app_rule);
/*
       _.each(composantapplicatif.fonctions, function(fonctions){

          var fonction = fonctions.nomderemplacement;
        
           _.each(fonctions.activites, function(one_activites){
            var activites = one_activites.nomderemplacement;
           
              _.each(one_activites.processus, function(one_processus){
                  var processus = one_processus.nomderemplacement;
                  
                  _.each(one_processus.macroprocessus, function(one_macroprocessus){
                    var macroprocessus = one_macroprocessus.nomderemplacement;
                    
                      _.each(one_macroprocessus.domainemetier, function(one_domainemetier){
                        var domm = one_domainemetier.nomderemplacement;
                        output.push('<ul class="title-h3">','<span class="titleHelp tooltip-me" style="cursor: help;">Domaine métier</span>');
                        output.push (domm);
                        output.push('</ul>');
                        output.push('<ul class= "">');
                         output.push('<li class="pos2 ui-corner-all">');
                        output.push('<span class="titleHelp tooltip-me" style="cursor: help;">Macroprocessus</span>');
                        output.push (macroprocessus);
                    
                        output.push('<ul class= "pos2 ui-corner_all">');
                   
                          output.push('<span class="titleHelp tooltip-me" style="cursor: help;">Processus</span>');
                        output.push (processus);
                         output.push('<ul class= "pos2 ui-corner_all">');
                      
                          output.push('<span class="titleHelp tooltip-me" style="cursor: help;">Activité</span>');
                         output.push (activites);
                          output.push('<ul class= "pos2 ui-corner_all">');
                         output.push('<span class="titleHelp tooltip-me" style="cursor: help;">Fonction</span>');
                         output.push (fonction);
                         output.push('</ul>');
                     
                         output.push('</ul>');
                         output.push('</ul>');
                         output.push('</li >');
                         output.push('</ul>');

                        });
                    });
               });
           });
 
       });*/
 
}, null);
  
    $.each(composantapplicatif.sa, function(i, sa){      
      createDiagramTabContent(output, sa, "A1");
    });
    

       createTextTabContent(output, 'tab-contact', function(output){
if (composantapplicatif.sa.length > 0){
        _.each(composantapplicatif.sa, function(sa){
             output.push("<div class='role' >",'Système applicatif:'+ sa.name,"</div>");
         _.each(sa.role, function(one_role){
              addTitle(output,one_role.name);
            output.push('<li>');
            output.push("<span  class='title-h3'>",' Tél: ',"</span>","<span class ='text'>" + one_role.téléphone,"</span>","</li>");
            output.push('<li>');
            output.push("<span  class='title-h3'>","<a href='mailto:" + one_role.courriel +"'>Mail: " + one_role.courriel,"</a>","</span>","</li>");
             output.push('<li>');
            output.push("<span  class='title-h3'>",'Périmètre: ',"</span>","<span class ='text'>" + one_role.périmètre,"</span>","</li>");
            output.push("</ul>");
                });
      
      });
      
      }
    });

  }  


function drawFluxBox(output, list, displayName, name){
  output.push('<li class="fluxbox">');
  output.push("<span class='title-h3'>",name ,"</span>  ");

  if (list.length > 0){       
    output.push("<ul class='fluxList'>");
    _.each(list, function(e){
      output.push("<li class='fluxList'>", e[displayName],"</li>");  
    });
    output.push("</ul>");
  }
  output.push("</li>");
}



