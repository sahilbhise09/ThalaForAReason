function getValue() {
    var ans = document.getElementById('text').value;
    console.log(ans);

    // Check if the length of the input is 7
    if (ans.length == 7) {
        console.log(`${ans} has 7 letters thala for a reason`);
        document.getElementById('output').innerHTML = `${ans} has 7 letters thala for a reason`;
        document.getElementById('dhoni').innerHTML = '<img src="bolejokoyal.gif" alt="Thala Gif">'
        document.getElementById('audio').innerHTML = '<audio src="Thala.mp3" autoplay loop></audio>';
    } else if (sums(ans) == 7) {
        // Check if the sum of digits is 7
        console.log(`${ans} thala for a reason`);
        document.getElementById('output').innerHTML = `${ans} thala for a reason`;
        document.getElementById('dhoni').innerHTML = '<img src="bolejokoyal.gif" alt="Thala Gif">'
        document.getElementById('audio').innerHTML = '<audio src="Thala.mp3" autoplay loop></audio>';
    } else {
        console.log(`${ans} Not Thala for a reason`);
        document.getElementById('dhoni').innerHTML = '<img src="moye.gif" alt="moye Gif" width="300px">'
        document.getElementById('output').innerHTML = `${ans} Not Thala for a reason`;
        document.getElementById('audio').innerHTML = '<audio src="moye.mp3" autoplay loop></audio>';
    }
}
function sums(ans) {
    let convnum = parseInt(ans);
    let sum = 0;
    while (convnum > 0) {
        sum += convnum % 10;
        convnum = Math.floor(convnum / 10);
    }
    return sum;
}
