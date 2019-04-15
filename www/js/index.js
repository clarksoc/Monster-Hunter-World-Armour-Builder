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

        let $weaponOne = $('#weaponOne');
        let $helmOne = $('#helmOne');
        let $chestOne = $('#chestOne');
        let $armsOne = $('#armsOne');
        let $waistOne = $('#waistOne');
        let $legsOne = $('#legsOne');

        let $weaponTwo = $('#weaponTwo');
        let $helmTwo = $('#helmTwo');
        let $chestTwo = $('#chestTwo');
        let $armsTwo = $('#armsTwo');
        let $waistTwo = $('#waistTwo');
        let $legsTwo = $('#legsTwo');

        let $weaponThree = $('#weaponThree');
        let $helmThree = $('#helmThree');
        let $chestThree = $('#chestThree');
        let $armsThree = $('#armsThree');
        let $waistThree = $('#waistThree');
        let $legsThree = $('#legsThree');

        let $weaponFour = $('#weaponFour');
        let $helmFour = $('#helmFour');
        let $chestFour = $('#chestFour');
        let $armsFour = $('#armsFour');
        let $waistFour = $('#waistFour');
        let $legsFour = $('#legsFour');

        let $weaponFive = $('#weaponFive');
        let $helmFive = $('#helmFive');
        let $chestFive = $('#chestFive');
        let $armsFive = $('#armsFive');
        let $waistFive = $('#waistFive');
        let $legsFive = $('#legsFive');

        let dbSupported = ("indexedDB" in window);


        if (dbSupported) {
            let openRequest = window.indexedDB.open("loadoutDB", 1);

            openRequest.onupgradeneeded = function (event) {
                console.log("DB upgrading");
                db = openRequest.result;
                if (!db.objectStoreNames.contains("loadout")) {

                    db.createObjectStore("loadout", {keyPath: "key"});
                }

            };
            openRequest.onsuccess = function (event) {
                console.log("DB success");
                db = openRequest.result;
            };

            openRequest.onerror = function (event) {
                console.log("DB error");
                console.dir(event);
            };

        }


        let weaponCategoryObject = {
            0: 'Greatsword',
            1: 'Longsword'
        };

        let selectWeaponCategory = $selectWeaponCat.get(0);
        for (i in weaponCategoryObject) {
            selectWeaponCategory.options[selectWeaponCategory.options.length] = new Option(weaponCategoryObject[i], i);
        }

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

        let weaponCategoryValue = selectWeaponCategory.options[selectWeaponCategory.selectedIndex].value;
        let weaponValue = selectWeapon.options[selectWeapon.selectedIndex].value;
        let weaponIndex = selectWeapon.selectedIndex;

        let HelmValue = helm.options[helm.selectedIndex].value;
        let ChestValue = chest.options[chest.selectedIndex].value;
        let ArmsValue = arms.options[arms.selectedIndex].value;
        let WaistValue = waist.options[waist.selectedIndex].value;
        let LegsValue = legs.options[legs.selectedIndex].value;


        $('#saveOne').click(function(event){
            event.preventDefault();
            navigator.vibrate(500);
            let key = "1";
            let weaponcat = weaponCategoryValue;
            let weapon = weaponValue;
            let helmet = HelmValue;
            let chest = ChestValue;
            let arms = ArmsValue;
            let waist = WaistValue;
            let legs = LegsValue;


            let loadout={ weaponcat:weaponcat,
                weapon:weapon, helmet:helmet,
                chest:chest, arms:arms,
                waist:waist, legs:legs, key:key};



            let transaction = db.transaction(["loadout"],"readwrite");

            let storeRequest = transaction.objectStore("loadout").put(loadout);
            storeRequest.onsuccess =function() {
                navigator.notification.alert("Loadout one successfully saved!", alertDismissed, "Loadout Saved", "Done");
                $weaponOne.text(gear['weapons'][weaponcat][weaponValue]['name']);
                $helmOne.text(gear['helm'][helmet]['name']);
                $chestOne.text(gear['chest'][chest]['name']);
                $armsOne.text(gear['arms'][arms]['name']);
                $waistOne.text(gear['waist'][waist]['name']);
                $legsOne.text(gear['legs'][legs]['name']);

            };
            storeRequest.onerror=function() {
                navigator.notification.alert("Database Error: cannot save Loadout Info", alertDismissed, "Loadout Not Saved", "Done");
            };


            function alertDismissed(){
                console.log("Alert Dismissed!");
            }

        });

        $('#deleteOne').click(function (event) {
            event.preventDefault();
            let key = "1";
            let transaction = db.transaction(["loadout"],"readwrite");
            let objectStore = transaction.objectStore("loadout");
            objectStore.delete(key);
            navigator.notification.alert("Deleted Loadout '" + key + "'.", alertDismissed, "Loadout Deleted", "Done");
            $weaponOne.text('--None--');
            $helmOne.text('--None--');
            $chestOne.text('--None--');
            $armsOne.text('--None--');
            $waistOne.text('--None--');
            $legsOne.text('--None--');
            function alertDismissed(){
                console.log("Alert Dismissed!");
            }
        });

        $('#saveTwo').click(function(event){
            event.preventDefault();
            navigator.vibrate([500, 500, 500]);
            let key = "2";
            let weaponcat = weaponCategoryValue;
            let weapon = weaponValue;
            let helmet = HelmValue;
            let chest = ChestValue;
            let arms = ArmsValue;
            let waist = WaistValue;
            let legs = LegsValue;


            let loadout={ weaponcat:weaponcat,
                weapon:weapon, helmet:helmet,
                chest:chest, arms:arms,
                waist:waist, legs:legs, key:key};


            let transaction = db.transaction(["loadout"],"readwrite");

            let storeRequest = transaction.objectStore("loadout").put(loadout);
            storeRequest.onsuccess =function() {
                navigator.notification.alert("Loadout two successfully saved!", alertDismissed, "Loadout Saved", "Done");

                $weaponTwo.text(gear['weapons'][weaponcat][weaponValue]['name']);
                $helmTwo.text(gear['helm'][helmet]['name']);
                $chestTwo.text(gear['chest'][chest]['name']);
                $armsTwo.text(gear['arms'][arms]['name']);
                $waistTwo.text(gear['waist'][waist]['name']);
                $legsTwo.text(gear['legs'][legs]['name']);
            };
            storeRequest.onerror=function() {
                navigator.notification.alert("Database Error: cannot save Loadout Info", alertDismissed, "Loadout Not Saved", "Done");
            };


            function alertDismissed(){
                console.log("Alert Dismissed!");
            }


        });

        $('#loadTwo').click(function (event) {
            event.preventDefault();
            let key = "2";
            //window.alert("ayo button was pressed");
            let storeRequest = db.transaction(["loadout"],"readwrite")
                .objectStore("loadout").get(key);
            //navigator.notification.alert("test1", alertDismissed, "Loadout Found", "Done");

            storeRequest.onsuccess=function() {

                if ((storeRequest.result) && ("key" in storeRequest.result)) {
                    // navigator.notification.alert("Loadout '" + key + "' Selected.", alertDismissed, "Loadout Found", "Done");
                    window.alert("Weapon Category Value: " + storeRequest.result.weaponcat +
                        " Weapon Value: " + storeRequest.result.weapon +
                        " Helmet Value :" + storeRequest.result.helmet +
                        " Arms Value: " + storeRequest.result.arms +
                        " Chest Value: " + storeRequest.result.chest +
                        " Legs Value: " + storeRequest.result.legs +
                        " Waist Value: " + storeRequest.result.waist) ;

                    $weaponTwo.text(gear['weapons'][storeRequest.result.weaponcat][storeRequest.result.weapon]['name']);
                    $helmTwo.text(gear['helm'][storeRequest.result.helmet]['name']);
                    $chestTwo.text(gear['chest'][storeRequest.result.chest]['name']);
                    $armsTwo.text(gear['arms'][storeRequest.result.arms]['name']);
                    $waistTwo.text(gear['waist'][storeRequest.result.waist]['name']);
                    $legsTwo.text(gear['legs'][storeRequest.result.legs]['name']);

                }
                else {
                    navigator.notification.alert("Loadout with key '" + key + "' not found in the database!", alertDismissed, "Loadout Not Found", "Done");
                }

            };
            function alertDismissed(){
                console.log("Alert Dismissed!");
            }
        });

        $('#deleteTwo').click(function (event) {
            event.preventDefault();
            let key = "2";
            let transaction = db.transaction(["loadout"],"readwrite");
            let objectStore = transaction.objectStore("loadout");
            objectStore.delete(key);
            navigator.notification.alert("Deleted Loadout '" + key + "'.", alertDismissed, "Loadout Deleted", "Done");
            $weaponTwo.text('--None--');
            $helmTwo.text('--None--');
            $chestTwo.text('--None--');
            $armsTwo.text('--None--');
            $waistTwo.text('--None--');
            $legsTwo.text('--None--');
            function alertDismissed(){
                console.log("Alert Dismissed!");
            }
        });

        $('#saveThree').click(function(event){
            event.preventDefault();
            navigator.vibrate([500, 500, 500, 500, 500]);
            let key = "3";
            let weaponcat = weaponCategoryValue;
            let weapon = weaponValue;
            let helmet = HelmValue;
            let chest = ChestValue;
            let arms = ArmsValue;
            let waist = WaistValue;
            let legs = LegsValue;



            let loadout={ weaponcat:weaponcat,
                weapon:weapon, helmet:helmet,
                chest:chest, arms:arms,
                waist:waist, legs:legs, key:key};

            let transaction = db.transaction(["loadout"],"readwrite");

            let storeRequest = transaction.objectStore("loadout").put(loadout);
            storeRequest.onsuccess =function() {
                navigator.notification.alert("Loadout three successfully saved!", alertDismissed, "Loadout Saved", "Done");

                $weaponThree.text(gear['weapons'][weaponcat][weaponValue]['name']);
                $helmThree.text(gear['helm'][helmet]['name']);
                $chestThree.text(gear['chest'][chest]['name']);
                $armsThree.text(gear['arms'][arms]['name']);
                $waistThree.text(gear['waist'][waist]['name']);
                $legsThree.text(gear['legs'][legs]['name']);
            };
            storeRequest.onerror=function() {
                navigator.notification.alert("Database Error: cannot save Loadout Info", alertDismissed, "Loadout Not Saved", "Done");
            };


            function alertDismissed(){
                console.log("Alert Dismissed!");
            }


        });

        $('#loadThree').click(function (event) {
            event.preventDefault();
            let key = "3";
            //window.alert("ayo button was pressed");
            let storeRequest = db.transaction(["loadout"],"readwrite")
                .objectStore("loadout").get(key);
            //navigator.notification.alert("test1", alertDismissed, "Loadout Found", "Done");

            storeRequest.onsuccess=function() {

                if ((storeRequest.result) && ("key" in storeRequest.result)) {
                    // navigator.notification.alert("Loadout '" + key + "' Selected.", alertDismissed, "Loadout Found", "Done");
                    window.alert("Weapon Category Value: " + storeRequest.result.weaponcat +
                        " Weapon Value: " + storeRequest.result.weapon +
                        " Helmet Value :" + storeRequest.result.helmet +
                        " Arms Value: " + storeRequest.result.arms +
                        " Chest Value: " + storeRequest.result.chest +
                        " Legs Value: " + storeRequest.result.legs +
                        " Waist Value: " + storeRequest.result.waist) ;

                    $weaponThree.text(gear['weapons'][storeRequest.result.weaponcat][storeRequest.result.weapon]['name']);
                    $helmThree.text(gear['helm'][storeRequest.result.helmet]['name']);
                    $chestThree.text(gear['chest'][storeRequest.result.chest]['name']);
                    $armsThree.text(gear['arms'][storeRequest.result.arms]['name']);
                    $waistThree.text(gear['waist'][storeRequest.result.waist]['name']);
                    $legsThree.text(gear['legs'][storeRequest.result.legs]['name']);
                }
                else {
                    navigator.notification.alert("Loadout with key '" + key + "' not found in the database!", alertDismissed, "Loadout Not Found", "Done");
                }

            };
            function alertDismissed(){
                console.log("Alert Dismissed!");
            }
        });

        $('#deleteThree').click(function (event) {
            event.preventDefault();
            let key = "3";
            let transaction = db.transaction(["loadout"],"readwrite");
            let objectStore = transaction.objectStore("loadout");
            objectStore.delete(key);
            navigator.notification.alert("Deleted Loadout '" + key + "'.", alertDismissed, "Loadout Deleted", "Done");
            $weaponThree.text('--None--');
            $helmThree.text('--None--');
            $chestThree.text('--None--');
            $armsThree.text('--None--');
            $waistThree.text('--None--');
            $legsThree.text('--None--');
            function alertDismissed(){
                console.log("Alert Dismissed!");
            }
        });

        $('#saveFour').click(function(event){
            event.preventDefault();
            navigator.vibrate([500, 500, 500, 500, 500, 500, 500]);
            let key = "4";
            let weaponcat = weaponCategoryValue;
            let weapon = weaponValue;
            let helmet = HelmValue;
            let chest = ChestValue;
            let arms = ArmsValue;
            let waist = WaistValue;
            let legs = LegsValue;


            let loadout={ weaponcat:weaponcat,
                weapon:weapon, helmet:helmet,
                chest:chest, arms:arms,
                waist:waist, legs:legs, key:key};


            let transaction = db.transaction(["loadout"],"readwrite");

            let storeRequest = transaction.objectStore("loadout").put(loadout);
            storeRequest.onsuccess =function() {
                navigator.notification.alert("Loadout four successfully saved!", alertDismissed, "Loadout Saved", "Done");

                $weaponFour.text(gear['weapons'][weaponcat][weaponValue]['name']);
                $helmFour.text(gear['helm'][helmet]['name']);
                $chestFour.text(gear['chest'][chest]['name']);
                $armsFour.text(gear['arms'][arms]['name']);
                $waistFour.text(gear['waist'][waist]['name']);
                $legsFour.text(gear['legs'][legs]['name']);
            };
            storeRequest.onerror=function() {
                navigator.notification.alert("Database Error: cannot save Loadout Info", alertDismissed, "Loadout Not Saved", "Done");
            };


            function alertDismissed(){
                console.log("Alert Dismissed!");
            }


        });

        $('#loadFour').click(function (event) {
            event.preventDefault();
            let key = "4";
            //window.alert("ayo button was pressed");
            let storeRequest = db.transaction(["loadout"],"readwrite")
                .objectStore("loadout").get(key);
            //navigator.notification.alert("test1", alertDismissed, "Loadout Found", "Done");

            storeRequest.onsuccess=function() {

                if ((storeRequest.result) && ("key" in storeRequest.result)) {
                    // navigator.notification.alert("Loadout '" + key + "' Selected.", alertDismissed, "Loadout Found", "Done");
                    window.alert("Weapon Category Value: " + storeRequest.result.weaponcat +
                        " Weapon Value: " + storeRequest.result.weapon +
                        " Helmet Value :" + storeRequest.result.helmet +
                        " Arms Value: " + storeRequest.result.arms +
                        " Chest Value: " + storeRequest.result.chest +
                        " Legs Value: " + storeRequest.result.legs +
                        " Waist Value: " + storeRequest.result.waist) ;

                    $weaponFour.text(gear['weapons'][storeRequest.result.weaponcat][storeRequest.result.weapon]['name']);
                    $helmFour.text(gear['helm'][storeRequest.result.helmet]['name']);
                    $chestFour.text(gear['chest'][storeRequest.result.chest]['name']);
                    $armsFour.text(gear['arms'][storeRequest.result.arms]['name']);
                    $waistFour.text(gear['waist'][storeRequest.result.waist]['name']);
                    $legsFour.text(gear['legs'][storeRequest.result.legs]['name']);

                }
                else {
                    navigator.notification.alert("Loadout with key '" + key + "' not found in the database!", alertDismissed, "Loadout Not Found", "Done");
                }

            };
            function alertDismissed(){
                console.log("Alert Dismissed!");
            }
        });

        $('#deleteFour').click(function (event) {
            event.preventDefault();
            let key = "4";
            let transaction = db.transaction(["loadout"],"readwrite");
            let objectStore = transaction.objectStore("loadout");
            objectStore.delete(key);
            navigator.notification.alert("Deleted Loadout '" + key + "'.", alertDismissed, "Loadout Deleted", "Done");
            $weaponFour.text('--None--');
            $helmFour.text('--None--');
            $chestFour.text('--None--');
            $armsFour.text('--None--');
            $waistFour.text('--None--');
            $legsFour.text('--None--');
            function alertDismissed(){
                console.log("Alert Dismissed!");
            }
        });


        $('#saveFive').click(function(event){
            event.preventDefault();
            navigator.vibrate([500, 500, 500, 500, 500, 500, 500]);
            let key = "5";
            let weaponcat = weaponCategoryValue;
            let weapon = weaponValue;
            let helmet = HelmValue;
            let chest = ChestValue;
            let arms = ArmsValue;
            let waist = WaistValue;
            let legs = LegsValue;



            let loadout={ weaponcat:weaponcat,
                weapon:weapon, helmet:helmet,
                chest:chest, arms:arms,
                waist:waist, legs:legs, key:key};

            let transaction = db.transaction(["loadout"],"readwrite");

            let storeRequest = transaction.objectStore("loadout").put(loadout);
            storeRequest.onsuccess =function() {
                navigator.notification.alert("Loadout five successfully saved!", alertDismissed, "Loadout Saved", "Done");

                $weaponFive.text(gear['weapons'][weaponcat][weaponValue]['name']);
                $helmFive.text(gear['helm'][helmet]['name']);
                $chestFive.text(gear['chest'][chest]['name']);
                $armsFive.text(gear['arms'][arms]['name']);
                $waistFive.text(gear['waist'][waist]['name']);
                $legsFive.text(gear['legs'][legs]['name']);
            };
            storeRequest.onerror=function() {
                navigator.notification.alert("Database Error: cannot save Loadout Info", alertDismissed, "Loadout Not Saved", "Done");
            };


            function alertDismissed(){
                console.log("Alert Dismissed!");
            }


        });

        $('#loadFive').click(function (event) {
            event.preventDefault();
            let key = "5";
            //window.alert("ayo button was pressed");
            let storeRequest = db.transaction(["loadout"],"readwrite")
                .objectStore("loadout").get(key);
            //navigator.notification.alert("test1", alertDismissed, "Loadout Found", "Done");

            storeRequest.onsuccess=function() {

                if ((storeRequest.result) && ("key" in storeRequest.result)) {
                    // navigator.notification.alert("Loadout '" + key + "' Selected.", alertDismissed, "Loadout Found", "Done");
                    window.alert("Weapon Category Value: " + storeRequest.result.weaponcat +
                        " Weapon Value: " + storeRequest.result.weapon +
                        " Helmet Value :" + storeRequest.result.helmet +
                        " Arms Value: " + storeRequest.result.arms +
                        " Chest Value: " + storeRequest.result.chest +
                        " Legs Value: " + storeRequest.result.legs +
                        " Waist Value: " + storeRequest.result.waist) ;

                    $weaponFive.text(gear['weapons'][storeRequest.result.weaponcat][storeRequest.result.weapon]['name']);
                    $helmFive.text(gear['helm'][storeRequest.result.helmet]['name']);
                    $chestFive.text(gear['chest'][storeRequest.result.chest]['name']);
                    $armsFive.text(gear['arms'][storeRequest.result.arms]['name']);
                    $waistFive.text(gear['waist'][storeRequest.result.waist]['name']);
                    $legsFive.text(gear['legs'][storeRequest.result.legs]['name']);

                }
                else {
                    navigator.notification.alert("Loadout with key '" + key + "' not found in the database!", alertDismissed, "Loadout Not Found", "Done");
                }

            };
            function alertDismissed(){
                console.log("Alert Dismissed!");
            }
        });

        $('#deleteFive').click(function (event) {
            event.preventDefault();
            let key = "5";
            let transaction = db.transaction(["loadout"],"readwrite");
            let objectStore = transaction.objectStore("loadout");
            objectStore.delete(key);
            navigator.notification.alert("Deleted Loadout '" + key + "'.", alertDismissed, "Loadout Deleted", "Done");
            $weaponFive.text('--None--');
            $helmFive.text('--None--');
            $chestFive.text('--None--');
            $armsFive.text('--None--');
            $waistFive.text('--None--');
            $legsFive.text('--None--');
            function alertDismissed(){
                console.log("Alert Dismissed!");
            }

        });

        $('#buttonBrowser').click(openBrowser);
        function openBrowser() {
            let url = 'https://monsterhunterworld.wiki.fextralife.com/Monster+Hunter+World+Wiki';
            let target = '_blank';
            let options = "location = yes";
            let ref = cordova.InAppBrowser.open(url, target, options);

            ref.addEventListener('loadstart', loadstartCallback);
            ref.addEventListener('loadstop', loadstopCallback);
            ref.addEventListener('loaderror', loaderrorCallback);
            ref.addEventListener('exit', exitCallback);

            function loadstartCallback(event) {
                console.log('Loading started: '  + event.url)
            }

            function loadstopCallback(event) {
                console.log('Loading finished: ' + event.url)
            }

            function loaderrorCallback(error) {
                console.log('Loading error: ' + error.message)
            }

            function exitCallback() {
                console.log('Browser is closed...')
            }
        }




        $('select').on('change', function (event) {


            event.preventDefault();

            weaponCategoryValue = selectWeaponCategory.options[selectWeaponCategory.selectedIndex].value;
             weaponValue = selectWeapon.options[selectWeapon.selectedIndex].value;
             weaponIndex = selectWeapon.selectedIndex;

             HelmValue = helm.options[helm.selectedIndex].value;
             ChestValue = chest.options[chest.selectedIndex].value;
             ArmsValue = arms.options[arms.selectedIndex].value;
             WaistValue = waist.options[waist.selectedIndex].value;
             LegsValue = legs.options[legs.selectedIndex].value;

            if (weaponCategoryValue === 'default') {
                $rawDamage.text('0');
                $eleName.text('--None--');
                $eleDamage.text('0');
                $affinity.text('0');
                weaponValue.value = 'default';
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
                selectWeapon.selectedIndex = weaponIndex;
                $weapons.show();
            }
            if (weaponValue === 'default') {
                $rawDamage.text('0');
                $eleName.text('--None--');
                $eleDamage.text('0');
                $affinity.text('0');
            } else {
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
            } else {
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
            } else {
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
            } else {
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
            } else {
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
            } else {
                $legsSkill.text(gear['legs'][LegsValue]['Skill']);
                $legsDefense.text(gear['legs'][LegsValue]['defense']);
                $legsFire.text(gear['legs'][LegsValue]['fire']);
                $legsWater.text(gear['legs'][LegsValue]['water']);
                $legsThunder.text(gear['legs'][LegsValue]['thunder']);
                $legsIce.text(gear['legs'][LegsValue]['ice']);
                $legsDragon.text(gear['legs'][LegsValue]['dragon']);
            }

            $('#loadOne').click(function (event) {
                event.preventDefault();
                let key = "1";
                //window.alert("ayo button was pressed");
                let storeRequest = db.transaction(["loadout"],"readwrite")
                    .objectStore("loadout").get(key);
                //navigator.notification.alert("test1", alertDismissed, "Loadout Found", "Done");

                storeRequest.onsuccess=function() {

                    if ((storeRequest.result) && ("key" in storeRequest.result)) {
                        // navigator.notification.alert("Loadout '" + key + "' Selected.", alertDismissed, "Loadout Found", "Done");
                        window.alert("Weapon Category Value: " + storeRequest.result.weaponcat +
                            " Weapon Value: " + storeRequest.result.weapon +
                            " Helmet Value :" + storeRequest.result.helmet +
                            " Arms Value: " + storeRequest.result.arms +
                            " Chest Value: " + storeRequest.result.chest +
                            " Legs Value: " + storeRequest.result.legs +
                            " Waist Value: " + storeRequest.result.waist) ;

                        $weaponOne.text(gear['weapons'][storeRequest.result.weaponcat][storeRequest.result.weapon]['name']);
                        $helmOne.text(gear['helm'][storeRequest.result.helmet]['name']);
                        $chestOne.text(gear['chest'][storeRequest.result.chest]['name']);
                        $armsOne.text(gear['arms'][storeRequest.result.arms]['name']);
                        $waistOne.text(gear['waist'][storeRequest.result.waist]['name']);
                        $legsOne.text(gear['legs'][storeRequest.result.legs]['name']);

                        selectWeaponCategory.selectedIndex = storeRequest.result.weaponcat;
                        selectWeapon.selectedIndex = storeRequest.result.weapon;
                        helm.selectedIndex = storeRequest.result.helmet;
                        chest.selectedIndex = storeRequest.result.chest;
                        arms.selectedIndex = storeRequest.result.arms;
                        waist.selectedIndex = storeRequest.result.waist;
                        legs.selectedIndex = storeRequest.result.legs;
                    }
                    else {
                        navigator.notification.alert("Loadout with key '" + key + "' not found in the database!", alertDismissed, "Loadout Not Found", "Done");
                    }
                };
                function alertDismissed(){
                    console.log("Alert Dismissed!");
                }
            });

        });
    };
});