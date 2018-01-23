$(function() {
    $("#search").click(function() {
      var searchWikipedia = $("#searchWikipedia").val();
      $.ajax({
        type: "GET",
        url:
          "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
          searchWikipedia +
          "&callback=?",
        async: false,
        dataType: "json",
        success: function(data) {
          //console.log(data[1][2]);
          $("results").html(" ");
          for (var i = 0; i < 11; i++) {
            $("#results").append(
              "<a href=" +
                data[3][i] +
                " target='blank'>" +
                data[1][i] +
                "</h1></a><h3>" +
                data[2][i] +
                "</h3><br>"
            );
          }
        },
        error: function(err) {
          alert("Err");
        }
      });
    });
    $("#searchWikipedia").bind("keypress", function(e) {
      if (e.keyCode == 13) {
        $("#search").click();
      }
    });
  });
  
  