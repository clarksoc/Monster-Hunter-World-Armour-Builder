
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

$(document).on("pagecreate", function () {

    var $selectWeapon = $('#selectWeapon');
    var $selectWeaponJewel_1 = $('#selectWeaponJewel_1');
    var $selectWeaponJewel_2 = $('#selectWeaponJewel_2');
    var $weaponJewel_1 = $('#weaponJewel_1');
    var $weaponJewel_2 = $('#weaponJewel_2');

    var weaponObject = {
        1 : 'GreatSword',
        2 : 'Bow'
    };
    var jewelObject = {
        Attack1 : 'Attack 1',
        Defence1 : 'Defence 1'
    };

    var selectWeapon = $selectWeapon.get(0);
    for(index in weaponObject) {
        selectWeapon.options[selectWeapon.options.length] = new Option(weaponObject[index], index);
    }
    var selectJewel_1 = $selectWeaponJewel_1.get(0);
    for(index in jewelObject) {
        selectJewel_1.options[selectJewel_1.options.length] = new Option(jewelObject[index], index);
    }
    var selectJewel_2 = $selectWeaponJewel_2.get(0);
    for(index in jewelObject) {
        selectJewel_2.options[selectJewel_2.options.length] = new Option(jewelObject[index], index);
    }



    $('select').on('change', function (event) {
        event.preventDefault();

        var weaponValue = selectWeapon.options[selectWeapon.selectedIndex].value;
        var weaponText = selectWeapon.options[selectWeapon.selectedIndex].text;

        var weaponJewel_1Value = selectJewel_1.options[selectJewel_1.selectedIndex].value;
        var weaponJewel_1Text = selectJewel_1.options[selectJewel_1.selectedIndex].text;

        var weaponJewel_2Value = selectJewel_2.options[selectJewel_2.selectedIndex].value;
        var weaponJewel_2Text = selectJewel_2.options[selectJewel_2.selectedIndex].text;

        if(weaponValue === "default") {
            window.alert("Please Select a Weapon");
        }
        else {
            window.alert("Text: " + weaponText + "\nValue: " + weaponValue);
            if(weaponValue === '1'){
                $weaponJewel_1.show();
                weaponJewel_2Value.value = "default";
                $weaponJewel_2.hide();
                if(weaponJewel_1Value !== "default") {
                    window.alert("Text: " + weaponJewel_1Text + "\nValue: " + weaponJewel_1Value);
                }
            }
            else if(weaponValue === '2'){
                $weaponJewel_1.show();
                $weaponJewel_2.show();
                if(weaponJewel_1Value !== "default") {
                    window.alert("Text: " + weaponJewel_1Text + "\nValue: " + weaponJewel_1Value);
                }
                if(weaponJewel_2Value !== "default") {
                    window.alert("Text: " + weaponJewel_2Text + "\nValue: " + weaponJewel_2Value);
                }

            }

        }

    })
});