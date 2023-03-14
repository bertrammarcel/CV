function loadi18n(language) {
    if(!language){
      language = "de";
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "/services/i18n."+language+".json",false);
    xhr.onload = function() {
      if (xhr.status === 200) {
        window.i18n = JSON.parse(xhr.responseText);
      }
    };
    xhr.send();
}
