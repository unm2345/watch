(function(){
  // ie 감지
  var agent = navigator.userAgent.toLowerCase();
  if ( (agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
    const ie = document.createElement("div");
    ie.style.position = "fixed";
    ie.style.top = "0";
    ie.style.left = "0";
    ie.style.width = "100%";
    ie.style.height = "100%";
    ie.style.background = "#000";
    ie.style.color = "#fff";
    ie.style["z-index"] = "999";
    ie.innerHTML = "Internet Explorer에서는 사용이 불가능한 페이지입니다.<br> 모던 브라우저를 사용해주세요.";
    document.body.appendChild(ie);
  }
})()