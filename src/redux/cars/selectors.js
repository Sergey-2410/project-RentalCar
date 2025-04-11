//cars/selectors.js
export const selectCars = state => state.cars.cars;
export const selectSortedRentalPrices = state => {
  const cars = state.cars.items.cars || [];
  console.log(cars);

  const prices = [];
  for (const car of cars) {
    const price = Number(car.rentalPrice);
    if (!isNaN(price)) {
      prices.push(price);
    }
  }

  const uniquePrices = [];
  for (const price of prices) {
    if (!uniquePrices.includes(price)) {
      uniquePrices.push(price);
    }
  }

  uniquePrices.sort((a, b) => a - b);
  return uniquePrices;
};
