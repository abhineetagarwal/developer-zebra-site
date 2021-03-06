var fs = require('fs'),
    path = require('path'),
    wrench = require('wrench'),
    keyword_extractor = require("keyword-extractor"),
    snippets = require('smart-text-snippet'),
    yamlFront = require('front-matter'),
    removeMd = require('remove-markdown'),
    unfluff = require('unfluff');


function ignoreFunc(file, stats) {
  // `file` is the absolute path to the file, and `stats` is an `fs.Stats` 
  // object returned from `fs.lstat()`. 
  return stats.isFile() && path.extname(file) != ".html";
}

var index_generate = function(folder){
    folder = "build/" + folder;
    var json = [];
    files = wrench.readdirSyncRecursive(folder);
    // console.log(files)
      // Files is an array of filename 
      // console.log(files);
        console.log('indexing: ' + folder);
    

    for (var f = 0; f < files.length; f++) {
        filename = folder + "/" + files[f];
        if(path.extname(filename) == ".html"){
            
            console.log("reading:" + filename);
            var html_file = fs.readFileSync(filename);
            html = unfluff(html_file, 'en');
            var mdfile= filename.replace("build/","src/").replace(".html",".md");
            var md = fs.readFileSync(mdfile).toString();
            
            var yaml;
            yaml = yamlFront(md);
            //get just text
            console.log("Generating Keywords: " + yaml.attributes.title );
            if(yaml.body==""){
                yaml.body = html.text
            }
            var keywords = keyword_extractor.extract(yaml.body,
                {
                    language:"english",
                    remove_digits: true,
                    return_changed_case:true,
                    remove_duplicates: true

                });
            console.log("Keywords: " + keywords.length.toString());
            keyword_string = "";
            for (var x = 0; x < keywords.length; x++) {
                keyword_string += keywords[x] + " ";
            };
            var snippet = snippets.snip(removeMd(yaml.body), {len: 150});
            index_item = {
                title: yaml.attributes.title,
                keywords: keyword_string,
                summary: snippet,
                url: filename.replace("build/","/").replace("/index.html","")

            }
            if(index_item.keywords==""){
                console.log("*** EMPTY FILE");
                console.log(yaml.body);
            }
            else{
                json.push(index_item);          

            }
        }
    };
    var json_file = folder+'/index.json';
    console.log("Writing to: " + json_file);
    fs.open(json_file, 'w', function(err, fd) {
       if (err) {
           return console.error(err);
       }
      console.log("Creating Index:" + json_file);     
    });        
    fs.writeFile(json_file, JSON.stringify(json), function(err) {
        if(err) {
            console.error("Could not write file" + json_file + ": %s", err);
        }
    });
    

}
      index_generate("emdk-for-android/4-0");
      index_generate("emdk-for-xamarin/1-0");
      index_generate("enterprise-keyboard/1-0");
      index_generate("ehs/2-3");
      index_generate("stagenow/2-2");
