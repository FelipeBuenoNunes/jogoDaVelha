const velha = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

const print = document.querySelectorAll(".game");
const winner = document.querySelector("span");
let cont = 0;

let player = "O";
let noWinner = true;

function setArr(x, y, z){
    if(noWinner && print[z].innerText == ""){
        if(player == "O"){
            velha[x][y] = "O";
            print[z].innerText = "O";
            player = "X";
        }else if(player == "X"){
            velha[x][y] = "X";
            print[z].innerText = "X";
            player = "O";
        }
        cont++;
        if(victory()){
            noWinner = false;
            if(player == "O")
                winner.innerText = "Jogador 2 ganhou(X)"
            else if(player == "X")
                winner.innerText = ("Jogador 1 ganhou(O)");
        }
        else if(cont > 8)
            winner.innerText = "Deu VELHAAAAA!!";
    }
}

function victory(){
    //Setando as linhas
    let [line1, line2, line3] = velha;
    //Setando as coluna
    let [column1, column2, column3] = [
        [line1[0],line2[0],line3[0]].every((item) => item === line1[0] && item != ""), 
        [line1[1],line2[1],line3[1]].every((item) => item === line1[1] && item != ""),
        [line1[2],line2[2],line3[2]].every((item) => item === line1[2] && item != "")
    ];
    //Setando as diagonais
    let [diag1, diag2] = [
        [line1[0], line2[1], line3[2]].every((item) => item === line1[0] && item != ""),
        [line1[2], line2[1], line3[0]].every((item) => item === line1[2] && item != "")
    ];

    line1 = line1.every((item) => item === line1[0] && item != "");
    line2 = line2.every((item) => item === line2[0] && item != "");
    line3 = line3.every((item) => item === line3[0] && item != "");
    let test = [line1, line2, line3, diag1, diag2, column1, column2, column3];
    return test.some((item) => item == true);
}

function reset(){
    print.forEach(element => element.innerText = "");
    velha.forEach((element) => {
        element[0] = "";
        element[1] = "";
        element[2] = "";
    });
    noWinner = true;
    winner.innerText = " ";
    cont = 0;
}