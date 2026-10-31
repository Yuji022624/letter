const home = document.getElementById("home");
const letter = document.getElementById("letter");
const message = document.getElementById("message");
const final = document.getElementById("final");

const myMessage = `Dear My Love... ❤️

Mala mahit nahi mi he sagla kasa bolu...
Pan aaj manat khup kahi sathlay,
je kadhi tula sangaycha rahun gel...

Tu majhya ayushyat aalis,
tevha mala kadhi vatlach navhta
ki ek divas tu majhyasathi evadhi special hoshil.

Tujhyashi bolna,
tujha hasna,
tujha ragavna,
tujha majhyasathi kalji karna...
ya saglya chotya chotya goshti
majhya sathi khup mothya hotya.

Kadhi kadhi mi tujhya premachi kadar keli nahi,
tujhya feelings samjun ghetlya nahi,
tu kay feel kartes he samjun ghenyacha
mi kharach prayatna kela nahi.

Tu kadachit majhyakadun fakt evdhach expect kelas
ki mi tula samjun ghyava,
tujhya sobat ubha rahava,
tula thoda vel dyava,
ani tula kadhi ekta feel hou deu naye...

Pan mi hech karu shaklo nahi.

Tujhya dolyat alele tears,
tujhya manat sathlelya feelings,
tujha shant rahun sagla sahan karna...
he sagla mala velich samajayla hava hota.

I am really sorry...
Fakt sorry bolun sagla thik honar nahi,
he mala mahit aahe.

Kadhi kadhi ekhadya vyaktila
apan kiti hurt kartoy he
ti vyakti aplyapasun dur jayla laglyavar samajta.

Ani mala bhiti vatate...
ki mi pan tula kadhi tari asach dur kela asel.

Tu majhyasathi je kahi kelas,
jya paddhatine majhi kalji ghetlis,
majhya chotya chotya goshtinna importance dilis,
te sagla mi kadhi visru shakanar nahi.

I wish mala thoda ajun samajutdar hota ala asta.
I wish mi tujhya feelings velich samjun gheu shaklo asto.
I wish mi tula radavnyapeksha hasvu shaklo asto.

Pan aaj mala fakt evdhach sangaychay...

Tu kadhi majhyasathi kami navhtis.
Kami padlo asel tar mi padlo.
Chuklo asel tar mi chuklo.
Tujhya premachi kadar karayla ushira zala,
ani tyacha mala kharach pashchatap aahe.

Maybe mi tujhya ayushyatla perfect person navhto...
Maybe mi tula deserve pan karat navhto...

Pan ek goshta khari aahe,
tujhyabaddal je kahi feel kelay,
te kadhi khota navhta.

And at last...

Me tuzhya laykicha nahi...
Me kharab aahe, khup kharab aahe.
Mi tula kadhi samjunach gheu shaklo nahi.
Tu kay feel kart hotis,
tula kay hava hota,
tula kiti hurt hot hota...
he sagla mi kadhi samju shaklo nahi.

I am sorry for every tear,
for every sleepless night,
for every moment you felt alone
even when I was there.

Tula ayushyat khup khush rahaycha aahe.
Tujhya chehryavar nehmi smile asu de.
Karan tu kharach khup special aahes.

Thank you for everything...
For loving me, caring for me
and being a part of my life.

I am truly sorry... ❤️🥺`;

// Letter Close Honyapurvichya Few Lines

const lastLines = `Before you close this letter... 🥺

I just want you to know,
I am sorry for everything.

Some feelings can never be explained in words.

Please take care of yourself... 💔`;

// Crying Emoji Animation

let animationStarted = false;

function startCrying() {
    const crying = document.getElementById("crying");

    crying.innerHTML = "";

    const emojis = ["😭", "🥺", "😢", "💧"];

    for (let i = 0; i < 30; i++) {
        let cry = document.createElement("div");

        cry.className = "cry";

        cry.innerText = emojis[
            Math.floor(Math.random() * emojis.length)
        ];

        cry.style.left = Math.random() * 100 + "vw";
        cry.style.animationDuration = (3 + Math.random() * 4) + "s";
        cry.style.animationDelay = Math.random() * 4 + "s";

        crying.appendChild(cry);
    }
}

// Typing Animation

function typeMessage(i = 0) {
    if (i < myMessage.length) {
        message.textContent += myMessage[i];

        setTimeout(
            () => typeMessage(i + 1),
            myMessage[i] === "\n" ? 200 : 40
        );
    } else {
        final.textContent = "You are special to me. ❤️🥺";
    }
}

// Open Letter

document.getElementById("openBtn").addEventListener("click", function() {
    home.style.display = "none";
    letter.style.display = "flex";

    if (!animationStarted) {
        startCrying();
        animationStarted = true;
    }

    message.textContent = "";
    final.textContent = "";

    typeMessage();
});

// Close Letter

document.getElementById("closeBtn").addEventListener("click", function() {
    letter.style.display = "none";
    home.style.display = "flex";
});