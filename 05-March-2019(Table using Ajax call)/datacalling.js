$(document).ready(function(){
    $.get("https://jsonplaceholder.typicode.com/posts", function(data){
        var details = '';
        $.each(data,function(key,value){
            details += '<tr>';
            details += '<td>'+value.userId+'</td>';
            details += '<td>'+value.id+'</td>';
            details += '<td>'+value.title+'</td>';
            details += '<td>'+value.body+'</td>';
            details += '</tr>';
        });
        $('#Table').append(details);
    });
});
