"use strict";

export default class PopUp {
  constructor() {
    this.popUp = document.querySelector(".pop-up");
    this.popUpRefresh = document.querySelector(".pop-up__refresh");
    this.popUpMessage = document.querySelector(".pop-up__message");
    this.popUpRefresh.addEventListener("click", () => {
      this.onClick && this.onClick();
      this.hide();
    });
  }
  setClickListener(onClick) {
    this.onClick = onClick;
  }

  showWithText(text) {
    this.popUpMessage.innerText = `${text}`;
    this.popUp.style.display = "block";
  }

  hide() {
    this.popUp.style.display = "none";
  }
}
