let person = {
    vorname: "Anton",
    nachname: "Fish",
    fullName: function () {
        return this.vorname + " " + this.nachname;
    }
};