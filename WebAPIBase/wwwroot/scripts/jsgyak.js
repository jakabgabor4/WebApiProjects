window.onload = function () {


    for (var sor = 0; sor < 10; sor++) {
        //új div létrehozása az új sornak
        var ujdiv = document.createElement('div');

        //új div osztálylistájához add hozzá a "sor"-t
        ujdiv.classList.add('sor');

        //új div-et add hozzá a "pascal" gyermekeihez
        var pascaldiv = document.getElementById('pascal');
        pascaldiv.appendChild(ujdiv);


        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            //új div létrehozása az új elemnek
            var ujelemdiv = document.createElement('div');

            //új elem div osztálylistájához add hozzá az "elem"-et
            ujelemdiv.classList.add('elem');

            //teszteléshet .innerHTML = `${sor}:${oszlop}`
            ujelemdiv.innerText = sor + ';' + oszlop

            //legyen az innerHTML a megfelelő szám


            //új elem div-et vedd fel a sor elemei közé
            ujdiv.appendChild(ujelemdiv);

        }
    }





};








