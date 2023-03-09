'use strict'

// ロボットの返答内容
const chat = [
    'お名前を入力してください',
    'なにかお困りですか？',
    '解決できるといいですね！'
];

//ロボットの返信の合計回数（最初は0）
// これを利用して、自分が送信ボタンを押したときの相手の返答を配列から指定する。
let chatCount = 0;

// 画面への出力
// valはメッセージ内容, personは誰が話しているか
const output = function (val, person) {

    const ul = document.getElementById('chat-ul');
    const li = document.createElement('li');
    // このdivにテキストを指定
    const div = document.createElement('div');
    div.textContent = val;

    if (person === 'me') {
        div.classList.add('chat-right');
        li.classList.add('right');
        ul.appendChild(li);
        li.appendChild(div);
    } else if (person === 'robot') {
        setTimeout(() => {
            div.classList.add('chat-left');
            li.classList.add('left');
            ul.appendChild(li);
            li.appendChild(div);
            chatCount++;
        }, 2000);
    }
};

const inputText = document.getElementById('chat-input');

// 送信ボタンを押した時の処理
const btnFunc = function () {

    output(inputText.value, 'me');

    setTimeout(() => {
        inputText.value = '';
    }, 1);

    switch (chatCount) {
        case 1:
            output('こんにちは、' + inputText.value + 'さん！', 'robot');
            setTimeout(() => {
                output(chat[1], 'robot');
            }, 2000);
            break;

        case 3:
            output(chat[2], 'robot');
            break;

        default:
            output(inputText.value, 'robot');
            break;
    }
};

setTimeout(() => {
    output(chat[0], 'robot');
}, 2000);
