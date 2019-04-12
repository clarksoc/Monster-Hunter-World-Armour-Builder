var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
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

    request.onload = function () {
        var gear = request.response;

        var $selectWeapon = $('#selectWeapon');
        var $weapons = $('#weapons');
        var $selectWeaponCat = $('#selectWeaponCat');
        var $selectWeaponJewel_1 = $('#selectWeaponJewel_1');
        var $selectWeaponJewel_2 = $('#selectWeaponJewel_2');
        var $weaponJewel_1 = $('#weaponJewel_1');
        var $weaponJewel_2 = $('#weaponJewel_2');

        var $rawDamage = $('#rawDamage');
        var $eleName = $('#eleName');
        var $eleDagame = $('#eleDamage');
        var $affinity = $('#affinity');

        var $selectHelm = $('#selectHelm');
        var $selectHelmJewel_1 = $('#selectHelmJewel_1');
        var $selectHelmJewel_2 = $('#selectHelmJewel_2');
        var $helmSkill = $('#helmSkill');
        var $helmDefense = $('#helmDefense');
        var $helmFire = $('#helmFire');
        var $helmWater = $('#helmWater');
        var $helmThunder = $('#helmThunder');
        var $helmIce = $('#helmIce');
        var $helmDragon = $('#helmDragon');

        var $selectChest = $('#selectChest');
        var $chestSkill = $('#chestSkill');
        var $chestDefense = $('#chestDefense');
        var $chestFire = $('#chestFire');
        var $chestWater = $('#chestWater');
        var $chestThunder = $('#chestThunder');
        var $chestIce = $('#chestIce');
        var $chestDragon = $('#chestDragon');

        var $selectArms = $('#selectArms');
        var $armsSkill = $('#armsSkill');
        var $armsDefense = $('#armsDefense');
        var $armsFire = $('#armsFire');
        var $armsWater = $('#armsWater');
        var $armsThunder = $('#armsThunder');
        var $armsIce = $('#armsIce');
        var $armsDragon = $('#armsDragon');

        var $selectWaist = $('#selectWaist');
        var $waistSkill = $('#waistSkill');
        var $waistDefense = $('#waistDefense');
        var $waistFire = $('#waistFire');
        var $waistWater = $('#waistWater');
        var $waistThunder = $('#waistThunder');
        var $waistIce = $('#waistIce');
        var $waistDragon = $('#waistDragon');

        var $selectLegs = $('#selectLegs');
        var $legsSkill = $('#legsSkill');
        var $legsDefense = $('#legsDefense');
        var $legsFire = $('#legsFire');
        var $legsWater = $('#legsWater');
        var $legsThunder = $('#legsThunder');
        var $legsIce = $('#legsIce');
        var $legsDragon = $('#legsDragon');

        var weaponCategoryObject = {
            0: 'Greatsword',
            1: 'Longsword'
        };

        var jewelObject = {
            Attack1: 'Attack 1',
            Defence1: 'Defence 1'
        };

        /* for (index in longswordObject) {
             weaponSelect.options[weaponSelect.options.length] = new Option(longswordObject[index], index);
         }*/
        var selectWeaponCategory = $selectWeaponCat.get(0);
        for (index in weaponCategoryObject) {
            selectWeaponCategory.options[selectWeaponCategory.options.length] = new Option(weaponCategoryObject[index], index);
        }
        var selectJewel_1 = $selectWeaponJewel_1.get(0);
        for (index in jewelObject) {
            selectJewel_1.options[selectJewel_1.options.length] = new Option(jewelObject[index], index);
        }
        var selectJewel_2 = $selectWeaponJewel_2.get(0);
        for (index in jewelObject) {
            selectJewel_2.options[selectJewel_2.options.length] = new Option(jewelObject[index], index);
        }
        var selectWeapon = $selectWeapon.get(0);
        for (var i = 0; i < gear['equipment'][0]['greatswords'].length; i++) {
            selectWeapon.options[selectWeapon.options.length] = new Option(gear['equipment'][0]['greatswords'][i]['name'], i);
        }


        $('select').on('change', function (event) {
            event.preventDefault();

            var curWep;

            var weaponCategoryValue = selectWeaponCategory.options[selectWeaponCategory.selectedIndex].value;
            //var weaponCategoryText = selectWeaponCategory.options[selectWeaponCategory.selectedIndex].text;

            var weaponValue = selectWeapon.options[selectWeapon.selectedIndex].value;
            //var weaponText = selectWeapon.options[selectWeapon.selectedIndex].text;

            var weaponJewel_1Value = selectJewel_1.options[selectJewel_1.selectedIndex].value;
            //var weaponJewel_1Text = selectJewel_1.options[selectJewel_1.selectedIndex].text;

            var weaponJewel_2Value = selectJewel_2.options[selectJewel_2.selectedIndex].value;
            //var weaponJewel_2Text = selectJewel_2.options[selectJewel_2.selectedIndex].text;

            /*
            if(weaponCategoryValue === '1') {
                  for (index in greatswordObject) {
                      selectWeapon.options[selectWeapon.options.length] = new Option(greatswordObject[index], index);
                  }
              }
              else if(weaponCategoryValue === '2'){
                  for (index in longswordObject) {
                      selectWeapon.options[selectWeapon.options.length] = new Option(longswordObject[index], index);
                  }
              }
              */

            if (weaponCategoryValue === 'default') {
                window.alert("Please Select a Weapon");
            } else {
                $weapons.show();
                window.alert(curWep);
                //window.alert(weaponCategoryValue); // gives value of equipment index
            }

            if (weaponValue === 'default') {
            } else {
                //window.alert(weaponValue); // gives value of long / great sword index

                //curWep = gear[]


                var DecorValue = 0; // temp
                if (DecorValue === 1) {
                    $weaponJewel_1.show();
                    weaponJewel_2Value.value = "default";
                    $weaponJewel_2.hide();
                    if (weaponJewel_1Value !== "default") {
                        // todo
                    }
                } else if (DecorValue === 2){
                    $weaponJewel_1.show();
                    $weaponJewel_2.show();
                    if (weaponJewel_1Value !== "default") {
                        // todo
                    }
                    if (weaponJewel_2Value !== "default") {
                        // todo
                    }
                } else {
                    weaponJewel_1Value.value = "default";
                    weaponJewel_2Value.value = "default";
                    $weaponJewel_1.hide();
                    $weaponJewel_2.hide();
                }

            }

        })

    };
});