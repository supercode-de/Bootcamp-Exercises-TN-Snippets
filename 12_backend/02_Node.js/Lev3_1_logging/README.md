# Logging Task

Heute ist euer erster Tag bei **SuperServer GmbH**. Euch wurde folgendes Ticket zugewiesen.

> Text mit einem Dreieck davor könnt ihr aufklappen 😉

Erstelle ein Repo mit:

`./lib.js` hier ist unsere logging funktion definiert

`./main.js` showcase, zeig uns was deine logging function kann

## Level 1</h2>

**Logging files helper Function**

Als Entwickler hätte ich gerne eine Funktion die es mir einfach ermöglicht in unsere `./logs/log.txt` zu schreiben da wir die console.log ausgaben nicht einsehen können.

> Log dateien werden extrem groß! Wir wollen die logs nur anhängen! (Nicht lesen, modifizieren und dann schreiben wie wir es vorher gemacht haben.

 <details>
     <summary style="color:blue"><span>ℹ️  Hinweise</span></summary>
    <blockquote>
        <a href="https://nodejs.org/docs/latest-v18.x/api/fs.html#fspromisesappendfilepath-data-options">FS Append File</a>
    </blockquote>
</details>

## Level 2

**Logging Einträge TimeStamps**

Als Entwickler brauchen wir Zeit-Stemple (Timestamps UTC) um nachvollziehen zu können wann ein Event eingetreten ist. Folgendes Format soll verwendet werden:

`<TimeStamp UTC> :: <Logging Message>`

Beispiel:
`Fri, 12 May 2023 09:32:29 GMT :: User 32452343254 Login Successful`

<details>
    <summary style="color:blue"><span>ℹ️  Hinweise</span></summary>
    <blockquote>
       UTC Timestamp könnt ihr so erstellen: <code>new Date().toUTCString()</code>
    </blockquote>
</details>

## Level 3

**Logging Level Dateien**

Unsere Logging Datei ist mittlerweile 10GB groß. Wir verwenden extrem viel zeit damit die richtigen logs zu finden. Wir benötigen die Möglichkeit einfach in folgende log Dateien zu schreiben: `error` `warn` `info` (./logs/error.txt, ./logs/warn.txt, etc)

Alle logs (auch error, warn und info) sollen weiterhin parallel in `./logs/log.txt` und zusätzlich wenn angegeben in z.b `./logs/info.txt` gespeichert werden.

Logs in `./logs/log.txt` Sollen nun folgendes Format haben, Standard LogLevel ist info:

`<LogLevel> :: <TimeStamp> :: <Logging Message>`

Also z.B.: `Error :: Fri, 12 May 2023 09:32:29 GMT :: Log message`

<details>
<summary style="color:blue"><span>ℹ️  Hinweise</span></summary>
<blockquote>
So <strong>könnte</strong> das aussehen:

```js
logging.log("Text");
logging.log("Text", "ERROR");
logging.error("Text");
```

</blockquote>
</details>

</blockquote>
