var gulp = require("gulp");
var app = require("./lib/server");

// connect: it runs a web server.
gulp.task("start-server", function() {
  console.log(process.cwd() + "/app");  
  console.log(app);
  var server = app.create({
    port:8080,
    documentRoot: "./app"
  });
  server.start();
});

// regsiter default tasks
gulp.task("default", ["start-server"]);
