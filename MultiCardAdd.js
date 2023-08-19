// ==UserScript==
// @name         Add Cards on Quizlet
// @namespace    https://greasyfork.org/en/scripts/448702-automatically-add-cards-on-quizlet
// @version      1.0
// @description  Uses a button to add multiple cards at once on Quizlet, instead of having to click the add button for each card individually.
// @author       Andriani Perez
// @match        https://quizlet.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=quizlet.com
// @grant        none
// @require      file://D:/Documents/Coding/js/QuizletMassCard.user.js
// ==/UserScript==

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function getSingleAddButton() { 
 return document.getElementById("addRow");
}

function getAddCardButton() {
  let addCardButton = document.getElementsByClassName("CreateSetPage-footer");
  addCardButton = addCardButton[0];
  return addCardButton;
}

function lowerCreateButton() {
  let createButtonElement = document.getElementsByClassName("CreateSetPage-publishButton")[0];
  console.log(createButtonElement);
}

function getNumberOfCards() {
  return document.getElementById("multiAddInput").value;
}

function AddCardsElement(addCardButton) {
  var addCardsElement = document.createElement("div");
  addCardsElement.innerHTML =
    '<div draggable="false" aria-label="Create" class=" TermContent-inner AssemblyButtonBase--xlarge AssemblyButtonBase--padding" style="cursor:default"><div id="multiAddButton" class="UILinkButton" style="margin-left:31em; margin-right:1em; position:absolute; height: 2.1em">+ Multi-Add </div><input id="multiAddInput" class="RichTextEditor ProseMirror PMEditor lang-en ugck83a notranslate pc1cm7j" placeholder="#" style="border: none; background:transparent; justify-content:center; margin-left: 36.72em" onmouseover="this.style.outline=\'transparent\'"><div class="b18prmdf" style="margin-left:36.75em; margin-right:16em;"/></div>';
  addCardButton.appendChild(addCardsElement);
  return addCardsElement;
};

function getMultiAddButton() {
  return document.getElementById("multiAddButton");
}

window.onload = function () {
  let addCardButton = getAddCardButton();
  lowerCreateButton();
  let addCardsElement = AddCardsElement(addCardButton);
  let multiAddButton = getMultiAddButton();
  multiAddButton.addEventListener("click", function () { 
  let numberOfCardsRequested = getNumberOfCards();
    for (var i = 0; i < numberOfCardsRequested; i++) {
      getSingleAddButton().click();
      console.log(i);
      sleep(1);
    }
  });

};
