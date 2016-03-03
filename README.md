# sCookie

A simple and lightweight tool to manage (creation, reading, writing, deleting) cookies in javaScript

## Installation

Simply include the js script wherever you need.
```html
<script src="/path/to/scookie/build/scookie.min.js" type="text/javascript"></script>
```

## Usage

You can create anytime a cookie.
When you pass a name during creation, if a cookie with that name already exists, that cookie will be loaded.
If you don't pass any name, a cookie with a random name will be created.

```javascript
var myCookie = new sCookie("my_test");
myCookie.save(3600,'This is the cookie content');
```

So you can read the cookie content whenever you want

```javascript
console.log(myCookie.content);
console.log(myCookie.expires);
```

When you need to delete the cookie you can:

```javascript
myCookie.delete();
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

I needed a cookie management system to allow website's users to save preferences, showing buttons/links according with the content of theirs choises.

## License

This tool is released under the GNU GENERAL PUBLIC LICENSE (version 3).
See the LICENSE file for details.


