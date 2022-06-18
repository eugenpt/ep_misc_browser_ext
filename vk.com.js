console.log('EPs browser extension started');



setInterval(function(){

rdiv = [...document.getElementsByClassName("post_content")];

for (let tdiv of rdiv){
  var like_btns = tdiv.getElementsByClassName('like_btns')[0];

  var ep_thing = like_btns.getElementsByClassName('ep_newlb1');
  if(ep_thing.length > 0){
    continue;
  }
  console.log(tdiv);
  
  html = '<div class="PostBottomActionContainer PostButtonReactionsContainer" data-section-ref="reactions-button-container">\
<div class="ep_newlb1 PostBottomAction PostBottomAction--withBg PostButtonReactions PostButtonReactions--post " role="button" tabindex="0" aria-label="скопировать ссылку на пост" >\
<span class="PostBottomAction__icon _like_button_icon" aria-hidden="true">\
🖇️\
</div>\
</span>\
</div>';

like_btns.innerHTML += html;

setTimeout(function(lb){return function(){
  var elt = lb.getElementsByClassName('ep_newlb1')[0];

  elt.onclick = function(){
    console.log(elt);
    var wall_id = /'wall([^']+)/.exec(elt.parentElement.parentElement.parentElement.innerHTML);
    wall_id = wall_id[1];
    console.log(wall_id);
  

    rwall_href = window.location.href;
    qix = rwall_href.indexOf('?');
    if (qix > 0){
      rwall_href = rwall_href.slice(0, qix);
    }  
    var wall_href = rwall_href + '?w=wall'+wall_id+'%2Fall';
    console.log(wall_href);
  
    //window.open(wall_href, '_blank')
  
    navigator.clipboard.writeText(wall_href);
  
    elt.parentElement.style.backgroundColor = 'blue';
  
    setTimeout(function(e){return function(){
      e.parentElement.style.backgroundColor = '';
    }}(elt), 1500)    
  };

  console.log('it is set.');

}}(like_btns), 50);
}

}, 1000);

console.log('EPs browser extension finished');
