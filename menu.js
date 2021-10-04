(function ($) {
  //MENU
  $(function () {
    $('.toggle-overlay').click(function () {
      $('aside').toggleClass('open');
    });
  });

  //TIENDA
  $(function () {
    var init = "Sin objetos en el carrito!";
    var counter = 0;
    // Valor inicial
    $(".counter").html(init);
    // Añadir al carrito
    function addToBasket() {
      counter++;
      $(".counter").html(counter).animate({
        'opacity': '0'
      }, 300, function () {
        $(".counter").delay(300).animate({
          'opacity': '1'
        })
      })
    }
  
    // Animacion del carrito
    $("button").on("click", function () {
      addToBasket(); $(this).parent().parent().find(".product_overlay").css({
        'transform': ' translateY(0px)',
        'opacity': '1',
        'transition': 'all ease-in-out .45s'
      }).delay(1500).queue(function () {
        $(this).css({
          'transform': 'translateY(-500px)',
          'opacity': '0',
          'transition': 'all ease-in-out .45s'
        }).dequeue();
      });
    });
  });
})(jQuery);
