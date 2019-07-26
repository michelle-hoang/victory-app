const { green, red } = require('chalk');
const { db, Resource, Practice } = require('./server/db');

const seed = async () => {
  try {
    await db.sync({ force: true });
    const [water, electricity, gas, plastics, paper] = await Promise.all([
      Resource.create({
        name: 'Water',
        imageUrl: 'droplet.png',
        description:
          'Showering, bathing, brushing your teeth, tending to a garden, watering your lawn, washing your car, filling your pool',
      }),
      Resource.create({
        name: 'Electricity',
        imageUrl: 'plug.png',
        description:
          'Plugging in appliances, running the washer/dryer, using energy-inefficienct lightbulbs, keeping lights on',
      }),
      Resource.create({
        name: 'Gas',
        imageUrl: 'fire.png',
        description:
          'Taking showers with hot water, running washing machine with hot water, using an oven, using central heating, poor insulation',
      }),
      Resource.create({
        name: 'Plastics',
        imageUrl: 'bottle.png',
        description:
          'Single-use water bottles, extra product packaging, grocery store plastic bags, disposable utensils',
      }),
      Resource.create({
        name: 'Paper',
        imageUrl: 'notepad.png',
        description:
          'Paper bills, junk mailers, single-use paper towels or paper napkins, paper plates and cups',
      }),
      Resource.create({
        name: 'Food',
        imageUrl: 'takeout.png',
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
      Practice.create({
        name: 'Energy-Efficient LED Bulbs ',
        imageUrl: 'lightbulb.png',
        description: 'Switch to energy-efficient light bulbs',
        resourceId: 5,
      }),
      Practice.create({
        name: 'Reusable Water Bottles',
        imageUrl: 'nalgene.png',
        description:
          'Reuse a glass or plastic water bottle instead of buying single-use water bottles',
        resourceId: 2,
      }),
      Practice.create({
        name: 'Canvas Grocery Bags',
        imageUrl: 'shoppingcart.png',
        description:
          'Bring your own grocery bags instead of buying plastic bags at the store',
        resourceId: 2,
      }),
      Practice.create({
        name: 'DIY Low-flow Toilet',
        imageUrl: 'brick.png',
        description:
          'Place a brick inside your toilet tank to displace water and decrease flush volume',
        resourceId: 1,
      }),
      Practice.create({
        name: 'Thermostat Regulation',
        imageUrl: 'temp.png',
        description: 'Decrease your thermostat by one degree',
        resourceId: 4,
      }),
      Practice.create({
        name: 'Window Insulation',
        imageUrl: 'house.png',
        description:
          'Weather-proof windows and seal gaps to prevent unintended heat loss',
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
