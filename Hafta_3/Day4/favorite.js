/* $(document).ready(function () {

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');


    if (productId) {
        $.getJSON(`https://fakestoreapi.com/products/${productId}`)
            .done(function (product) {
                const html = `
                    <div class="product-detail">
                        <div class="product-detail-image">
                            <img src="${product.image}">
                        </div>
                        <div class="product-detail-info">
                            <h1 class="product-detail-title">${product.title}</h1>
                            <p class="product-detail-description">${product.description}</p>
                            <div class="product-detail-price">${product.price} TL</div>
                            <button class="product-detail-btn" data-id="${product.id}"> SEPETE EKLE</button>
                        </div>
                    </div>
                `;
                $('.product-detail').html(html);
            })
            .fail(function () {
                $('.product-detail').html('<p>Ürün bulunamadı.</p>');
            });
    } else {
        $('.product-detail').html('<p>Ürün ID\'si belirtilmemiş.</p>');
    }


    //ilk sayfa yüklendiğinde gizler
    $('.basket-sidebar').slideUp(0);

    //alan dışında işlem yapılınca kapatır  
    $(document).click(function (e) {
        if (!$(e.target).closest('.basket-sidebar, #favorite-box').length) {
            $('.basket-sidebar').slideUp(1000);
        }
    });

    // sepeti aç kapat  yapar
    $('#favorite-box').click(function () {
        $('.basket-sidebar').slideToggle(1000);
    });



    //local storage'a bir ü
    const storageKey = 'products';

    $(document).on('click', '.product-detail-btn', function () {

        const product_id = productId;
        const product_title = $('.product-detail-title').text();
        const product_description = $('.product-detail-description').text();
        const product_price = $('.product-detail-price').text().slice(0, -3);
        const product_image_url = $('.product-detail-image img').attr('src');

        if (product_id && product_title && product_description && product_price && product_image_url) {
            // Mevcut verileri çek veya boş dizi başlat
            const existingData = JSON.parse(localStorage.getItem(storageKey)) || [];

            // Yeni kullanıcı verisini oluştur
            const newProduct = {
                product_id: product_id,
                product_title: product_title,
                product_description: product_description,
                product_price: product_price,
                product_image_url: product_image_url
            };

            // Aynı ID'ye sahip kullanıcı varsa güncelle, yoksa ekle
            const index = existingData.findIndex(product => product.product_id === product_id);
            if (index > -1) {
                existingData[index] = newProduct;
                alert('Ürün zaten eklenmiş');
            } else {
                existingData.push(newProduct);
                alert('Ürün eklendi!');
            }

            // Güncellenmiş veriyi Local Storage'a kaydet
            localStorage.setItem(storageKey, JSON.stringify(existingData));
        } else {
            alert('Ürün eksik bilgi içeriyor');
        }

    });

    $('.basket-sidebar-clear').click(function () {
        localStorage.removeItem('products');
        alert('Ürünler sepetten silindi!');
    });



}); */
/*


*/