import a from './a.pdf'
import b from './1067716.pdf'
import c from './1067717.pdf'
import Jamal from './Game Contents/Characters/Jamal.pdf'
import Jasmine from './Game Contents/Characters/Jasmine.pdf'
import Jim from './Game Contents/Characters/Jim.pdf'
import Lucy from './Game Contents/Characters/Lucy.pdf'
import Maria from './Game Contents/Characters/Maria.pdf'
import Matt from './Game Contents/Characters/Matt.pdf'
import Paula from './Game Contents/Characters/Paula.pdf'
import Rachel from './Game Contents/Characters/Rachel.pdf'







const allpdfs = {
    Characters :  {
        "Jamal" : Jamal, 
        "Jasmine" : Jasmine,
        "Jim" : Jim,
        "Lucy" : Lucy,
        "Maria" : Maria,
        "Matt" : Matt,
        "Paula": Paula,
        "Rachel" : Rachel,
    },
    Alphabets :  {
        "a" : a, 
        "b" : b,
        "c" : c
    }
}

function findPdf(key,value){
    return allpdfs[key][value];
}
export default {findPdf,allpdfs};