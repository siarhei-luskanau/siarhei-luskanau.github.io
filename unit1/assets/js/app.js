//hide search container
$("#searchContainer").hide();

//add listener to search button
$("#searchButton").click(function () {
    $("#mainContainer").hide();
    $("#searchContainer").show();
    $.getJSON("featured-products.json", function (data) {
        var source = '';
        source += '<ul class="list-unstyled">';
        source += '    {{#each items}}';
        source += '    <li class="col-sm-4">';
        source += '        <div class="col-md-4">';
        source += '            <a href="javascript:void(0)"><img src="{{thumb}}" alt="" class="img-responsive"></a>';
        source += '        </div>';
        source += '        <div class="product-description-holder col-md-8">';
        source += '            <h2><a href="javascript:void(0)">{{title}}</a></h2>';
        source += '            <p><b>Item\'s description:</b> {{description}}</p>';
        source += '        </div>';
        source += '    </li>';
        source += '{{/each}}';
        source += '</ul>';
        var template = Handlebars.compile(source);
        $("#searchContainer").html(template(data));
    });

});