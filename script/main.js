document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
    }
});

const messages = [
"Клацни де завгодно",  
"Слухай ❤️",  
"Я хочу тобі дещо сказати",  
"Спробуй натиснути",  
"Натисни ще раз",  
"Давай, не здавайся, клацай",  
"Це останній раз, чесно",  
"Серйозно",  
"Це",  
"Останній",    
"Я знаю, ти уже злишься",  
"Хмм",  
"Ну гаразд",  
"Я просто хотів сказати",  
"Твої бездонні очі",
"Твої прекрасні губи",
"Твоя чарівна посмішка",
"Твоя неймовірна фігура",
"Твоє добре і щире серце",
"Твоя чуйна душа",
"Твоя відвертість і чеснісь",
"Все це щодня вражає мене",
"Змушує хотіти повернутись",
"До нашого діалогу",
"Знову і знову", 
"Зробила його місцем",
"Де я відчуваю себе спокійно",
"І я хочу",
"Аби він нарешті вийшов за межі інтернету",
"Ти неймовірна ❤️",
"Ти особлива",
"Ти неповторна",  
"Ти красива настільки, що весь світ затихає, коли ти з’являєшся",
"Твоя усмішка — мій улюблений витвір мистецтва",
"Коли я бачу її, то мені знову хочеться жити",
"Твоя доброта робить цей світ світлішим",
"Ти щодня повертаєш мені віру в цей світ",
"Віру, що в ньому ще є щось прекрасне",
"І це прекрасне - ТИ",
"Ти — моє натхнення, мій спокій і мій вогонь одночасно",
"Твоя щирість — це те, за що я тебе ціную ще більше, ніж за красу",
"Мені здавалось, такого не може бути",
"Що всім завжди лише щось потрібно від мене",
"Якась послуга, допомога чи просто вигода",
"І лише ти своєю щирістю змінюєш мій світогляд",
"Ти вмієш підтримати так, як не вміє ніхто інший",
"Я втратив надію, що колись відчую ці почуття",
"Віддуття потрібності",
"Відчуття, що тебе кохають",
"Відчуття, що тебе хочуть",
"Я став залежним",
"Залежним від твого голосу",
"День не матиме жодного сенсу, якщо я не зможу його почути",
"І навіть коли мовчиш, я відчуваю твою любов",
"У світі мільйони людей, але ти — єдина така",
"Я не вірив в долю, в те що бувають такі співпадіння",
"Але наша зустріч доводить протилежне",
"Не могло бути стільки співпадінь, якби не план когось вгорі",
"Ти не просто особлива — ти неймовірна",
"Кожен день з тобою — це маленьке життя, повне щастя",
"Я не можу уявити собі ранок, в якому не буде тебе",
"Тоді краще взагалі не прокидатись",
"Адже життя не матиме жодного сенсу",
"Ти — моя мрія, яка стала реальністю",
"Хоч навіть у мріях я не міг бути таким щасливим, як зараз з тобою",
"З тобою кожен звичайний день стає святом",
"Ти зʼявилася — і перетворила моє життя на казку",
"Я не знаю, що буде завтра, але я точно хочу, щоб там була ти",
"І якби можна було вибирати знову — я б обрав тебе ще мільйон разів",
"Це наш перший спільний місяць",
"І це без жодного перебільшення",
"Найщасливіший місяць за останні багато довгих років",
"Може навіть за все життя",
"Що було до цього моменту",
"Тому що зараз воно розділилось на до і після",
"02.06.2025",
"Назавжди залишиться тим днем",
"Коли я знайшов скарб",
"На який навіть не міг розраховувати",
"І кожен день тепер я хочу проводити з тобою",
"Кожну годину",
"Хвилину",
"Секунду",
"Я хочу віддати тобі",
"Хочу повністю належати тобі",
"Отак)",  
"Спробуй натиснути кнопку знизу 💝"
];

let currentPage = 0;
let isLastPage = false;

function showMessage() {
    $('.message').text(messages[currentPage]);
    
    isLastPage = currentPage === messages.length - 1;
    
    if (isLastPage) {
        $('.next-button').show();
        $('.bg_heart').css('cursor', 'default');
    } else {
        $('.next-button').hide();
        $('.bg_heart').css('cursor', 'pointer');
    }
}

$('.bg_heart').on('click', function() {
    if (!isLastPage) {
        currentPage++;
        showMessage();
    }
});

var love = setInterval(function() {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    
    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);animation:love " + r_time + "s ease'></div>");
    
    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);animation:love " + (r_time + 5) + "s ease'></div>");
    
    $('.heart').each(function() {
        var top = parseFloat($(this).css("top"));
        var width = parseFloat($(this).css("width"));
        if (top <= -100 || width >= 150) {
            $(this).remove();
        }
    });
}, 500);

showMessage();

function clearMusicState() {
    localStorage.removeItem('musicPlaying');
    localStorage.removeItem('musicCurrentTime');
}

window.onload = function() {
    clearMusicState(); 
}

function setupMusic() {
    const music = document.getElementById('backgroundMusic');
    
    if (!localStorage.getItem('initialLoad')) {
        clearMusicState();
        localStorage.setItem('initialLoad', 'true');
        music.currentTime = 0;
    }

    const isMusicPlaying = localStorage.getItem('musicPlaying') === 'true';
    const musicCurrentTime = localStorage.getItem('musicCurrentTime') || 0;

    if (isMusicPlaying) {
        music.currentTime = parseFloat(musicCurrentTime);
        music.play().catch(error => console.log('Playback failed', error));
    }

    music.addEventListener('play', () => {
        localStorage.setItem('musicPlaying', 'true');
    });

    music.addEventListener('pause', () => {
        localStorage.setItem('musicPlaying', 'false');
    });

    setInterval(() => {
        localStorage.setItem('musicCurrentTime', music.currentTime);
    }, 1000);

    document.addEventListener('click', function startMusic() {
        music.play().catch(error => {
            console.log('Autoplay prevented', error);
        });
        document.removeEventListener('click', startMusic);
    });
}

document.addEventListener('DOMContentLoaded', setupMusic);
