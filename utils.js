//创建多层文件夹 同步
exports.mkdirsSync = function mkdirsSync(dirpath) { 
    if (!fs.existsSync(dirpath)) {
        var pathtmp;
        dirpath.split( '/' ).forEach(function(dirname) {
            if (pathtmp) {
                pathtmp = path.join(pathtmp, dirname);
            }
            else {
                pathtmp = dirname;
            }
            if (!fs.existsSync(pathtmp)) {
                if (!fs.mkdirSync(pathtmp)) {
                    return false;
                }
            }
        });
    }
    return true; 
}