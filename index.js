//My songs
var isPlaying = false;
var myAudio = new Audio("music/YOASOBI-Racing-Into-The-night.mp3");

// var profileMusic = document.querySelector(".song").addEventListener("click", function (){
//     togglePlay();
// });

function togglePlay() {
    console.log("working");
    if(isPlaying){
        myAudio.pause();
        isPlaying = false;
        console.log(isPlaying);
    }
    else{
        myAudio.play();
        isPlaying = true;
        console.log(isPlaying);
    }
}

//Key Click

var numKeys = document.querySelectorAll("button").length;
for(var i = 0; i < numKeys; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var btnText = this.innerText;
        Key(btnText);
        keyAnimation(btnText);
    });
}

//Key Press

document.addEventListener("keydown", function (event){
    Key(event.key.toUpperCase());
    keyAnimation(event.key);
});

function Key(keyPressed){
    switch(keyPressed){
        // Black Keys
        case 'Q':
            var audio = new Audio("piano_key_notes/key02.mp3");
            audio.play();
            break;
        case 'W':
            var audio = new Audio("piano_key_notes/key05.mp3");
            audio.play();
            break;
        case 'E':
            var audio = new Audio("piano_key_notes/key07.mp3");
            audio.play();
            break;
        case 'R':
            var audio = new Audio("piano_key_notes/key10.mp3");
            audio.play();
            break;
        case 'T':
            var audio = new Audio("piano_key_notes/key12.mp3");
            audio.play();
            break;
        case 'Y':
            var audio = new Audio("piano_key_notes/key15.mp3");
            audio.play();
            break;
        case 'U':
            var audio = new Audio("piano_key_notes/key17.mp3");
            audio.play();
            break;
        case 'I':
            var audio = new Audio("piano_key_notes/key20.mp3");
            audio.play();
            break;
        case 'O':
            var audio = new Audio("piano_key_notes/key20.mp3");
            audio.play();
            break;
        case 'P':
            var audio = new Audio("piano_key_notes/key23.mp3");
            audio.play();
            break;

        // White Keys

        case 'A':
            var audio = new Audio("piano_key_notes/key01.mp3");
            audio.play();
            break;
        case 'S':
            var audio = new Audio("piano_key_notes/key03.mp3");
            audio.play();
            break;
        case 'D':
            var audio = new Audio("piano_key_notes/key04.mp3");
            audio.play();
            break;
        case 'F':
            var audio = new Audio("piano_key_notes/key06.mp3");
            audio.play();
            break;
        case 'G':
            var audio = new Audio("piano_key_notes/key08.mp3");
            audio.play();
            break;
        case 'H':
            var audio = new Audio("piano_key_notes/key09.mp3");
            audio.play();
            break;
        case 'J':
            var audio = new Audio("piano_key_notes/key11.mp3");
            audio.play();
            break;
        case 'K':
            var audio = new Audio("piano_key_notes/key13.mp3");
            audio.play();
            break;
        case 'L':
            var audio = new Audio("piano_key_notes/key14.mp3");
            audio.play();
            break;
        case ';':
            var audio = new Audio("piano_key_notes/key16.mp3");
            audio.play();
            break;
        case 'X':
            var audio = new Audio("piano_key_notes/key18.mp3");
            audio.play();
            break;
        case 'C':
            var audio = new Audio("piano_key_notes/key20.mp3");
            audio.play();
            break;
        case 'V':
            var audio = new Audio("piano_key_notes/key21.mp3");
            audio.play();
            break;
        case 'B':
            var audio = new Audio("piano_key_notes/key21.mp3");
            audio.play();
            break;
        case 'N':
            var audio = new Audio("piano_key_notes/key22.mp3");
            audio.play();
            break;
        case 'M':
            var audio = new Audio("piano_key_notes/key24.mp3");
            audio.play();
            break;
        default:
            console.log(this);
    }
}

// Key Animation

function keyAnimation(currentKey){
    if(currentKey == ";"){
        currentKey = "semicolon";
    }
    var activeKey = document.querySelector(".key-" + currentKey.toLowerCase());
    activeKey.classList.remove("greyShadow");
    setTimeout(function(){
        activeKey.classList.add("greyShadow");
    }, 500);
}
