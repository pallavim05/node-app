const { log } = require('console');
const url = require('url');

const urlString = "https://us02web.zoom.us/j/8748449745?pwd=IQelRYADLrADpEUMwoI4JdwalXEyID.1&omn=82184057048";

const urlObject = url.parse(urlString, true);
console.table(urlObject);
console.log(`Protocol: ${urlObject.protocol}`);
console.log(`Host name: ${urlObject.hostname}`);
console.log(`Parameter name: ${urlObject.pathname}`);
console.log(`QueryParameter name:${urlObject.search}`);



