/* ==========================================
   PASSWORD SYSTEM
========================================== */

const firstOverlay =
    document.getElementById("firstPasswordOverlay");

const secondOverlay =
    document.getElementById("secondPasswordOverlay");

const mainContent =
    document.getElementById("mainContent");

const finalContent =
    document.getElementById("finalContent");


/* ==========================================
   FIRST PASSWORD
   Accepted:
   Kachhua
   Kacchua
   kachhua
========================================== */

const firstPasswordInput =
    document.getElementById("firstPassword");

const firstUnlockBtn =
    document.getElementById("firstUnlockBtn");

const firstAttemptsDisplay =
    document.getElementById("firstAttempts");

const firstError =
    document.getElementById("firstError");

let firstAttempts = 2;

const firstPasswords = [
    "kachhua",
    "kacchua"
];


function unlockFirstStage() {

    const enteredPassword =
        firstPasswordInput.value.trim().toLowerCase();

    if (firstPasswords.includes(enteredPassword)) {

        firstError.textContent =
            "Password correct! Welcome 😎🐢";

        firstError.style.color = "#21a65b";

        setTimeout(() => {
            firstOverlay.classList.remove("active");
            mainContent.classList.add("show");
        }, 700);

        return;
    }


    /* Wrong password */

    firstAttempts--;

    firstAttemptsDisplay.textContent =
        firstAttempts;

    firstPasswordInput.value = "";


    if (firstAttempts > 0) {

        firstError.textContent =
            "Wrong password 😭 Try again!";

        firstPasswordInput.focus();

    } else {

        firstError.textContent =
            "Okay fineee 😭 You still get access!";

        setTimeout(() => {

            firstOverlay.classList.remove("active");
            mainContent.classList.add("show");

        }, 1000);
    }
}


firstUnlockBtn.addEventListener(
    "click",
    unlockFirstStage
);


firstPasswordInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            unlockFirstStage();
        }

    }
);


/* ==========================================
   GIFT BUTTON
========================================== */

const giftButton =
    document.getElementById("giftButton");


giftButton.addEventListener(
    "click",
    function() {

        secondOverlay.classList.add("active");

        setTimeout(() => {
            document.getElementById("secondPassword").focus();
        }, 400);

    }
);


/* ==========================================
   SECOND PASSWORD
   Accepted:
   Chuzi
   Chusi
   chuzi
   chusi

   ONLY ONE ATTEMPT
========================================== */

const secondPasswordInput =
    document.getElementById("secondPassword");

const secondUnlockBtn =
    document.getElementById("secondUnlockBtn");

const secondAttemptsDisplay =
    document.getElementById("secondAttempts");

const secondError =
    document.getElementById("secondError");

let secondAttempts = 1;

const secondPasswords = [
    "chuzi",
    "chusi"
];


function unlockSecondStage() {

    if (secondAttempts <= 0) {
        return;
    }

    const enteredPassword =
        secondPasswordInput.value.trim().toLowerCase();


    if (secondPasswords.includes(enteredPassword)) {

        secondError.textContent =
            "CORRECT! 🎁😎";

        secondError.style.color =
            "#21a65b";

        createCelebration();

        setTimeout(() => {

            secondOverlay.classList.remove("active");

            mainContent.classList.remove("show");

            finalContent.classList.add("show");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 700);

        return;
    }


    /* Wrong password */

    secondAttempts--;

    secondAttemptsDisplay.textContent =
        secondAttempts;

    secondPasswordInput.value = "";

    secondError.textContent =
        "Wrong password 😭 BUT FINE, YOU STILL GET THE GIPHT 😋";

    setTimeout(() => {

        secondOverlay.classList.remove("active");

        mainContent.classList.remove("show");

        finalContent.classList.add("show");

        createCelebration();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1200);
}


secondUnlockBtn.addEventListener(
    "click",
    unlockSecondStage
);


secondPasswordInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            unlockSecondStage();
        }

    }
);


/* ==========================================
   FLOATING EMOJIS
========================================== */

const floatingContainer =
    document.getElementById("floatingContainer");


const floatingEmojis = [
    "🐢",
    "🐥",
    "💖",
    "💕",
    "❤️",
    "🔥",
    "⭐",
    "✨",
    "🌟",
    "💗",
    "🐢",
    "🐥"
];


function createFloatingEmoji() {

    const item =
        document.createElement("div");

    item.className =
        "floating-item";

    item.textContent =
        floatingEmojis[
            Math.floor(
                Math.random() * floatingEmojis.length
            )
        ];


    const randomLeft =
        Math.random() * 100;

    const randomSize =
        18 + Math.random() * 30;

    const randomDuration =
        6 + Math.random() * 7;


    item.style.left =
        randomLeft + "%";

    item.style.fontSize =
        randomSize + "px";

    item.style.animationDuration =
        randomDuration + "s";


    floatingContainer.appendChild(item);


    setTimeout(() => {

        item.remove();

    }, randomDuration * 1000);
}


/* Continuously create floating objects */

setInterval(
    createFloatingEmoji,
    450
);


/* Create some immediately */

for (let i = 0; i < 15; i++) {

    setTimeout(
        createFloatingEmoji,
        i * 250
    );

}


/* ==========================================
   CELEBRATION EFFECT
========================================== */

function createCelebration() {

    for (let i = 0; i < 35; i++) {

        setTimeout(
            createFloatingEmoji,
            i * 60
        );

    }
}


/* ==========================================
   EXTRA CLICK EFFECT
========================================== */

document.addEventListener(
    "click",
    function(event) {

        const burst =
            document.createElement("div");

        burst.textContent =
            "💖";

        burst.style.position =
            "fixed";

        burst.style.left =
            event.clientX + "px";

        burst.style.top =
            event.clientY + "px";

        burst.style.fontSize =
            "25px";

        burst.style.pointerEvents =
            "none";

        burst.style.zIndex =
            "9999";

        burst.style.transition =
            "1s ease";

        document.body.appendChild(burst);


        requestAnimationFrame(() => {

            burst.style.transform =
                "translateY(-70px) scale(1.5)";

            burst.style.opacity =
                "0";

        });


        setTimeout(() => {

            burst.remove();

        }, 1000);

    }
);