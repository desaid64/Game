
import Jamal from './Game Contents/Characters/Jamal.pdf'
import Jasmine from './Game Contents/Characters/Jasmine.pdf'
import Jim from './Game Contents/Characters/Jim.pdf'
import Lucy from './Game Contents/Characters/Lucy.pdf'
import Maria from './Game Contents/Characters/Maria.pdf'
import Matt from './Game Contents/Characters/Matt.pdf'
import Paula from './Game Contents/Characters/Paula.pdf'
import Rachel from './Game Contents/Characters/Rachel.pdf'

import GPS_Tracker_0001 from './Game Contents/GPS Tracker Reports/GPS Tracker 0001.pdf'
import GPS_Tracker_0002 from './Game Contents/GPS Tracker Reports/GPS Tracker 0002.pdf'
import GPS_Tracker_0003 from './Game Contents/GPS Tracker Reports/GPS Tracker 0003.pdf'
import GPS_Tracker_0004 from './Game Contents/GPS Tracker Reports/GPS Tracker 0004.pdf'
import GPS_Tracker_0005 from './Game Contents/GPS Tracker Reports/GPS Tracker 0005.pdf'
import GPS_Tracker_0006 from './Game Contents/GPS Tracker Reports/GPS Tracker 0006.pdf'
import GPS_Tracker_0007 from './Game Contents/GPS Tracker Reports/GPS Tracker 0007.pdf'
import GPS_Tracker_0008 from './Game Contents/GPS Tracker Reports/GPS Tracker 0008.pdf'

import Jamal_IR from './Game Contents/Investigation Reports/Jamal Investigation Report.pdf'
import Jasmine_IR from './Game Contents/Investigation Reports/Jasmine Investigation Report.pdf'
import Jim_IR from './Game Contents/Investigation Reports/Jim Investigation Report.pdf'
import Lucy_IR from './Game Contents/Investigation Reports/Lucy Investigation Report.pdf'
import Maria_IR from './Game Contents/Investigation Reports/Maria Investigation Report.pdf'
import Matt_IR from './Game Contents/Investigation Reports/Matt Investigation Report.pdf'
import Paula_IR from './Game Contents/Investigation Reports/Paula Investigation Report.pdf'
import Rachel_IR from './Game Contents/Investigation Reports/Rachel Investigation Report.pdf'

import Letter from './Game Contents/Letters_Leaflets/Letter.pdf'
import Opera_Poster from './Game Contents/Letters_Leaflets/Letter.pdf'

import issue_112 from './Game Contents/Newspaper Articles/Newspaper Article Issue 112.pdf'
import snippet from './Game Contents/Newspaper Articles/Newspaper Article Snippet.pdf'

import Jamal_S from './Game Contents/Statements/Interview with Jamal.pdf'
import Jasmine_S from './Game Contents/Statements/Interview with Jasmine.pdf'
import Jim_S from './Game Contents/Statements/Interview with Jim.pdf'
import Lucy_S from './Game Contents/Statements/Interview with Lucy.pdf'
import Maria_S from './Game Contents/Statements/Interview with Maria.pdf'
import Matt_S from './Game Contents/Statements/Interview with Matt.pdf'
import Paula_S from './Game Contents/Statements/Interview with Paula.pdf'

import Jamal_108719 from './Game Contents/Receipts/Jamal Receipt 108719.pdf'
import Jim_208111 from './Game Contents/Receipts/Jim Receipt 208111.pdf'
import Lucy_507 from './Game Contents/Receipts/Lucy Receipt 507.pdf'
import Lucy_108711 from './Game Contents/Receipts/Lucy Receipt 108711.pdf'
import Maria_100300 from './Game Contents/Receipts/Maria Receipt 100300.pdf'
import Paula_109200 from './Game Contents/Receipts/Paula Receipt 109200.pdf'

import Jamal_P from './Game Contents/Character Photos/Jamal Photo.jpg'
import Jasmine_P from './Game Contents/Character Photos/Jasmine Photo.jpg'
import Lucy_P from './Game Contents/Character Photos/Lucy Photo.jpg'
import Maria_P from './Game Contents/Character Photos/Maria Photo.jpg'
import Matt_P from './Game Contents/Character Photos/Matt Photo.jpg'
import Paula_P from './Game Contents/Character Photos/Paula Photo.jpg'
import Rachel_P from './Game Contents/Character Photos/Rachel Photo.jpg'

const allpdfs = {

    "Characters" :  {
        "Jamal" : Jamal, 
        "Jasmine" : Jasmine,
        "Jim" : Jim,
        "Lucy" : Lucy,
        "Maria" : Maria,
        "Matt" : Matt,
        "Paula": Paula,
        "Rachel" : Rachel,
    },
    "GPS Tracker Reports" : {
        "GPS Tracker 0001" : GPS_Tracker_0001, 
        "GPS Tracker 0002" : GPS_Tracker_0002, 
        "GPS Tracker 0003" : GPS_Tracker_0003, 
        "GPS Tracker 0004" : GPS_Tracker_0004, 
        "GPS Tracker 0005" : GPS_Tracker_0005, 
        "GPS Tracker 0006" : GPS_Tracker_0006, 
        "GPS Tracker 0007" : GPS_Tracker_0007, 
        "GPS Tracker 0008" : GPS_Tracker_0008, 
    },
    "Investigation Reports" :  {
        "Jamal" : Jamal_IR, 
        "Jasmine" : Jasmine_IR,
        "Jim" : Jim_IR,
        "Lucy" : Lucy_IR,
        "Maria" : Maria_IR,
        "Matt" : Matt_IR,
        "Paula": Paula_IR,
        "Rachel" : Rachel_IR,
    },
    "Letter Leaflets" :  {
        "Letter" : Letter, 
        "Opera Poster" : Opera_Poster,
    },
    "Newspaper Articles" :  {
        "Issue 112" : issue_112, 
        "Snippet" : snippet,
    },
    "Receipts" : {
        "Jamal Receipt 108719" : Jamal_108719,
        "Jim Receipt 208111" : Jim_208111,
        "Lucy Receipt 507" : Lucy_507,
        "Lucy Receipt 108711" : Lucy_108711,
        "Maria Receipt 100300" : Maria_100300,
        "Paula Receipt 109200" : Paula_109200
    },
    "Statements" :  {
        "Jamal" : Jamal_S, 
        "Jasmine" : Jasmine_S,
        "Jim" : Jim_S,
        "Lucy" : Lucy_S,
        "Maria" : Maria_S,
        "Matt" : Matt_S,
        "Paula": Paula_S,
    }
}

const allImgs = {
    "Jamal" : {
        "width" : 550,
        "height" : 500,
        "src" : Jamal_P,
    },
    "Jasmine" : {
        "width" : 450,
        "height" : 500,
        "src" : Jasmine_P,
    },
    "Lucy" : {
        "width" : 300,
        "height" : 500,
        "src" : Lucy_P,
    },
    "Maria" : {
        "width" : 365,
        "height" : 500,
        "src" : Maria_P,
    },
    "Matt" : {
        "width" : 325,
        "height" : 500,
        "src" : Matt_P,
    },
    "Paula": {
        "width" : 380,
        "height" : 500,
        "src" : Paula_P,
    },
    "Rachel" :{
        "width" : 260,
        "height" : 500,
        "src" : Rachel_P,
    }
}
const Characters = ["Jamal","Jasmine" ,"Jim","Lucy","Maria","Matt","Paula","Rachel"]

function findPdf(key,value){
    return allpdfs[key][value];
}
export default {findPdf,allpdfs,allImgs,Characters};