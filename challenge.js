const convertNumToWords = (input) => {
    // validate if input exceed boundaries
    if (input < 1 || input > 9999) {
        return 'Number falls outside the range of 1 to 9999';
    }

    const single = [
        '0',
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
    ];

    const below20 = [
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fifteen',
        'Sixteen',
        'Seventeen',
        'Eighteen',
        'Nineteen',
    ];

    const above20below100 = [
        '0',
        '0',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];

    let temp = '';
    let result = '';

    // division by 1000,100,10s required to extact the digit based on the thousand, hundred, tens position
    // mod 10 to move down to the hundred and so forth in the subsequent conditions

    if (input >= 1000) {
        temp = Math.floor(input / 1000);
        result += `${single[temp]} thousand `;
        input = input % 1000;
    }

    if (input >= 100) {
        temp = Math.floor(input / 100);
        result += `${single[temp]} hundred`;
        input = input % 100;

        // if its still more than 0 after mod, append 'and' + continue to tens
        if (temp > 0) {
            result += ' and ';
        }
    }

    if (input >= 20) {
        temp = Math.floor(input / 10);
        result += `${above20below100[temp]} `; // retrive from the above 20 mapping as they are unique
        input = input % 10;
    }

    // checking for 10 up to before 20 as they have unique spellings
    if (input >= 10 && input < 20) {
        result += `${below20[input - 10]} `;
    }

    // checking for 1 to 9 single digits
    if (input > 0 && input < 10) {
        result += `${single[input]} `;
    }

    result += 'only';

    // format all except the first letter to lowercase
    result = result.charAt(0).toUpperCase() + result.toLowerCase().slice(1);

    return result.trim();
};

module.exports = { convertNumToWords };

// // thousands
// console.log(convertNumToWords(2345));
// console.log(convertNumToWords(1000));
// // hundreds
// console.log(convertNumToWords(413));
// console.log(convertNumToWords(503));
// console.log(convertNumToWords(510));
// console.log(convertNumToWords(553));
// //tens
// console.log(convertNumToWords(19));
// console.log(convertNumToWords(73));
// console.log(convertNumToWords(23));
// //ones
// console.log(convertNumToWords(5));
