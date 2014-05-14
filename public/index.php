<!DOCTYPE html>

<!--

index.html

CS50 Implementation "Tic"
Ben Forde

-->
<html>
<head>
	<meta charset="UTF-8">
	<link href='http://fonts.googleapis.com/css?family=EB+Garamond|New+Rocker|Quintessential|Nothing+You+Could+Do' rel='stylesheet' type='text/css'>
	<link href="css/bootstrap.min.css" rel="stylesheet"/>
	<link href="css/bootstrap-theme.min.css" rel="stylesheet"/>
	<link href="css/tic.css" rel="stylesheet"/>
	<script src="js/jquery-1.10.2.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/gameData.js"></script>
	<script src="js/gameEngine.js"></script>
	<title>TIC</title>
	<!--TODO-->
</head>
<body style="background-image:url('img/TicBG.png'); background-repeat:no-repeat; background-attachment:fixed; background-position:top center">
<!-- I could not for love or money get this to show up in the CSS. -->
	<!--TODO-->
	<center>
		<div id = "container">
			<div id="inventory">
			</div>
			<div id="game">
				<!--TODO: insert game here-->
				<div id="lastInput">
					Welcome to TIC
				</div>
				<div id="output">
				</div>
				<div id="input">
					<form id = "getInput">
						>><input type="text" name="inputBox" value="" onSubmit="changeText('lastInput', this.value')">
					</form>
				</div>
			</div>
		</div>
		<div id = "footer">
			TIC ©2014 Ben Forde
		</div>
	</center>
</body>
</html>
