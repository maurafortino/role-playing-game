var heroDiv = $("#hero"); //targets hero div
var hero; //empty variable which will be used to store the hero
var isHeroAttached = false;
var enemies = []; //empty array which will be used to store the enemies
var defendersDiv = $("#defenders"); //targets defenders row
var defendersTitle = $("#defenders-title");
var chooseCharacterDiv = $("#choose-character"); //targets character Div
var chooseCharacterText = $("<h2>"); //creates an h2 tag
chooseCharacterText.text("Choose your Character:"); //adds text to h2 tag
chooseCharacterText.addClass("rounded"); //adds classes to h2 tag
chooseCharacterDiv.append(chooseCharacterText); //appends h2 tag to the character Div
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
        AP: 15,
        CP: 8,
        image: "assets/images/spiderham.png"
    }
]
for (var i = 0; i < characterImagesArray.length; i++) {
    var newDiv = $("<div>")
    var newSpan = $("<span>")
    newDiv.addClass("col-3 rounded character card")
    newDiv.html($("<img>").attr("src", characterImagesArray[i].image).attr("value", characterImagesArray[i].value).attr("id", characterImagesArray[i].id).addClass("card-img"))
    characterImagesDiv.append(newDiv);
   
    newSpan.text(characterImagesArray[i].name + ", HP: " + characterImagesArray[i].HP)
    newDiv.append(newSpan)
};

$(".character").on("click", function () {
    if (isHeroAttached !== true) {
        var newDiv = $("<div>")
        var newH2 = $("<h2>")
        newDiv.html($(this))
        newDiv.addClass("col-3")
        $(this).removeClass("character col-3");
        heroDiv.append(newDiv)
        isHeroAttached = true;
        
        newH2.text("Hero:")
        newH2.addClass("rounded")
        newDiv.prepend(newH2)

        var secondH2 = $("<h2>")
        var detachImages = $(".character").detach();
        secondH2.addClass("col-3 rounded mt-3")
        secondH2.text("Defenders:")
        defendersTitle.append(secondH2)
        detachImages.addClass("mx-2")
        detachImages.appendTo(defendersDiv);

        chooseCharacterDiv.empty();     

    }

});