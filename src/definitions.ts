export enum Piece {
    Empty = 0,
    King_B = 1,
    Queen_B = 2,
    Rook_B = 3,
    Bishop_B = 4,
    Knight_B = 5,
    Pawn_B = 6,
    King_W = 7,
    Queen_W = 8,
    Rook_W = 9,
    Bishop_W = 10,
    Knight_W = 11,
    Pawn_W = 12
}

export enum Value {
    Pawn = 100,
    Knight = 300,
    Bishop = 300,
    Rook = 500,
    Queen = 900
}

export interface EvalMove {
    from: number;
    to: number;
    data: number;
    score: number;
}

export enum EngineCommands {
    None = 0,
    RetrieveBoard = 1,
    AttemptMove = 2,
    HistoryGoBack = 3,
    HistoryGoForward = 4,
    BotBestMove = 5,
    RetrievePieceLocations = 6
}

export enum Sounds {
    None = 0,
    PieceMoved = 1,
    PieceCaptured = 2,
    Checked = 3,
    Castled = 4,
    IllegalMove = 5,
    GameOver = 6,
    PieceMoved2 = 7
}

export const getPieceName = (piece: number) => {
    switch (piece) {
        case Piece.Pawn_W:
        case Piece.Pawn_B:
            return "Pawn";
        case Piece.Knight_W:
        case Piece.Knight_B:
            return "Knight";
        case Piece.Bishop_W:
        case Piece.Bishop_B:
            return "Bishop";
        case Piece.Rook_W:
        case Piece.Rook_B:
            return "Rook";
        case Piece.Queen_W:
        case Piece.Queen_B:
            return "Queen";
        case Piece.King_W:
        case Piece.King_B:
            return "King";
        default:
            return "";
    }
}

// adapted from https://github.com/SebLague/Chess-AI/blob/main/Assets/Scripts/Core/PieceSquareTable.cs
export const pawnSquareTable: number[] = [
    0,  0,  0,  0,  0,  0,  0,  0,
    50, 50, 50, 50, 50, 50, 50, 50,
    10, 10, 20, 30, 30, 20, 10, 10,
    5,  5, 10, 25, 25, 10,  5,  5,
    0,  0,  0, 20, 20,  0,  0,  0,
    5, -5,-10,  0,  0,-10, -5,  5,
    5, 10, 10,-20,-20, 10, 10,  5,
    0,  0,  0,  0,  0,  0,  0,  0
];

export const knightSquareTable: number[] = [
    -50,-40,-30,-30,-30,-30,-40,-50,
    -40,-20,  0,  0,  0,  0,-20,-40,
    -30,  0, 10, 15, 15, 10,  0,-30,
    -30,  5, 15, 20, 20, 15,  5,-30,
    -30,  0, 15, 20, 20, 15,  0,-30,
    -30,  5, 10, 15, 15, 10,  5,-30,
    -40,-20,  0,  5,  5,  0,-20,-40,
    -50,-40,-30,-30,-30,-30,-40,-50,
];

export const bishopSquareTable: number[] = [
    -20,-10,-10,-10,-10,-10,-10,-20,
    -10,  0,  0,  0,  0,  0,  0,-10,
    -10,  0,  5, 10, 10,  5,  0,-10,
    -10,  5,  5, 10, 10,  5,  5,-10,
    -10,  0, 10, 10, 10, 10,  0,-10,
    -10, 10, 10, 10, 10, 10, 10,-10,
    -10,  5,  0,  0,  0,  0,  5,-10,
    -20,-10,-10,-10,-10,-10,-10,-20,
];

export const rookSquareTable: number[] = [
    0,  0,  0,  0,  0,  0,  0,  0,
    5, 10, 10, 10, 10, 10, 10,  5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    0,  0,  0,  5,  5,  0,  0,  0
];

export const queenSquareTable: number[] = [
    -20,-10,-10, -5, -5,-10,-10,-20,
    -10,  0,  0,  0,  0,  0,  0,-10,
    -10,  0,  5,  5,  5,  5,  0,-10,
    -5,  0,  5,  5,  5,  5,  0, -5,
    0,  0,  5,  5,  5,  5,  0, -5,
    -10,  5,  5,  5,  5,  5,  0,-10,
    -10,  0,  5,  0,  0,  0,  0,-10,
    -20,-10,-10, -5, -5,-10,-10,-20
];

export const kingMiddleGameSquareTable: number[] = [
    -30,-40,-40,-50,-50,-40,-40,-30,
    -30,-40,-40,-50,-50,-40,-40,-30,
    -30,-40,-40,-50,-50,-40,-40,-30,
    -30,-40,-40,-50,-50,-40,-40,-30,
    -20,-30,-30,-40,-40,-30,-30,-20,
    -10,-20,-20,-20,-20,-20,-20,-10,
    20, 20,  0,  0,  0,  0, 20, 20,
    20, 30, 10,  0,  0, 10, 30, 20
];

export const kingEndGameSquareTable: number[] = [
    -50,-40,-30,-20,-20,-30,-40,-50,
    -30,-20,-10,  0,  0,-10,-20,-30,
    -30,-10, 20, 30, 30, 20,-10,-30,
    -30,-10, 30, 40, 40, 30,-10,-30,
    -30,-10, 30, 40, 40, 30,-10,-30,
    -30,-10, 20, 30, 30, 20,-10,-30,
    -30,-30,  0,  0,  0,  0,-30,-30,
    -50,-30,-30,-30,-30,-30,-30,-50
];