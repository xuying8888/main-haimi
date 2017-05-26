export default {
  inserted: function(el,binding,vnode,oldVnode) {
  	var offset = el.offsetTop;
    var navHeight = el.clientHeight;
 	window.addEventListener('scroll', function(){
 		let scrollTop = document.body.scrollTop;
 		if(offset <= scrollTop){
       el.style.position = 'fixed';
       el.style.top = 0+'px';
       el.style.zIndex = 100;
       el.parentNode.style.paddingTop = navHeight+'px';
 		} else {
       el.style.position = 'relative';
       el.parentNode.style.paddingTop = 0+'px';
 		}
 	},false)
  }
}