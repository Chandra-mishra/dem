function myFunction() {
    var x = document.getElementsByClassName("embed-responsive-item");
    var y = (x.contentWindow || x.contentDocument);
    if (y.document)y = y.document;
    y.body.style.backgroundColor = "blue";
    setTimeout(function() {
      y.body.style.backgroundColor = "red";
    }, 25000);
  }