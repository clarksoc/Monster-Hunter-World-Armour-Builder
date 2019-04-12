
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

    var requestURL = 'https://raw.githubusercontent.com/clarksoc/Babanski_Final_Project/master/www/js/equipment.JSON';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    var gear;

    request.onload = function ( ) {
        gear = request.response;
    }

    var $selectWeapon = $('#selectWeapon');
   // var $weaponCategory = $('#weaponCategory')
    var $weapons = $('#weapons');
    var $selectWeaponCat = $('#selectWeaponCat');
    var $selectWeaponJewel_1 = $('#selectWeaponJewel_1');
    var $selectWeaponJewel_2 = $('#selectWeaponJewel_2');
    var $weaponJewel_1 = $('#weaponJewel_1');
    var $weaponJewel_2 = $('#weaponJewel_2');

    var weaponCategoryObject = {
        1 : 'Greatsword',
        2 : 'Longsword'
    };
    var greatswordObject = {
        1 : ['equipment'][0]['greatswords'][0]['info'].name,  // todo
        2 : 'Greatsword II'
    };
    var longswordObject = {
        1 : 'Longsword I',
        2 : 'Longsword II'
    };
    var jewelObject = {
        Attack1 : 'Attack 1',
        Defence1 : 'Defence 1'
    };

   /* for (index in longswordObject) {
        weaponSelect.options[weaponSelect.options.length] = new Option(longswordObject[index], index);
    }*/
    var selectWeaponCategory = $selectWeaponCat.get(0);
    for(index in weaponCategoryObject) {
        selectWeaponCategory.options[selectWeaponCategory.options.length] = new Option(weaponCategoryObject[index], index);
    }
    var selectJewel_1 = $selectWeaponJewel_1.get(0);
    for(index in jewelObject) {
        selectJewel_1.options[selectJewel_1.options.length] = new Option(jewelObject[index], index);
    }
    var selectJewel_2 = $selectWeaponJewel_2.get(0);
    for(index in jewelObject) {
        selectJewel_2.options[selectJewel_2.options.length] = new Option(jewelObject[index], index);
    }
    var selectWeapon = $selectWeapon.get(0);
    for (index in greatswordObject) {
        selectWeapon.options[selectWeapon.options.length] = new Option(greatswordObject[index], index);
    }



    $('select').on('change', function (event) {
        event.preventDefault();


        var weaponCategoryValue = selectWeaponCategory.options[selectWeaponCategory.selectedIndex].value;
        var weaponCategoryText = selectWeaponCategory.options[selectWeaponCategory.selectedIndex].text;

        var weaponValue = selectWeapon.options[selectWeapon.selectedIndex].value;
        var weaponText = selectWeapon.options[selectWeapon.selectedIndex].text;

        var weaponJewel_1Value = selectJewel_1.options[selectJewel_1.selectedIndex].value;
        var weaponJewel_1Text = selectJewel_1.options[selectJewel_1.selectedIndex].text;

        var weaponJewel_2Value = selectJewel_2.options[selectJewel_2.selectedIndex].value;
        var weaponJewel_2Text = selectJewel_2.options[selectJewel_2.selectedIndex].text;

      /*  if(weaponCategoryValue === '1') {
            for (index in greatswordObject) {
                selectWeapon.options[selectWeapon.options.length] = new Option(greatswordObject[index], index);
            }
        }
        else if(weaponCategoryValue === '2'){
            for (index in longswordObject) {
                selectWeapon.options[selectWeapon.options.length] = new Option(longswordObject[index], index);
            }
        }*/
        if(weaponCategoryValue === 'default') {
           //window.alert("Please Select a Weapon");
        }
        else{
            $weapons.show();
        }

      if(weaponValue === "default") {
            //window.alert("Please Select a Weapon");
        }
      else {
           // window.alert("Text: " + weaponCategoryText + "\nValue: " + weaponCategoryValue);
            if(weaponValue === '1'){
                $weaponJewel_1.show();
                weaponJewel_2Value.value = "default";
                $weaponJewel_2.hide();
                if(weaponJewel_1Value !== "default") {
                    //window.alert("Text: " + weaponJewel_1Text + "\nValue: " + weaponJewel_1Value);
                }
            }
            else if(weaponValue === '2'){
                $weaponJewel_1.show();
                $weaponJewel_2.show();
                if(weaponJewel_1Value !== "default") {
                    //window.alert("Text: " + weaponJewel_1Text + "\nValue: " + weaponJewel_1Value);
                }
                if(weaponJewel_2Value !== "default") {
                    //window.alert("Text: " + weaponJewel_2Text + "\nValue: " + weaponJewel_2Value);
                }

            }

        }

    })
});