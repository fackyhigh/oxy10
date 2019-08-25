<!DOCTYPE html>
<html>
<head>
	<title>Фотограф Оксана Румянцева</title>
	<link href="css/external.css" rel="stylesheet">
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
</head>
<body>
	<?php include "menu.php" ?>
	<div class="slider">
        <div class="slider-cover">
			<div class="slider-item" style="background:url(img/1.jpg) center/cover;"></div>
        	<div class="slider-item" style="background:url(img/2.jpg) center/cover;"></div>
        	<div class="slider-item" style="background:url(img/3.jpg) center/cover;"></div>
        	<div class="slider-item" style="background:url(img/4.jpg) center/cover;"></div>
      	</div>
      	<ul class="slider-controls"></ul>
    </div>
  
	<script src="script/menu.js"></script>
	<script src="script/slider.js"></script>
	<script>let carousel = new Slider(
		{
			infinite:false,
			nav:true,
			speed:1,
			timingFunction: 'ease',
			arrows:true
			});
	</script>	
</body>
</html>