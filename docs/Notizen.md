# Notizen

Sammlung von Notizen zur Arbeit mit dem Angular Buch 3. Auflage, D.Punkt Verlag.

## Übersicht eingegebener Konsolenkommandos

Kurze Übersicht der eingegebenen Konsolenkommandos in `console_commands_<Kapitel>` Datei.

## Diverses

ESLint global installieren:

`sudo npm install -g eslint`
 
## Open API

<https://oai.github.io/Documentation/best-practices.html>
Vgl. mit Protobuf ?

## Retry mit HTTP

Schlägt ein Request fehl, so kann dies mittels `retry()` neu probiert werden.
Manchmal ist es aber besser, die Zeit zwischen den Anfragen anzupassen.

* Exponential Backoff: <https://medium.com/angular-in-depth/power-of-rxjs-when-using-exponential-backoff-a4b8bde276b0>
* Safe HTTP Calls with RxJS: <https://blog.strongbrew.io/safe-http-calls-with-rxjs/>
