document.getElementById('startSimulation')?.addEventListener('click', () => {
  const ordersDiv = document.getElementById('orders')!;
  ordersDiv.innerHTML = '';

  // createCustomerOrder(1, 'Cola');
  // createCustomerOrder(2, 'Sprite');
  // createCustomerOrder(3, 'Wasser');
});

//  hier die einzelnen Functions einfügen, die jeweils ein Promise zurückgeben

function processOrder(customerNumber: number, drink: string, customerDiv: HTMLDivElement) {
  // Promise.all([
  //   order(customerNumber, customerDiv),
  //   pay(customerDiv),
  //   makeBurger(customerDiv),
  //   makeFries(customerDiv),
  //   makeDrink(drink, customerDiv)
  // ]).then(() => {
  //   console.log('Bestellung abgeschlossen.');
  //   customerDiv.innerHTML += '✅ Bestellung abgeschlossen.<br>';
  // });
}

function getRandomDurationInMilliseconds(): number {
  const min = 2000;
  const max = 12000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
