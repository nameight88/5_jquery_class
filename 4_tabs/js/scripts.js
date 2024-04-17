$(function(){
    let topDiv = $('.tabSet');
    let anchors = topDiv.find('ul.tabs > li > a');
    let paneDivs = topDiv.find('div.panel');

    //div.panel 태그 중에 panel을 찾는다
    //div .panel 태그의 자손중 panel을 찾는다.

    anchors.show();
    paneDivs.hide();

    let lastAnchor =  anchors.filter('.on');

   // console.log(lastAnchor.attr('href'));
   // console.log($(lastAnchor.attr('href')));

    let lastpanel = $(lastAnchor.attr('href'));
    lastpanel.show();

    anchors.click(function(e){
        e.preventDefault();

        let currentAnchor = $(this);
        let currentPanel = $(currentAnchor.attr('href'));

        lastpanel.hide();
        currentPanel.show();

        lastAnchor.removeClass('on');
        currentAnchor.addClass('on');
        
        lastAnchor=currentAnchor;
        lastpanel=currentPanel;
    });
})