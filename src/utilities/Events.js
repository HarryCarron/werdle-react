export class Events {
    onlyLetters = (event) => {
        const keyCode = event.keyCode;
        if ((keyCode > 64 && keyCode < 91) || (keyCode > 96 && keyCode < 123) || keyCode === 8) {
            return event;
        }
    }
}