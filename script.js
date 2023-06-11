$(document).ready(function () {
  function getProductList() {
    $.get('https://diwserver.vps.webdock.cloud/products/category/Accessories%20-%20Jewellery?page_items=12', function (response) {
      let results = $('#products');
      results.empty();

      const { products } = response;

      if (products.length > 0) {
        for (let i = 0; i < products.length; i++) {
          let product = products[i];

          let html = `
              <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex-box align-items-stretch">
                <div class="card text-center bg-light">
                    <a href="" class="position-absolute end-0 p-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            class="bi bi-heart" viewBox="0 0 16 16">
                            <path
                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>

                    </a>
                    <img src="${product.image}" class="card-img-top">
                    <div class="card-header">
                        R$ ${(product.price).toFixed(2)}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                    </div>
                    <div class="card-footer">
                        <div class="d-block">
                            <a href="detalhes.html?id=${product.id}" class="btn btn-custom">
                                Ver detalhes
                            </a>
                        </div>
                        <small class="text-success">${Math.floor(Math.random() * (50 - 0 + 1)) + 0}</small>
                    </div>
                </div>
            </div>
          `;
          results.append(html);
        }
      } else {
        results.append('<p class="text-center">Nenhum produto encontrado.</p>');
      }
    });
  };

  function searchProducts() {
    let searchInput = $('#buscarInput').val();

    $.get('https://diwserver.vps.webdock.cloud/products/search?query=' + searchInput, function (products) {
      let results = $('#products');
      results.empty();

      if (products.length > 0) {
        for (let i = 0; i < products.length; i++) {
          let product = products[i];
          let html = `
              <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex-box align-items-stretch">
                <div class="card text-center bg-light">
                    <a href="" class="position-absolute end-0 p-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            class="bi bi-heart" viewBox="0 0 16 16">
                            <path
                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>

                    </a>
                    <img src="${product.image}" class="card-img-top">
                    <div class="card-header">
                        R$ ${(product.price).toFixed(2)}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                    </div>
                    <div class="card-footer">
                        <div class="d-block">
                            <a href="detalhes.html?id=${product.id}" class="btn btn-custom">
                                Ver detalhes
                            </a>
                        </div>
                        <small class="text-success">${Math.floor(Math.random() * (50 - 0 + 1)) + 0}</small>
                    </div>
                </div>
            </div>
          `;
          results.append(html);
        }
      } else {
        results.append('<p class="text-center">Nenhum produto encontrado.</p>');
      }
    });
  };

  function getCategories() {
    $.get('https://diwserver.vps.webdock.cloud/products/categories', function (categories) {
      let select = $('#select');
      categories.forEach(function (category) {
        select.append('<option value="' + category + '">' + category + '</option>');
      });
    });
  };

  function filterByCategory() {
    let selectedCategory = $('#select').val();
    console.log(selectedCategory)

    if (selectedCategory) {
      $.get('https://diwserver.vps.webdock.cloud/products/category/' + selectedCategory, function (response) {
        let results = $('#products');
        
        results.empty();

        const { products } = response;

        if (products.length > 0) {
          for (let i = 0; i < products.length; i++) {
            let product = products[i];
            let html = `
              <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex-box align-items-stretch">
                <div class="card text-center bg-light">
                    <a href="" class="position-absolute end-0 p-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            class="bi bi-heart" viewBox="0 0 16 16">
                            <path
                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>

                    </a>
                    <img src="${product.image}" class="card-img-top">
                    <div class="card-header">
                        R$ ${(product.price).toFixed(2)}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                    </div>
                    <div class="card-footer">
                        <div class="d-block">
                            <a href="detalhes.html?id=${product.id}" class="btn btn-custom">
                                Ver detalhes
                            </a>
                        </div>
                        <small class="text-success">${Math.floor(Math.random() * (50 - 0 + 1)) + 0}</small>
                    </div>
                </div>
            </div>
          `;
            results.append(html);
          }
        } else {
          results.append('<p class="text-center">Nenhum produto encontrado.</p>');
        }
      });
    }
  };

  getProductList();

  $('#buscarButton').click(searchProducts);

  $('#select').change(filterByCategory);

  getCategories();
});