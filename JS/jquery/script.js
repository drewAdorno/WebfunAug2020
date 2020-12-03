
$('#meme').hover(function(){
    
    $(this).animate({width: 800},'slow')

}, function(){
    $(this).animate({width: 100},'slow')
})


//get

console.log($('#meme').text());


console.log($('#meme').attr('src',''));

$('h1').click(function(){
    console.log($(this).css('color'));
    if($(this).css('color') == 'rgb(255, 0, 0)')
    {
        console.log('You clicked on a red thing');
    }
})