const newman = require('newman');

newman.run({
    collection: 'https://api.postman.com/collections/29233329-992fd461-bcf0-44d7-933a-7f43a6d7475f?access_key=PMAT-01H9BE6NWJ7TD2A469SE75V54D',
    //environment: './collection/environment.json', // Adjust the path to your environment file
    reporters: ['htmlextra'],
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html' // Specify the path to the HTML report file
        }
    }
}, function (err) {
    if (err) {
        throw err;
    }
    console.log('Collection run complete!');
});
