<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estadisticas</title>
    <link rel="stylesheet" href="./css/estadisticasYMuerte.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="img/favicon/favicon.png">
    <script src="js/session.js"></script>
</head>

<body>
    <div id="title">
        <h1>|---------&gt ESTADISTICAS &lt---------|</h1>
    </div>
    <div id="flex">
        <div class="info">
            <p id="p1">
                ENEMIGOS DERROTADOS:
            </p>
            <p id="d1">
                <script type="text/javascript">
                    document.write(Session.getKilledEnemies());
                </script>
            </p>
            <p id="p2">
                NIVEL ACTUAL:
            </p>
            <p id="d2">
                <script type="text/javascript">
                    document.write(Session.getLevel());
                </script>
            </p>
            
            <p id="p3">
                VIDA ACTUAL:
            </p> 
            <p id="d3">
                <script id="d3" type="text/javascript">
                    document.write(Session.getHealth());
                </script>
            </p>
            <p id="p4">
                ARMA:
            </p> 
            <p id="d4">
                <script id="d4" type="text/javascript">
                    document.write(Session.getGun().toUpperCase());
                </script>
            </p>
        </div>
    </div>
    <div class="pauseContainer">
        <div>
            <button id="bVolver" onclick="location.href='pause.php'">VOLVER</button>
        </div>
    </div>
</body>

</html>