 // 1. Random delay dene wala function (Promise based)




    /*Create a hacking simulator which has green background and it shows these messages with random delay of 1 to 7 seconds 
    
    Initializing Hacking...
    Reading your Files...
    Password files Detected...
    Sending all passwords and personal files to server...
    Cleaning up...

    The three dots must blink so that it looks like a real terminal*/
    


const wait = () => {
    let randomTime = Math.floor(Math.random() * 7) + 1; // 1 to 7 seconds
    return new Promise(resolve => setTimeout(resolve, randomTime * 1000));
}

// 2. Dots ko blink karwane wala function
const addMessage = async (text) => {
    const term = document.getElementById("terminal");
    let p = document.createElement("p");
    p.innerHTML = text;
    term.appendChild(p);
    
    // Blinking dots logic
    let dots = 0;
    let interval = setInterval(() => {
        if (dots < 3) {
            p.innerHTML += ".";
            dots++;
        } else {
            p.innerHTML = text; // Reset dots
            dots = 0;
        }
    }, 500);

    await wait(); // Random intezaar (1-7 sec)
    clearInterval(interval); // Intezaar khatam toh blinking band
    p.innerHTML = text + "... Done"; // Message complete
}

// 3. Main Hacking Function
async function startHacking() {
    let messages = [
        "Initializing Hacking",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"
    ];

    for (let msg of messages) {
        await addMessage(msg);
    }
    
    let success = document.createElement("h2");
    success.innerText = "SYSTEM HACKED SUCCESSFULLY!";
    document.getElementById("terminal").appendChild(success);
}

startHacking();