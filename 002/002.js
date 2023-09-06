$(function(){
    $('.icon').on('click',function toggleIcon(){
        console.log('click me')
        $('.first--line').toggleClass('active')
        $('.second--line').toggleClass('active')
        $('.third--line').toggleClass('active')
        $('.first--line').toggleClass('no--animate')
        $('.second--line').toggleClass('no--animate')
        $('.third--line').toggleClass('no--animate')
    })
})