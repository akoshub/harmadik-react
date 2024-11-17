/*Adatok lekérése:

Az alkalmazás két adatforrást kezel: "Kommentek" és "Posztok". Ezeket az adatokat az API-tól kérjük le, amely az alábbi URL-t követi: https://localhost:7231/.
Az alapértelmezett adatforrás a "Kommentek" (comment), de a felhasználó válthat a "Posztok" (post) típusra.
React komponensek létrehozása:

Hozz létre egy FormKomponens nevű komponenst, amely egy űrlapot tartalmaz. Az űrlap segítségével a felhasználó kiválaszthatja, hogy comment vagy post típusú adatokat szeretne lekérni.
Hozz létre egy ListaKomponens nevű komponenst, amely a lekért adatokat listaként jeleníti meg.
API-hívás és állapot kezelés:

Az App komponensben hozz létre egy tipus és egy items állapotot a useState segítségével.
Használj useEffect hookot az API-híváshoz, amely akkor fut le, amikor a tipus állapot megváltozik. A fetch függvénnyel kérdezd le a tipus alapján a megfelelő adatokat, és tárold azokat az items állapotban.
Stílusok hozzáadása:

Hozz létre egy container, row, és form-control stílusosztályt az App.css fájlban, hogy formázd az elemeket.*/