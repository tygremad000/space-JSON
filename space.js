$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    var number = data['number'];
    $('#SpacePeople').html(number);
    $( '#')

    data['people'].forEach(function (d) {
        $('#astroNames').append('<td>' + d['name']+ '</td>');
        $ ('#craftNames').append ('<td>' + d['craft']+ '</td>');
    });
});