let personFunction = {
    fullName: function () {
        return vorname + " " + nachname;
    }
};
let personObjekt = {
    vorname: "Anton",
    nachname: "Nüssler"
};

let anzeigeImHTMLDokument = `<p>${personFunction.fullName.call(personObjekt)}</p>`;
document.getElementById("person").innerHTML = anzeigeImHTMLDokument;