function searchMovie() {
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': 'a81698e4',
            's': $('#search-input').val()
        },
        success: function (result) {
            if(result.Response == "True") {
                let movies = result.Search;

                $.each(movies, function(i, data) {
                    $('#movie-list').append(`
                    <div class="col-md-4">
                        <div class="card mb-3" style="background-color: #e3f2fd;">
                            <img src="`+ data.Poster +`" class="card-img-top" alt="`+ data.Title +`">
                            <div class="card-body">
                                <h5 class="card-title">`+ data.Title +`</h5>
                                <h6 class="card-subtitle mb-2 text-muted">`+ data.Year +`</h6>
                                <a href="#" class="card-link">See Detail</a>
                            </div>
                        </div>
                    </div>
                    `);
                })
            } else {
                $('#movie-list').html(`
                <div class="col">
                    <h1>`+ result.Error +`</h1>
                </div>
                `);
            }
        }
    });
}

$('#search-button').on('click', function () {
    searchMovie();
});

$('#search-input').on('keyup', function (e) {
    // keyCode or which
    if(e.keyCode === 13) {

    }
});