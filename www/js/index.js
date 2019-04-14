let app = {
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
        let parentElement = document.getElementById(id);
        let listeningElement = parentElement.querySelector('.listening');
        let receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

$(document).on("pagecreate", function () {


    let requestURL = 'https://raw.githubusercontent.com/clarksoc/Babanski_Final_Project/master/www/js/equipment.JSON';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        let gear = request.response;
        let i;

        let $selectWeapon = $('#selectWeapon');
        let $weapons = $('#weapons');
        let $selectWeaponCat = $('#selectWeaponCat');
        let $rawDamage = $('#rawDamage');
        let $eleName = $('#eleName');
        let $eleDamage = $('#eleDamage');
        let $affinity = $('#affinity');

        let $selectWeaponJewel_1 = $('#selectWeaponJewel_1');
        let $selectWeaponJewel_2 = $('#selectWeaponJewel_2');
        let $weaponJewel_1 = $('#weaponJewel_1');
        let $weaponJewel_2 = $('#weaponJewel_2');

        let $selectHelm = $('#selectHelm');
        let $helmSkill = $('#helmSkill');
        let $helmDefense = $('#helmDefense');
        let $helmFire = $('#helmFire');
        let $helmWater = $('#helmWater');
        let $helmThunder = $('#helmThunder');
        let $helmIce = $('#helmIce');
        let $helmDragon = $('#helmDragon');

        let $selectChest = $('#selectChest');
        let $chestSkill = $('#chestSkill');
        let $chestDefense = $('#chestDefense');
        let $chestFire = $('#chestFire');
        let $chestWater = $('#chestWater');
        let $chestThunder = $('#chestThunder');
        let $chestIce = $('#chestIce');
        let $chestDragon = $('#chestDragon');

        let $selectArms = $('#selectArms');
        let $armsSkill = $('#armsSkill');
        let $armsDefense = $('#armsDefense');
        let $armsFire = $('#armsFire');
        let $armsWater = $('#armsWater');
        let $armsThunder = $('#armsThunder');
        let $armsIce = $('#armsIce');
        let $armsDragon = $('#armsDragon');

        let $selectWaist = $('#selectWaist');
        let $waistSkill = $('#waistSkill');
        let $waistDefense = $('#waistDefense');
        let $waistFire = $('#waistFire');
        let $waistWater = $('#waistWater');
        let $waistThunder = $('#waistThunder');
        let $waistIce = $('#waistIce');
        let $waistDragon = $('#waistDragon');

        let $selectLegs = $('#selectLegs');
        let $legsSkill = $('#legsSkill');
        let $legsDefense = $('#legsDefense');
        let $legsFire = $('#legsFire');
        let $legsWater = $('#legsWater');
        let $legsThunder = $('#legsThunder');
        let $legsIce = $('#legsIce');
        let $legsDragon = $('#legsDragon');

        let $total = $('#total');
        let $totalSkill = $('#totalSkill');
        let $totalDefense = $('#totalDefense');
        let $totalFire = $('#totalFire');
        let $totalWater = $('#totalWater');
        let $totalThunder = $('#totalThunder');
        let $totalIce = $('#totalIce');
        let $totalDragon = $('#totalDragon');

        let weaponCategoryObject = {
            0: 'Greatsword',
            1: 'Longsword'
        };

        let selectWeaponCategory = $selectWeaponCat.get(0);
        for (i in weaponCategoryObject) {
            selectWeaponCategory.options[selectWeaponCategory.options.length] = new Option(weaponCategoryObject[i], i);
        }

        /*
        let selectJewel_1 = $selectWeaponJewel_1.get(0);
        for (i in jewelObject) {
            selectJewel_1.options[selectJewel_1.options.length] = new Option(jewelObject[i], i);
        }
        let selectJewel_2 = $selectWeaponJewel_2.get(0);
        for (i in jewelObject) {
            selectJewel_2.options[selectJewel_2.options.length] = new Option(jewelObject[i], i);
        }
        */

        let helm = $selectHelm.get(0);
        let chest = $selectChest.get(0);
        let arms = $selectArms.get(0);
        let waist = $selectWaist.get(0);
        let legs = $selectLegs.get(0);
        let selectWeapon = $selectWeapon.get(0);

        for (i = 0; i < gear['helm'].length; i++) {
            helm.options[helm.options.length] = new Option(gear['helm'][i]['name'], i);
        }
        for (i = 0; i < gear['chest'].length; i++) {
            chest.options[chest.options.length] = new Option(gear['chest'][i]['name'], i);
        }
        for (i = 0; i < gear['arms'].length; i++) {
            arms.options[arms.options.length] = new Option(gear['arms'][i]['name'], i);
        }
        for (i = 0; i < gear['waist'].length; i++) {
            waist.options[waist.options.length] = new Option(gear['waist'][i]['name'], i);
        }
        for (i = 0; i < gear['legs'].length; i++) {
            legs.options[legs.options.length] = new Option(gear['legs'][i]['name'], i);
        }

        $('select').on('change', function (event) {


            event.preventDefault();

            let weaponCategoryValue = selectWeaponCategory.options[selectWeaponCategory.selectedIndex].value;
            let weaponValue = selectWeapon.options[selectWeapon.selectedIndex].value;
            //let weaponJewel_1Value = selectJewel_1.options[selectJewel_1.selectedIndex].value;
            //let weaponJewel_2Value = selectJewel_2.options[selectJewel_2.selectedIndex].value;

            let HelmValue = helm.options[helm.selectedIndex].value;
            let ChestValue = chest.options[chest.selectedIndex].value;
            let ArmsValue = arms.options[arms.selectedIndex].value;
            let WaistValue = waist.options[waist.selectedIndex].value;
            let LegsValue = legs.options[legs.selectedIndex].value;



            if (weaponCategoryValue === 'default') {
                //window.alert("Please Select a Weapon Cat");
                $rawDamage.text('0');
                $eleName.text('--None--');
                $eleDamage.text('0');
                $affinity.text('0');
               // weaponJewel_1Value.value = "default";
               // weaponJewel_2Value.value = "default";
                $weaponJewel_1.hide();
                $weaponJewel_2.hide();
                weaponValue.value = "default";
                selectWeapon.selectedIndex = 0;
               // selectJewel_1.selectedIndex = 0;
               // selectJewel_2.selectedIndex = 0;
                $weapons.hide();

                for (i = selectWeapon.options.length - 1; i > 0; i--) {
                    selectWeapon.remove(i);
                }


            } else {

                for (i = selectWeapon.options.length - 1; i > 0; i--) {
                    selectWeapon.remove(i);
                }

                for (i = 0; i < gear['weapons'][weaponCategoryValue].length; i++) {
                    selectWeapon.options[selectWeapon.options.length] = new Option(gear['weapons'][weaponCategoryValue][i]['name'], i);
                }

                selectWeapon.selectedIndex = weaponValue + 1;

                $weapons.show();
            }

            if (weaponValue === 'default') {
                //window.alert("Please Select a Weapon");
                $rawDamage.text('0');
                $eleName.text('--None--');
                $eleDamage.text('0');
                $affinity.text('0');
                // selectJewel_1.selectedIndex = 0;
                // selectJewel_2.selectedIndex = 0;
                // weaponJewel_1Value.value = "default";
                // weaponJewel_2Value.value = "default";
                $weaponJewel_1.hide();
                $weaponJewel_2.hide();
            } else {
                //window.alert(weaponValue); // gives value of long / great sword index
                //window.alert(weaponCategoryValue);
                let DecorValue = gear['weapons'][weaponCategoryValue][weaponValue]['decoration'];
                //window.alert(DecorValue);
                if (DecorValue === 1) {
                    $weaponJewel_1.show();
                    //weaponJewel_2Value.value = "default";
                    $weaponJewel_2.hide();
                    //selectJewel_2.selectedIndex = 0;
                    //if (weaponJewel_1Value !== "default") {
                        // todo
                    //}
                } else if (DecorValue === 2) {
                    $weaponJewel_1.show();
                    $weaponJewel_2.show();
                    //if (weaponJewel_1Value !== "default") {
                        // todo
                    //}
                    //if (weaponJewel_2Value !== "default") {
                        // todo
                    }
               // } else {
                    /*
                    // todo
                    this segment hides the jewel when selected, I don't think we need it

                    selectJewel_1.selectedIndex = 0;
                    selectJewel_2.selectedIndex = 0;
                    weaponJewel_1Value.value = "default";
                    weaponJewel_2Value.value = "default";
                    $weaponJewel_1.hide();
                    $weaponJewel_2.hide();
                    */
               // }

                $rawDamage.text(gear['weapons'][weaponCategoryValue][weaponValue]['damage']);
                $eleName.text(gear['weapons'][weaponCategoryValue][weaponValue]['element']);
                $eleDamage.text(gear['weapons'][weaponCategoryValue][weaponValue]['eledamage']);
                $affinity.text(gear['weapons'][weaponCategoryValue][weaponValue]['affinity']);

            }

        });

    };

});