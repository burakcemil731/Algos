//calculate number of rows in Pascal's Triangle 
//When the getPascalsTriangleRow(rowNumber) is called with rowNumber = 12 it should return [1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1].
// 

function summeMitte(erste, zwote) {
    return erste + zwote;
}

export function getPascalsTriangleRow(rowNumber) {

    var num = [[1], [1, 1]];

    if (rowNumber < 0) {
        return [];
    }

    if (rowNumber === 0) {
        return num[0];
    }

    for (var j = num.length - 1; j < rowNumber; j++) {
        var arr = [];
        var ersteNum = num[j][0];
        var letzteNum = num[j][num[j].length - 1];
        arr.push(ersteNum);

        for (var i = 1; i <= j; i++) {
            arr.push(summeMitte(num[j][i - 1], num[j][i]));
        }

        arr.push(letzteNum);
        num.push(arr);
    }
    return num[rowNumber];
}