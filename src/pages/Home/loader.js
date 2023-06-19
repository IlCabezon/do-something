export default async function loaderActivity() {
  // TODO implement abort controller

  const res = await fetch('http://www.boredapi.com/api/activity');

  const activity = await res.json();

  return { activity };
}
