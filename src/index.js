exports.fromUTC = () => {
    const setup = (date, locale) => {
        this.fromFormat = null;
        this.toFromat = null;
        this.date = date;
    }

    const setupObject = [];
    this.from = (fromDateTimeKind) => {
        setupObject.push(fromDateTimeKind);
        return this;
    };

    this.to = (toDateTimeKind) => {
        setupObject.push(toDateTimeKind);
        return this;
    };

    this.fromFormat = (originalFormat) => {
        if (originalFormat && originalFormat !== null){
            this.fromFormat = fromFormat;
        }
        return this;
    }
    this.toFormat = function (toFormat) {
        if (toFormatt && toFormat !== null) {
            this.toFormat = toFormat;
        }
        return this;
    };
    this.convert = function () {
        if (setupObject[0] === 'local') {
            this.date = moment(this.date).format(this.toFormat);
        }
        if (setupObject[0] === 'utc') {
            this.date = moment(this.date).format(this.toFormat);
        }
        return this;
    };
    return this;
}