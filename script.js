let operation,
    firstNum,
    secondNum,
    lastClicked = NaN;

$('.clear').click(function () {
    clear(this);
})

$('.num').click(function () {
    let clickedNum = $(this).html();
    let wholeNum = $('.secondArea').html();
    $('.secondArea').html(wholeNum + clickedNum);
    lastClicked = $(this).html();
})

$('.op').click(function () {
    if (!($('.firstArea').html() === '' && $('.secondArea').html() === '-')) {
        if ($('.firstArea').html() !== '' && $('.secondArea').html().length > 1)
            equal(this);
        operation = $(this).html();
        if (isNaN(lastClicked)) {
            if (operation === '-' && $('.secondArea').html() === '')
                $('.secondArea').html(operation);
            else if (!isNaN($('.secondArea').html()) && $('.secondArea').html() !== '') {

                $('.firstArea').html($('.secondArea').html());
                putSign(this);
            }
            else if (isNaN($('.secondArea').html()) && $('.secondArea').html().length === 1) {
                operation = $(this).html();
                $('.secondArea').html(operation);
            }
        }
        else {
            $('.firstArea').html($('.secondArea').html());
            putSign(this);
        }
    }
})

$('#equal').click(function () {
    equal(this);
})

let putSign = function (x) {
    operation = $(x).html();
    $('.secondArea').html(operation);
    lastClicked = $(x).html();
}
let clear = function (x) {
    $('.firstArea').html('');
    $('.secondArea').html('');
    lastClicked = $(x).html();
}
let equal = function (x) {
    firstNum = $('.firstArea').html();
    secondNum = $('.secondArea').html();
    if (isNaN(secondNum[0]))
        secondNum = secondNum.slice(1, secondNum.length);

    clear(x);
    if (operation == '+') {
        $('.secondArea').html(parseFloat(firstNum) + parseFloat(secondNum));
    }
    else if (operation == '-') {
        $('.secondArea').html(parseFloat(firstNum) - parseFloat(secondNum));
    }
    else if (operation == 'X') {
        $('.secondArea').html(parseFloat(firstNum) * parseFloat(secondNum));
    }
    else if (operation == '÷') {
        $('.secondArea').html(parseFloat(firstNum) / parseFloat(secondNum));
    }
    else
        $('.secondArea').html(secondNum);
    lastClicked = $(x).html();
}