const { convertNumToWords } = require('./challenge');

// extend as needed
const testCases = {
    2345: 'Two thousand three hundred and forty five only',
    1000: 'One thousand only',
    513: 'Five hundred and thirteen only',
    435: 'Four hundred and thirty five only',
    55: 'Fifty five only',
    30: 'Thirty only',
    19: 'Nineteen only',
    5: 'Five only',
    error: 'Number falls outside the range of 1 to 9999',
};

describe('Convert Numbers to Words from 1 to 9999', () => {
    //thousands
    describe('2345 should', () => {
        test(`return as ${testCases[2345]}`, () => {
            expect(convertNumToWords(2345)).toEqual(testCases[2345]);
        });
    });
    describe('1000 should', () => {
        test(`return as ${testCases[1000]}`, () => {
            expect(convertNumToWords(1000)).toEqual(testCases[1000]);
        });
    });

    //hundreds
    describe('513 shoud return as', () => {
        test(`return as ${testCases[513]}`, () => {
            expect(convertNumToWords(513)).toEqual(testCases[513]);
        });
    });
    describe('435 should', () => {
        test(`return as ${testCases[435]}`, () => {
            expect(convertNumToWords(435)).toEqual(testCases[435]);
        });
    });

    //tens
    describe('55 should', () => {
        test(`return as ${testCases[55]}`, () => {
            expect(convertNumToWords(55)).toEqual(testCases[55]);
        });
    });
    describe('30 should', () => {
        test(`return as ${testCases[30]}`, () => {
            expect(convertNumToWords(30)).toEqual(testCases[30]);
        });
    });
    describe('19 should', () => {
        test(`return as ${testCases[19]}`, () => {
            expect(convertNumToWords(19)).toEqual(testCases[19]);
        });
    });

    // single digits
    describe('5 should', () => {
        test(`return as ${testCases[5]}`, () => {
            expect(convertNumToWords(5)).toEqual(testCases[5]);
        });
    });

    // out of range
    describe('10000 should', () => {
        test(`return as ${testCases['error']}`, () => {
            expect(convertNumToWords(10000)).toEqual(testCases['error']);
        });
    });
    describe('0 should', () => {
        test(`return as ${testCases['error']}`, () => {
            expect(convertNumToWords(0)).toEqual(testCases['error']);
        });
    });
    describe('-5 should', () => {
        test(`return as ${testCases['error']}`, () => {
            expect(convertNumToWords(-5)).toEqual(testCases['error']);
        });
    });
});
