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

            if (HelmValue === 'default') {
                $helmSkill.text('--None--');
                $helmDefense.text('0');
                $helmFire.text('0');
                $helmWater.text('0');
                $helmThunder.text('0');
                $helmIce.text('0');
                $helmDragon.text('0');
            }else{
                $helmSkill.text(gear['helm'][HelmValue]['Skill']);
                $helmDefense.text(gear['helm'][HelmValue]['defense']);
                $helmFire.text(gear['helm'][HelmValue]['fire']);
                $helmWater.text(gear['helm'][HelmValue]['water']);
                $helmThunder.text(gear['helm'][HelmValue]['thunder']);
                $helmIce.text(gear['helm'][HelmValue]['ice']);
                $helmDragon.text(gear['helm'][HelmValue]['dragon']);
            }
            if (ChestValue === 'default') {
                $chestSkill.text('--None--');
                $chestDefense.text('0');
                $chestFire.text('0');
                $chestWater.text('0');
                $chestThunder.text('0');
                $chestIce.text('0');
                $chestDragon.text('0');
            }else{
                $chestSkill.text(gear['chest'][ChestValue]['Skill']);
                $chestDefense.text(gear['chest'][ChestValue]['defense']);
                $chestFire.text(gear['chest'][ChestValue]['fire']);
                $chestWater.text(gear['chest'][ChestValue]['water']);
                $chestThunder.text(gear['chest'][ChestValue]['thunder']);
                $chestIce.text(gear['chest'][ChestValue]['ice']);
                $chestDragon.text(gear['chest'][ChestValue]['dragon']);
            }
            if (ArmsValue === 'default') {
                $armsSkill.text('--None--');
                $armsDefense.text('0');
                $armsFire.text('0');
                $armsWater.text('0');
                $armsThunder.text('0');
                $armsIce.text('0');
                $armsDragon.text('0');
            }else{
                $armsSkill.text(gear['arms'][ArmsValue]['Skill']);
                $armsDefense.text(gear['arms'][ArmsValue]['defense']);
                $armsFire.text(gear['arms'][ArmsValue]['fire']);
                $armsWater.text(gear['arms'][ArmsValue]['water']);
                $armsThunder.text(gear['arms'][ArmsValue]['thunder']);
                $armsIce.text(gear['arms'][ArmsValue]['ice']);
                $armsDragon.text(gear['arms'][ArmsValue]['dragon']);
            }
            if (WaistValue === 'default') {
                $waistSkill.text('--None--');
                $waistDefense.text('0');
                $waistFire.text('0');
                $waistWater.text('0');
                $waistThunder.text('0');
                $waistIce.text('0');
                $waistDragon.text('0');
            }else{
                $waistSkill.text(gear['waist'][WaistValue]['Skill']);
                $waistDefense.text(gear['waist'][WaistValue]['defense']);
                $waistFire.text(gear['waist'][WaistValue]['fire']);
                $waistWater.text(gear['waist'][WaistValue]['water']);
                $waistThunder.text(gear['waist'][WaistValue]['thunder']);
                $waistIce.text(gear['waist'][WaistValue]['ice']);
                $waistDragon.text(gear['waist'][WaistValue]['dragon']);
            }
            if (LegsValue === 'default') {
                $legsSkill.text('--None--');
                $legsDefense.text('0');
                $legsFire.text('0');
                $legsWater.text('0');
                $legsThunder.text('0');
                $legsIce.text('0');
                $legsDragon.text('0');
            }else{
                $legsSkill.text(gear['legs'][LegsValue]['Skill']);
                $legsDefense.text(gear['legs'][LegsValue]['defense']);
                $legsFire.text(gear['legs'][LegsValue]['fire']);
                $legsWater.text(gear['legs'][LegsValue]['water']);
                $legsThunder.text(gear['legs'][LegsValue]['thunder']);
                $legsIce.text(gear['legs'][LegsValue]['ice']);
                $legsDragon.text(gear['legs'][LegsValue]['dragon']);
            }

        });

    };

});