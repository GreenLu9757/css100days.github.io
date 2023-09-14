$(function(){
    $('.sidebar__icon__lines__circle').on('click', function sideBarToggle(){
        $('.notifications').toggleClass('active');
        $('.sidebar').toggleClass('active');
    })

    $('.search__icon').on('click',function searchToolShow(){
        $('.search__bar').toggleClass('active');
    })
})