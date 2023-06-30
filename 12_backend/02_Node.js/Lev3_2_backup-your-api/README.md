# Backup your API

Unsere API [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/) braucht ein script das es uns ermöglicht von unseren Daten ein Backup zu machen.

## Level 1

Erstelle ein Skript das beim ausführen alle Daten von [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts) in einer Datei namens `./data/post.json` speichert.

## Level 2

Erweitere dieses Skript das es sich auch die zugehörigen Kommentare holt. Und in einer `./data/comments.json` speichert.

> **Note**
> Nicht alle Kommentare sondern nur die die sich auf die posts in der post.txt Datei beziehen.

<details>
    <summary>
        Hinweis
    </summary>
    <blockquote>
        Die Kommentare für einen Post erhaltet ihr hier: <code>https://jsonplaceholder.typicode.com/posts/1/comments</code> wo bei die 1 die ID des Posts ist.
    </blockquote>
</details>

## Level 3

Ändere dein Skript das die Daten anstatt in zwei Dateien in einer gespeichert werden. `./data/post.json` ``

Die Kommentare für den jeweiligen Post sollen dem post Object hinzugefügt werden `comments` prop.

```json
[
  {
    "id": 1,
    "title": "",
    "body": "",
    "userId": 1,
    "comments": [
      {
        "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
        "email": "Hayden@althea.biz",
        "id": 5,
        "name": "vero eaque aliquid doloribus et culpa",
        "postId": 1
      }
    ]
  }
]
```
