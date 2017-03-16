/**
 * Requetes Ajax de type GET 
 * 
 */
function getBooks() {
        $.ajax({
            url: URL + "consulting/books",
            async: true,
            type: 'GET',
            datatype: "json",
            success: function (datas) {
                alert(datas);
            },
            error: function () {
                alert("blempro");
            }

        });
  
}


