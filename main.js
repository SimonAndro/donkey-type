var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

var cursorLeft = 0;
$(document).ready(function () {
    
    cursorLeft = $(".cursor i").offset().left;

    sentence();

    $(document).on("keypress", function (e) {
        e.preventDefault();

        var key = String.fromCharCode(e.keyCode);
        console.log(key);
        var letter = $(".active");
        if (key == letter.text()) {
            letter.css("color", "green");
            letter.removeClass("active");
            letter.next().addClass("active");
        } else {
            letter.after("<span class='letter'>" + key + "</span>");
            letter.css("color", "red");
            letter.removeClass("active");
            letter.next().next().addClass("active");
        }

        var left = $("#sentence .active").offset().left - cursorLeft;
        console.log(left);
        $(".cursor i").css("left", parseInt(left) + "px");
    });
});

function randGen() {
    return Math.floor(Math.random() * 5);
}

function sentence() {

    $("#sentence").html("");

    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 10);
    var rand3 = Math.floor(Math.random() * 10);
    var rand4 = Math.floor(Math.random() * 10);
    var rand5 = Math.floor(Math.random() * 10);
    var rand6 = Math.floor(Math.random() * 10);

    var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";
    for (var i = 0; i < content.length; i++) {
        $("#sentence").append("<span class='letter'>" + content.charAt(i) + "</span>");
    }

    $("#sentence span")[0].classList.add("active");

    var left = $("#sentence .active").offset().left - cursorLeft;
    $(".cursor i").css("left", parseInt(left) + "px");
};