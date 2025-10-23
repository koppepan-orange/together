async function damage(who, ares, val, prop){
    if(!Array.isArray(ares)) ares = [ares];

    if(val.endWith('%')){
        let key = prop.find(a => a.startWith("%!"));
        if(key) key = key.substring(2);
        else key = "hp";

        let roka = +val.substring(0, val.length - 1);
        if(isNaN(roka)) roka = 0;
        val = who[key] * roka/100;
    }

    for(let are of ares){
        let Watk = 0, Wcrl = 0, Wcrd = 0, Waim = 0;
        let Adef = 0, Acrr = 0, Adod = 0;
        for(buff of are.buffs){
            if(hask(buff.effects, 'atk')){}
        }
    }
}