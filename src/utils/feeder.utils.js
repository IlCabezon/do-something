import fs from 'fs';

const loadJSON = (filePath) => JSON.parse(fs.readFileSync(new URL(filePath, import.meta.url)));
const { activities: jsonActivities } = loadJSON('../mocks/activities.json');


// this function will be used for prod environment
// to replicate api calls
// that's because bored api doesn't have ssl certificate
// and fetches can't be reached
// const url = 'http://www.boredapi.com/api/activity';
const activities = jsonActivities;
// console.log(activities);
// console.log(activities.length);

/* const fetchApiActivities = async () => {
  for (const i of new Array(100).fill(null).map((_, i) => i)) {
    console.log(i);
    const res = await fetch(url);
    const activity = await res.json();

    if (activities.find((act) => act.key === activity.key)) {
      continue;
    } else {
      activities.push(activity);
    }
  }
}; */

// uncomment the following line to breed the file
// await fetchApiActivities();

fs.writeFile('../mocks/activities.json', JSON.stringify({ activities }), 'utf8', (err) => {
  if (err) throw err;
  process.exit('The file has been saved!');
});
