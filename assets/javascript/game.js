var wins = 0;
var losses = 0;
var hero; //empty variable which will be used to store the hero
var heroAP;
var heroHealth;
var heroImage;
var isHeroAttached = false;
var isEnemyAttached = false;
var defendersTitle = $("#defenders-title");
var defendersDiv = $("#defenders"); //targets defenders row
var enemy;
var enemyCP;
var enemyImg;
var enemyCount = 3;
var attackDiv = $("#attack");
var chooseCharacterDiv = $("#choose-character"); //targets character Div
var chooseCharacterText = $("<h2>"); //creates an h2 tag
var characterImagesDiv = $("#images"); //targets characters Images Row
var characterImagesArray = [
    {
        name: 'Miles Morales',
        id: 'miles',
        value: 'miles-morales',
        HP: 123,
        AP: 12,
        CP: 8,
        image: "assets/images/miles.png"
    },
    {
        name: 'Gwen Stacey',
        id: 'gwen',
        value: 'gwen-stacey',
        HP: 108,
        AP: 10,
        CP: 10,
        image: "assets/images/gwen.png"
    },
    {
        name: 'Spiderman Noir',
        id: 'noir',
        value: 'spiderman-noir',
        HP: 114,
        AP: 17,
        CP: 11,
        image: "assets/images/noir.png"
    },
    {
        name: 'Spider Ham',
        id: 'ham',
        value: 'spider-ham',
        HP: 97,
        AP: 12,
        CP: 8,
        image: "assets/images/spiderham.png"
    }
]

// $(document).on("click", ".replay", function () {
//     startGame();
// });

$(document).on("click", ".attack", function () {
    if (enemyHealth > 0 && heroHealth > 0 && enemyCount > 0) {
        enemyHealth -= heroAP;
        heroHealth -= enemyCP;
        $(".enemy-health").text("HP: " + enemyHealth);
        $(".hero-health").text("HP: " + heroHealth);
        var int = parseInt(heroAP)
        int += 5
        heroAP = int;

    } else if (enemyHealth <= 0 && heroHealth > 0 && enemyCount > 0) {
        alert("you defeated an enemy");
        $(".enemy-name").empty();
        $(".enemy-image").empty();
        $(".enemy-health").empty();
        isEnemyAttached = false;
        $(".enemy-name").text("choose another character");
        enemyCount--;
        console.log(enemyCount);
    } else if (enemyCount === 0 && heroHealth > 0) {
        wins++;
        $("#wins").text("wins: " + wins);
        $("#losses").text("losses: " + losses);
        var playAgain = confirm("you win! Do you want to play again?")
        if (playAgain === true) {
            startGame();
        }
    } else {
        losses++;
        $("#wins").text("wins: " + wins);
        $("#losses").text("losses: " + losses);
        var playAgain = confirm("you lose! Do you want to avenge yourself?")
        if (playAgain === true) {
            startGame();
        }
    }
});

function startGame() {
    heroAP;
    heroHealth;
    heroImage;
    enemy;
    enemyCP;
    enemyImg;
    enemyCount = 3;
    isHeroAttached = false;
    isEnemyAttached = false;
    $("#wins").text("wins: " + wins);
    $("#losses").text("losses: " + losses);
    $(".hero-name").empty();
    $(".hero-image").empty();
    $(".hero-health").empty();
    $(".hero-title").empty();
    $(".enemy-name").empty();
    $(".enemy-image").empty();
    $(".enemy-health").empty();
    $(".enemy-title").empty();
    defendersDiv.empty();
    defendersTitle.empty();
    chooseCharacterText.text("Choose your Character:"); //adds text to h2 tag
    chooseCharacterText.addClass("rounded"); //adds classes to h2 tag
    chooseCharacterDiv.append(chooseCharacterText); //appends h2 tag to the character Div
    for (var i = 0; i < characterImagesArray.length; i++) {
        var createDiv = $("<div>");
        var createImg = $("<img>");
        var caption = $("<figcaption>");
        createDiv.addClass("col-3");
        createImg.addClass("character");
        createImg.attr("src", characterImagesArray[i].image);
        createImg.attr("data-name", characterImagesArray[i].name);
        createImg.attr("combat-power", characterImagesArray[i].CP);
        createImg.attr("attack-power", characterImagesArray[i].AP);
        createImg.attr("health-power", characterImagesArray[i].HP);
        caption.text(characterImagesArray[i].name + " HP: " + characterImagesArray[i].HP);
        createDiv.append(createImg);
        createDiv.append(caption);
        characterImagesDiv.append(createDiv);
    };

    $(".character").on("click", function () {
        if (isHeroAttached !== true) {
            $(".hero-title").text("Hero:")
            hero = $(this).attr("data-name");
            heroAP = $(this).attr("attack-power");
            heroHealth = $(this).attr("health-power");
            heroImage = $(this).attr("src");
            $(".hero-name").html("<h3>" + hero + "</h3>");
            $(".hero-image").html("<img src=" + heroImage + ">");
            $(".hero-health").html("<h3>HP:" + heroHealth + "</h3>");

            $(this).removeClass("character col-3");
            isHeroAttached = true;

            var defenderHeader = $("<h2>");
            var detachImages = $(".character").detach();
            defenderHeader.addClass("col-3 rounded mt-3");
            defenderHeader.text("Defenders:");
            defendersTitle.append(defenderHeader);
            detachImages.appendTo(defendersDiv);
            detachImages.addClass("defender mx-2 col-3")
            characterImagesDiv.empty();
            chooseCharacterDiv.empty();
            $("#directions").remove();

        };
    });

    $(document).on("click", ".defender", function () {
        if (isEnemyAttached !== true) {
            $(".enemy-name").empty();
            $(".enemy-image").empty();
            $(".enemy-health").empty();
            $(".enemy-title").text("Enemy:");
            attackDiv.empty();
            var attackButton = $("<button>");
            enemyImg = $(this).attr("src");
            $(this).removeClass("col-3 mx-2");
            $(this).remove();
            isEnemyAttached = true;
            enemy = $(this).attr("data-name");
            enemyCP = $(this).attr("combat-power");
            enemyHealth = $(this).attr("health-power");
            $(".enemy-name").html("<h3>" + enemy + "</h3>");
            $(".enemy-image").html("<img src=" + enemyImg + ">");
            $(".enemy-health").html("<h3> HP: " + enemyHealth + "</h3>");


            attackButton.text("attack");
            attackButton.addClass("attack");
            attackDiv.append(attackButton);
        }
    });

};

startGame();