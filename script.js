const btnUa = document.querySelector('.btn-ua')
const btnEn = document.querySelector('.btn-en')
const hamburgerBtn = document.querySelector('.hamburger')
const menu = document.querySelector('.hamburger-menu')
const header = document.getElementsByTagName('header');
const innerHeader = document.querySelector('header-inner')

const translationTargets = document.querySelectorAll('.trans-target')
const ua = [
    'Фалкон 9', 
    'Важкий Фалкон',
    'Дракон',
    'Новини',
    "Про нас",
    "Галерея",
    "Магазин",
    'UA',
    'EN',
    'Falcon Heavy',
    'Найпотужніша діюча ракета у світі вдвічі',
    'ОГЛЯД ВАЖКОГО ФАЛКОНА',
    'ВИСОТА',
    'ДІАМЕТР',
    'МАСА',
    'КОРИСНЕ НАВАНТАЖЕННЯ НА НИЗЬКУ ОРБІТУ',
    'КОРИСНЕ НАВАНТАЖЕННЯ НА ВИСОКУ ОРБІТУ',
    'КОРСИНЕ НАВАНТАЖЕННЯ НА МАРС',
    '70 м /',
    ' 229.6 фт',
    '12.2 м /',
    ' 39.9 фт',
    '1,420,788 кг /',
    ' 3,125,735 lb',
    '63,800 кг /',
    ' 140,660 lb',
    '26,700 кг /',
    ' 58,860 lb',
    '16,800 кг /',
    ' 37,040 lb',
    'НЕПЕРЕВЕРШЕНА ПРОДУКТИВНІСТЬ',
    'Маючи тягу понад 5 мільйонів фунтів під час зльоту, Falcon Heavy є найпотужнішою ракетою-носієм. Для порівняння, тяга Falcon Heavy під час зльоту дорівнює приблизно вісімнадцяти літакам 747 на повній потужності. Falcon Heavy може вивести на орбіту еквівалент повністю завантаженого реактивного лайнера 737 — разом з пасажирами, багажем та паливом.',
    
    'Приватність',
    'Умови',
    "Для додаткових питань, зв'яжіться з rideshare@spacex.com",
    "Зв'яжіться з нами"
]

const en = [
    'Falcon 9', 
    'Falcon Heavy',
    'Dragon',
    'Updates',
    'About',
    'Gallery',
    'Shop',
    'UA',
    'EN',
    'Falcon Heavy',
    'The most powerful operational rocket in the world by a factor of two',
    'FALCON HEAVY OVERVIEW',
    'HEIGHT',
    'DIAMETR',
    'MASS',
    'PAYLOAD TO LEO',
    'PAYLOAD TO GTO',
    'PAYLOAD TO MARS',
    '70 m /',
    ' 229.6 ft',
    '12.2 m /',
    ' 39.9 ft',
    '1,420,788 kg /',
    ' 3,125,735 lb',
    '63,800 kg /',
    ' 140,660 lb',
    '26,700 kg /',
    ' 58,860 lb',
    '16,800 kg /',
    ' 37,040 lb',
    'UNMATCHED PERFOMANCE',
    'With more than 5 million pounds of thrust at liftoff, Falcon Heavy is the most capable rocket flying. By comparison, the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full power. Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner—complete with passengers, luggage and fuel—to orbit.',
    
    'Privacy',
    'Policy',
    'For additional questions, contact rideshare@spacex.com',
    'Contact Us'
]

btnUa.addEventListener('click', ()=>{
    for (let i = 0; i < translationTargets.length; i++) {
        translationTargets[i].textContent = ua[i]
    }

})

btnEn.addEventListener('click', ()=>{
    for (let i = 0; i < translationTargets.length; i++) {
        translationTargets[i].textContent = en[i]
    }

})

console.log(translationTargets)



hamburgerBtn.addEventListener('click', () => {
    menu.classList.toggle('open-menu');
    header.classList.toggle('menu-open');
});

document.addEventListener('scroll', (e) => {
    if (scrollY >= 30)
        header.style.background = '#1f1f1f99'
})