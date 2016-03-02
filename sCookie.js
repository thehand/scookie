/**
* @file sCookie.js
* @brief A simple and lightweight javascript class to manage cookies 
* @author Francesco Salamone
* @version 0.1
* @date 2016-03-02
*/
var sCookie;

sCookie = function (cookieName) {
  this.name = window.location.hostname + '_sCookie_' + new Date().getTime();

  if (cookieName && cookieName.length > 0) {
    this.name = cookieName;
    this.content = '';
    this.expires = -1;
  }
};

sCookie.prototype.save = function (cookieTtl,cookieContent) {
  if (!cookieTtl || cookieTtl !== parseInt(cookieTtl, 10)) {
    cookieTtl = 3600;
  }
  var expire = new Date();
  var now = new Date();
  expire.setTime(now.getTime() + (parseInt(cookieTtl) * 60000));
  this.expires = expire.toGMTString()

  if (cookieContent && cookieContent.length > 0) {
    this.content = cookieContent;
  } else {
    this.content = '';
  }

  document.cookie = this.name + '=' + escape(this.content) + '; expires=' + this.expires + '; path=/';
};

sCookie.prototype.delete = function () {
    this.save(-1);
};
