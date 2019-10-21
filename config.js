var fs = require('fs');

try{
    var data = fs.readFileSync('config.json','utf8');
}catch(e){
    throw "Make file config.json and include parameter 'src' with id of the src you want to work on";
}

class Config{
    constructor() {
        this.srcs = ["HelloWorld1","HelloWorld2"];
        var config = JSON.parse(data);
        this.src = this.srcs[config.src];
    }

    getSrc(){
        return `./src/components/${this.src}`;
    }
    getPublic(){
        return `./public/css/${this.src}`;
    }
}

module.exports = Config;