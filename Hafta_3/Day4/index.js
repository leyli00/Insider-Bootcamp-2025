$(document).ready(function () {

    // carousel ekler
    $('.carousel').slick({
        dots: true,       // Navigasyon noktaları
        infinite: true,   // Sonsuz döngü
        speed: 500,       // Geçiş süresi
        slidesToShow: 1,  // Aynı anda gösterilecek slayt sayısı
        autoplay: true,   // Otomatik kaydırma
        autoplaySpeed: 1000 // Otomatik geçiş süresi (2sn)
    });

    $.getJSON('https://fakestoreapi.com/products')
        .done(function (products) {
            products.forEach(function (product) {
                const html = `
                    <div class="product-card">
                        <img class="product-card-image" src="${product.image}">
                        <h1 class="product-card-title">${product.title}</h1>
                        <div class="product-card-price" > ${product.price} TL </div>
                        <button class="product-card-btn" data-id="${product.id}" > DETAY GÖSTER </button>
                    </div>
                `;
                $('.product-cards').prepend(html);
            });
        })



    $(document).on('click', '.product-card-btn', function () {

        const productId = $(this).data("id");
        window.location.href = `detail.html?id=${productId}`;


    });


    // slideup , slideDown , slideToggle

    //ilk sayfa yüklendiğinde gizler
    $('.basket-sidebar').slideUp(0);

    //alan dışında işlem yapılınca kapatır  
    $(document).click(function (e) {
        if (!$(e.target).closest('.basket-sidebar, #basket-box').length) {
            $('.basket-sidebar').slideUp(1000);
        }
    });

    // sepeti aç kapat  yapar
    $('#basket-box').click(function () {
        $('.basket-sidebar').slideToggle(1000); // 1 saniyede yukarı doğru kaydırarak gizler


    });







});