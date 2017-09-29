class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.answer;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        if (this.max == this.min) {
            return this.answer = this.min;
        } else if (this.max - this.min == 1) {
            return this.answer = this.min + 1;
        } else {
            return this.answer = Math.ceil((this.max - this.min) / 2 + this.min);
        }
    }

    lower() {
        this.max = this.answer;
    }

    greater() {
        this.min = this.answer;
    }
}

module.exports = GuessingGame;
