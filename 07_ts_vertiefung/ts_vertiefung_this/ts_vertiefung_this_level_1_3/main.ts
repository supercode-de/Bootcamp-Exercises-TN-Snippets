let personFunction = {
    fullName: function (this: any) {
        return this.vorname + " " + this.nachname;
    }
};
let personObjekt = {
    vorname: "Anton",
    nachname: "Fish"
};

let anzeigeImHTMLDokument = `<p>${personFunction.fullName.call(personObjekt)}</p>`;
document.getElementById("person").innerHTML = anzeigeImHTMLDokument;