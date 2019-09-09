<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="css/external.css" rel="stylesheet">
    <title>Услуги и цены</title>
</head>
<body>
    <?php include "menu.php" ?>
    <div class="content">
        <h1 class="title">УСЛУГИ И ЦЕНЫ</h1>
        <div class="prices-left half-screen"></div>
        <div class="prices-right half-screen"></div>
        <div class="price price-studio">
            <p>Съёмка в студии</p>
            <p>17000 ₽</p>
        </div>
        <div class="price price-street">
            <p>Съёмка на улице</p>
            <p>15000 ₽</p>
        </div>
        <div class="description-container">    
        <div class="description-inner">
                <div class="description-front">    
                    <div class="description-top">
                        <h2 class="prices">ЧТО ВКЛЮЧЕНО?</h2>
                        <p>До <b>двух часов</b> съёмки</p>
                        <p><b>20</b> фотографий в ретуши</p>
                        <p><b>Все остальные</b> фотографии в базовой цветокоррекции</p>
                        <p><b>600 Р</b> за дополнительную фотографию в ретуши</p>
                        <p>Фотографии передаются <b>на диске</b></p>
                    </div>
                    <div class="description-bottom">
                        <p><i>*Визажист, парикмахер, костюмы и прочее в стоимость услуги не входят, и, при желании клиента, оплачиваются отдельно. Призводится предоплата в резмере 20%, оставшаяся часть оплачивается в день съемки. Фотографии отдаются на диске в течение 1,5-3 месяцев после съемки.  Ваше согласие на съемку означает и согласие на то, 
                                что отдельные работы со съемки я могу использовать в своем портфолио на различных ресурсах. </i></p>
                        <div class="button" onclick="document.querySelector('.description-inner').classList.add('flipped')">ЗАБРОНИРОВАТЬ</div>
                    </div>
                </div>
                <div class="description-back">
                    <form action="" method="post">
                        <h2 class="prices">ЗАБРОНИРОВАТЬ</h2>
                        <input type="checkbox" name="studio" id="studio">
                        <label for="studio">Аренда студии</label>
                        <input type="text" name="name" id="name" class="text-form">
                        <label for="name">Как вас зовут?</label>
                        <input type="text" name="phone" id="phone" class="text-form">
                        <label for="phone">Ваш номер телефона?</label>
                        <input type="text" name="date" id="date" class="text-form">
                        <label for="date">Дата съемки</label>
                        <textarea name="message" id="" cols="30" rows="10" class="text-area-form"></textarea>
                        <label for="message"></label>
                        <input type="submit" value="" class="submit-form">
                    </form>
                </div>    
            </div>
        </div>
    </div>
</body>
<script src="script/menu.js"></script>

</html>