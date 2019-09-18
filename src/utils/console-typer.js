export default class ConsoleTyper {
  defaultSettings = {
    loop: true,
    loopAfterSeconds: 6,
    cursor: "I",
    stopCursorAfterBlinks: 10,
    cursorAnimationSpeedMs: 500,
    typingSpeedMs: 70,
    onStartTyping: () => {},
    onStopTyping: () => {},
    onStopCursorAnimation: () => {}
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
    const { paragraphElement } = props;

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

    this.settings = Object.assign(
      { ...this.defaultSettings },
      { ...props },
      { textToType }
    );

    this.cleanParagraph();

    this.type = this.type.bind(this);
    this.animateCursor = this.animateCursor.bind(this);
  }

  cleanParagraph() {
    this.settings.paragraphElement.innerHTML = "&nbsp;";
  }

  animateCursor(actualBlink) {
    const {
      paragraphElement,
      cursor,
      stopCursorAfterBlinks,
      cursorAnimationSpeedMs,
      onStopCursorAnimation
    } = this.settings;

    const actualText = paragraphElement.innerHTML.split("");
    const lastChar = actualText.pop();
    let newText = "";

    if (lastChar === cursor) {
      newText = actualText.join("");
    } else {
      if (actualBlink >= stopCursorAfterBlinks) {
        onStopCursorAnimation();
        return;
      }
      newText = paragraphElement.innerHTML + cursor;
    }

    setTimeout(() => {
      if (this.state.isTyping === true) {
        onStopCursorAnimation();
        return;
      }
      paragraphElement.innerHTML = newText;
      this.animateCursor(actualBlink + 1);
    }, cursorAnimationSpeedMs);
  }

  type(textArray) {
    if (textArray.length <= 0) {
      return;
    }

    const {
      paragraphElement,
      cursor,
      loop,
      typingSpeedMs,
      onStopTyping
    } = this.settings;

    let actualText = paragraphElement.innerHTML.split("");
    const newChar = textArray.shift();

    actualText.pop();
    actualText = actualText.join("");

    this.settings.paragraphElement.innerHTML = actualText + newChar + cursor;

    if (textArray.length > 0) {
      setTimeout(() => this.type(textArray), typingSpeedMs);
    } else {
      this.state.isTyping = false;

      if (loop) {
        this.programLoop();
      }

      onStopTyping();
      this.animateCursor(0);
    }
  }

  programLoop() {
    const { loopAfterSeconds } = this.settings;
    setTimeout(() => this.startTyping(), loopAfterSeconds * 1000);
  }

  startTyping() {
    const { textToType, onStartTyping } = this.settings;
    this.state.isTyping = true;
    onStartTyping();
    this.cleanParagraph();
    this.type(textToType.split(""));
  }
}
