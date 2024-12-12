# Placeholder API Proxy

Erstelle deinen ersten API Server mit express.js.

## Level 1

Erstelle einen `GET` Endpunkt `/status` mit dem response-code: `200` der den text zurück gibt `OK`

## Level 2

Erstelle einen `GET` Endpunkt `/posts` der alle posts der Placeholder API zurück gibt. (benutze fetch bei jedem request / livedaten)

## Level 3

Erstelle einen `GET` Endpunkt der `/posts/<id>` der nur den post aus mit der id `<id>` zurück gibt.

## Level 4 (Optional)

Ändere alle `/post…` Endpunkte so das die Daten nicht aus der Placeholder API kommen sondern aus einer Lokalen JSON Datei (speicher alle Todos als json).

Endpunkte:

- `/post`
- `/post/<id>`

Verwende das node `FS` module um deine JSON Datei zu lesen und die Daten auszugeben.

## Level 5 (Optional)

Füge folgenden Endpunkt: `POST` `/post` hinzu.
Verwende Postman um Post Requests zu senden. Posts die über `POST /post` kommen sollen in der JSON Datei gespeichert werden.
