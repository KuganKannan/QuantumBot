
$({
    countNum: $('.counter1').text()
}).animate({
    countNum: 960
}, {
    duration: 3000,
    easing: 'linear',
    step: function () {
        $('.counter1').text(Math.ceil(this.countNum));
    },
    complete: function () {
        $('.counter1').text("960");
    }
});


$({
    countNum: $('.counter2').text()
}).animate({
    countNum: 730
}, {
    duration: 3000,
    easing: 'linear',
    step: function () {
        $('.counter2').text(Math.ceil(this.countNum));
    },
    complete: function () {
        $('.counter2').text("730");
    }
});

$({
    countNum: $('.counter3').text()
}).animate({
    countNum: 270
}, {
    duration: 3000,
    easing: 'linear',
    step: function () {
        $('.counter3').text(Math.ceil(this.countNum));
    },
    complete: function () {
        $('.counter3').text("270");
    }
});

$({
    countNum: $('.counter4').text()
}).animate({
    countNum: 945
}, {
    duration: 3000,
    easing: 'linear',
    step: function () {
        $('.counter4').text(Math.ceil(this.countNum));
    },
    complete: function () {
        $('.counter4').text("945");
    }
});


$({
    countNum: $('.counter5').text()
}).animate({
    countNum: 43
}, {
    duration: 3000,
    easing: 'linear',
    step: function () {
        $('.counter5').text(Math.ceil(this.countNum));
    },
    complete: function () {
        $('.counter5').text("43");
    }
});