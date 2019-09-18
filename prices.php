<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="css/external.css" rel="stylesheet">
    <link rel="stylesheet" href="css/foopicker.css">
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
        <div class="flip-card">    
        <div class="flip-card-inner">
                <div class="description-front">    
                    <div class="description-front-top">
                        <h2 class="prices">ЧТО ВКЛЮЧЕНО?</h2>
                        <p>До <b>двух часов</b> съёмки</p>
                        <p><b>20</b> фотографий в ретуши</p>
                        <p><b>Все остальные</b> фотографии в базовой цветокоррекции</p>
                        <p><b>600 Р</b> за дополнительную фотографию в ретуши</p>
                        <p>Фотографии передаются <b>на диске</b></p>
                    </div>
                    <div class="description-front-bottom">
                        <p><i>*Визажист, парикмахер, костюмы и прочее в стоимость услуги не входят, и, при желании клиента, оплачиваются отдельно. Призводится предоплата в резмере 20%, оставшаяся часть оплачивается в день съемки. Фотографии отдаются на диске в течение 1,5-3 месяцев после съемки.  Ваше согласие на съемку означает и согласие на то, 
                                что отдельные работы со съемки я могу использовать в своем портфолио на различных ресурсах. </i></p>
                        <div class="button" onclick="document.querySelector('.flip-card-inner').classList.add('flipped')">ЗАБРОНИРОВАТЬ</div>
                    </div>
                </div>
                <div class="description-back">
                    <form action="" method="post">
                        <h2 class="prices">ЗАБРОНИРОВАТЬ</h2>
                        <div class="group check-group">
                            <input type="checkbox" name="studio" id="studio">
                            <label for="studio">Аренда студии</label>
                        </div>
                        <div class="group text-group">
                            <input type="text" name="name" id="name" class="text-form" required>
                            <label for="name">Как вас зовут?</label>
                        </div>
                        <div class="group text-group">
                            <input type="text" name="phone" id="phone" class="text-form" required>
                            <label for="phone">Ваш номер телефона?</label>
                        </div>
                        <div class="group text-group">
                            <input type="text" name="date" id="datepicker" class="date-form datepicker-here" required>
                            <label for="datepicker">Дата съемки</label>
                        </div>
                        <textarea name="message" id="" cols="30" rows="10" class="text-area-form"></textarea>
                        <label for="message">Введите ваше сообщение</label>
                        <input type="submit" value="" class="submit-form">
                    </form>
                </div>    
            </div>
        </div>
    </div>
</body>
<script src="script/menu.js"></script>
<script src="script/foopicker.js"></script>
<script>
    var weeks = ['Пн', 'Вт', 'Ср', 'Чт', 'F', 'S', 'S'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var foopicker = new FooPicker({
      id: 'datepicker',
      dateFormat: 'dd/MM/yyyy'
    });
  </script>
</html>