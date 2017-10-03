var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require("request");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
   res.render('index'); 
});

app.get("/memes", function(req, res){
   
   var url = "https://api.imgflip.com/get_memes";
   
   request(url, function(error, resp, body){
      if(!error && resp.statusCode === 200){
         var data = JSON.parse(body);
         res.render('memes', {
            memes:data.data.memes
         });
      } else {
         console.log("Error");
      }
   });
});

app.get("/memes/:id", function(req, res){
      
      var url = "https://api.imgflip.com/get_memes";
      
      request(url, function(error, resp, body) {
         if(!error && resp.statusCode === 200){
            var data = JSON.parse(body);
            var memes = data.data.memes;
            var retMeme;
            
            
            //For some reason, the if statement doesnt work
            console.log(req.params.id + " : " + memes[2].id);
            console.log(typeof memes[2].id + typeof req.params.id);
            if(req.params.id === memes[2].id){
               console.log("hi");
            }
            for(var i = 0; i < memes.length; i++){
               if(memes[i].id === req.params.id) {
                  console.log("hi");
                  retMeme = memes[i];
                  break;
               }
            }
            console.log(retMeme);
            res.render('show', {meme: memes[2]});
         } else {
            console.log("Error");
         }
      });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server is running..."); 
});