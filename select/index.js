$('.select_item').hover(function (e) {
    $(this).find('.select_drop').addClass('show');
    $(this).find('.icon').addClass('up');
}, function (e) {
    $(this).find('.select_drop').removeClass('show');
    $(this).find('.icon').removeClass('up');
});

$(document).on('click', '.select_drop .li', function () {
    var text = $(this).html();
    $(this).parents('.select_item').find('.txt').html(text);
    $(this).parents('.select_drop').removeClass('show');
    $(this).parents('.xf_wrap').find('.select_item .txt').attr('data-dj', $(this).attr('data-dj'));
    $(this).parents('.xf_wrap').find('.select_item .txt').attr('data-yj', $(this).attr('data-yj'));
    $(this).parents('.xf_wrap').find('.select_item .txt').attr('data-sn', $(this).attr('data-sn'));
    $(this).parents('.xf_wrap').find('.select_item .txt').attr('data-lx', $(this).attr('data-lx'));
    var num = $(this).parents('.xf_wrap').find('input').val();
    var jsj = parseInt(num) * parseInt($(this).attr('data-dj'));
    var jsyj = parseInt(num) * parseInt($(this).attr('data-yj'));
    $(this).parents('.xf_wrap').find('.tr4 .ymprice').text(jsj);
    $(this).parents('.xf_wrap').find('.tr4 .ymyjprice').text(jsyj + '元');
    $(this).parents('.xf_wrap').find('.tr4 .ymsnprice').text($(this).attr('data-sn') + '元/年')
});
