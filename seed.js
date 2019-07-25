const { green, red } = require('chalk');
const { db, Resource, Method } = require('./server/db');

const seed = async () => {
  try {
    await db.sync({ force: true });
    const [water, electricity, gas, plastics, paper] = await Promise.all([
      Resource.create({
        name: 'Water',
        imageUrl: 'mrkrabs.jpg',
        description:
          'Showering, bathing, brushing your teeth, tending to a garden, watering your lawn, washing your car, filling your pool',
      }),
      Resource.create({
        name: 'Electricity',
        imageUrl: 'mrkrabs.jpg',
        description:
          'plugging in appliances, running the washer/dryer, using energy-ineffienct lightbulbs, keeping lights on',
      }),
      Resource.create({
        name: 'Gas',
        imageUrl: 'mrkrabs.jpg',
        description:
          'taking showers with hot water, running washing machine with hot water, using an oven, using central heating, poor insulation',
      }),
      Resource.create({
        name: 'Plastics',
        imageUrl: 'mrkrabs.jpg',
        description:
          'Single-use water bottles, extra product packaging, grocery store plastic bags, disposable utensils',
      }),
      Resource.create({
        name: 'Paper',
        imageUrl: 'mrkrabs.jpg',
        description:
          'Paper bills, junk mailers, single-use paper towels or paper napkins, paper plates and cups',
      }),
      Resource.create({
        name: 'Food',
        imageUrl: 'mrkrabs.jpg',
        description:
          'Meat, poultry, dairy, grains, vegetables, fruits, pre-packaged or processed foods, fast food',
      }),
    ]);
    const [
      lightBulb,
      waterBottle,
      groceryBag,
      toilet,
      thermostat,
      windows,
    ] = await Promise.all([
      Method.create({
        name: 'Energy-Efficient LED Bulbs ',
        imageUrl: 'job.jpg',
        description: 'Switching to energy-efficient light bulbs',
        resourceId: 5,
      }),
      Method.create({
        name: 'Reusable Water Bottles',
        imageUrl: 'job.jpg',
        description:
          'Reusing a glass or plastic water bottle in lieu of buying single use water bottles',
        resourceId: 2,
      }),
      Method.create({
        name: 'Canvas Grocery Bags',
        imageUrl: 'job.jpg',
        description:
          'Bring your own grocery bags instead of buying plastic bags at the store',
        resourceId: 2,
      }),
      Method.create({
        name: 'DIY Low-flow Toilet',
        imageUrl: 'job.jpg',
        description:
          'Place a brick inside your toilet tank to displace water and decrease flush volume',
        resourceId: 1,
      }),
      Method.create({
        name: 'Thermostat Regulation',
        imageUrl: 'job.jpg',
        description: 'Decrease your thermostat by one degree',
        resourceId: 4,
      }),
      Method.create({
        name: 'Window Insulation',
        imageUrl: 'job.jpg',
        description:
          'Decrease your energy bill by weather-proofing windows and sealing gaps to prevent unintended heat loss',
        resourceId: 4,
      }),
    ]);
    return [
      water,
      electricity,
      gas,
      plastics,
      paper,
      lightBulb,
      waterBottle,
      groceryBag,
      toilet,
      thermostat,
      windows,
    ];
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch(err => {
      console.error(red('Oh no! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
