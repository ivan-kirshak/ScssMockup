/* SMOOTH SCROLL TO TOPICS IN LAPTOP VERSION */
let projects = document.getElementById("projects");
projects.addEventListener("click", function() {
    projects.scrollIntoView({
        behavior: "smooth"
    })
}, false);

let measurement = document.getElementById("measurement");
measurement.addEventListener("click", function() {
    measurement.scrollIntoView({
        behavior: "smooth"
    })
}, false);

let team = document.getElementById("team");
team.addEventListener("click", function() {
    team.scrollIntoView({
        behavior: "smooth"
    })
}, false);

let reviews = document.getElementById("reviews");
reviews.addEventListener("click", function() {
    reviews.scrollIntoView({
        behavior: "smooth"
    })
}, false);

let contact = document.getElementById("contact");
contact.addEventListener("click", function() {
    contact.scrollIntoView({
        behavior: "smooth"
    })
}, false);

/* REGEXES FOR VALIDATION */
let nameRegex = /[A-Za-z]/;
let numRegex = /[0-9]/;
let emailRegex =  /^\S+@\S+\.\S+$/;

/* ONLINE CONTROL FORM VALIDATION */
let onlineControlName = document.getElementById("onlineControlName");
let onlineControlNameError = document.getElementById("onlineControlNameError");
let onlineControlPhone = document.getElementById("onlineControlPhone");
let onlineControlPhoneError = document.getElementById("onlineControlPhoneError");
let onlineControlCheckbox = document.getElementById("onlineControlCheckbox");
let onlineControlCheckboxError = document.getElementById("onlineControlCheckboxError");
let onlineControlSumbit = document.getElementById("onlineControlSumbit");

function onlineControlForm () {
    let onNameVal = onlineControlName.value;
    let onPhoneVal = onlineControlPhone.value;
    let onlineControlAnswer = document.getElementById("onlineControlAnswer");
    if (onNameVal === "" || nameRegex.test(onNameVal) === false) {
        onlineControlNameError.innerHTML = `<p>Please, print your name</p>` 
    } else {
        onlineControlNameError.innerHTML = "";
    } 

    if (onPhoneVal === "" || numRegex.test(onPhoneVal) === false) {
        onlineControlPhoneError.innerHTML = `<p>Plese, print your phone number</p>`;
    } else {
        onlineControlPhoneError.innerHTML = "";
    } 
    
    if (onlineControlCheckbox.checked == false) {
        onlineControlCheckboxError.innerHTML = `<p>Please, allow us to process your data</p>`;
    } else {
        onlineControlCheckboxError.innerHTML = "";
    }

    if (onNameVal !== "" && nameRegex.test(onNameVal) !== false &&
    onPhoneVal !== "" && numRegex.test(onPhoneVal) !== false &&
    onlineControlCheckbox.checked !== false) {
        onlineControlAnswer.innerHTML = `<h1>Hello, <span class="answer-param">${onNameVal}</span>!
        We will call you via number, which you provided to us
         <span class="answer-param">(${onPhoneVal})</span> to 
        discuss the details.
         </h1>`
    }
}

onlineControlSumbit.addEventListener("click", onlineControlForm, false);

/* MAIN FORM*/
let formBtn = document.getElementById("numCallBtn");
let mainForm = document.getElementById("mainForm");
let formCloseBtn = document.getElementById("closeBtn");

// function to open form
function openForm() {
    if (mainForm.style.display === "block") {
        mainForm.style.display = "none";
    } else {
        mainForm.style.display = "block";
    }
}
formBtn.addEventListener("click", openForm, false);

//function  to close form with close button
function closeForm() {
    if (mainForm.style.display === "block") {
        mainForm.style.display = "none";
    } else {
        mainForm.style.display = "block";
    }
}
formCloseBtn.addEventListener("click", closeForm, false);

// MAIN FORM VALIDATION
let mainFormSubmit = document.getElementById("mainFormSubmit");
function validMainForm () {
    let mainFormName = document.getElementById("mainFormName");
    let mainNameErr = document.getElementById("mainNameErr");
    let mainFormNum = document.getElementById("mainFormNum");
    let mainNumErr = document.getElementById("mainNumErr");
    let mainFormMail = document.getElementById("mainFormMail");
    let mainMailErr = document.getElementById("mainMailErr");
    let mainFormCheckbox = document.getElementById("mainFormCheckbox");
    let mainCheckErr =document.getElementById("mainCheckErr");

    let nameVal = mainFormName.value;
    let numVal = mainFormNum.value;
    let mailVal = mainFormMail.value;

    let innerForm = document.getElementById("innerForm");

    if (nameVal === "" || nameRegex.test(mainFormName.value) === false) {
        mainNameErr.innerHTML = `<p>Please, print your name</p>`
    } else {
        mainNameErr.innerHTML = "";
    }

    if (numVal === "" || numRegex.test(mainFormNum.value) === false) {
        mainNumErr.innerHTML = `<p>Please, print your phone number</p>`
    } else { 
        mainNumErr.innerHTML = "";
    }

    if (mailVal === "" || emailRegex.test(mainFormMail.value) === false) {
        mainMailErr.innerHTML = `<p>Please, print your email</p>`;
    } else {
        mainMailErr.innerHTML = "";
    }

    if (mainFormCheckbox.checked == false) {
        mainCheckErr.innerHTML = `<p>Please, allow us process your data</p>`;
    } else {
        mainCheckErr.innerHTML = "";
    }

    if(nameVal !== "" && nameRegex.test(mainFormName.value) !== false &&
    numVal !== "" && numRegex.test(mainFormNum.value) !== false &&
    mailVal !== "" && emailRegex.test(mainFormMail.value) !== false &&
    mainFormCheckbox.checked != false) {
        innerForm.innerHTML = `<h1 class="white">Hello, <span class="answer-param">${nameVal}</span>!
        We will call you via number or email, which you provided to us
         <span class="answer-param">(${numVal})</span> or <span class="answer-param">(${mailVal})</span> to 
        discuss the details.
         </h1>`
    }
}
mainFormSubmit.addEventListener("click", validMainForm, false);

/* MEASUREMENT FORM VALIDATION */
let measureName = document.getElementById("measureName");
let measureNameErr = document.getElementById("measureNameErr");
let measurePhone = document.getElementById("measurePhone");
let measurePhoneErr = document.getElementById("measurePhoneErr");
let measureMail = document.getElementById("measureMail");
let measureMailErr = document.getElementById("measureMailErr");
let measureCheckbox = document.getElementById("measureCheckbox");
let measureCheckErr = document.getElementById("measureCheckErr");
let measureBtn = document.getElementById("measureBtn");

function measureForm () {
    let mesNameVal = measureName.value;
    let mesPhoneVal = measurePhone.value;
    let mesMailVal = measureMail.value;
    let measureAnswer = document.getElementById("measureAnswer");

    if (mesNameVal === "" || nameRegex.test(mesNameVal) === false) {
        measureNameErr.innerHTML = `<p>Please, print your name</p>`
    } else {
        measureNameErr.innerHTML = "";
    }

    if (mesPhoneVal === "" || numRegex.test(mesPhoneVal) === false) {
        measurePhoneErr.innerHTML = `<p>Please, print your phone number</p>`
    } else { 
        measurePhoneErr.innerHTML = "";
    }

    if (mesMailVal === "" || emailRegex.test(mesMailVal) === false) {
        measureMailErr.innerHTML = `<p>Please, print your email</p>`;
    } else {
        measureMailErr.innerHTML = "";
    }

    if (measureCheckbox.checked == false) {
        measureCheckErr.innerHTML = `<p>Please, allow us process your data</p>`;
    } else {
        measureCheckErr.innerHTML = "";
    }

    if(mesNameVal !== "" && nameRegex.test(mesNameVal) !== false && 
    mesPhoneVal !== "" && numRegex.test(mesPhoneVal) !== false &&
    mesMailVal !== "" && emailRegex.test(mesMailVal) !== false &&
    measureCheckbox.checked != false) {
        measureAnswer.innerHTML = `<h1>Hello, <span class="answer-param">${mesNameVal}</span>!
        We will call you via number or email, which you provided to us
         <span class="answer-param">(${mesPhoneVal})</span> or <span class="answer-param">(${mesMailVal})</span> to 
        discuss the details.
         </h1>`
    }
}
measureBtn.addEventListener("click", measureForm, false);

/* CONTACT FORM VALIDATION */
let contactName = document.getElementById("contactName");
let contactNameErr = document.getElementById("contactNameErr");
let contactPhone = document.getElementById("contactPhone");
let contactPhoneErr = document.getElementById("contactPhoneErr");
let contactQuestion = document.getElementById("contactQuestion");
let contactQuestionErr = document.getElementById("contactQuestionErr");
let contactCheckbox = document.getElementById("contactCheckbox");
let contactCheckErr = document.getElementById("contactCheckErr");
let contactBtn = document.getElementById("contactBtn");

function contactForm () {
    let conNameVal = contactName.value;
    let conPhoneVal =contactPhone.value;
    let conQuestVal = contactQuestion.value;

    if (conNameVal === "" || nameRegex.test(conNameVal) === false) {
        contactNameErr.innerHTML = `<p>Please, print your name</p>`
    } else {
        contactNameErr.innerHTML = "";
    }

    if (conPhoneVal === "" || numRegex.test(conPhoneVal) === false) {
        contactPhoneErr.innerHTML = `<p>Please, print your phone number</p>`
    } else { 
        contactPhoneErr.innerHTML = "";
    }

    if (conQuestVal === "" || nameRegex.test(conQuestVal) === false) {
        contactQuestionErr.innerHTML = `<p>Please, print your question</p>`;
    } else {
        contactQuestionErr.innerHTML = "";
    }

    if (contactCheckbox.checked == false) {
        contactCheckErr.innerHTML = `<p>Please, allow us process your data</p>`;
    } else {
        contactCheckErr.innerHTML = "";
    }

    if(conNameVal !== "" && nameRegex.test(conNameVal) !== false && 
    conPhoneVal !== "" && numRegex.test(conPhoneVal) !== false &&
    conQuestVal !== "" && nameRegex.test(conQuestVal) !== false &&
    contactCheckbox.checked != false) {
        console.log('good');
    }
}
contactBtn.addEventListener("click", contactForm, false);
