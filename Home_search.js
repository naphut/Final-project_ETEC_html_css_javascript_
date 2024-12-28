const products=[
    {
        id:1,
        image:'https://zandokh.com/image/cache/catalog/products/2024-06/5132312009/T-Shirt%20(9)-cr-450x672.jpg',
        category:'Man',
        reqular_price:0,
        sale_price:22.5,
        title:'Regular T-Shirts',
        description:'Regular T-Shirts',
        views:34,
        size:'M,L,XL',
        color:'black,blue',
    },
    {
        id:2,
        image:'https://zandokh.com/image/cache/catalog/products/2024-09/5152312018/T-Shirt%20(8)-cr-450x672.jpg',
        category:'Man',
        reqular_price:30,
        sale_price:22.59,
        title:'Sport Life T-Shirts',
        description:'Sport Life T-Shirts',
        views:10,
        size:'M,L,XL',
        color:'white,gray',
    },
    {
        id:3,
        image:'https://zandokh.com/image/cache/catalog/products/2024-06/5252312015/T-Shirt%20(13)-cr-450x672.jpg',
        category:'Woman',
        reqular_price:18,
        sale_price:12.5,
        title:'Sport Lift T-Shirts',
        description:'Sport Lift T-Shirts',
        views:20,
        size:'M,L,XL',
        color:'pink',
    },
    {
        id:4,
        image:'https://zandokh.com/image/cache/catalog/products/2024-12/3222409490/Mini%20Dress%20(1)-cr-450x672.jpg',
        category:'Woman',
        reqular_price:0,
        sale_price:18.5,
        title:'Mini Dress',
        description:'Mini Dress',
        views:31,
        size:'M,L,XL',
        color:'black',
    },
    {
        id:5,
        image:'https://zandokh.com/image/cache/catalog/products/2024-08/5152405105/Sport-Life-Sweatshirt%20(3)-cr-450x672.jpg',
        category:'Boy',
        reqular_price:15,
        sale_price:9,
        title:'Sport Life Sweatshirt',
        description:'Sport Life Sweatshirt',
        views:19,
        size:'S,M',
        color:'black',
    },
    {
        id:6,
        image:'https://zandokh.com/image/cache/catalog/products/2024-07/5152405084/Shorts%20(3)-cr-450x672.jpg',
        category:'Boy',
        reqular_price:0,
        sale_price:22.5,
        title:'Sport Life Knitted Quarter',
        description:'Sport Life Knitted Quarter',
        views:7,
        size:'S,M',
        color:'black',
    },
    {
        id:7,
        image:'https://zandokh.com/image/cache/catalog/products/2024-09/1322407102/T-Shirt%20(8)-cr-450x672.jpg',
        category:'Boy',
        reqular_price:0,
        sale_price:18,
        title:'T-Shirt With Print',
        description:'T-Shirt With Print',
        views:28,
        size:'S,M,L',
        color:'yellow,white',
    },
    {
        id:8,
        image:'https://zandokh.com/image/cache/catalog/products/2024-02/1422312202/Jeans%20(7)-cr-450x672.jpg',
        category:'Girl',
        reqular_price:0,
        sale_price:16.5,
        title:'Slim Fit Jeans',
        description:'Slim Fit Jeans',
        views:19,
        size:'S,M',
        color:'gray',
    },
    {
        id:9,
        image:'https://zandokh.com/image/cache/catalog/products/2024-08/5252405050/Trousers%20(3)-cr-450x672.jpg',
        category:'Girl',
        reqular_price:15,
        sale_price:7.50,
        title:'Sport Life Capri Pants',
        description:'Sport Life Capri Pants',
        views:60,
        size:'M,L',
        color:'black',
    },
    {
        id:10,
        image:'https://zandokh.com/image/cache/catalog/products/2024-07/1422403230/T-Shirt%20(5)-cr-450x672.jpg',
        category:'Girl',
        reqular_price:0,
        sale_price:7.80,
        title:'Blouse With Pockets',
        description:'Blouse With Pockets',
        views:35,
        size:'S,M,L',
        color:'brown',
    },
    {
        id:11,
        image:'https://zandokh.com/image/cache/catalog/products/2024-05/1222404426/T-Shirt-With-Print%20(3)-cr-450x672.jpg',
        category:'Women',
        reqular_price:0,
        sale_price:21.5,
        title:'T-Shirt With Print',
        description:'T-Shirt With Print',
        views:45,
        size:'M,L,XL',
        color:'green',
    },
    {
        id:12,
        image:'https://zandokh.com/image/cache/catalog/products/2024-04/1222403253/T-Shirt%20(3)-cr-450x672.jpg',
        category:'Woman',
        reqular_price:0,
        sale_price:22.5,
        title:'Regular T-Shirt',
        description:'Regular T-Shirt',
        views:47,
        size:'M,L,XL',
        color:'brown,pink',
    },
];


// Parse Query Parameters
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return params.get('query') || '';
}

// Filter Products
function filterProducts(query) {
  const lowerCaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.title.toLowerCase().includes(lowerCaseQuery) ||
    product.category.toLowerCase().includes(lowerCaseQuery)
  );
}

// Render Products
function renderProducts(productList) {
  const container = document.getElementById('searchResults');
  container.innerHTML = '';

  if (productList.length === 0) {
    container.innerHTML = '<p class="text-center">No products found.</p>';
    return;
  }

  productList.forEach(product => {
    const card = `
      <div class="col-6 col-md-3">
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">US ${product.sale_price}</p>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

// On Page Load
document.addEventListener('DOMContentLoaded', () => {
  const query = getQueryParams();
  const filteredProducts = filterProducts(query);
  renderProducts(filteredProducts);
});









