// localStorage.setItem('396646903', JSON.stringify([]));
console.log(localStorage);
// fetch("https://projects.scratch.mit.edu/", {
//   "credentials": "include",
//   "headers": {
//     "User-Agent": navigator.userAgent,
//     "Accept": "*/*",
//     "Accept-Language": "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3",
//     "Content-Type": "application/json"
//   },
//   "referrer": "https://scratch.mit.edu/",
//   "body": "yourprojectjson",
//   "method": "POST",
//   "mode": "cors"
// }).then(response => response.json()).then(result => {
let history = localStorage.key('396646903') || [];
history.push(result['content-name']);
localStorage.setItem('396646903', JSON.stringify(history));
// });
// console.log(localStorage);

// await fetch("https://scratch.mit.edu/site-api/projects/all/451002196/", {
//     "credentials": "include",
//     "headers": {
//         "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:84.0) Gecko/20100101 Firefox/84.0",
//         "Accept": "application/json, text/javascript, */*; q=0.01",
//         "Accept-Language": "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3",
//         "Content-Type": "application/json",
//         "X-CSRFToken": "7hS1MFzrCQQiAufckwHbhyIJ2TuH57xB",
//         "X-Requested-With": "XMLHttpRequest"
//     },
//     "referrer": "https://scratch.mit.edu/mystuff/",
//     "body": "{\"view_count\":1,\"favorite_count\":0,\"remixers_count\":0,\"creator\":{\"username\":\"ScratchFilin\",\"pk\":54572614,\"thumbnail_url\":\"//uploads.scratch.mit.edu/users/avatars/54572614.png\",\"admin\":false},\"title\":\"Untitled-61\",\"isPublished\":false,\"datetime_created\":\"2020-11-17T15:22:13\",\"thumbnail_url\":\"//uploads.scratch.mit.edu/projects/thumbnails/451002196.png\",\"visibility\":\"trshbyusr\",\"love_count\":0,\"datetime_modified\":\"2020-11-17T15:25:08\",\"uncached_thumbnail_url\":\"//uploads.scratch.mit.edu/projects/thumbnails/451002196.png\",\"thumbnail\":\"451002196.png\",\"datetime_shared\":null,\"commenters_count\":0,\"id\":451002196}",
//     "method": "PUT",
//     "mode": "cors"
// });