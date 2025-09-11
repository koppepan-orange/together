const firebaseConfig = {
    apiKey: "AIzaSyBN5V_E6PzwlJn7IwVsluKIWNIyathhxj0",
    authDomain: "koppepan-orange.firebaseapp.com",
    databaseURL: "https://koppepan-orange-default-rtdb.firebaseio.com",
    projectId: "koppepan-orange",
    storageBucket: "koppepan-orange.appspot.com",
    messagingSenderId: "730150198097",
    appId: "1:730150198097:web:076a074a3d406053155170",
    measurementId: "G-MYKJWD203Z"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
let username = 'no name';
let userRef = null;

let lgiD = document.getElementById('login');
let lgiC = {
    usernameI: lgiD.querySelector('.username'),
    passwordI: lgiD.querySelector('.password'),
    senD: lgiD.querySelector('.send'),
    
    xX: lgiD.querySelector('.x'),
    xF: () => {
        console.log('x')
        lgiC.usernameI.value = '';
        lgiC.passwordI.value = '';
        lgiD.classList.remove('tog');
    },

    summonD: document.getElementById('logSummon'),
    summon: () => {
        console.log('summon')
        lgiD.classList.add('tog');
    },

    logoutD: document.getElementById('logout'),
    logout: () => {
        console.log('logout')
        nicoText("ログアウトしました");
        username = 'no name';
        removeLocalStorage("username");
    
        logUsername.value = '';
        logPassword.value = '';
    }
}
lgiC.logoutD.addEventListener('click', lgiC.logout);
lgiC.xX.addEventListener('click', lgiC.xF);
lgiC.summonD.addEventListener('click', lgiC.summon);

async function login(){
    setLocalStorage("banned", 0)
    userRef = database.ref(`users/${username}`);
    nickname = username;

    nicoText('ログイン中...')
    lgiD.classList.remove('tog');
    await delay(500);

    userRef.update({
        status: 'online'
    });
}

lgiC.senD.addEventListener('click', () => {
    let kusername = lgiC.usernameI.value;
    let kpassword = lgiC.passwordI.value;

    let kuserRef = database.ref(`users/${kusername}`);
    kuserRef.once('value', function(snapshot){
        if(snapshot.exists()){
            if(snapshot.val().password == kpassword){
                username = kusername;
                setLocalStorage("username", username)
                login();
            }
        }else{
            username = kusername
            let userRef = database.ref(`users/${username}`);
            userRef.update({
                password:kpassword,
                banned: 0,
                blocked: [],
            })
            nicoText('ようこそ');
            setLocalStorage("username", username)
            login();
        }
    })
})

function autoLogin(){
    username = getLocalStorage("username");
    if(username){
        console.log("自動ログインしました");
        login();
    }else{
        console.log("ログインしてください");
        username = 'no name';
    }
}

window.addEventListener('beforeunload', () => {
    if(!userRef) return;
    userRef.once('value').then(function(snapshot) {
        userRef.update({
            status: 'offline'
        });
    })
});