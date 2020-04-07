$(document).ready(function(){
    $('#open').on('click', function(){
        $(this).css('display', 'none')
        $('#close').fadeIn()
    })
    $('#close').on('click', function(){
        $(this).css('display', 'none')
        $('#open').fadeIn()
    })
})