<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Tienda de Zhooter</title>
    <link rel="stylesheet" href="css/estiloTienda.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <script src="js/session.js"></script>
    <link rel="icon" type="image/png" href="img/favicon/favicon.png">
</head>

<body>
    <div id="title">
        <h1>|----------&gt TIENDA &lt----------|</h1>
    </div>
    <div id="container">
        <div id="d1">
            <button id="b1" class="button" onclick="Session.setExtraHealth(parseInt(Session.getExtraHealth()) + parseInt(10)); location.href='game.php'" title="Este item aumenta en un 5% tu vida maxima"></button>
        </div>
        <div id="d2">
            <button id="b2" class="button" title="Este item te permitira cambiar tu arma" onclick="location.href='elegirNuevaArma.php'"></button>
        </div>
        <div id="d3">
            <button id="b3" class="button" title="Este item disminuira en un 5% la velocidad de los enemigos"></button>
        </div>
        <a href="game.php">Siguiente nivel</a>
    </div>