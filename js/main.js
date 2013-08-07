$(document).ready(init);

var sliders = {};

function init(){

    setUpSlider( 'slider' );
    setUpSlider( 'slider2' );
    setTriggers();
}

function setTriggers(){
    $('.next').click(next);
    $('.prev').click(prev);
}

function setUpSlider( slider_id ){
    var tmp;

    slider_id = "#" + slider_id

    tmp = (sliders[ slider_id ] = {});

    tmp.numberOfItems = $(slider_id + '>li').length;
    tmp.itemsWidth = $(slider_id + '>li').outerWidth();
    tmp.sliderWidth =  (tmp.numberOfItems * tmp.itemsWidth);
    tmp.nextPos =  0;

    $(slider_id).css('width', tmp.sliderWidth);
    //console.log(tmp.itemsWidth);
}

function next(){
    var slider_id = "#" + $(this).attr('data-target');
    var tmp = sliders[ slider_id ]

    tmp.nextPos += tmp.itemsWidth;
    if(tmp.nextPos < tmp.sliderWidth){
        $(slider_id).animate({left: -tmp.nextPos}, 200);
    }
    else{
        tmp.nextPos = 0;
        $(slider_id).animate({left: tmp.nextPos}, 200)
    }
}

function prev(){
    var slider_id = "#" + $(this).attr('data-target');
    var tmp = sliders[ slider_id ]

    tmp.nextPos -= tmp.itemsWidth;
    //console.log(tmp.nextPos);

    if(tmp.nextPos < 0){
        tmp.nextPos = tmp.sliderWidth - tmp.itemsWidth;
        $(slider_id).animate({left: -tmp.nextPos}, 100);
    }
    else{
        $(slider_id).animate({left: -tmp.nextPos}, 100);
    }
}