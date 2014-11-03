var http = require('http');
var express = require('express');
var util = require("gulp-util");

var Server = function(){
  this.initialize.apply(this, arguments);
};

var log = function(text, color){
  util.log(color(text));
};

var initRouter = function(server){
  server.router.use(express.static(server.documentRoot));
};

Server.prototype = {

  initialize: function(conf){
    this._port = conf.port || 8080;
    this._documentRoot = conf.documentRoot || process.cwd() + "/app";
    this._router = express();

    initRouter(this);
  },
  start: function(){
    this.engine.listen(this.port);
    this.log("Server started at http://localhost:" + this.port + "/");
    this.log("The document root is " + this.documentRoot);
  },
  log: function(text){
    log(text, util.colors.green);
  },
  warn: function(text){
    util.log(text, util.colors.yellow);
  },
  error: function(text){
    util.log(text, util.colors.red);
  },
  get router(){
    return this._router;
  },
  get engine(){
    return this._router;
  },
  get port(){
    return this._port;
  },
  get documentRoot(){
    return this._documentRoot;
  }
};

exports.create = function(conf){
  return new Server(conf);
};
