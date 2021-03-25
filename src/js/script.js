$("#add_to_bag").on("click", ()=>{
    $('.container_2').css("visibility", "visible")
})

$("#cls").on("click", ()=>{
    $(".container_2").css("visibility", "hidden")
})


$('#exitPromo').on('click', ()=>{
    $('#promo').fadeOut('fast');
})


$('#subscribe').on('click', ()=>{
    alert('You have successfully subscribed. Check your email for a promo code')
    $('#promo').fadeOut('fast');
})

let count = document.getElementById('count');

let cartSubTotal =  null;

let increment = document.getElementById("increment");
increment.addEventListener("click", () => {
    if (count.innerHTML <= 9) {
    count.innerHTML = parseInt(count.innerHTML) + 1;
    $('#bag').text($('#count').text());
    $('#quantityCount').text($('#count').text());
    $('#cartSubtotal').text(Math.round(mult(count,48.99)));
    $('#cartTotal').text(Math.round(mult(count,48.99)));
}
});

let decrement = document.getElementById("decrement");
decrement.addEventListener("click", () => {
    if (count.innerHTML > 1) {
        count.innerHTML = parseInt(count.innerHTML) - 1;
        $('#bag').text($('#count').text());
        $('#quantityCount').text($('#count').text());
        $('#cartSubtotal').Number(text($('#count').text())*10);
        $('#cartSubtotal').text(Math.round(mult(count,48.99)));
        $('#cartTotal').text(Math.round(mult(count,48.99)));

    } else {
        count.innerHTML = 1;
    }
});

let mult = (a,b)=>{
    return Number(a.innerText)*parseFloat(b);
}

console.log(Math.round(mult(count,48.99)));









