//轉成SQL所需時間格式
function toMSTime(date,Strformat){
    var M = (date.getMonth()+1)/10 < 1 ? '0' + (date.getMonth()+1) : date.getMonth()+1;
    var D = date.getDate()/10 < 1 ? '0' + date.getDate() : date.getDate();
    var H = date.getHours()/10 < 1 ? '0' + date.getHours() : date.getHours();
    var m = date.getMinutes()/10 < 1 ? '0' + date.getMinutes() : date.getMinutes();

    switch(Strformat){
        case undefined: 
            HTMLdatetime = date.getFullYear() + '-' + M + '-' + D + 'T' + H + ':' + m + ':00';
            break;
        case 'onlyHour':
            HTMLdatetime = date.getFullYear() + '-' + M + '-' + D + 'T' + H + ':00:00';
            break;
        case 'onlyDate':
            HTMLdatetime = date.getFullYear() + '-' + M + '-' + D + 'T00:00:00';
            break;
    }
    return HTMLdatetime;
}

//動態在type=datetime-local的input下方新增div
$('[type=datetime-local]').each(function(){
    var thisId = $(this).attr('id');
    var airpickerId = thisId + 'AirPicker';

    $(this).after("<div style= 'position: absolute;'><div id='" + airpickerId +
    "' style='position: absolute; z-index: 1010;'>"); 
    
    var AirPicker = $('#'+airpickerId).datepicker({//將div賦與airdatepicker
        language: 'zh',
        timepicker:  $(this).attr('APformat') == 'onlyDate' ? false: true,
        minMinutes: 0,
        maxMinutes: 0,
        onSelect: function (formattedDate, date, inst) { //日期點擊事件
            if (date != ''){
                $('#' + thisId).val(toMSTime(date,$(this).attr('APformat')));
            }
        }
    });
    
    //依視窗位置調整出現位置
    $(this).click(function(){
        console.log();
        console.log($('#'+airpickerId).parent().offset().top);
        $('#'+airpickerId).css('left', ($(this).offset().left - $('#'+airpickerId).parent().offset().left) + 'px');
        heightlost = $(this).offset().top+$(this).height()+2 - $('#'+airpickerId).parent().offset().top
        if($(window).scrollTop() + $(window).height() - $(this).offset().top + $(this).height() < $('#'+airpickerId).height()){
            topmove = $('#'+airpickerId).height() + $('#'+thisId).height() +2
            $('#'+airpickerId).css('top', (heightlost -topmove) + 'px')
        }
        else{
            $('#'+airpickerId).css('top', heightlost + 'px')
        };
        AirPicker.show()
    });

    $(document).click(function(e) { //點擊其他地方隱藏
        var target = $(e.target);
        if(!target.is('#' + thisId) && !target.is('#' + airpickerId + ' *') 
        && !target.is('#' + airpickerId + ' * *') 
        && !target.is('.datepicker--nav-action *')
        && !target.is('.datepicker--nav-title')
        && !target.is('.datepicker--nav-title *')
        && !target.is('.datepicker--cell-day')
        ) {
            if ($('#'+airpickerId).is(':visible')) {  
                AirPicker.hide();                                                    
            }
        }
    });

    AirPicker.hide();
})