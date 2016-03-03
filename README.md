# sCookie

A simple and lightweight tool to manage (creation, reading, writing, deleting) cookies in javaScript

## Installation

Simply include the js script wherever you need.
```html
<script src="/path/to/scookie/sCookie.js" type="text/javascript"></script>
```

## Usage

TODO: Write usage instructions

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits

TODO: Write credits

## License

TODO: Write license* Some examples
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
