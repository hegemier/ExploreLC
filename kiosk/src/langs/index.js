import en  from './en'
import fr  from './fr'
import de  from './de'
const langs = {
    en,
    fr,
    de,
}
export const getText = (local, key) => {
    const paths = key.split('.');
    try{
        let i = 0;
        let res = langs[local];
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
