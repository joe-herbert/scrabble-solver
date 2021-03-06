exports.show_index = function(req, res, next) {
    let boardLayout = [
        ["tw", "", "", "dl", "", "", "", "tw", "", "", "", "dl", "", "", "tw"],
        ["", "dw", "", "", "", "tl", "", "", "", "tl", "", "", "", "dw", ""],
        ["", "", "dw", "", "", "", "dl", "", "dl", "", "", "", "dw", "", ""],
        ["dl", "", "", "dw", "", "", "", "dl", "", "", "", "dw", "", "", "dl"],
        ["", "", "", "", "dw", "", "", "", "", "", "dw", "", "", "", ""],
        ["", "tl", "", "", "", "tl", "", "", "", "tl", "", "", "", "tl", ""],
        ["", "", "dl", "", "", "", "dl", "", "dl", "", "", "", "dl", "", ""],
        ["tw", "", "", "dl", "", "", "", "c", "", "", "", "dl", "", "", "tw"],
        ["", "", "dl", "", "", "", "dl", "", "dl", "", "", "", "dl", "", ""],
        ["", "tl", "", "", "", "tl", "", "", "", "tl", "", "", "", "tl", ""],
        ["", "", "", "", "dw", "", "", "", "", "", "dw", "", "", "", ""],
        ["dl", "", "", "dw", "", "", "", "dl", "", "", "", "dw", "", "", "dl"],
        ["", "", "dw", "", "", "", "dl", "", "dl", "", "", "", "dw", "", ""],
        ["", "dw", "", "", "", "tl", "", "", "", "tl", "", "", "", "dw", ""],
        ["tw", "", "", "dl", "", "", "", "tw", "", "", "", "dl", "", "", "tw"]
    ];
    res.render('index', {
        title: 'Scrabble Solver',
        boardLayout: boardLayout
    });
};