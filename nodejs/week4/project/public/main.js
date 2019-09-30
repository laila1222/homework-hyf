const order = document.querySelector ('input');
const btn = document.querySelector ('button');
const displayResult = document.querySelector ('p');

btn.addEventListener ('click', () => {
  const id = order.value;
  const apiUrl = `http://www.localhost:3002/kitchen/order/${id}`;

  fetch (apiUrl).then (resp => resp.json ()).then (json => {
    displayResult.innerHTML = `Order ID: ${json[0].id}<br>Food: ${json[0].type} <br> Status: ${json[0].status} <br> `;
  });
});
