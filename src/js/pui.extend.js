//解决IE10以下不支持Function.bind
if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
        if (typeof this !== "function") {
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }
        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function() {},
            fBound = function() {
                return fToBind.apply(this instanceof fNOP && oThis ? this : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();
        return fBound;
    };
};

// 解决IE9以下不支持 Array.indexOf
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchvalue) {
    for (var i = 0, len = this.length; i < len; i++) {
      if (this[i] === searchvalue) {
        return i;
      }
    }
    return -1;
  };
};
