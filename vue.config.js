const path=require("path");
module.exports = {
  configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),
                "@components":path.join(__dirname,"./src/components"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@router":path.join(__dirname,"./src/router"),
                "@store":path.join(__dirname,"./src/store"),
                "@utils":path.join(__dirname,"./src/utils"),
                "@plugins":path.join(__dirname,"./src/plugins"),
                "@common":path.join(__dirname,"./src/common")
            }
        }
    },
    devServer: {
         proxy: {
            "/m":{
                target:"http://m.springtour.com",
                changeOrigin: true,
            },
            "/vacation":{
                target:"http://m.springtour.com",
                changeOrigin: true,
            },
            "/tour":{
                target:"http://m.springtour.com",
                changeOrigin: true,
            },
            "/ajax":{
                target:"http://m.xishiqu.com",
                changeOrigin: true,
            }
        }
    }
}