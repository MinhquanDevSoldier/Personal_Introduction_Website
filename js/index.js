function footerClick() {
    if (confirm('Oni-chan Baka ~~~~') == true) {}
    location.href='https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fprecincttv.com%2Ffiles%2Fimage-exchange%2F2017%2F07%2Fie_60238.jpeg';
}

//Sticky Navbar
window.addEventListener('scroll', function() {
    if(window.scrollY > 150) {
        document.querySelector('#header').style.padding = '10px 200px 10px 200px';
        document.querySelector('#header').style.transition = 'all 0.4s';
        document.querySelector('#header').style.opacity = 0.9;
    } else {
        document.querySelector('#header').style.padding = '30px 200px 30px 200px';
    }
});

//Smooth Scrolling
$('#header a, .btn').on('click', function(event) {
    if(this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;
        const x = $(hash).offset().top;
        console.log(x);
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        )
    }
});