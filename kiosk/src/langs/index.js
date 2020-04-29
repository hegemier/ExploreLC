import en  from './en'
import fr  from './fr'
import de  from './de'
import es  from './es'


const langs = {
    en,
    fr,
    de,
    es
}
export let selfLocal = 'en';
let selfFn;
export const setLocalFn = (local = 'en', fn) => {
    selfLocal = local
    if(selfFn) {
        selfFn(local)
    }
    else {
        selfFn = fn
    }
}
export const t = (key) => {
    const paths = key.split('.');
    try{
        let i = 0;
        let res = langs[selfLocal];
        while(i < paths.length) {
            res = res[paths[i]]
            i++
        }
        return res
    }
    catch(e) {
        return ''
    }
}