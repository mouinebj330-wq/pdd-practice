// Default starter words (Driving & General)
const defaultVocab = [
    { "id": 1, "category": "Driving", "ru": "Перекрёсток", "en": "Intersection / Crossroads", "ar": "تقاطع طرق", "image": "", "customAudio": "" },
    { "id": 2, "category": "Driving", "ru": "Проезжая часть", "en": "Roadway / Carriageway", "ar": "نهر الطريق (مسار السيارات)", "image": "", "customAudio": "" },
    { "id": 3, "category": "Driving", "ru": "Полоса движения", "en": "Traffic lane", "ar": "مسار / حارة مرورية", "image": "", "customAudio": "" },
    { "id": 4, "category": "Driving", "ru": "Обочина", "en": "Road shoulder", "ar": "جانب الطريق الترابي", "image": "", "customAudio": "" },
    { "id": 5, "category": "Driving", "ru": "Тротуар", "en": "Sidewalk / Pavement", "ar": "رصيف المشاة", "image": "", "customAudio": "" },
    { "id": 6, "category": "Driving", "ru": "Уступить дорогу", "en": "Yield / Give way", "ar": "افسح الطريق (أعطِ الأولوية)", "image": "", "customAudio": "" },
    { "id": 7, "category": "Driving", "ru": "Преимущество (Приоритет)", "en": "Priority / Right of way", "ar": "الأفضلية / الأولوية في المرور", "image": "", "customAudio": "" },
    { "id": 8, "category": "Driving", "ru": "Помеха справа", "en": "Priority to the right", "ar": "الأولوية للقادم من اليمين", "image": "", "customAudio": "" },
    { "id": 9, "category": "Driving", "ru": "Обгон", "en": "Overtaking (entering oncoming lane)", "ar": "التجاوز (بالخروج للمسار المعاكس)", "image": "", "customAudio": "" },
    { "id": 10, "category": "Driving", "ru": "Опережение", "en": "Passing (in the same direction)", "ar": "التخطي (في نفس الاتجاه)", "image": "", "customAudio": "" },
    { "id": 11, "category": "Driving", "ru": "Разворот", "en": "U-turn", "ar": "الاستدارة للخلف (يوتيرن)", "image": "", "customAudio": "" },
    { "id": 12, "category": "Driving", "ru": "Поворот направо", "en": "Turn right", "ar": "الانعطاف يميناً", "image": "", "customAudio": "" },
    { "id": 13, "category": "Driving", "ru": "Поворот налево", "en": "Turn left", "ar": "الانعطاف يساراً", "image": "", "customAudio": "" },
    { "id": 14, "category": "Driving", "ru": "Движение задним ходом", "en": "Reversing / Backing up", "ar": "الرجوع للخلف", "image": "", "customAudio": "" },
    { "id": 15, "category": "Driving", "ru": "Остановка", "en": "Stopping (up to 5 minutes)", "ar": "التوقف المؤقت", "image": "", "customAudio": "" },
    { "id": 16, "category": "Driving", "ru": "Стоянка", "en": "Parking (more than 5 minutes)", "ar": "الوقوف الطويل (الركن)", "image": "", "customAudio": "" },
    { "id": 17, "category": "Driving", "ru": "Вынужденная остановка", "en": "Emergency stop", "ar": "التوقف الاضطراري", "image": "", "customAudio": "" },
    { "id": 18, "category": "Driving", "ru": "Разрешено / Разрешается", "en": "Allowed / Permitted", "ar": "مسموح / يُسمح", "image": "", "customAudio": "" },
    { "id": 19, "category": "Driving", "ru": "Запрещено / Запрещается", "en": "Prohibited / Forbidden", "ar": "ممنوع / يُمنع", "image": "", "customAudio": "" },
    { "id": 20, "category": "Driving", "ru": "Обязан / Должен", "en": "Obliged / Must", "ar": "مُلزم / يجب عليه", "image": "", "customAudio": "" },
    { "id": 21, "category": "Driving", "ru": "Светофор", "en": "Traffic light", "ar": "إشارة المرور الضوئية", "image": "", "customAudio": "" },
    { "id": 22, "category": "Driving", "ru": "Регулировщик", "en": "Traffic controller / Officer", "ar": "شرطي تنظيم المرور", "image": "", "customAudio": "" },
    { "id": 23, "category": "Driving", "ru": "Дорожный знак", "en": "Road sign", "ar": "علامة مرورية", "image": "", "customAudio": "" },
    { "id": 24, "category": "Driving", "ru": "Дорожная разметка", "en": "Road markings", "ar": "الخطوط الأرضية للطريق", "image": "", "customAudio": "" },
    { "id": 25, "category": "Driving", "ru": "Сплошная линия", "en": "Solid line", "ar": "خط متصل (يُمنع عبوره)", "image": "", "customAudio": "" },
    { "id": 26, "category": "Driving", "ru": "Прерывистая линия", "en": "Dashed / Broken line", "ar": "خط متقطع (يُسمح بعبوره)", "image": "", "customAudio": "" },
    { "id": 27, "category": "Driving", "ru": "Стоп-линия", "en": "Stop line", "ar": "خط التوقف", "image": "", "customAudio": "" },
    { "id": 28, "category": "Driving", "ru": "Пешеходный переход", "en": "Pedestrian crosswalk", "ar": "ممر المشاة", "image": "", "customAudio": "" },
    { "id": 29, "category": "Driving", "ru": "Железнодорожный переезд", "en": "Railway crossing", "ar": "تقاطع سكة حديد", "image": "", "customAudio": "" },
    { "id": 30, "category": "Driving", "ru": "Шлагбаум", "en": "Railway barrier / Gate", "ar": "حاجز السكة الحديدية", "image": "", "customAudio": "" },
    { "id": 31, "category": "Driving", "ru": "Главная дорога", "en": "Main / Priority road", "ar": "الطريق الرئيسي", "image": "", "customAudio": "" },
    { "id": 32, "category": "Driving", "ru": "Второстепенная дорога", "en": "Secondary / Minor road", "ar": "الطريق الفرعي", "image": "", "customAudio": "" },
    { "id": 33, "category": "Driving", "ru": "Населённый пункт", "en": "Populated area / Town", "ar": "منطقة سكنية (داخل المدينة)", "image": "", "customAudio": "" },
    { "id": 34, "category": "Driving", "ru": "Жилая зона", "en": "Residential zone", "ar": "منطقة سكنية داخلية (السرعة 20)", "image": "", "customAudio": "" },
    { "id": 35, "category": "Driving", "ru": "Автомагистраль", "en": "Highway / Motorway", "ar": "الطريق السريع", "image": "", "customAudio": "" },
    { "id": 36, "category": "Driving", "ru": "Одностороннее движение", "en": "One-way traffic", "ar": "سير باتجاه واحد", "image": "", "customAudio": "" },
    { "id": 37, "category": "Driving", "ru": "Встречное движение", "en": "Oncoming traffic", "ar": "حركة السير المعاكسة", "image": "", "customAudio": "" },
    { "id": 38, "category": "Driving", "ru": "Круговое движение", "en": "Roundabout", "ar": "الدوار", "image": "", "customAudio": "" },
    { "id": 39, "category": "Driving", "ru": "Маршрутное транспортное средство", "en": "Public transport vehicle", "ar": "مركبة نقل عام (حافلة/ترام)", "image": "", "customAudio": "" },
    { "id": 40, "category": "Driving", "ru": "Легковой автомобиль", "en": "Passenger car", "ar": "سيارة ركاب صغيرة", "image": "", "customAudio": "" },
    { "id": 41, "category": "Driving", "ru": "Грузовой автомобиль", "en": "Truck / Lorry", "ar": "شاحنة نقل بضائع", "image": "", "customAudio": "" },
    { "id": 42, "category": "Driving", "ru": "Прицеп", "en": "Trailer", "ar": "مقطورة", "image": "", "customAudio": "" },
    { "id": 43, "category": "Driving", "ru": "Буксировка", "en": "Towing", "ar": "سحب / قطر مركبة", "image": "", "customAudio": "" },
    { "id": 44, "category": "Driving", "ru": "Аварийная сигнализация", "en": "Hazard warning lights", "ar": "أضواء التحذير الرباعية (الفلشر)", "image": "", "customAudio": "" },
    { "id": 45, "category": "Driving", "ru": "Знак аварийной остановки", "en": "Warning triangle", "ar": "مثلث التحذير العاكس", "image": "", "customAudio": "" },
    { "id": 46, "category": "Driving", "ru": "Ближний свет фар", "en": "Low-beam headlights", "ar": "الضوء المنخفض للمصابيح", "image": "", "customAudio": "" },
    { "id": 47, "category": "Driving", "ru": "Дальний свет фар", "en": "High-beam headlights", "ar": "الضوء العالي للمصابيح", "image": "", "customAudio": "" },
    { "id": 48, "category": "Driving", "ru": "Противотуманные фары", "en": "Fog lights", "ar": "مصابيح الضباب", "image": "", "customAudio": "" },
    { "id": 49, "category": "Driving", "ru": "Указатели поворота", "en": "Turn signals / Blinkers", "ar": "إشارات الانعطاف (الغمازات)", "image": "", "customAudio": "" },
    { "id": 50, "category": "Driving", "ru": "Звуковой сигнал", "en": "Horn / Sound signal", "ar": "البوق (المنبه الصوتي)", "image": "", "customAudio": "" },
    { "id": 51, "category": "Driving", "ru": "Скорость движения", "en": "Driving speed", "ar": "سرعة السير", "image": "", "customAudio": "" },
    { "id": 52, "category": "Driving", "ru": "Тормозной путь", "en": "Braking distance", "ar": "مسافة الفرملة", "image": "", "customAudio": "" },
    { "id": 53, "category": "Driving", "ru": "Остановочный путь", "en": "Stopping distance", "ar": "مسافة التوقف الكاملة", "image": "", "customAudio": "" },
    { "id": 54, "category": "Driving", "ru": "Дистанция", "en": "Following distance", "ar": "مسافة الأمان بين السيارات", "image": "", "customAudio": "" },
    { "id": 55, "category": "Driving", "ru": "Боковой интервал", "en": "Lateral clearance / Side distance", "ar": "المسافة الجانبية", "image": "", "customAudio": "" },
    { "id": 56, "category": "Driving", "ru": "Занос", "en": "Skid / Swerve", "ar": "انزلاق السيارة الجانبي", "image": "", "customAudio": "" },
    { "id": 57, "category": "Driving", "ru": "Гололедица", "en": "Black ice / Icy road", "ar": "طريق جليدي زلق", "image": "", "customAudio": "" },
    { "id": 58, "category": "Driving", "ru": "Недостаточная видимость", "en": "Insufficient visibility (< 300m)", "ar": "رؤية غير كافية (ضباب/مطر)", "image": "", "customAudio": "" },
    { "id": 59, "category": "Driving", "ru": "Ограниченная видимость", "en": "Limited visibility (due to terrain/bends)", "ar": "رؤية محدودة (بسبب منعطف/مرتفع)", "image": "", "customAudio": "" },
    { "id": 60, "category": "Driving", "ru": "Тёмное время суток", "en": "Dark time of day / Nighttime", "ar": "فترة الظلام / الليل", "image": "", "customAudio": "" },
    { "id": 61, "category": "Driving", "ru": "Водительское удостоверение", "en": "Driver's license", "ar": "رخصة القيادة", "image": "", "customAudio": "" },
    { "id": 62, "category": "Driving", "ru": "Страховой полис ОСАГО", "en": "Mandatory car insurance (OSAGO)", "ar": "وثيقة التأمين الإلزامي", "image": "", "customAudio": "" },
    { "id": 63, "category": "Driving", "ru": "Дорожно-транспортное происшествие (ДТП)", "en": "Traffic accident", "ar": "حادث مروري", "image": "", "customAudio": "" },
    { "id": 64, "category": "Driving", "ru": "Штраф", "en": "Fine / Penalty", "ar": "غرامة مالية", "image": "", "customAudio": "" },
    { "id": 65, "category": "Driving", "ru": "Лишение права управления", "en": "Driver's license suspension", "ar": "سحب رخصة القيادة", "image": "", "customAudio": "" },
    { "id": 66, "category": "Driving", "ru": "Рабочая тормозная система", "en": "Service brake system", "ar": "نظام الفرامل الأساسي", "image": "", "customAudio": "" },
    { "id": 67, "category": "Driving", "ru": "Рулевое управление", "en": "Steering system", "ar": "نظام التوجيه (المقود)", "image": "", "customAudio": "" },
    { "id": 68, "category": "Driving", "ru": "Ремень безопасности", "en": "Seatbelt", "ar": "حزام الأمان", "image": "", "customAudio": "" },
    { "id": 69, "category": "Driving", "ru": "Первая помощь", "en": "First aid", "ar": "الإسعافات الأولية", "image": "", "customAudio": "" },
    { "id": 70, "category": "Driving", "ru": "Кровоостанавливающий жгут", "en": "Hemostatic tourniquet", "ar": "رباط ضاغط لوقف النزيف", "image": "", "customAudio": "" },
    { "id": 71, "category": "General", "ru": "Будьте добры, подскажите...", "en": "Be so kind, tell me...", "ar": "من فضلك، أخبرني...", "image": "", "customAudio": "" },
    { "id": 72, "category": "General", "ru": "Я не совсем понял, повторите, пожалуйста.", "en": "I didn't quite understand, please repeat.", "ar": "لم أفهم تماماً، أعد من فضلك.", "image": "", "customAudio": "" },
    { "id": 73, "category": "General", "ru": "Говорите, пожалуйста, помедленнее.", "en": "Please speak a little slower.", "ar": "تحدث ببطء أكثر من فضلك.", "image": "", "customAudio": "" },
    { "id": 74, "category": "General", "ru": "Что означает это слово?", "en": "What does this word mean?", "ar": "ماذا تعني هذه الكلمة؟", "image": "", "customAudio": "" },
    { "id": 75, "category": "General", "ru": "Это имеет смысл.", "en": "That makes sense.", "ar": "هذا منطقي.", "image": "", "customAudio": "" },
    { "id": 76, "category": "General", "ru": "Давайте уточним детали.", "en": "Let's clarify the details.", "ar": "دعنا نوضح التفاصيل.", "image": "", "customAudio": "" },
    { "id": 77, "category": "General", "ru": "Без проблем, договорились.", "en": "No problem, agreed.", "ar": "لا مشكلة، اتفقنا.", "image": "", "customAudio": "" },
    { "id": 78, "category": "General", "ru": "Мне нужно немного подумать.", "en": "I need to think a little.", "ar": "أحتاج إلى التفكير قليلاً.", "image": "", "customAudio": "" },
    { "id": 79, "category": "General", "ru": "Как я могу туда добраться?", "en": "How can I get there?", "ar": "كيف يمكنني الوصول إلى هناك؟", "image": "", "customAudio": "" },
    { "id": 80, "category": "General", "ru": "Где находится ближайшая остановка?", "en": "Where is the nearest bus stop?", "ar": "أين تقع أقرب محطة حافلات؟", "image": "", "customAudio": "" },
    { "id": 81, "category": "General", "ru": "Сколько времени это займёт?", "en": "How much time will it take?", "ar": "كم من الوقت سيستغرق هذا؟", "image": "", "customAudio": "" },
    { "id": 82, "category": "General", "ru": "Я немного опаздываю.", "en": "I am running a little late.", "ar": "أنا متأخر قليلاً.", "image": "", "customAudio": "" },
    { "id": 83, "category": "General", "ru": "Извините за беспокойство.", "en": "Sorry for bothering you.", "ar": "عذراً على الإزعاج.", "image": "", "customAudio": "" },
    { "id": 84, "category": "General", "ru": "Большое спасибо за помощь!", "en": "Thank you very much for your help!", "ar": "شكراً جزيلاً على المساعدة!", "image": "", "customAudio": "" },
    { "id": 85, "category": "General", "ru": "Не за что, обращайтесь.", "en": "You're welcome, feel free to ask anytime.", "ar": "على الرحب والسعة، تفضل في أي وقت.", "image": "", "customAudio": "" },
    { "id": 86, "category": "General", "ru": "В чём заключается проблема?", "en": "What is the problem?", "ar": "ما هي المشكلة بالضبط؟", "image": "", "customAudio": "" },
    { "id": 87, "category": "General", "ru": "Я полностью с вами согласен.", "en": "I completely agree with you.", "ar": "أتفق معك تماماً.", "image": "", "customAudio": "" },
    { "id": 88, "category": "General", "ru": "К сожалению, сейчас это невозможно.", "en": "Unfortunately, it is impossible right now.", "ar": "للأسف، هذا غير ممكن حالياً.", "image": "", "customAudio": "" },
    { "id": 89, "category": "General", "ru": "Можно оплатить картой или переводом?", "en": "Can I pay by card or bank transfer?", "ar": "هل يمكن الدفع بالبطاقة أو التحويل؟", "image": "", "customAudio": "" },
    { "id": 90, "category": "General", "ru": "Пришлите мне, пожалуйста, адрес.", "en": "Please send me the address.", "ar": "أرسل لي العنوان من فضلك.", "image": "", "customAudio": "" },
    { "id": 91, "category": "General", "ru": "Я сейчас занят, перезвоню позже.", "en": "I am busy right now, I'll call back later.", "ar": "أنا مشغول الآن، سأتصل بك لاحقاً.", "image": "", "customAudio": "" },
    { "id": 92, "category": "General", "ru": "Какой у вас график работы?", "en": "What is your work schedule?", "ar": "ما هو جدول مواعيد عملكم؟", "image": "", "customAudio": "" },
    { "id": 93, "category": "General", "ru": "Это очень важно для меня.", "en": "This is very important to me.", "ar": "هذا مهم جداً بالنسبة لي.", "image": "", "customAudio": "" },
    { "id": 94, "category": "General", "ru": "Не переживайте, всё будет хорошо.", "en": "Don't worry, everything will be fine.", "ar": "لا تقلق، كل شيء سيكون على ما يرام.", "image": "", "customAudio": "" },
    { "id": 95, "category": "General", "ru": "У меня есть один вопрос.", "en": "I have one question.", "ar": "لدي سؤال واحد.", "image": "", "customAudio": "" },
    { "id": 96, "category": "General", "ru": "Где я могу поставить подпись?", "en": "Where can I put my signature?", "ar": "أين يمكنني وضع توقيعي؟", "image": "", "customAudio": "" },
    { "id": 97, "category": "General", "ru": "Какие документы нужны для этого?", "en": "What documents are needed for this?", "ar": "ما هي المستندات المطلوبة لهذا؟", "image": "", "customAudio": "" },
    { "id": 98, "category": "General", "ru": "Я готов начать прямо сейчас.", "en": "I am ready to start right now.", "ar": "أنا مستعد للبدء الآن.", "image": "", "customAudio": "" },
    { "id": 99, "category": "General", "ru": "Надеюсь на наше сотрудничество.", "en": "I look forward to our cooperation.", "ar": "أتطلع إلى تعاوننا.", "image": "", "customAudio": "" },
    { "id": 100, "category": "General", "ru": "Хорошего дня и удачи на дорогах!", "en": "Have a nice day and good luck on the roads!", "ar": "أتمنى لك يوماً سعيداً وحظاً موفقاً على الطرق!", "image": "", "customAudio": "" },
    { "id": 101, "category": "Driving", "ru": "Уступить дорогу", "en": "Yield / Give way", "ar": "افسح الطريق (أعط الطريق)", "Image": "", "customAudio": "" },
    {
        "id": 102,
        "category": "Driving",
        "ru": "Вынужденная остановка",
        "en": "Emergency stop",
        "ar": "التوقف الاضطراري",
        "Image": "",
        "customAudio": ""
    },
    {
        "id": 103,
        "category": "General",
        "ru": "Мне нужно подумать об этом",
        "en": "I need to think about it",
        "ar": "أحتاج إلى التفكير في هذا الأمر",
        "Image": "",
        "customAudio": ""
    },
    { "id": 101, "category": "General", "ru": "Как прошёл ваш день?", "en": "How was your day?", "ar": "كيف مرّ يومك؟", "image": "", "customAudio": "" },
    { "id": 102, "category": "General", "ru": "У меня всё в порядке, спасибо.", "en": "Everything is fine with me, thank you.", "ar": "كل شيء على ما يرام عندي، شكراً.", "image": "", "customAudio": "" },
    { "id": 103, "category": "General", "ru": "Не могли бы вы мне помочь?", "en": "Could you please help me?", "ar": "هل يمكنك مساعدتي من فضلك؟", "image": "", "customAudio": "" },
    { "id": 104, "category": "General", "ru": "Я ищу этот адрес.", "en": "I am looking for this address.", "ar": "أنا أبحث عن هذا العنوان.", "image": "", "customAudio": "" },
    { "id": 105, "category": "General", "ru": "Это далеко отсюда?", "en": "Is it far from here?", "ar": "هل هذا بعيد عن هنا؟", "image": "", "customAudio": "" },
    { "id": 106, "category": "General", "ru": "Можно дойти пешком?", "en": "Can I walk there on foot?", "ar": "هل يمكن الوصول سيراً على الأقدام؟", "image": "", "customAudio": "" },
    { "id": 107, "category": "General", "ru": "Сколько с меня?", "en": "How much do I owe you?", "ar": "كم الحساب المطلوب مني؟", "image": "", "customAudio": "" },
    { "id": 108, "category": "General", "ru": "Чек не нужен, спасибо.", "en": "No receipt needed, thank you.", "ar": "لا داعي للإيصال، شكراً.", "image": "", "customAudio": "" },
    { "id": 109, "category": "General", "ru": "У вас есть размен?", "en": "Do you have change?", "ar": "هل لديك فكة (صرف)؟", "image": "", "customAudio": "" },
    { "id": 110, "category": "General", "ru": "Я хочу сделать заказ.", "en": "I want to place an order.", "ar": "أريد أن أطلب طلباً.", "image": "", "customAudio": "" },
    { "id": 111, "category": "General", "ru": "С собой или здесь?", "en": "To go or for here?", "ar": "معك أم هنا؟", "image": "", "customAudio": "" },
    { "id": 112, "category": "General", "ru": "Заверните, пожалуйста, с собой.", "en": "Please pack it to go.", "ar": "غلّفه من فضلك, سآخذه معي.", "image": "", "customAudio": "" },
    { "id": 113, "category": "General", "ru": "Где здесь можно помыть руки?", "en": "Where can I wash my hands here?", "ar": "أين يمكنني غسل يدي هنا؟", "image": "", "customAudio": "" },
    { "id": 114, "category": "General", "ru": "Какой пароль от Wi-Fi?", "en": "What is the Wi-Fi password?", "ar": "ما هي كلمة مرور الواي فاي؟", "image": "", "customAudio": "" },
    { "id": 115, "category": "General", "ru": "У меня садится телефон.", "en": "My phone battery is dying.", "ar": "بطارية هاتفي توشك على النفاد.", "image": "", "customAudio": "" },
    { "id": 116, "category": "General", "ru": "Связь плохая, я плохо вас слышу.", "en": "The connection is bad, I can barely hear you.", "ar": "الاتصال سيء، بالكاد أسمعك.", "image": "", "customAudio": "" },
    { "id": 117, "category": "General", "ru": "Напишите мне в мессенджер.", "en": "Message me on the messenger app.", "ar": "راسلني على تطبيق المحادثة.", "image": "", "customAudio": "" },
    { "id": 118, "category": "General", "ru": "Я сейчас не могу говорить.", "en": "I cannot talk right now.", "ar": "لا أستطيع التحدث الآن.", "image": "", "customAudio": "" },
    { "id": 119, "category": "General", "ru": "Давайте созвонимся вечером.", "en": "Let's call each other in the evening.", "ar": "دعنا نتصل ببعضنا في المساء.", "image": "", "customAudio": "" },
    { "id": 120, "category": "General", "ru": "Во сколько мы встречаемся?", "en": "What time are we meeting?", "ar": "في أي ساعة سنلتقي؟", "image": "", "customAudio": "" },
    { "id": 121, "category": "General", "ru": "Я уже на месте, жду вас.", "en": "I am already at the spot, waiting for you.", "ar": "أنا في المكان بالفعل، أنتظرك.", "image": "", "customAudio": "" },
    { "id": 122, "category": "General", "ru": "Подождите пять минут, пожалуйста.", "en": "Wait five minutes, please.", "ar": "انتظر خمس دقائق من فضلك.", "image": "", "customAudio": "" },
    { "id": 123, "category": "General", "ru": "Ничего страшного, бывает.", "en": "No big deal, it happens.", "ar": "لا بأس، هذا يحدث.", "image": "", "customAudio": "" },
    { "id": 124, "category": "General", "ru": "Я передумал.", "en": "I changed my mind.", "ar": "غيّرت رأيي.", "image": "", "customAudio": "" },
    { "id": 125, "category": "General", "ru": "Это зависит от обстоятельств.", "en": "It depends on the circumstances.", "ar": "هذا يعتمد على الظروف.", "image": "", "customAudio": "" },
    { "id": 126, "category": "General", "ru": "Я в этом не уверен.", "en": "I am not sure about this.", "ar": "لست متأكداً من هذا.", "image": "", "customAudio": "" },
    { "id": 127, "category": "General", "ru": "Вы абсолютно правы.", "en": "You are absolutely right.", "ar": "أنت محق تماماً.", "image": "", "customAudio": "" },
    { "id": 128, "category": "General", "ru": "Честно говоря, я не знаю.", "en": "Honestly speaking, I don't know.", "ar": "بصراحة، لا أعلم.", "image": "", "customAudio": "" },
    { "id": 129, "category": "General", "ru": "Как вы думаете, что лучше?", "en": "What do you think is better?", "ar": "برأيك، ما هو الأفضل؟", "image": "", "customAudio": "" },
    { "id": 130, "category": "General", "ru": "Мне нужно посоветоваться.", "en": "I need to consult / ask for advice.", "ar": "أحتاج أن أستشير.", "image": "", "customAudio": "" },
    { "id": 131, "category": "General", "ru": "Это займёт пару минут.", "en": "It will take a couple of minutes.", "ar": "سيستغرق هذا دقيقتين.", "image": "", "customAudio": "" },
    { "id": 132, "category": "General", "ru": "Не торопитесь, время есть.", "en": "Take your time, there is plenty of time.", "ar": "لا تستعجل، لدينا متسع من الوقت.", "image": "", "customAudio": "" },
    { "id": 133, "category": "General", "ru": "Где я могу это купить?", "en": "Where can I buy this?", "ar": "أين يمكنني شراء هذا؟", "image": "", "customAudio": "" },
    { "id": 134, "category": "General", "ru": "У вас есть что-нибудь подешевле?", "en": "Do you have anything cheaper?", "ar": "هل لديكم شيء أرخص قليلاً؟", "image": "", "customAudio": "" },
    { "id": 135, "category": "General", "ru": "Качество отличное.", "en": "The quality is excellent.", "ar": "الجودة ممتازة.", "image": "", "customAudio": "" },
    { "id": 136, "category": "General", "ru": "Я просто смотрю, спасибо.", "en": "I am just looking, thank you.", "ar": "أنا أتفرج فقط، شكراً.", "image": "", "customAudio": "" },
    { "id": 137, "category": "General", "ru": "Будьте осторожны на дороге!", "en": "Be careful on the road!", "ar": "كن حذراً في الطريق!", "image": "", "customAudio": "" },
    { "id": 138, "category": "General", "ru": "Сегодня очень холодно и скользко.", "en": "Today it is very cold and slippery.", "ar": "اليوم الجو بارد جداً وزلق.", "image": "", "customAudio": "" },
    { "id": 139, "category": "General", "ru": "Я плохо себя чувствую.", "en": "I don't feel well.", "ar": "أشعر بتوعك (لست بخير).", "image": "", "customAudio": "" },
    { "id": 140, "category": "General", "ru": "Где ближайшая аптека?", "en": "Where is the nearest pharmacy?", "ar": "أين تقع أقرب صيدلية؟", "image": "", "customAudio": "" },
    { "id": 141, "category": "General", "ru": "Мне нужно записаться на приём.", "en": "I need to make an appointment.", "ar": "أحتاج إلى حجز موعد.", "image": "", "customAudio": "" },
    { "id": 142, "category": "General", "ru": "Можете объяснить ещё раз?", "en": "Can you explain one more time?", "ar": "هل يمكنك الشرح مرة أخرى؟", "image": "", "customAudio": "" },
    { "id": 143, "category": "General", "ru": "Теперь всё понятно, спасибо!", "en": "Now everything is clear, thank you!", "ar": "الآن كل شيء واضح، شكراً!", "image": "", "customAudio": "" },
    { "id": 144, "category": "General", "ru": "Очень приятно познакомиться.", "en": "Very nice to meet you.", "ar": "تشرفت بمعرفتك كثيراً.", "image": "", "customAudio": "" },
    { "id": 145, "category": "General", "ru": "До скорой встречи!", "en": "See you soon!", "ar": "إلى اللقاء القريب!", "image": "", "customAudio": "" }
]

//  Load saved items from LocalStorage 
let vocabItems = JSON.parse(localStorage.getItem('pdd_vocab_list')) || defaultVocab;
let currentFilter = "All";

// DOM Elements 
const vocabListEl = document.getElementById('vocab-list');
const toggleFormBtn = document.getElementById('toggle-form-btn');
const addForm = document.getElementById('add-vocab-form');
const ruVoiceSelect = document.getElementById('ru-voice-select');
const enVoiceSelect = document.getElementById('en-voice-select');
let voices = [];

// 1. load & Prioritize High-Quality Male Voices
function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    ruVoiceSelect.innerHTML = '';
    enVoiceSelect.innerHTML = '';

    //  Keywords for natural & male voices (Microsoft Edge Natural / Google)
    const maleKeywords = ['dmitry', 'pavel', 'maxim', 'male', 'guy', 'christopher', 'daniel', 'david', 'mark', 'alex'];

    //  Sort to put Natural & Male voices at the top
    const sortVoices = (list) => list.sort((a, b) => {
        const aLocal = a.localService ? 3 : 0; // prioritize offline/local voices for instant playback
        const bLocal = b.localService ? 3 : 0;
        const aMale = maleKeywords.some (k => a.name.toLowerCase().includes(k)) ? 2 : 0;
        const bMale = maleKeywords.some (k => b.name.toLowerCase().includes(k)) ? 2 : 0;
        return (bLocal + bMale) - (aLocal + aMale);
    });

    sortVoices(voices.filter(v => v.lang.includes('ru'))).forEach(voice => {
        const opt = document.createElement('option');
        opt.value = voice.name;
        opt.textContent = `${voice.name} ${voice.localService ? '⚡' : '☁️'}`;
        ruVoiceSelect.appendChild(opt);
    });
    sortVoices(voices.filter(v => v.lang.includes('en'))).forEach(voice => {
        const opt = document.createElement('option');
        opt.value = voice.name;
        opt.textContent = `${voice.name} ${voice.localService ? '⚡' : '☁️'}`;
        enVoiceSelect.appendChild(opt);
    });
}
window.speechSynthesis.onvoiceschanged = populateVoices;
populateVoices();

//  2. Speak Text Function (Russian or English)
function speakText(text, langType, customAudioData = "") {
    // If user uploaded a custom audio file, play it first
    if (langType === 'ru' && customAudioData) {
        const audio = new Audio(customAudioData);
        audio.play();
        return;
    }

    window.speechSynthesis.cancel(); // Stop any ongoing speech
    const utterance = new SpeechSynthesisUtterance(text);

    const selectedVoiceName = langType === 'ru' ? ruVoiceSelect.value : enVoiceSelect.value;
    const chosenVoice = voices.find(v => v.name === selectedVoiceName);

    if (chosenVoice) {
        utterance.voice = chosenVoice;
    }
    utterance.lang = langType === 'ru' ? 'ru-RU' : 'en-US';
    utterance.rate = 0.92; // Clear natural pace
    window.speechSynthesis.speak(utterance);
}

// 3. Convert Uploaded File (Image or Audio) to Base64 for Local Storage
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        if (!file) return resolve("");
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}

// 4.Handle Form Submission (Add New Card)
addForm.onsubmit = async (e) => {
    e.preventDefault();

    const category = document.getElementById('item-category').value;
    const ruText = document.getElementById('ru-input').value.trim();
    const enText = document.getElementById('en-input').value.trim();
    const arText = document.getElementById('ar-input').value.trim();

    const imgFile = document.getElementById('img-input').files[0];
    const audioFile = document.getElementById('audio-input').files[0];

    const imgBase64 = await fileToBase64(imgFile);
    const audioBase64 = await fileToBase64(audioFile);

    const newItem = {
        id: Date.now(),
        category,
        ru: ruText,
        en: enText,
        ar: arText,
        image: imgBase64,
        customAudio: audioBase64
    };
    vocabItems.unshift(newItem); //  Add to top of list
    localStorage.setItem('pdd_vocab_list', JSON.stringify(vocabItems));

    addForm.reset();
    addForm.style.display = 'none';
    renderVocab();
};

//  5. Render Cards on Screen
function renderVocab() {
    vocabListEl.innerHTML = '';

    const filtered = currentFilter ==="All"
        ? vocabItems
        : vocabItems.filter(item => item.category === currentFilter);
    
    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'vocab-card';

        card.innerHTML = `
          ${item.image ? `<img src="${item.image}" alt="Vocab visual">` : ''}
          <div class="vocab-ru">${item.ru}</div>
          <div class="vocab-en">${item.en}</div>
          <div class="vocab-ar">${item.ar}</div>
          <div class="card-actions">
            <button class="tool-btn" onclick="speakText('${item.ru.replace(/'/g, "\\'")}', 'ru', '${item.customAudio}')">🔊 RU</button>
            <button class="tool-btn" onclick="speakText('${item.en.replace(/'/g, "\\'")}', 'en')">🔊 EN</button>
            <button class="delete-btn" onclick="deleteCard(${item.id})">🗑️ Delete</button>
          </div>
        `;
        vocabListEl.appendChild(card);
    });
}

// 6. Delete Card 
function deleteCard(id) {
    vocabItems = vocabItems.filter(item => item.id !== id);
    localStorage.setItem('pdd_vocab_list', JSON.stringify(vocabItems));
    renderVocab();
}

//  Toggle Form Visibility
toggleFormBtn.onclick = () => {
    addForm.style.display = addForm.style.display === 'none' ? 'flex' : 'none';
};

// Filter Buttons 
document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active-filter'));
        btn.classList.add('active-filter');
        currentFilter = btn.getAttribute('data-filter');
        renderVocab();
    };
});

// 7. Export Vocabulary & Mistakes to JSON file
document.getElementById('export-btn').onclick = () => {
    const backupData = {
        vocab: vocabItems,
        mistakes: JSON.parse(localStorage.getItem('pdd_mistakes')) || []
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("herf", dataStr);
    downloadAnchor.setAttribute("download", "pdd_backup.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
};

// 8. Import Vocabulary & Mistakes from JSON file
const importFileEl =document.getElementById('import-file');
document.getElementById('import-btn').onclick = () => importFileEl.click();

importFileEl.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const imported = JSON.parse(event.target.result);
            if (imported.vocab) {
                vocabItems = imported.vocab;
                localStorage.setItem('pdd_vocab_list', JSON.stringify(vocabItems));
            }
            if (imported.mistakes) {
                localStorage.setItem('pdd_mistakes', JSON.stringify(imported.mistakes));
            }
            renderVocab();
            alert("✅ Backup restored successfuly!");
        }   catch (err) {
            alert("❌ Invalid JSON file!")
        }
    };
    reader.readAsText(file);
};

// 9. Flashcard Quiz Mode Logic
let quizQueue = [];
let isQuizMode = false;

const startQuizBtn = document.getElementById('start-quiz-btn');
const FlashcardArea = document.getElementById('flashcard-area');
const fcProgrees = document.getElementById('fc-progress');
const fcImg = document.getElementById('fc-img');
const fcRu = document.getElementById('fc-ru');
const fcEn = document.getElementById('fc-en');
const fcAr = document.getElementById('fc-ar');
const fcAnswer = document.getElementById('fc-answer');
const fcRevealBtn = document.getElementById('fc-reveal-btn');

// Toggle Quiz Mode On/Off
startQuizBtn.onclick = () => {
    isQuizMode = !isQuizMode;

    if (isQuizMode) {
        // Filter by active category tab and shuffle
        const sourceList = currentFilter === "All"
          ? vocabItems
          : vocabItems.filter(item => item.category === currentFilter);

        quizQueue = [...sourceList].sort(() => Math.random() - 0.5);
        startQuizBtn.innerText = "❌ Exit Quiz Mode";
        startQuizBtn.style.backgroundColor = "#ef4444";
        vocabListEl.style.display = 'none';
        FlashcardArea.style.display = 'block';
        showNextFlashcard();
    } else {
        startQuizBtn.innerText = "🧠 Start Flashcard Quiz (Test Yourself)";
        startQuizBtn.style.backgroundColor = "#8b5cf6";
        FlashcardArea.style.display = "none";
        vocabListEl.style.display = "flex";
    }
};

function showNextFlashcard() {
    if (quizQueue.length === 0) {
        fcProgress.innerText = "Completed!"
        fcRu.innerText = "🎉 Awesome! You reviewed all cards in this set.";
        fcImg.style.display = "none";
        fcAnswer.style.display = "none";
        fcRevealBtn.style.display = "none";
        document.getElementById('fc-speak-ru').style.display = "none";
        return;
    }

    const currentCard =quizQueue[0];
    fcProgrees.innerText = `Cards remaining: ${quizQueue.length}`;
    fcRu.innerText = currentCard.ru;
    fcEn.innerText = currentCard.en;
    fcAr.innerText = currentCard.ar;

    if (currentCard.image) {
        fcImg.src = currentCard.image;
        fcImg.style.display = "block";
    } else {
        fcImg.style.display = "none";
    }
    // Hide answer initially
    fcAnswer.style.display = "none";
    fcRevealBtn.style.display = "block";
    document.getElementById('fc-speak-ru').style.display = "inline-block";
}

// Reveal translation 
fcRevealBtn.onclick = () => {
    fcRevealBtn.style.display = "none";
    fcAnswer.style.display = "block";
};

// Audio buttons inside Flashcard
document.getElementById('fc-speak-ru').onclick = () => {
    if (quizQueue.length > 0) speakText(quizQueue[0].ru, 'ru', quizQueue[0].customAudio);
};

document.getElementById('fc-speak-en').onclick = () => {
    if (quizQueue.length > 0) speakText(quizQueue[0].en, 'en');
};

// "I Know It" -> Remove Card from current session
document.getElementById('fc-knew-btn').onclick = () => {
    quizQueue.shift();
    showNextFlashcard();
};

// "Review Again" -> Move card to the end of the quene
document.getElementById('fc-again-btn').onclick = () => {
    const missedCard =quizQueue.shift();
    quizQueue.push(missedCard);
    showNextFlashcard();
};

// Initial Render
renderVocab();
