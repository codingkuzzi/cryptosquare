$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val();
    var replaceSentence= sentence.replace(/[^a-z0-9]+/gi, '');
    var splitSentence = replaceSentence.split("")

    var numberOfColomns = Math.floor(Math.sqrt(splitSentence.length));
    //numberOfColomns = Math.round(Math.sqrt(splitSentence.length));
    var numberOfRows = Math.ceil((splitSentence.length/numberOfColomns));
    alert (numberOfRows)
    //$("#crypted").text(sent2crypted(sentence));
  });
});

//BACK END
