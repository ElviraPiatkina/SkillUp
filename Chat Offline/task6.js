let btn = document.getElementById('btn');
btn.addEventListener('click', getRandomUser);

/**
 * There is a request to the server to get data about the user and display the information received in the window.
 * Initiates the beginning of the chatting.
 */
function getRandomUser() {
    let Handler = function(Request) { // user's handler
        createUserInfo();
        fillUserInfo(Request.responseText);
        getRandomText(name, image); // start texting when user created
    }
    SendRequest("https://www.randomuser.me/api/?inc=name,phone,location,picture,age,dob", Handler);
}

/**
 * There is a request to the server to get random text and display it in the chatting window.
 * Initiates the creating of the div containers for filling them by chatting.
 */
let getRandomText = function(name, img) {
    let Handler = function(Request) { // user's handler
        createUserMessage();
        chatScrollToBottom();
        fillUserMessage(Request.responseText, name, img);
        // getRandomText calls itself with random timeout
        setTimeout(getRandomText.bind(this, name, img), getRandomTime(5, 30));
    }
    SendRequest("https://www.randomtext.me/api/gibberish/h1/20-225", Handler);
}

function CreateRequest() {
    let Request = false;

    if (window.XMLHttpRequest) {
        Request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) { // IE
        try {
            Request = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (CatchException) {
            Request = new ActiveXObject("Msxml2.XMLHTTP");
        }
    }
    if (!Request) {
        alert("Unable to create XMLHttpRequest");
    }
    return Request;
}

function SendRequest(r_req, r_handler) {
    let Request = CreateRequest();

    if (!Request) { // request creation failed
        return;
    }
    // set user's handler
    Request.onreadystatechange = function() {
        // data exchange is finished
        if (Request.readyState == 4) {
            r_handler(Request);
        }
    }
    // init connection and send data
    Request.open("GET", r_req, true);
    Request.send(null);
}

function fillUserInfo(u_data) {
    let d = JSON.parse(u_data);

    name = d.results[0].name.title + '. ' + d.results[0].name.first + ' ' + d.results[0].name.last;
    image = d.results[0].picture.large;

    user_name.innerHTML = name;
    user_city.innerHTML = d.results[0].location.city;
    user_phone.innerHTML = d.results[0].phone;
    user_logo_img.setAttribute("src", image);
}

function fillUserMessage(m_data, m_name, m_img) {
    let d = JSON.parse(m_data);

    user_message.innerHTML = d.text_out;
    user_name.innerHTML = m_name;
    user_logo_img.setAttribute("src", m_img);
}

// Generate Random number between min and max (seconds)
function getRandomTime(min, max) {
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    console.log('Wait for ' + rand + ' seconds');
    return rand * 1000;
}

function chatScrollToBottom() {
    let wrap_chat = document.getElementsByClassName('wrap_chat')[0];
    wrap_chat.scrollTo(0, wrap_chat.scrollHeight);
}

// creating div containers for user's data
function createUserInfo() {
    let wrap_users = document.getElementsByClassName('wrap_users')[0];
    let div_btn = document.getElementsByClassName('btn')[0];

    user_info = document.createElement('div');
    user_info.className = 'user_info';
    wrap_users.insertBefore(user_info, div_btn);

    user_logo = document.createElement('div');
    user_logo.className = 'user_logo';
    user_info.appendChild(user_logo);

    user_logo_img = document.createElement('img');
    user_logo_img.className = 'user_logo_img';
    user_logo.appendChild(user_logo_img);

    user_name = document.createElement('div');
    user_name.className = 'user_name';
    user_info.appendChild(user_name);

    user_city = document.createElement('div');
    user_city.className = 'user_city';
    user_info.appendChild(user_city);

    user_phone = document.createElement('div');
    user_phone.className = 'user_phone';
    user_info.appendChild(user_phone);
}

function createUserMessage() {
    let wrap_chat = document.getElementsByClassName('wrap_chat')[0];

    message = document.createElement('div');
    message.className = 'message';
    wrap_chat.appendChild(message);

    user_logo = document.createElement('div');
    user_logo.className = 'user_logo';
    message.appendChild(user_logo);

    user_logo_img = document.createElement('img');
    user_logo_img.className = 'user_logo_img';
    user_logo.appendChild(user_logo_img);

    user_name = document.createElement('div');
    user_name.className = 'user_name';
    message.appendChild(user_name);

    user_message = document.createElement('div');
    user_message.className = 'user_message';
    message.appendChild(user_message);
}