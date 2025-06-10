/*eslint-env browser*/

var wordsArray = ['UPDATES', 'PATCH NOTES 13.07 HIGHLIGHTS', "AURA LOSS: Vanguard has a new feature rolling out this season called the 'Aura Checker'. If any player is found below the minimum threshold for aura they will be IP banned. Some examples of extreme aura loss will be: getting knifed, 'i got mine', dating online.", "ABILITIES: In an effort to reduce toxic behavior Raze's death will no longer appear in the kill feed, hopefully avoiding criticism from your teammates. Additionally, Breach can now send 1 flash per 15 cents (it will add up so we dont expect this to get abused).", '@RiotGames'];
var t = 0;

function typeContainer(wordsInput, spawnNum, speed) {
    var h = 0;
    var timeSet = speed;
    var time = timeSet;
    var words = ' ' + wordsInput;
    var letter = '';
    typeWriter();

    function typeWriter() {
        var currentlyTyping = true;
        var dialogueBox = (document.getElementById('typePaper_' + spawnNum));
        letter = letter + words.charAt(h);
        dialogueBox.innerHTML = letter;
        if (words.charAt(h) == ' ') {
            time = 3 * timeSet;
        } else if (words.charAt(h) == ',') {
            time = 3 * timeSet;
        } else if (words.charAt(h) == '.') {
            time = 3 * timeSet;
        } else {
            time = timeSet;
        }
        if (h < words.length) {
            var typeWritterLoop = setTimeout(typeWriter, time);
        } else if (h >= words.length) {
            h = 0;
            currentlyTyping = false;
            letter = '';
            clearTimeout(typeWritterLoop);
        }
        h++;
    }

}

function typeController() {
    var speedByCount = wordsArray[t].length
    typeContainer(wordsArray[t], t, (900 / (speedByCount * .45)));
    t++;
    if (t < 5) {
        var typeControllerLoop = setTimeout(typeController, 3000);
    } else {
        clearTimeout(typeControllerLoop);
    }
}

typeController();

function loadingText() {
    var loadingArray = ['--', "\\", '|', '/', '--', "\\", '|', '/'];
    var loopCount = 0;
    loadingLoop();

    function loadingLoop() {
        if (loopCount > 7) {
            loopCount = 0;
        }
        var loadingBox = (document.getElementById('loadingBox'));
        loadingBox.innerHTML = loadingArray[loopCount];
        loopCount++;
        setTimeout(loadingLoop, 500);
    }
}

loadingText();
