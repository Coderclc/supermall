const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
// module.exports={
//     chainWebpack:(config)=>{
//         config.resolve.alias
//         .set('@',resolve('src'))
//         .set('components',resolve('src/components'))
//         .set('assets',resolve('src/assets'))
//         .set('img',resolve('src/assets/img'))
//         .set('commonjs',resolve('src/commonjs'))
//         .set('network',resolve('src/network'))
//         .set('views',resolve('src/views'))
//         //set第一个参数：设置的别名，第二个参数：设置的路径
//     }
// }
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 不能再次定义@,否则重定义,默认为src
        assets: "@/assets",
        img: "assets/img",
        views: resolve("src/views"),
        common: "@/common",
        components: "@/components",
        network: "@/network"
      }
    }
  }
};
