export default {
  inserted: function(el,binding,vnode,oldVnode) {
  	var offset = el.offsetTop;
    var navHeight = el.clientHeight;
    console.log(navHeight)
 	window.addEventListener('scroll', function(){
 		let scrollTop = document.body.scrollTop;
 		if(offset <= scrollTop){
           el.style.position = 'fixed';
           el.style.top = 0+'px';
           el.style.zIndex = 100;
           el.parentNode.style = navHeight;
 		} else {
           el.style.position = 'relative';
 		}
 	},false)
  }
}