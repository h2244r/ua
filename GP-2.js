window.onload=function(){
    document.getElementById("clk").click();
}

function shuffle(url) {
  for (var i = url.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = url[i];
    url[i] = url[j];
    url[j] = temp;
  }
  return url;
}

function hari() {
  var urls1 = ["sFfE","WX4BuQ62","lrQxvm3P","GZNz","2S3t","TZixg2","wUiLb","uf7TwPIl","Eb5r2tW","lNB1C","QPvggtWm","tpFREHO","QqT4","rAeeSo6","RjtGa","a4IQ8Nd2","0rgeFdx","gGRYH","RrST","j6OV","4ARzG","91NZLv1","uRmhy2","hKEd","lE7icvR","Kmu3","dBECFGBT","NZX29q","6PVOZb5","P219oA5L","pO0PAEA","YVlkFtF","49aXrA1t","ffmA","9mp0Is","JVjpGQo","7wBtk","QIHdY","ECkyXt","WxFYtA","hbKhY","sxfK","fKPLau1g","N7QyT","zVGL1V1X","AlQj","0yoiPH3","YcuaKw","cyF3LtE","7uuX"];
  var urls = shuffle(urls1)
  var random = Math.floor(Math.random()*urls.length);
  window.location = (youtube + urls[random] + "&html_redirect=1");
}
