var heroDiv = $("#hero"); //targets hero div
var hero; //empty variable which will be used to store the hero
var isHeroAttached = false;
var enemies = []; //empty array which will be used to store the enemies
var defendersDiv = $("defenders"); //targets defenders row
var chooseCharacterDiv = $("#choose-character"); //targets character Div
var chooseCharacterText = $("<h2>"); //creates an h2 tag
chooseCharacterText.text("Choose your Character:"); //adds text to h2 tag
chooseCharacterText.addClass("highlight rounded"); //adds classes to h2 tag
chooseCharacterDiv.append(chooseCharacterText); //appends h2 tag to the character Div
var characterImagesDiv = $("#images"); //targets characters Images Row
var characterImagesArray = [
    {
        name: 'miles',
        value: 'miles-morales',
        HP: 123,
        AP: 12,
        CP: 8,
        image: "assets/images/miles.png"
    },
    {
        name: 'gwen',
        value: 'gwen-stacey',
        HP: 108,
        AP: 10,
        CP: 10,
        image: "assets/images/gwen.png"
    },
    {
        name: 'noir',
        value: 'spiderman-noir',
        HP: 114,
        AP: 17,
        CP: 11,
        image: "assets/images/noir.png"
    },
    {
        name: 'ham',
        value: 'spider-ham',
        HP: 97,
        AP: 15,
        CP: 8,
        image: "assets/images/spiderham.png"
    }
]
for (var i = 0; i < characterImagesArray.length; i++) {
    var newDiv = $("<div>")
    newDiv.addClass("col-3 rounded character")
    newDiv.text(characterImagesArray[i].name)
    newDiv.html($("<img>").attr("src", characterImagesArray[i].image).attr("value", characterImagesArray[i].value).attr("id", characterImagesArray[i].name))
        ;
    characterImagesDiv.append(newDiv);
};

$(".character").on("click", function () {
    if (isHeroAttached !== true) {
        heroDiv.append($(this))
        $(this).removeClass("character");
        isHeroAttached = true;
        var detachImages = $(".character").detach();
        detachImages.appendTo('#defenders');
        defendersDiv.text("Defenders");
        

    }

});