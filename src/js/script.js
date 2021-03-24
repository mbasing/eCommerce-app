$("#add_to_bag").on("click", ()=>{
    $('.container_2').css("visibility", "visible")
})

$("#cls").on("click", ()=>{
    $(".container_2").css("visibility", "hidden")
})


$('#exitPromo').on('click', ()=>{
    $('#promo').fadeOut('fast');
})

// ------------------increase and decrease items------------------------------

let count = document.getElementById('count');

let increment = document.getElementById("increment");
increment.addEventListener("click", () => {
    if (count.innerHTML <= 9) {
    count.innerHTML = parseInt(count.innerHTML) + 1;
    $('#bag').text($('#count').text());
    }
});

let decrement = document.getElementById("decrement");
decrement.addEventListener("click", () => {
    if (count.innerHTML > 1) {
        count.innerHTML = parseInt(count.innerHTML) - 1;
        $('#bag').text($('#count').text());
    } else {
        count.innerHTML = 1;
    }
});










// ----------------------------------

// $('#pic1').on('click', () => {
//     $('#img1').css('visibility', 'visible');
//     $('#img2').css('visibility', 'hidden');
//     $('#img3').css('visibility', 'hidden');
// })

// $('#pic2').on('click', () => {
//     $('#img2').css('visibility', 'visible');
//     $('#img1').css('visibility', 'hidden');
//     $('#img3').css('visibility', 'hidden');
// })

// $('#pic3').on('click', () => {
//     $('#img3').css('visibility', 'visible');
//     $('#img1').css('visibility', 'hidden');
//     $('#img2').css('visibility', 'hidden');
// })

// --------------------------------------- 

// $('#first_image').on('click', () => {
//     $('#img1').css('visibility', 'visible');
//     $('#img2').css('visibility', 'hidden');
//     $('#img3').css('visibility', 'hidden');
// })

// $('#second_image').on('click', () => {
//     $('#img2').css('visibility', 'visible');
//     $('#img1').css('visibility', 'hidden');
//     $('#img3').css('visibility', 'hidden');
// })

// $('#third_image').on('click', () => {
//     $('#img3').css('visibility', 'visible');
//     $('#img1').css('visibility', 'hidden');
//     $('#img2').css('visibility', 'hidden');
// })