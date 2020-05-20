if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        'use strict';
        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}

function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
}

function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += ' ' + className;
}

function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else el.className = el.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
}

function boardTileKeyDown(e) {
    if (!(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)) {
        var target = e.target || e.srcElement;
        var targetId = parseInt(target.id.slice(9));
        var code = e.which || e.keyCode;

        if (code === 8 || code === 46) {
            removeClass(target, "hasContents");
            target.value = "";
        } else if (code > 64 && code < 91) {
            addClass(target, "hasContents");
            target.value = String.fromCharCode(code);
            code = 39;
        }
        var newFocusedEl;
        switch (code) {
            case 37:
                if (targetId !== 0 && target.selectionStart === 0) {
                    newFocusedEl = document.getElementById("boardTile" + (targetId - 1));
                    newFocusedEl.focus();
                    newFocusedEl.selectionStart = newFocusedEl.value.length;
                    e.preventDefault();
                }
                break;
            case 38:
                if (targetId > 14) {
                    document.getElementById("boardTile" + (targetId - 15)).focus();
                }
                e.preventDefault();
                break;
            case 39:
                if (targetId !== 224 && target.selectionStart === target.value.length) {
                    newFocusedEl = document.getElementById("boardTile" + (targetId + 1));
                    newFocusedEl.focus();
                    newFocusedEl.selectionStart = 0;
                    e.preventDefault();
                }
                break;
            case 40:
                if (targetId < 210) {
                    document.getElementById("boardTile" + (targetId + 15)).focus();
                }
                e.preventDefault();
                break;
            default:
                e.preventDefault();
                break;
        }
    }
}

function boardTileKeyUp(input) {
    if (input.value === "") {
        removeClass(input, "hasContents");
    } else {
        addClass(input, "hasContents");
    }
}

function rackTileKeyDown(e) {
    if (!(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)) {
        var target = e.target || e.srcElement;
        var targetId = parseInt(target.id.slice(8));
        var code = e.which || e.keyCode;
        
        if (code === 8 || code === 46) {
            target.value = "";
        } else if (code > 64 && code < 91) {
            target.value = String.fromCharCode(code);
            code = 39;
        }

        var newFocusedEl;
        switch (code) {
            case 37:
                if (targetId !== 0 && target.selectionStart === 0) {
                    newFocusedEl = document.getElementById("rackTile" + (targetId - 1));
                    newFocusedEl.focus();
                    newFocusedEl.selectionStart = newFocusedEl.value.length;
                    e.preventDefault();
                }
                break;
            case 39:
                if (targetId !== 6 && target.selectionStart === target.value.length) {
                    newFocusedEl = document.getElementById("rackTile" + (targetId + 1));
                    newFocusedEl.focus();
                    newFocusedEl.selectionStart = 0;
                    e.preventDefault();
                }
                break;
            default:
                e.preventDefault();
                break;
        }
    }
}

function clearTable(tableName) {
    var tiles = document.querySelectorAll("#" + tableName + " input");
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].value = "";
        removeClass(tiles[i], "hasContents");
    }
}

// function cellChange(cell) {
//     if (cell.innerText.length === 0) {
//         if (hasClass(cell, "noContent")) {
//             removeClass(cell, "noContent");
//         }
//     } else {
//         if (!hasClass(cell, "noContent")) {
//             if (cell.getAttribute("data-cell-class") !== "") {
//                 addClass(cell, "noContent");
//             }
//         }
//         if (cell.innerText.length > 1) {
//             cell.innerText = cell.innerText[0];
//         }
//     }
// }