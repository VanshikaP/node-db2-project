
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {id: 1, VIN: '123890', make: '2019', model: 'Corolla', mileage: 16.5},
        {id: 2, VIN: '123853', make: '2020', model: 'Prius', mileage: 18.7},
        {id: 3, VIN: '263849', make: '2019', model: 'Acura', mileage: 20.0}
      ]);
    });
};
