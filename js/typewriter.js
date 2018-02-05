function animateTypewriters(selector) {

    var log = console.log.bind(console),
        messageElement = document.querySelector(selector),
        text = messageElement.innerText.trim();

    var words = text.split(' ');

    var work = [];

    messageElement.style.opacity = 1;

    words.forEach(function (word) {
        var splitWord = word.split('').map(function (char, index) {
            return '<i>' + char + '</i>';
        }).join('');
        work.push(splitWord);
    });

    var formattedWords = work.map(function (word, index) {
        return '<span>' + word + '</span>';
    }).join(' ');

    messageElement.innerHTML = formattedWords;
    messageElement.classList.add('animate');

    return;
}
