$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (productId) {
    $.getJSON(`https://diwserver.vps.webdock.cloud/products/${productId}`, function (data) {
      const product = data;

      console.log(product)
      let cardHtml = `
              <div class="container">
                <div class="card text-center bg-light">
                    <a href="" class="position-absolute end-0 p-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            class="bi bi-heart" viewBox="0 0 16 16">
                            <path
                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>

                    </a>
                    <img src="${product.image}" class="card-img-top img-detalhes">
                    <div class="card-header">
                       Preço:  R$ ${(product.price).toFixed(2)}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <h6 class="mt-4">Descrição</h6>
                        <p>${product.description}</p>
                        <p>Número de avaliações: <strong>${product.rating.count}</strong> </p>
                        <p>
                          Avaliação: <strong>${product.rating.rate}</strong> 
                        </p>
                        
                        <a href="index.html" class="btn btn-custom">Voltar a tela inicial</a>
                    </div>
                </div>
            </div>
          `;

      $('#producto').html(cardHtml);
    }).catch(function (error) {
      console.log('Ocorreu um erro ao buscar os detalhes do produto:', error);
      $('#productNaoEncontrado').text('Ocorreu um erro ao buscar os detalhes do produto.');
    });
  } else {
    $('#productNotFound').text('ID do produto não fornecido.');
  }
});