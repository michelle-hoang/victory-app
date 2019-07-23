const { green, red } = require('chalk');
const { db, Project, Interest } = require('./server/db');

const seed = async () => {
  try {
    await db.sync({ force: true });

    const [artwork, fiction, poetry, research] = await Promise.all([
      Interest.create({
        name: 'Artwork',
        imageUrl: 'mrkrabs.jpg',
        description: 'something something something something something',
      }),
      Interest.create({
        name: 'Creative Writing',
        imageUrl: 'mrkrabs.jpg',
        description: 'something something something something something',
      }),
      Interest.create({
        name: 'Literary Theory',
        imageUrl: 'mrkrabs.jpg',
        description: 'something something something something something',
      }),
      Interest.create({
        name: 'Neuroscience Research',
        imageUrl: 'mrkrabs.jpg',
        description: 'something something something something something',
      }),
    ]);

    const [job, sight, cloud, drink, lovers, wtf, brain] = await Promise.all([
      Project.create({
        name: 'The Hunt',
        date: 'January, 2017',
        imageUrl: 'job.jpg',
        description: 'something something something something something',
        interestId: 1,
      }),
      Project.create({
        name: 'Limited Sight Distance',
        date: 'January, 2017',
        imageUrl: 'sight.jpg',
        description: 'something something something something something',
        interestId: 1,
      }),
      Project.create({
        name: 'Rain',
        date: 'January, 2017',
        imageUrl: 'cloud.jpg',
        description: 'something something something something something',
        interestId: 1,
      }),
      Project.create({
        name: 'Reclaimed Water',
        date: 'February, 2017',
        imageUrl: 'drink.jpg',
        description: 'something something something something something',
        interestId: 1,
      }),
      Project.create({
        name: 'Lovers on the Moon',
        date: 'December, 2016',
        imageUrl: 'lovers.jpg',
        description: 'something something something something something',
        interestId: 1,
      }),
      Project.create({
        name: 'Conversations with Fred',
        date: 'December, 2016',
        imageUrl: 'wtf.jpg',
        description: 'something something something something something',
        interestId: 1,
      }),
      Project.create({
        name: 'Zebrafish - Behavioral Neuroscience',
        date: 'November, 2015',
        imageUrl: 'zfish.jpeg',
        description:
          'A study of behavioral changes in Danio rerio (zebrafish) after the introduction of a noxious chemical stimulus',
        interestId: 4,
      }),
      Project.create({
        name: 'Aplysia californica - Molecular Neuroscience',
        date: 'August, 2015',
        imageUrl: 'aplysia.jpeg',
        description:
          'A study of molecular changes in Aplysia californica (a marine snail) after the induction of long-term memory',
        interestId: 4,
      }),
    ]);
    return [
      artwork,
      fiction,
      poetry,
      research,
      job,
      sight,
      cloud,
      drink,
      lovers,
      wtf,
      brain,
    ];
    // seed your database here!
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
