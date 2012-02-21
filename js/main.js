var MAIL_ADDRESS_FOR_DIAGRAM_FEEDBACK = "ld-dum-pam@laposte.fr";
var SITE_HOST = "http://cenvw010/lpc_dev/Site/";
var HTTP_SERVER= SITE_HOST;
 var LIB_SERVER = HTTP_SERVER + "../Lib/";

var SITE_CONTENT_SELECTOR = '#container #center .content';

function loadPageAndSetTagHTML(selector, url, callback){
	$.get(url, function(data){
		$(selector).html(data);
		if (typeof callback !== "undefined"){
			callback();
		}
	});		
}

function createTextTab2(output, selector, name, icon){
  output.push('<li><a href="', selector,'"><span class="ui-icon ui-icon-', icon, '"></span>', name ,'</a></li>');
}
     

// met plein ecran
function setFullScreen(){


    

    $('.main_container_frame').animate({"width": '100%'});
    var width = $(window).width() - 250;        
    $('.main_container_frame #center').width(width + "px");
    $('.main_container_frame #center').css("padding", '5px');
    $('.main_container_frame #center').css("padding-left", '20px');
}

function addDiagramBox(output, title, dID , domaine){

  output.push("<li class='pos ui-corner-all'>");
    output.push("<ul class='diagram-box '>");
    output.push("<li class='diagram-box'><span class='ui-icon1 ui-icon-image'></span></li><li class='diagram-box'><a href='diagram.html?",dID,"'>", title, "</a></li>");
     output.push("</ul>");
     output.push("</li>");
       output.push("<li class='pos ui-corner-all'>");
 output.push("<ul class='diagram-box '>");
        output.push("<li class='diagram-box'><span class='ui-icon1 ui-icon-info'></span></li><li class='diagram-box'><a href='domainefonctionnel.html?",domaine,"'>", 'Détails Plan d\'occupation des sols', "</a></li>");
             output.push("</ul>");
  output.push("</li>");
}
 
function addDiagramBox1(output, title, dID,domaine){
  
  output.push("<li class='pos ui-corner-all'>");
    output.push("<ul class='diagram-box '>");
    output.push("<li class='diagram-box'><span class='ui-icon1 ui-icon-image'></span></li><li class='diagram-box'><a href='diagram.html?",dID,"'>", title, "</a></li>");
     output.push("</ul>");
     output.push("</li>");
       output.push("<li class='pos ui-corner-all'>");
 output.push("<ul class='diagram-box '>");
        output.push("<li class='diagram-box'><span class='ui-icon1 ui-icon-info'></span></li><li class='diagram-box'><a href='details_pos.html?",domaine,"'>", 'Détails Couverture Applicative', "</a></li>");
             output.push("</ul>");
  output.push("</li>");
}
 
function addDiagrams(output, mainObject){
  if (mainObject.diagramsExploded.length > 0){
    addTitle(output, 'Diagrammes'); 
    output.push("<li class='property-details diagram-details property-value diagram-value'><ul class='association-link-box'>");
    _.each(mainObject.diagramsExploded, function(diagrams){
      _.each(diagrams, function(d){
        output.push("<li class='association-link'><a href='diagram.html?", d.id ,"'>",d.title,"</a></li>");
      });
    });
    output.push("</ul></li>");
  }
}

function addTitle(output, text){
  output.push('<li class="icone">')
    output.push('<div class="title-h3">', text, '</div>');
  output.push('</li>');
}


function objectIsEmpty(_object)
{
  var i = 0;
  for ( var prop in _object ) {
    return false;
  }
  return true;
}


function createPage(_path, _title, callback){

	document.title = _title;

	$('body').html('');

	$('head').append('<link rel="stylesheet" type="text/css" href="http://www.siege.courrier.intra.laposte.fr/site/dsi_c/sites/all/themes/theme_dsi/style.css"/>');
	$('head').append('<link rel="stylesheet" type="text/css" href="' + SITE_HOST + 'css/urba.local.css"/>');	
    

	$('body').addClass('sidebar-left');
	$('body').append('<div id="top_header"></div>');
	$('body').append('<div id="global_header"></div>');
	$('body').append('<div id="container" class="main_frame main_container_frame"></div>');
	$('body').append('<div id="footer"></div>');

	loadPageAndSetTagHTML('#top_header', _path + 'structure/inc.top_header.html', function(){
    $("#fullscreen").click(function(){
      setFullScreen();
    });    
  });
	loadPageAndSetTagHTML('#global_header', _path + 'structure/inc.global_header.html', function(){

	});
	loadPageAndSetTagHTML('#container', _path + 'structure/inc.container.html', function(){
		$("#container #center h2").html(_title);
   		getMenu(function(){
   			callback();	
   		});
	});
	loadPageAndSetTagHTML('#footer', _path + 'structure/inc.footer.html');


}


function getMenu(callback){
	var myURL = '../webdesigner/generated/menu/json/menu.json';
	loadScript(myURL, function(){
		loadScript("../webdesigner/handmade/menu/menu.js", function(){
			var o = [];        
			addMenuToOutPut(o, menu);
			$('#block-menu_block-3 .content').html(o.join(''));
			$('#block-menu_block-3 .content li.collapsed ul').css('display', 'none');
			callback();
		});
	}); 
}

function openMenu(_name){
    var menuItem = $('li#' + _name + ' ul');
    menuItem.css('display', 'block');
    if ($('li#' + _name).hasClass('collapsed')){
      $('li#' + _name).removeClass('collapsed');
      $('li#' + _name).addClass('expanded');      
    }
    $('li#' + _name).addClass('active-trail');
}

function activeSubMenu(_name){
    $('li#' + _name).addClass("active-trail");
    $('li#' + _name + ' a').addClass("active-trail active");
}

/*function mpTypeToCSS(_type){
  switch(_type){
    case 'Macro-processus Support' :
    return 'mp-support degrade_bleu_blanc';
    case 'Macro-processus Opérationnel' :
    return 'mp-operationnel degrade_vert_blanc';
    case 'Macro-processus de Pilotage' :
    return 'mp-pilotage degrade_rouge_blanc';
    case 'Processus de Pilotage' :
    return 'p-pilotage';
    case 'Processus Support' :
    return 'p-support';
    case 'Processus Opérationnel' :
    return 'p-operationnel';    
  }

}*/


function mpTypeToCSS(_type){
  switch(_type){
    case 'Macro-processus Support' :
    return 'mp-support bleu';
    case 'Macro-processus Opérationnel' :
    return 'mp-operationnel vert';
    case 'Macro-processus de Pilotage' :
    return 'mp-pilotage rouge';
    case 'Processus de Pilotage' :
    return 'p-pilotage';
    case 'Processus Support' :
    return 'p-support';
    case 'Processus Opérationnel' :
    return 'p-operationnel';    
  }

}



function updateBreadCrumbPage(info){
	$("ul#breadcrumb li.page").html(info);
}


function doActionsForSingle()
{
	$('li.property-title').addClass('title-h3');
}


function afficherContacts(output, listContacts, fonctionFiltre){
    output.push("<ul class='contact'>");
    _.each(listContacts, function(one_role){

        if (!_.isUndefined(fonctionFiltre)){
          if (fonctionFiltre(one_role.type) == "autre"){
            return;
          }
        }        
        addTitle(output,one_role.name);
        //console.log(one_role);
        if (!(one_role.téléphone == "" && one_role.courriel == "" && one_role.périmètre == "")){
          output.push("<li><span  class='title-h3'>",' Tél: ',"</span>","<span class ='text'>" + one_role.téléphone,"</span>","</li>");
          output.push("<li><span  class='title-h3'>","<a href='mailto:" + one_role.courriel +"'>Mail: " + one_role.courriel,"</a>","</span>","</li>");
          output.push("<li><span  class='title-h3'>",'Périmètre: ',"</span>","<span class ='text'>" + one_role.périmètre,"</span>","</li>");              
        }    
    }); 
    output.push("</ul>");
}
