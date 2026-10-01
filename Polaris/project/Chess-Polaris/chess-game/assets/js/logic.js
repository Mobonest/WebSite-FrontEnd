// ========== تبدیل عدد به فارسی ==========
function toPersianNumber(num) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().replace(/\d/g, d => persianDigits[parseInt(d)]);
}

// ========== متغیرها ==========
let currentTurn = 'white';
let userColor = 'white';
let selectedSquare = null;
let validMoves = [];
let capturedByWhite = [];
let capturedByBlack = [];
let gameOver = false;
let boardFlipped = false;

const files = ['a','b','c','d','e','f','g','h'];
const pieceNamesFa = {
    'king': 'شاه', 'queen': 'وزیر', 'rook': 'رخ',
    'bishop': 'فیل', 'knight': 'اسب', 'pawn': 'سرباز'
};

// ========== ساخت تخته ==========
function createBoard() {
    const board = document.getElementById('chessBoard');
    board.innerHTML = '';
    boardFlipped = false;

    // وضعیت عادی: سفید پایین (ردیف 0,1) - سیاه بالا (ردیف 6,7)
    let pieces = {
        0: ['Wrook','Wknight','Wbishop','Wqueen','Wking','Wbishop','Wknight','Wrook'],
        1: ['Wpawn','Wpawn','Wpawn','Wpawn','Wpawn','Wpawn','Wpawn','Wpawn'],
        6: ['Bpawn','Bpawn','Bpawn','Bpawn','Bpawn','Bpawn','Bpawn','Bpawn'],
        7: ['Brook','Bknight','Bbishop','Bqueen','Bking','Bbishop','Bknight','Brook']
    };

    // اگه کاربر سیاه انتخاب کرده، مهره‌ها رو جابجا کن
    if (userColor === 'black') {
        pieces = {
            0: ['Brook','Bknight','Bbishop','Bqueen','Bking','Bbishop','Bknight','Brook'],
            1: ['Bpawn','Bpawn','Bpawn','Bpawn','Bpawn','Bpawn','Bpawn','Bpawn'],
            6: ['Wpawn','Wpawn','Wpawn','Wpawn','Wpawn','Wpawn','Wpawn','Wpawn'],
            7: ['Wrook','Wknight','Wbishop','Wqueen','Wking','Wbishop','Wknight','Wrook']
        };
        boardFlipped = true;
    }

    for (let row = 7; row >= 0; row--) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'board-row';

        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.className = 'square';
            
            // اگه تخته چرخیده، مختصات رو برعکس کن
            if (boardFlipped) {
                square.dataset.col = 7 - col;
                square.dataset.row = 7 - row;
            } else {
                square.dataset.col = col;
                square.dataset.row = row;
            }
            
            square.id = `sq-${square.dataset.col}-${square.dataset.row}`;

            if ((parseInt(square.dataset.col) + parseInt(square.dataset.row)) % 2 === 0) {
                square.classList.add('light');
            } else {
                square.classList.add('dark');
            }

            if (pieces[row]) {
                square.dataset.piece = pieces[row][col];
                const img = document.createElement('img');
                img.src = `assets/img/${pieces[row][col]}.png`;
                img.alt = pieces[row][col];
                img.className = 'piece-img';
                if (pieces[row][col].toLowerCase().includes('pawn')) {
                    img.classList.add('pawn-img');
                }
                square.appendChild(img);
            }

            square.addEventListener('click', () => handleClick(square));
            rowDiv.appendChild(square);
        }

        board.appendChild(rowDiv);
    }
    
    // آپدیت مختصات نمایشی با اعداد فارسی
    updateCoords();
}

function updateCoords() {
    const topCoords = document.getElementById('topCoords');
    const bottomCoords = document.getElementById('bottomCoords');
    const leftCoords = document.getElementById('leftCoords');
    const rightCoords = document.getElementById('rightCoords');
    
    if (boardFlipped) {
        // معکوس برای سیاه
        if (topCoords) topCoords.innerHTML = '<span>ه</span><span>گ</span><span>ف</span><span>د</span><span>ج</span><span>ب</span><span>ا</span>';
        if (bottomCoords) bottomCoords.innerHTML = '<span>ه</span><span>گ</span><span>ف</span><span>د</span><span>ج</span><span>ب</span><span>ا</span>';
        if (leftCoords) leftCoords.innerHTML = `<span>${toPersianNumber(1)}</span><span>${toPersianNumber(2)}</span><span>${toPersianNumber(3)}</span><span>${toPersianNumber(4)}</span><span>${toPersianNumber(5)}</span><span>${toPersianNumber(6)}</span><span>${toPersianNumber(7)}</span><span>${toPersianNumber(8)}</span>`;
        if (rightCoords) rightCoords.innerHTML = `<span>${toPersianNumber(1)}</span><span>${toPersianNumber(2)}</span><span>${toPersianNumber(3)}</span><span>${toPersianNumber(4)}</span><span>${toPersianNumber(5)}</span><span>${toPersianNumber(6)}</span><span>${toPersianNumber(7)}</span><span>${toPersianNumber(8)}</span>`;
    } else {
        if (topCoords) topCoords.innerHTML = '<span>a</span><span>b</span><span>c</span><span>d</span><span>e</span><span>f</span><span>g</span><span>h</span>';
        if (bottomCoords) bottomCoords.innerHTML = '<span>a</span><span>b</span><span>c</span><span>d</span><span>e</span><span>f</span><span>g</span><span>h</span>';
        if (leftCoords) leftCoords.innerHTML = `<span>${toPersianNumber(8)}</span><span>${toPersianNumber(7)}</span><span>${toPersianNumber(6)}</span><span>${toPersianNumber(5)}</span><span>${toPersianNumber(4)}</span><span>${toPersianNumber(3)}</span><span>${toPersianNumber(2)}</span><span>${toPersianNumber(1)}</span>`;
        if (rightCoords) rightCoords.innerHTML = `<span>${toPersianNumber(8)}</span><span>${toPersianNumber(7)}</span><span>${toPersianNumber(6)}</span><span>${toPersianNumber(5)}</span><span>${toPersianNumber(4)}</span><span>${toPersianNumber(3)}</span><span>${toPersianNumber(2)}</span><span>${toPersianNumber(1)}</span>`;
    }
}

// ========== رنگ و نوع مهره ==========
function getPieceColor(piece) {
    if (!piece) return null;
    if (piece.startsWith('W')) return 'white';
    if (piece.startsWith('B')) return 'black';
    return null;
}

function getPieceType(piece) {
    if (!piece) return null;
    return piece.substring(1).toLowerCase();
}

// ========== کلیک ==========
function handleClick(square) {
    if (gameOver) return;

    const piece = square.dataset.piece || '';
    const color = getPieceColor(piece);

    // کلیک روی حرکت مجاز
    if (square.classList.contains('valid') && selectedSquare) {
        makeMove(selectedSquare, square);
        return;
    }

    // کلیک روی مهره خودی
    if (piece && color === currentTurn) {
        clearAll();
        selectedSquare = square;
        square.classList.add('selected');
        validMoves = getValidMoves(square);
        showMoves();
        return;
    }

    // کلیک جای دیگه
    clearAll();
}

function clearAll() {
    document.querySelectorAll('.square').forEach(s => {
        s.classList.remove('selected', 'valid');
    });
    selectedSquare = null;
    validMoves = [];
}

function showMoves() {
    validMoves.forEach(id => {
        const s = document.getElementById(id);
        if (s) s.classList.add('valid');
    });
}

// ========== اجرای حرکت ==========
function makeMove(from, to) {
    const piece = from.dataset.piece;
    const captured = to.dataset.piece || '';

    if (captured) {
        const type = getPieceType(captured);
        if (getPieceColor(captured) === 'white') {
            capturedByWhite.push(type);
        } else {
            capturedByBlack.push(type);
        }
    }

    // اعلان شطرنجی با اعداد فارسی
    const fromCol = files[parseInt(from.dataset.col)];
    const fromRow = toPersianNumber(8 - parseInt(from.dataset.row));
    const toCol = files[parseInt(to.dataset.col)];
    const toRow = toPersianNumber(8 - parseInt(to.dataset.row));
    const typeStr = getPieceType(piece);
    const nameStr = pieceNamesFa[typeStr] || typeStr;
    const colorStr = getPieceColor(piece) === 'white' ? 'سفید' : 'سیاه';
    const capStr = captured ? ' × ' : ' → ';
    announce(`${nameStr} ${colorStr} از ${fromCol}${fromRow}${capStr}${toCol}${toRow}`);

    // جابجایی
    from.innerHTML = '';
    delete from.dataset.piece;

    to.innerHTML = '';
    to.dataset.piece = piece;
    const img = document.createElement('img');
    img.src = `assets/img/${piece}.png`;
    img.alt = piece;
    img.className = 'piece-img';
    if (piece.toLowerCase().includes('pawn')) img.classList.add('pawn-img');
    to.appendChild(img);

    clearAll();
    updateCaptured();
    checkPromotion(to);
    checkGameStatus();
    switchTurn();
}

function checkPromotion(square) {
    const piece = square.dataset.piece;
    if (!piece) return;
    const type = getPieceType(piece);
    const row = parseInt(square.dataset.row);
    const color = getPieceColor(piece);
    
    if (type === 'pawn') {
        // سفید به ردیف 7 میره، سیاه به ردیف 0
        if ((color === 'white' && row === 7) || (color === 'black' && row === 0)) {
            const prefix = color === 'white' ? 'W' : 'B';
            square.dataset.piece = prefix + 'queen';
            square.innerHTML = '';
            const img = document.createElement('img');
            img.src = `assets/img/${prefix}queen.png`;
            img.alt = prefix + 'queen';
            img.className = 'piece-img';
            square.appendChild(img);
            announce('سرباز تبدیل به وزیر شد! 👑');
        }
    }
}

function switchTurn() {
    if (gameOver) return;
    currentTurn = currentTurn === 'white' ? 'black' : 'white';
    const turnText = currentTurn === 'white' ? 'سفید' : 'سیاه';
    document.getElementById('turnDisplay').textContent = `نوبت: ${turnText}`;
}

// ========== حرکات مجاز ==========
function getValidMoves(square) {
    const piece = square.dataset.piece;
    const col = parseInt(square.dataset.col);
    const row = parseInt(square.dataset.row);
    const color = getPieceColor(piece);
    const type = getPieceType(piece);
    
    if (!color || !type) return [];
    
    const moves = [];
    const state = getState();
    
    const wouldBeCheck = (c, r) => {
        const sim = {...state};
        delete sim[`${col},${row}`];
        sim[`${c},${r}`] = piece;
        return isCheck(sim, color);
    };
    
    const addMove = (c, r) => {
        if (c < 0 || c > 7 || r < 0 || r > 7) return false;
        const target = state[`${c},${r}`];
        if (target) {
            if (getPieceColor(target) !== color && !wouldBeCheck(c, r)) {
                moves.push(`sq-${c}-${r}`);
            }
            return false;
        }
        if (!wouldBeCheck(c, r)) {
            moves.push(`sq-${c}-${r}`);
        }
        return true;
    };
    
    switch(type) {
        case 'pawn':
            // سفید به سمت ردیف 7 = dir 1
            // سیاه به سمت ردیف 0 = dir -1
            const dir = color === 'white' ? 1 : -1;
            const startRow = color === 'white' ? 1 : 6;
            
            // حرکت مستقیم
            if (row + dir >= 0 && row + dir <= 7) {
                const forward = state[`${col},${row + dir}`];
                if (!forward && !wouldBeCheck(col, row + dir)) {
                    moves.push(`sq-${col}-${row + dir}`);
                    
                    if (row === startRow) {
                        const double = state[`${col},${row + 2 * dir}`];
                        if (!double && !wouldBeCheck(col, row + 2 * dir)) {
                            moves.push(`sq-${col}-${row + 2 * dir}`);
                        }
                    }
                }
            }
            
            // گرفتن اریب
            [-1, 1].forEach(dc => {
                const tc = col + dc;
                const tr = row + dir;
                if (tc >= 0 && tc <= 7 && tr >= 0 && tr <= 7) {
                    const target = state[`${tc},${tr}`];
                    if (target && getPieceColor(target) !== color && !wouldBeCheck(tc, tr)) {
                        moves.push(`sq-${tc}-${tr}`);
                    }
                }
            });
            break;
            
        case 'knight':
            [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]].forEach(([dc,dr]) => {
                addMove(col+dc, row+dr);
            });
            break;
            
        case 'king':
            for (let dc=-1; dc<=1; dc++) {
                for (let dr=-1; dr<=1; dr++) {
                    if (dc===0 && dr===0) continue;
                    addMove(col+dc, row+dr);
                }
            }
            break;
            
        case 'rook':
            [[1,0],[-1,0],[0,1],[0,-1]].forEach(([dc,dr]) => {
                for (let i=1; i<=7; i++) {
                    if (!addMove(col+dc*i, row+dr*i)) break;
                }
            });
            break;
            
        case 'bishop':
            [[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([dc,dr]) => {
                for (let i=1; i<=7; i++) {
                    if (!addMove(col+dc*i, row+dr*i)) break;
                }
            });
            break;
            
        case 'queen':
            [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([dc,dr]) => {
                for (let i=1; i<=7; i++) {
                    if (!addMove(col+dc*i, row+dr*i)) break;
                }
            });
            break;
    }
    
    return moves;
}

// ========== بررسی کیش ==========
function isCheck(state, color) {
    let kingPos = null;
    const kingPiece = color === 'white' ? 'Wking' : 'Bking';
    
    for (let [pos, piece] of Object.entries(state)) {
        if (piece === kingPiece) {
            kingPos = pos;
            break;
        }
    }
    if (!kingPos) return false;
    
    const [kc, kr] = kingPos.split(',').map(Number);
    const opp = color === 'white' ? 'black' : 'white';
    
    for (let [pos, piece] of Object.entries(state)) {
        if (!piece || getPieceColor(piece) !== opp) continue;
        const [c, r] = pos.split(',').map(Number);
        if (canAttack(c, r, piece, kc, kr, state)) return true;
    }
    return false;
}

function canAttack(c, r, piece, tc, tr, state) {
    const color = getPieceColor(piece);
    const type = getPieceType(piece);
    
    switch(type) {
        case 'pawn':
            const dir = color === 'white' ? 1 : -1;
            return Math.abs(c - tc) === 1 && tr === r + dir;
            
        case 'knight':
            return (Math.abs(c - tc) === 2 && Math.abs(r - tr) === 1) ||
                   (Math.abs(c - tc) === 1 && Math.abs(r - tr) === 2);
            
        case 'king':
            return Math.abs(c - tc) <= 1 && Math.abs(r - tr) <= 1 && (c !== tc || r !== tr);
            
        case 'rook':
            if (c === tc) {
                const step = r < tr ? 1 : -1;
                for (let y = r + step; y !== tr; y += step) {
                    if (state[`${c},${y}`]) return false;
                }
                return true;
            }
            if (r === tr) {
                const step = c < tc ? 1 : -1;
                for (let x = c + step; x !== tc; x += step) {
                    if (state[`${x},${r}`]) return false;
                }
                return true;
            }
            return false;
            
        case 'bishop':
            if (Math.abs(c - tc) === Math.abs(r - tr) && Math.abs(c - tc) > 0) {
                const dx = c < tc ? 1 : -1;
                const dy = r < tr ? 1 : -1;
                for (let i = 1; i < Math.abs(c - tc); i++) {
                    if (state[`${c + dx * i},${r + dy * i}`]) return false;
                }
                return true;
            }
            return false;
            
        case 'queen':
            if (c === tc) {
                const step = r < tr ? 1 : -1;
                for (let y = r + step; y !== tr; y += step) {
                    if (state[`${c},${y}`]) return false;
                }
                return true;
            }
            if (r === tr) {
                const step = c < tc ? 1 : -1;
                for (let x = c + step; x !== tc; x += step) {
                    if (state[`${x},${r}`]) return false;
                }
                return true;
            }
            if (Math.abs(c - tc) === Math.abs(r - tr) && Math.abs(c - tc) > 0) {
                const dx = c < tc ? 1 : -1;
                const dy = r < tr ? 1 : -1;
                for (let i = 1; i < Math.abs(c - tc); i++) {
                    if (state[`${c + dx * i},${r + dy * i}`]) return false;
                }
                return true;
            }
            return false;
    }
    return false;
}

// ========== وضعیت بازی ==========
function checkGameStatus() {
    document.querySelectorAll('.square').forEach(s => {
        s.classList.remove('inCheck', 'checkmate');
    });

    const state = getState();
    const opp = currentTurn === 'white' ? 'black' : 'white';
    const inCheck = isCheck(state, opp);

    if (inCheck) {
        const kingPiece = opp === 'white' ? 'Wking' : 'Bking';
        for (let [pos, piece] of Object.entries(state)) {
            if (piece === kingPiece) {
                const [c, r] = pos.split(',').map(Number);
                const el = document.getElementById(`sq-${c}-${r}`);
                const hasMove = hasAnyMove(state, opp);
                if (el) {
                    el.classList.add(hasMove ? 'inCheck' : 'checkmate');
                }
                if (!hasMove) {
                    gameOver = true;
                    const winner = opp === 'white' ? 'سیاه' : 'سفید';
                    showGameOver(`کیش و مات! ${winner} برنده شد! ♚`);
                } else {
                    announce('کیش! 👑');
                }
                break;
            }
        }
    } else {
        if (!hasAnyMove(state, opp)) {
            gameOver = true;
            showGameOver('پات! بازی مساوی شد! 🤝');
        }
    }
}

function hasAnyMove(state, color) {
    for (let [pos, piece] of Object.entries(state)) {
        if (!piece || getPieceColor(piece) !== color) continue;
        const [c, r] = pos.split(',').map(Number);
        const type = getPieceType(piece);
        
        const candidates = getCandidateMoves(c, r, piece, state);
        
        for (let move of candidates) {
            const target = state[`${move.col},${move.row}`];
            
            if (type === 'pawn' && move.col === c && target) continue;
            if (type === 'pawn' && move.col !== c && !target) continue;
            if (target && getPieceColor(target) === color) continue;
            
            const sim = {...state};
            delete sim[pos];
            sim[`${move.col},${move.row}`] = piece;
            if (!isCheck(sim, color)) return true;
        }
    }
    return false;
}

function getCandidateMoves(c, r, piece, state) {
    const moves = [];
    const color = getPieceColor(piece);
    const type = getPieceType(piece);
    
    const add = (tc, tr) => {
        if (tc >= 0 && tc <= 7 && tr >= 0 && tr <= 7) {
            moves.push({col: tc, row: tr});
        }
    };
    
    switch(type) {
        case 'pawn':
            const dir = color === 'white' ? 1 : -1;
            add(c, r + dir);
            if ((color === 'white' && r === 1) || (color === 'black' && r === 6)) {
                add(c, r + 2 * dir);
            }
            add(c - 1, r + dir);
            add(c + 1, r + dir);
            break;
        case 'knight':
            [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]].forEach(([dc,dr]) => add(c+dc, r+dr));
            break;
        case 'king':
            for (let dc=-1; dc<=1; dc++) for (let dr=-1; dr<=1; dr++) if (dc||dr) add(c+dc, r+dr);
            break;
        case 'rook':
            [[1,0],[-1,0],[0,1],[0,-1]].forEach(([dc,dr]) => {
                for (let i=1; i<=7; i++) {
                    const tc=c+dc*i, tr=r+dr*i;
                    if (tc<0||tc>7||tr<0||tr>7) break;
                    add(tc, tr);
                    if (state[`${tc},${tr}`]) break;
                }
            });
            break;
        case 'bishop':
            [[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([dc,dr]) => {
                for (let i=1; i<=7; i++) {
                    const tc=c+dc*i, tr=r+dr*i;
                    if (tc<0||tc>7||tr<0||tr>7) break;
                    add(tc, tr);
                    if (state[`${tc},${tr}`]) break;
                }
            });
            break;
        case 'queen':
            [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([dc,dr]) => {
                for (let i=1; i<=7; i++) {
                    const tc=c+dc*i, tr=r+dr*i;
                    if (tc<0||tc>7||tr<0||tr>7) break;
                    add(tc, tr);
                    if (state[`${tc},${tr}`]) break;
                }
            });
            break;
    }
    return moves;
}

// ========== ابزار ==========
function getState() {
    const state = {};
    document.querySelectorAll('.square').forEach(s => {
        if (s.dataset.piece) {
            state[`${s.dataset.col},${s.dataset.row}`] = s.dataset.piece;
        }
    });
    return state;
}

function announce(text) {
    let el = document.getElementById('announceEl');
    if (!el) {
        el = document.createElement('div');
        el.id = 'announceEl';
        el.className = 'move-announce';
        document.body.appendChild(el);
    }
    el.textContent = text;
    el.style.opacity = '1';
    clearTimeout(el._t);
    el._t = setTimeout(() => { el.style.opacity = '0'; }, 3000);
}

function showGameOver(text) {
    let overlay = document.getElementById('gameOverOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'gameOverOverlay';
        overlay.className = 'game-over-overlay';
        document.body.appendChild(overlay);
    }
    overlay.innerHTML = `
        <div class="game-over-box">
            <div>${text}</div>
            <button onclick="resetGame()">شروع دوباره</button>
        </div>
    `;
}

function updateCaptured() {
    const wList = document.getElementById('whiteCapturedList');
    const bList = document.getElementById('blackCapturedList');

    const render = (list, pieces, prefix) => {
        list.innerHTML = '';
        if (pieces.length === 0) {
            list.innerHTML = '<div class="empty-text">-</div>';
        } else {
            pieces.forEach(p => {
                const img = document.createElement('img');
                img.src = `assets/img/${prefix}${p.charAt(0).toUpperCase() + p.slice(1)}.png`;
                img.alt = p;
                img.onerror = function() { this.src = `assets/img/${prefix}pawn.png`; };
                list.appendChild(img);
            });
        }
    };

    render(wList, capturedByWhite, 'W');
    render(bList, capturedByBlack, 'B');
}

function resetGame() {
    const overlay = document.getElementById('gameOverOverlay');
    if (overlay) overlay.remove();

    capturedByWhite = [];
    capturedByBlack = [];
    selectedSquare = null;
    validMoves = [];
    currentTurn = 'white';
    gameOver = false;

    document.getElementById('turnDisplay').textContent = 'نوبت: سفید';
    createBoard();
    updateCaptured();
}

function setUserColor(color) {
    userColor = color;
    
    // آپدیت دکمه‌ها
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
    if (color === 'white') {
        document.getElementById('btnWhite').classList.add('active');
    } else if (color === 'black') {
        document.getElementById('btnBlack').classList.add('active');
    }
    
    resetGame();
}

// ========== شروع ==========
createBoard();
updateCaptured();

document.getElementById('resetBtn').addEventListener('click', resetGame);
document.getElementById('btnWhite').addEventListener('click', () => setUserColor('white'));
document.getElementById('btnBlack').addEventListener('click', () => setUserColor('black'));
document.getElementById('btnRandom').addEventListener('click', () => {
    setUserColor(Math.random() < 0.5 ? 'white' : 'black');
});