export default class ConsoleTyper {
  defaultSettings = {
    loop: false,
    loopAfterSeconds: 6,
    cursor: "I",
    stopCursorAfterBlinks: 50
  };

  state = {
    isTyping: false
  };

  libName = "ConsoleTyper";

  errorMessages = {
    notParagraph: `${this.libName}: please provide a valid paragraph element`,
    notContent: `${this.libName}: please provide a paragraph with text`
  };

  constructor(props) {
    const { paragraphElement, loop, totalSeconds } = props;

    if (!paragraphElement) {
      console.error(this.errorMessages.notParagraph);
      return;
    }

    if (paragraphElement.tagName !== "P") {
      console.error(this.errorMessages.notParagraph);
      return;
    }

    const textToType = paragraphElement.innerHTML;
    if (textToType.length === 0) {
      console.error(this.errorMessages.notContent);
    }

    this.settings = {
      paragraphElement,
      textToType,
      loop,
      totalSeconds,
      ...this.defaultSettings
    };

    this.cleanParagraph();

    this.type = this.type.bind(this);
    this.animateCursor = this.animateCursor.bind(this);
  }

  cleanParagraph() {
    this.settings.paragraphElement.innerHTML = "";
  }

  animateCursor(actualBlink) {
    const { paragraphElement, cursor, stopCursorAfterBlinks } = this.settings;
    const actualText = paragraphElement.innerHTML.split("");
    const lastChar = actualText.pop();
    let newText = "";

    if (lastChar === cursor) {
      newText = actualText.join("");
    } else {
      if (actualBlink >= stopCursorAfterBlinks) {
        return;
      }
      newText = paragraphElement.innerHTML + cursor;
    }

    setTimeout(() => {
      if (this.state.isTyping === true) {
        return;
      }
      paragraphElement.innerHTML = newText;
      this.animateCursor(actualBlink + 1);
    }, 500);
  }

  type(textArray) {
    if (textArray.length <= 0) {
      return;
    }

    const { paragraphElement, cursor, loopAfterSeconds } = this.settings;
    let actualText = paragraphElement.innerHTML.split("");
    actualText.pop();
    actualText = actualText.join("");
    const newChar = textArray.shift();

    this.settings.paragraphElement.innerHTML = actualText + newChar + cursor;

    if (textArray.length > 0) {
      setTimeout(() => this.type(textArray), 50);
    } else {
      this.state.isTyping = false;
      this.animateCursor(0);
      setTimeout(() => this.startTyping(), loopAfterSeconds * 1000);
    }
  }

  startTyping() {
    const { textToType } = this.settings;
    this.state.isTyping = true;
    this.cleanParagraph();
    this.type(textToType.split(""));
  }
}
