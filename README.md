* Some examples
// Set new cookie without name
var unknownCookie = new sCookie();
console.log(unknownCookie.name);
unknownCookie.save(60,'I don\'t know who I am');
console.log(unknownCookie.content);
console.log(unknownCookie.expires);

// Set new cookie passing name
var namedCookie = new sCookie("test");
console.log(namedCookie.name);
console.log(namedCookie.content);
console.log(namedCookie.expires);
namedCookie.save(3600,'Pippo pluto paperino');
console.log(namedCookie.content);
console.log(namedCookie.expires);
namedCookie.delete();
console.log(namedCookie.content);
console.log(namedCookie.expires);
*/
