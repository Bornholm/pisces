
var Query = function() {
  this._statements = [];
  this._timeout = 25;
  this._output = 'json';
  this._bbox = null;
};

var p = Query.prototype;

module.exports = Query;

p.attr = function(type, key, value) {
  this._statements.push({
    t: type,
    k: key,
    v: value
  });
  return this;
}

p.node = function(key, value) {
  return this.attr('node', key, value);
};

p.way = function(key, value) {
  return this.attr('way', key, value);
};

p.rel = function(key, value) {
  return this.attr('relation', key, value);
};

p.all = function(key, value) {
  this.rel(key, value);
  this.way(key, value);
  this.node(key, value);
  return this;
};

p.bbox = function(south, west, north, east) {
  this._bbox = [south, west, north, east];
  return this;
};

p.output = function(format) {
  this._output = format;
  return this;
};

p.timeout = function(delay) {
  this._timeout = delay;
  return this;
};

p.toString = function(pretty) {
  var self = this;
  var qs = [];
  qs.push('[out:'+this._output+'][timeout:'+this._timeout+'];');
  qs.push('(');
  this._statements.forEach(function(stmt) {
    var ss = stmt.t+'["'+stmt.k+'"';
    if(stmt.v) {
      ss += '="'+stmt.v+'"';
    }
    ss += ']';
    if(self._bbox) {
      ss += '('+self._bbox.join(',')+')';
    }
    ss += ';';
    qs.push(ss);
  });
  qs.push(');');
  qs.push('(._;>;);');
  qs.push('out body;');
  return qs.join(pretty ? '\n' : '');
}
