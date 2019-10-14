<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="css/external.css" rel="stylesheet">
    <link href="css/flatpickr.css" rel="stylesheet">
    <script src="script/flatpickr.js"></script>
    <script src="script/ru.js"></script>
    <script src="script/cleave.min.js"></script>
    <script src="script/cleave-phone.ru.js"></script>
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
                    <span class="icon-Arrow" onclick="document.querySelector('.flip-card-inner').classList.remove('flipped')"></span>
                    <form action="" method="post">
                        <h2 class="prices">ЗАБРОНИРОВАТЬ</h2>
                        <div class="group check-group">
                            <input type="checkbox" name="studio" id="studio">
                            <label for="studio">Аренда студии</label>
                        </div>
                        <div class="group text-group">
                            <input type="text" name="name" id="name" class="text-input" required>
                            <label for="name">Как вас зовут?</label>
                        </div>
                        <div class="group text-group">
                            <input type="text" name="phone" id="phone" class="text-input" required>
                            <label for="phone">Ваш номер телефона?</label>
                        </div>
                        <div class="group text-group datepicker">
                            <input type="text" name="date" id="datepicker" class="date-input" data-input required>
                            <label for="datepicker">Дата съемки</label>
                            <span class="icon-small-calendar" data-toggle></span>
                        </div>
                        <div class="group textarea-group">
                            <textarea name="message" id="" cols="30" rows="10" class="text-area-input" placeholder="Ваше сообщение"></textarea>
                            <!--<label for="message">Ваше сообщение</label>-->
                        </div>
                        <input type="submit" class="button submit-form" value="ЗАБРОНИРОВАТЬ">
                    </form>
                </div>    
            </div>
        </div>
    </div>
</body>
<script src="script/menu.js"></script>
<script>const calendar = flatpickr(".datepicker", {
    clickOpens: false,
    wrap: true,
    allowInput: true,
    dateFormat: "d.m.Y",
    "locale": "ru",
    disableMobile: "true"
      });
</script>
<script>
    var cleave = new Cleave('.date-input', {
    date: true,
    delimiter: '.',
    datePattern: ['d', 'm', 'Y'],
    dateMin: '2019-01-01',
    dateMax: '2025-12-31'
});
  </script>
  <script>
    var cleave = new Cleave('#phone', {
    phone: true,
    phoneRegionCode: 'RU',
    delimiter: '-',
    
      });
        </script>
</html>