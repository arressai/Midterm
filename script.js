let locationData = []; 

console.log("Hello from script.js!");

window.addEventListener('load', function () {
    console.log('page is loaded');

    fetch('livestream.json')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data[0].id);
            locationData = data;
            window.locationData = data;
        })
})


//added variables for the button function
let backgroundImage;
let hongKongX, hongKongY;


function preload() {
    backgroundImage = loadImage('outline-world-map.jpg');
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    //additional formatting needed to make the canvas image adaptable
    canvas.position(0, 0);
    canvas.style('z-index', '-1'); // Send canvas to the background
    frameRate(60); // Smooth 60fps animation
    // console.log("locationData" + locationData[0].id);
}

function draw() {
    // Check data first
    if (!locationData || locationData.length === 0) {
        return; // Exit if data isn't loaded yet
    }
    
    // NOW draw the background (after the check passes)
    background(backgroundImage);
    console.log("background Image");

    //HONG KONG - INTERACTIVE
    hongKongX = width / locationData[0].x;
    hongKongY = height / locationData[0].y;


    // Check if mouse is over Hong Kong
    let hongKongDistance = dist(mouseX, mouseY, hongKongX, hongKongY);
    if (hongKongDistance <= 10) {
        fill("orange");  // Hover color
    } else {
        fill("red");     // Normal color
    }
    ellipse(hongKongX, hongKongY, 20, 20);
    // console.log(locationData[0].canvas_location);


    //NAMIBIA
    let namibiaX = width / locationData[1].x;
    let namibiaY = height / locationData[1].y;

    // Check if mouse is over Namibia
    let namibiaDistance = dist(mouseX, mouseY, namibiaX, namibiaY);
    if (namibiaDistance <= 10) {
        fill("orange");  // Hover color
    } else {
        fill("red");     // Normal color
    }   
    ellipse(namibiaX, namibiaY, 20, 20);
    // console.log(locationData[1].canvas_location);

    //TOKYO 1
    let tokyoX = width / locationData[2].x;
    let tokyoY = height / locationData[2].y;

    // Check if mouse is over Tokyo
    let tokyoDistance = dist(mouseX, mouseY, tokyoX, tokyoY);
    if (tokyoDistance <= 10) {
        fill("orange");  // Hover color
    } else {
        fill("red");     // Normal color
    }   
    ellipse(tokyoX, tokyoY, 20, 20);

    //BRAZIL
    let brazilX = width / locationData[3].x;
    let brazilY = height / locationData[3].y;
    
    // Check if mouse is over Brazil
    let brazilDistance = dist(mouseX, mouseY, brazilX, brazilY);
    if (brazilDistance <= 10) {
        fill("orange");  // Hover color
    } else {
        fill("red");     // Normal color
    }   
    ellipse(brazilX, brazilY, 20, 20);

    //SPAIN ****
    let spainX = width / locationData[4].x;
    let spainY = height / locationData[4].y;

    // Check if mouse is over Spain
    let spainDistance = dist(mouseX, mouseY, spainX, spainY);
    if (spainDistance <= 10) {
        fill("orange");  // Hover color
    } else {
        fill("red");     // Normal color
    }   
    ellipse(spainX, spainY, 20, 20);

    //MEXICO
    let mexicoX = width / locationData[5].x;
    let mexicoY = height / locationData[5].y;

    // Check if mouse is over Mexico
    let mexicoDistance = dist(mouseX, mouseY, mexicoX, mexicoY);
    if (mexicoDistance <= 10) {
        fill("orange");  // Hover color
    } else {
        fill("red");     // Normal color
    }
    ellipse(mexicoX, mexicoY, 20, 20);

    //LOS ANGELES
    let laX = width / locationData[6].x;
    let laY = height / locationData[6].y;

    // Check if mouse is over Los Angeles
    let laDistance = dist(mouseX, mouseY, laX, laY);
    if (laDistance <= 10) {
        fill("orange");  // Hover color
    } else {
        fill("red");     // Normal color
    }
    ellipse(laX, laY, 20, 20);
    // console.log(locationData[8].canvas_location);

    //FINLAND
    let finlandX = width / locationData[7].x;
    let finlandY = height / locationData[7].y;

    // Check if mouse is over Finland
    let finlandDistance = dist(mouseX, mouseY, finlandX, finlandY);
    if (finlandDistance <= 10) {
        fill("orange");  // Hover color
    } else {
        fill("red");     // Normal color
    }
    ellipse(finlandX, finlandY, 20, 20);
    // console.log(locationData[9].canvas_location);

    //NEW YORK
    let newYorkX = width / locationData[8].x;
    let newYorkY = height / locationData[8].y;

    // Check if mouse is over New York
    let newYorkDistance = dist(mouseX, mouseY, newYorkX, newYorkY);
    if (newYorkDistance <= 10) {
        fill("orange");  // Hover color
    } else {
        fill("red");     // Normal color
    }
    ellipse(newYorkX, newYorkY, 20, 20);
    // console.log(locationData[10].canvas_location);

    //UNITED KINGDOM ****
    let ukX = width / locationData[9].x;
    let ukY = height / locationData[9].y;

    // Check if mouse is over the United Kingdom
    let ukDistance = dist(mouseX, mouseY, ukX, ukY);
    if (ukDistance <= 10) {
        fill("orange");  // Hover color
    } else {
        fill("red");     // Normal color
    }
    ellipse(ukX, ukY, 20, 20);
    // console.log(locationData[11].canvas_location);

    //CANADA
    let canadaX = width / locationData[10].x;
    let canadaY = height / locationData[10].y;

    // Check if mouse is over Canada
    let canadaDistance = dist(mouseX, mouseY, canadaX, canadaY);
    if (canadaDistance <= 10) {
        fill("orange");  // Hover color
    } else {
        fill("red");     // Normal color
    }
    ellipse(canadaX, canadaY, 20, 20);
    // console.log(locationData[12].canvas_location);

    //MADEIRA
    let madeiraX = width / locationData[11].x;
    let madeiraY = height / locationData[11].y;

    // Check if mouse is over Madeira
    let madeiraDistance = dist(mouseX, mouseY, madeiraX, madeiraY);
    if (madeiraDistance <= 10) {
        fill("orange");  // Hover color
    } else {
        fill("red");     // Normal color
    }
    ellipse(madeiraX, madeiraY, 20, 20);
    // console.log(locationData[13].canvas_location);

    //TAIWAN
    let taiwanX = width / locationData[12].x;
    let taiwanY = height / locationData[12].y;

    // Check if mouse is over Taiwan
    let taiwanDistance = dist(mouseX, mouseY, taiwanX, taiwanY);
    if (taiwanDistance <= 10) {
        fill("orange");  // Hover color
    } else {
        fill("red");     // Normal color
    }
    ellipse(taiwanX, taiwanY, 20, 20);
    // console.log(locationData[14].canvas_location);

    //NEW MEXICO
    let newMexicoX = width / locationData[13].x;
    let newMexicoY = height / locationData[13].y;

    // Check if mouse is over New Mexico
    let newMexicoDistance = dist(mouseX, mouseY, newMexicoX, newMexicoY);
    if (newMexicoDistance <= 10) {
        fill("orange");  // Hover color
    } else {
        fill("red");     // Normal color
    }
    ellipse(newMexicoX, newMexicoY, 20, 20);
    // console.log(locationData[15].canvas_location);

    //WASHINGTON DC
    let dcX = width / locationData[14].x;
    let dcY = height / locationData[14].y;

    // Check if mouse is over Washington DC
    let dcDistance = dist(mouseX, mouseY, dcX, dcY);
    if (dcDistance <= 10) {
        fill("orange");  // Hover color
    } else {
        fill("red");     // Normal color
    }
    ellipse(dcX, dcY, 20, 20);
    // console.log(locationData[16].canvas_location);

    //THAILAND
    let thailandX = width / locationData[15].x;
    let thailandY = height / locationData[15].y;

    // Check if mouse is over Thailand
    let thailandDistance = dist(mouseX, mouseY, thailandX, thailandY);
    if (thailandDistance <= 10) {
        fill("orange");  // Hover color
    } else {
        fill("red");     // Normal color
    }
    ellipse(thailandX, thailandY, 20, 20);
    // console.log(locationData[17].canvas_location);

    //VENICE
    let veniceX = width / locationData[16].x;
    let veniceY = height / locationData[16].y;

    // Check if mouse is over Venice
    let veniceDistance = dist(mouseX, mouseY, veniceX, veniceY);
    if (veniceDistance <= 10) {
        fill("orange");  // Hover color
    } else {
        fill("red");     // Normal color
    }
    ellipse(veniceX, veniceY, 20, 20);
    // console.log(locationData[18].canvas_location);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}
function mousePressed() {
    for (let i = 0; i < locationData.length; i++) {
        let x = width / locationData[i].x;
        let y = height / locationData[i].y;
        let d = dist(mouseX, mouseY, x, y);
        if (d <= 10) {
            const popup = document.getElementById('popup');
            const content = document.getElementById('popup-content');
            const data = locationData[i];
            let videoId = '';
            const match = data.stream_url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w\-]+)/);
            if (match) videoId = match[1];
            content.innerHTML = `
                <strong>ID:</strong> ${data.id}<br>
                <strong>Name:</strong> ${data.name}<br>
                <strong>Location:</strong> ${data.location}<br><br>
                <iframe width="320" height="180" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
            `;

            // --- Keep popup in window ---
            const popupWidth = 340;
            const popupHeight = 260;
            let left = mouseX + 20;
            let top = mouseY + 20;

            if (left + popupWidth > window.innerWidth) {
                left = window.innerWidth - popupWidth - 100;
            }
            if (top + popupHeight > window.innerHeight) {
                top = window.innerHeight - popupHeight - 100;
            }
            if (left < 0) left = 20;
            if (top < 0) top = 20;

            popup.style.display = 'block';
            popup.style.left = `${left}px`;
            popup.style.top = `${top}px`;
            popup.style.transform = 'none';
            break; // Stop after the first match
        }
    }
}

// --- Popup logic: open, position, and populate content remains outside and applies to all popups---

// --- Exit logic: close on X or click outside remains outside and applies to all popups---
document.addEventListener('DOMContentLoaded', function() {
    // Close on X
    document.getElementById('popup-close').onclick = function(e) {
        document.getElementById('popup').style.display = 'none';
        e.stopPropagation();
    };
    // Close when clicking outside popup
    document.addEventListener('mousedown', function(e) {
        const popup = document.getElementById('popup');
        if (popup.style.display === 'block' && !popup.contains(e.target)) {
            popup.style.display = 'none';
        }
    });
});

//STAR BUTTON SECTION

// Play sound on first click of the star button
// same logic from Bill Nye Project (Boolean Variable)
let hasPlayed = false;
let audio = new Audio('seanPaul.wav');

document.getElementById('star-btn').addEventListener('click', function() {
    if (!hasPlayed) {
        audio.play();
        hasPlayed = true;
    }
});

// CALENDAR SECTION
// Show calendar popup on star button click
document.getElementById('star-btn').addEventListener('click', function() {
    const select = document.getElementById('livestream-url');
    // Clear all options first
    select.innerHTML = '<option value="">Select a livestream</option>';
    // Fill with current locationData
    if (window.locationData) {
        window.locationData.forEach(loc => {
            let opt = document.createElement('option');
            opt.value = loc.stream_url;
            opt.textContent = `${loc.id ? loc.id : loc.name} (${loc.location})`;
            select.appendChild(opt);
        });
    }
    document.getElementById('calendar-popup').style.display = 'block';
    document.getElementById('calendar-link').innerHTML = '';
});

// Close calendar popup
document.getElementById('calendar-popup-close').onclick = function() {
    document.getElementById('calendar-popup').style.display = 'none';
};

// Handle form submission
document.getElementById('calendar-form').onsubmit = function(e) {
    e.preventDefault();
    const yourEmail = document.getElementById('your-email').value;
    const friendEmail = document.getElementById('friend-email').value;
    const datetime = document.getElementById('meeting-datetime').value;
    const url = document.getElementById('livestream-url').value;

    // Format date/time for Google Calendar
    const start = new Date(datetime);
    const end = new Date(start.getTime() + 60*60*1000); // 1 hour meeting
    function toCalString(d) {
        return d.toISOString().replace(/-|:|\.\d\d\d/g,"");
    }
    const startStr = toCalString(start);
    const endStr = toCalString(end);

    // Google Calendar link
    const calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE`
        + `&text=Livestream+Hangout`
        + `&dates=${startStr}/${endStr}`
        + `&details=Join+me+at+this+livestream:+${encodeURIComponent(url)}`
        + `&add=${yourEmail},${friendEmail}`;

    document.getElementById('calendar-link').innerHTML =
        `<a href="${calUrl}" target="_blank" style="font-size:1.1em;">Add to Google Calendar</a>`;
};