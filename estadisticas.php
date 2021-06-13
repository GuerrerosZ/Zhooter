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
                <script type="text/javascript">
                    document.write(Session.getKilledEnemies());
                </script>
            </p>
            <p id="p2">
                NIVEL ACTUAL:
                <script type="text/javascript">
                    document.write(Session.getLevel());
                </script>
            </p>
            <p id="p3">
                VIDA ACTUAL: 
                <script type="text/javascript">
                    document.write(Session.getHealth());
                </script>
            </p>
            <p id="p4">
                ARMA:
                <script type="text/javascript">
                    document.write(Session.getGun());
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