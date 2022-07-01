//STEAM-IDLE [HOUR BOOST]

const SteamUser = require('steam-user');    //importing script (steam-ser package)

const user = new SteamUser();


const logOnOptions = {
    
    accountName: 'Steam-Account',             //enter your steam ID
    password: 'Steam-Password'                //enter your password

}

user.logOn(logOnOptions);

user.on('loggedOn', () => {

    console.log(logOnOptions.accountName + ' -Successfully logged on');

    user.setPersona(1);
    /* 
    0 - Offline
    1 - Online
    2 - Busy
    3 - Away
    4 - Away
    7 - Invisible 
    */                     

    user.gamesPlayed(730)
    /* 
    list app IDs (730 - CSGO)
    for more info --> https://steamdb.info/ 
    */
});