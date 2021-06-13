<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Tienda de Zhooter</title>
    <link rel="stylesheet" href="css/estiloTienda.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <script src="js/session.js"></script>
</head>

<body>
    <div id="title">
        <h1>|----------&gt TIENDA &lt----------|</h1>
    </div>
    <div id="container">
        <div id="d1">
            <button id="b1" class="button" onclick="Session.setExtraHealth(parseInt(Session.getExtraHealth()) + parseInt(10)); location.href='game.php'" title="Este item aumenta en 10 puntos la vida maxima del personaje"></button>
        </div>
        <div id="d2">
            <button id="b2" class="button" title="Este item te permitira cambiar tu arma" onclick="location.href='elegirNuevaArma.php'"></button>
        </div>
        <div id="d3">
            <button id="b3" class="button" onclick="Session.setSlowMove(1); location.href='game.php'" title="Este item disminuira evitara que la velocidad de los enemigos se vea acelerada en este nivel"></button>
        </div>
        <a href="game.php">Siguiente nivel</a>
    </div>