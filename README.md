# CellBot2Original

<a href = "https://github.com/PitGamer1909/CellBot2Original"><img src = "https://cardivo.vercel.app/api?name=CellBot2Original&description=CellBot2Original,%20Bot%20WhatsApp%20multi%20device.%20Erstellt%20von%20Nico%20Pit,%20Joker,%20and%20RFIunknown.&image=https://telegra.ph/file/9f522389d2ed68e53262d.jpg?cb=20200606024545&usqp=CAU&usqp=CAU&backgroundColor=%23ecf0f1&github=PitGamer1909&pattern=topography&colorPattern=%23eaeaea"/><a>

 <a href="https://visitor-badge.glitch.me/badge?page_id=RFIunknown/AuraBot-md"><img title="Visitor" src="https://visitor-badge.glitch.me/badge?page_id=RFIunknown/AuraBot-md"></a>
<a href="https://github.com/PitGamer1909/CellBot2Original/network/members"><img title="Forks" src="https://img.shields.io/github/forks/RFIunknown/AuraBot-md?label=Forks&color=blue&style=flat-square"></a>
<a href="https://github.com/PitGamer1909/CellBot2Original/watchers"><img title="Watchers" src="https://img.shields.io/github/watchers/RFIunknown/AuraBot-md?label=Watchers&color=green&style=flat-square"></a>
<a href="https://github.com/PitGamer1909/CellBot2Original/stargazers"><img title="Stars" src="https://img.shields.io/github/stars/RFIunknown/AuraBot-md?label=Stars&color=yellow&style=flat-square"></a>
<a href="https://github.com/PitGamer1909/CellBot2Original/graphs/contributors"><img title="Contributors" src="https://img.shields.io/github/contributors/RFIunknown/AuraBot-md?label=Contributors&color=blue&style=flat-square"></a>
<a href="https://github.com/PitGamer1909/CellBot2Original/issues"><img title="Issues" src="https://img.shields.io/github/issues/RFIunknown/AuraBot-md?label=Issues&color=success&style=flat-square"></a>
<a href="https://github.com/PitGamer1909/CellBot2Original/issues?q=is%3Aissue+is%3Aclosed"><img title="Issues" src="https://img.shields.io/github/issues-closed/RFIunknown/AuraBot-md?label=Issues&color=red&style=flat-square"></a>
<a href="https://github.com/PitGamer1909/CellBot2Original/pulls"><img title="Pull Request" src="https://img.shields.io/github/issues-pr/RFIunknown/AuraBot-md?label=PullRequest&color=success&style=flat-square"></a>
<a href="https://github.com/PitGamer1909/CellBot2Original/pulls?q=is%3Apr+is%3Aclosed"><img title="Pull Request" src="https://img.shields.io/github/issues-pr-closed/RFIunknown/AuraBot-md?label=PullRequest&color=red&style=flat-square"></a>


## Bot Für Gruppen
[![WhatsApp Gruppe](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/BKUUviabCwFIr9pIRe9iuE)

 [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/RFIunknown/AuraBot-md)
 
 [![Auf Repl.it ausführen](https://repl.it/badge/github/PitGamer1909/CellBot2Original)](https://repl.it/github/PitGamer1909/CellBot2Original)

## FÜR WINDOWS/VPS/RDP-BENUTZER

* Laden Sie Git herunter und installieren Sie es [`Klick hier`](https://git-scm.com/downloads)
* Laden Sie NodeJS herunter und installieren Sie es [`Klick hieri`](https://nodejs.org/en/download)
* Laden Sie FFmpeg herunter und installieren Sie es [`Klick hier`](https://ffmpeg.org/download.html) (**Vergessen Sie nicht, FFmpeg zur Umgebungsvariablen PATH hinzuzufügen**)
* Laden Sie ImageMagick herunter und installieren Sie es [`Klick hier`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/PitGamer1909/CellBot2Original.git
cd CellBot2Original
npm i
node .
```

---------

## FÜR TERMUX-BENUTZER

* Download Termux [`Klik Disini`](https://github.com/termux/termux-app/releases/download/v0.118.0/termux-app_v0.118.0+github-debug_universal.apk)

```
$ pkg update && upgrade -y
$ apt update && upgrade -y
$ pkg install ffmpeg
$ pkg install nodejs-lts
$ pkg install git
$ git clone https://github.com/RFIunknown/AuraBot-md.git
$ cd CellBot2Original
$ npm i
$ node .
```
---------
## FÜR HEROKU-BENUTZER

### Buildpack installieren
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/mcollina/heroku-buildpack-imagemagick.git

---------
## WIE MAN EINSTELLUNGEN

Um Eigentümer hinzuzufügen oder zu bearbeiten, gehen Sie zu „settings/owner.json“.
Include-sc-Quelle ist obligatorisch!!

---------
## Arguments `node . [--options] [<session name>]` 

### `--session <name file>`

Sitzung von anderem Dateinamen verwenden, Standard `session.data.json`

Beispieldateiname `family.json` verwenden Sie dann `node . --session 'family`

### `--prefix <prefix>`

* `prefixes` durch jedes Zeichen getrennt
Präfix festlegen

### `--server`

Benutzt für [heroku](https://heroku.com/) oder durch die Website scannen

### `--db <url mongodb kamu>`

Öffnen Sie die Datei package.json und geben Sie Ihre Mongodb-URL in den Abschnitt ein `mongo: --db url mongodb`!

### `--db <json-server-url>`

Verwenden Sie eine externe Datenbank anstelle einer lokalen Datenbank, **empfohlen** verwenden Sie Mongodb

Beispielserver mit mongodb `mongodb+srv://<username>:<password>@name-of-your-db.thhce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

Beispielserver mit repl `https://json-server.nurutomo.repl.co/`

code: `https://repl.it/@Nurutomo/json-server`

`node . --db 'https://json-server.nurutomo.repl.co/'`

Der Server muss solche Spezifikationen haben

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json
{
 data: {}
}
```

### `--big-qr`

Wenn Small Unicode qr nicht unterstützt

### `--img`

Aktivieren Sie den Bildprüfer über das Terminal

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```


##### Besonderer Dank an
[![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo)
[![BochilGaming](https://github.com/BochilGaming.png?size=100)](https://github.com/BochilGaming)
 
## Danke für ein Skript
 [![Aguz Familia](https://github.com/Fokusdotid.png?size=150)](https://github.com/Fokusdotid) | [![FadliDarmawan](https://github.com/FadliDarmawan.png?size=150)](https://github.com/FadliDarmawan) | [![Rhosad](https://github.com/Rhosad29.png?size=150)](https://github.com/Rhosad29) | [![RFIunknown](https://github.com/RFIunknown.png?size=150)](https://github.com/RFIunknown)
 ----|----|----
[Aguz Familia](https://github.com/Fokusdotid) | [Fadli](https://github.com/FadliDarmawan)| [Rhosad](https://github.com/Rhosad29) | [RFIunknown](https://github.com/RFIunknown)
