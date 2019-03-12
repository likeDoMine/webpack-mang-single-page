/**
 *  插件库的封装
 */

//数组的深度copy的封装
const deepCopy = (obj)=>{
    if (Array.isArray(obj)) {
        return obj.map(deepCopy)
    } else if (obj && typeof obj === 'object') {
        var cloned = {}
        var keys = Object.keys(obj)
        for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i]
            cloned[key] = deepCopy(obj[key])
        }
        return cloned
    } else {
        return obj
    }
}
export {deepCopy};

