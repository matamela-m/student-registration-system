"use strict";

const form = document.querySelector("#registrationForm");
const message = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const studentNumber = document.querySelector("#studentNumber").value.trim();
    const studentName = document.querySelector("#studentName").value.trim();
    const studentEmail = document.querySelector("#studentEmail").value.trim();
    const moduleCode = document.querySelector("#module").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!studentNumber || !studentName || !studentEmail || !moduleCode) {
        showMessage("Invalid: please complete all required fields.", false);
        return;
    }

    if (!emailPattern.test(studentEmail)) {
        showMessage("Invalid: please enter a valid email address.", false);
        return;
    }

    showMessage(`${studentName} (${studentNumber}) registered for ${moduleCode}.`, true);
    form.reset();
});

function showMessage(text, isSuccess) {
    message.textContent = text;
    message.classList.toggle("success", isSuccess);
    message.classList.toggle("error", !isSuccess);
}