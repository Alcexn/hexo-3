hexo.extend.generator.register("npmignore", function (locals) {

  // Object

  return {

    path: "/.npmignore",

    data: `**/*.html

.github/

download/

ads.txt

CNAME

robots.txt

`,

  };

});
