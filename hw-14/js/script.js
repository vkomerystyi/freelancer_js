// Задача. Дано список книг (назва, автор, рік видання, вартість, кількість одиниць).
const booksList = [
  {
    title: 'Title 0',
    author: 'Author 0',
    year: 2000,
    price: 2000,
    count: 100,
  },
  {
    title: 'Title 1',
    author: 'Author 1',
    year: 2001,
    price: 10000,
    count: 200,
  },
  {
    title: 'Title 2',
    author: 'Author 2',
    year: 2005,
    price: 200,
    count: 20,
  },
  {
    title: 'Title 3',
    author: 'Author 3',
    year: 2010,
    price: 20000,
    count: 1,
  },
]
// кількість книг, що було видано після 2000 року
const countBookAfter2000 = booksList.reduce((prevNum, book) => (book.year > 2000 ? prevNum + book.count : prevNum), 0)
console.log(countBookAfter2000)
// знайти загальну вартість кожної із книг
const allPriceEveryBook = booksList.map((book) => book.price * book.count)
console.log(allPriceEveryBook)
// знайти загальну вартість усіх книг
const allPriceBook = booksList.reduce((prevSum, book) => prevSum + book.price * book.count, 0)
console.log(allPriceBook)
// визначити, чи є книга, що була видана у 2000 році
if (booksList.some((book) => book.year === 2000)) {
  console.log('true')
}
// визначити, чи усі книги були визаді після 2005 року
if (booksList.every((book) => book.year > 2005)) console.log(true)
else console.log(false)
// сформувати список книг, ціна яких менше за 1000 грн
const listBookPriceLess1000 = booksList.filter((book) => book.price > 1000)
console.log(listBookPriceLess1000)
// знайти загальну вартість книг, які було видано у 2000 році
const allPriceBook2000 = booksList.reduce(
  (prev, book) => (book.year === 2000 ? prev + book.price * book.count : prev),
  0
)
console.log(allPriceBook2000)
// знайти першу книгу, вартість якої більше за 3000грн
const firstBook3000 = booksList.find((book) => book.price > 3000)
console.log(firstBook3000)
// знайти номер першої книги, вартість якої більше за 3000грн
const firstNumBook3000 = booksList.findIndex((book) => book.price > 3000)
console.log(firstNumBook3000)

// Задача. Дано масив імен. Підхраувати кількість входжень кожного імені за зразком
const usersNames = ['Ivan', 'Petro', 'Olga', 'Ivan', 'Olga', 'Petro', 'Olga', 'Olga', 'Ivan', 'Ivan', 'Petro', 'Ivan']

const usersNamesObj = {}
for (const userName of usersNames) {
  if (userName in usersNamesObj) {
    usersNamesObj[userName]++
  } else {
    usersNamesObj[userName] = 1
  }
}
for (const key in usersNamesObj) {
  console.log(`${key} : ${usersNamesObj[key]}`)
}
// Задача. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде місяць через N місяців.
let userDate = {
  day: 23,
  month: 9,
  year: 2023,
}

// function getObjMonth(date, N) {
//     return ((date.month - 1 + N) % 12) + 1
// }

function getObjMonth({ month }, N) {
  return ((month - 1 + N) % 12) + 1
}
const currDate = getObjMonth(userDate, 3)
console.log(currDate)

/* ================================ */
// Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
console.log('Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями')
const siteDevCompany = [
  {
    // ----- Властивості ------
    name: 'dev 1', // назва компанії на час розробки (назву періодично змінюють)
    owner: 'Jon A', // власник компанії
    sponsors: [
      // споснсори (масив спонсорів) * прізвище спонсора * ім’я  спонсора * сума вкладень спонсора
      { surname: 'Rich A', name: 'Lucky A', price: 22000 },
      { surname: 'Rich B', name: 'Lucky B', price: 42000 },
      { surname: 'Rich C', name: 'Lucky C', price: 62000 },
    ],
    year: 2008, // рік випуску
    price: 100000, // вартість сайту
  },
  {
    name: 'dev 2',
    owner: 'Jon B',
    sponsors: [
      { surname: 'Rich Aa', name: 'Lucky Aa', price: 220000 },
      { surname: 'Rich Bb', name: 'Lucky Bb', price: 420000 },
      { surname: 'Rich Cc', name: 'Lucky Cc', price: 620000 },
    ],
    year: 2012,
    price: 200000,
  },
  {
    name: 'dev 3',
    owner: 'Jon C',
    sponsors: [
      { surname: 'Rich aAa', name: 'Lucky aAa', price: 10000 },
      { surname: 'Rich bBb', name: 'Lucky bBb', price: 32000 },
      { surname: 'Rich cCc', name: 'Lucky cCc', price: 50000 },
    ],
    year: 2018,
    price: 300000,
  },
  {
    name: 'dev 4',
    owner: 'Jon D',
    sponsors: [
      { surname: 'Rich 1 aAa', name: 'Lucky 1 aAa', price: 70000 },
      { surname: 'Rich 2 bBb', name: 'Lucky 2 bBb', price: 92000 },
      { surname: 'Rich 3 cCc', name: 'Lucky 3 cCc', price: 60000 },
    ],
    year: 2010,
    price: 400000,
  },
  {
    name: 'dev 5',
    owner: 'Jon F',
    sponsors: [
      { surname: 'Rich 4 aAa', name: 'Lucky 4 aAa', price: 72000 },
      { surname: 'Rich 5 bBb', name: 'Lucky 5 bBb', price: 75000 },
      { surname: 'Rich 6 cCc', name: 'Lucky 6 cCc', price: 1760 },
    ],
    year: 2005,
    price: 500000,
  },
]
// Знайти:
console.log('Знайти:')
// 1) загальну вартість усіх сайтів
const allPricesSites = siteDevCompany.reduce((sumSite, site) => (sumSite += site.price), 0)
console.log('1) загальну вартість усіх сайтів')
console.log(allPricesSites + '$')
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
console.log('2) кількість сайтів, що було зроблено між 2000 та 2009 рр.')
const countSitePeriod = siteDevCompany.reduce(
  (count, site) => (site.year >= 2000 && site.year <= 2009 ? count + 1 : count),
  0
)
console.log(countSitePeriod)
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
console.log('3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000')
console.log('--- 1')
const countSponsorsPriceBig = siteDevCompany.reduce(
  (count, site) =>
    count + site.sponsors.reduce((sponsorCount, elem) => (elem.price > 100000 ? sponsorCount + 1 : sponsorCount), 0),
  0
)
console.log(countSponsorsPriceBig)
console.log('--- 2')
let count = 0
for (const sites of siteDevCompany) {
  for (const sponsors of sites.sponsors) {
    if (sponsors.price > 100000) count++
  }
}
console.log(count)
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
console.log('4) створити загальний список усіх спонсорів')
let sponsors = []
for (const sites of siteDevCompany) {
  for (const sponsor of sites.sponsors) {
    sponsors.push(sponsor)
  }
}
console.log(sponsors)
// 5) знайти рік, коли прибуток був найбільшим
console.log('5) знайти рік, коли прибуток був найбільшим')
let maxInvestment = 0
let yearMax

for (const site of siteDevCompany) {
  const sum = site.sponsors.reduce((total, sponsor) => total + sponsor.price, 0)
  if (sum > maxInvestment) {
    maxInvestment = sum
    yearMax = site.year
  }
}
console.log(yearMax)
// 6) упорядкувати список за спаданням прибутку
console.log('6) упорядкувати список за спаданням прибутку')
const newSiteDevCompany = JSON.parse(JSON.stringify(siteDevCompany))
newSiteDevCompany.sort((a, b) => b.price - a.price)
console.log(newSiteDevCompany)
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
console.log(' 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти')
const bigPriceSite = siteDevCompany.filter((site) => site.price > 300000)
console.log(bigPriceSite)
const lessPriceSite = siteDevCompany.filter((site) => site.price < 300000)
console.log(lessPriceSite)
// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
const objYear = {
  day: 4,
  month: 10,
  year: 2023,
}

const monthNext = ({ month, year }, N) => {
  let years = Math.floor((month + N) / 12)
  return year + years
}
console.log(
  'Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.'
)
console.log(monthNext(objYear, 60))

// Задача 3. Ось приклад відповіді з одного з сайтів (масив об’єктів з інформацією про товари)

let dataList = [
  {
    id: 344277463,
    old_price: 1395,
    old_usd_price: '37.70',
    price: 1099,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '29.70',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 363766641,
    old_price: 0,
    old_usd_price: '0.00',
    price: 90,
    min_month_price: 0,
    sell_status: 'unavailable',
    status: 'active',
    usd_price: '2.43',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 339273715,
    old_price: 38,
    old_usd_price: '1.03',
    price: 25,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '0.68',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 330746665,
    old_price: 3087,
    old_usd_price: '83.43',
    price: 2548,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '68.86',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 344972806,
    old_price: 699,
    old_usd_price: '18.89',
    price: 549,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '14.84',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 318302299,
    old_price: 0,
    old_usd_price: '0.00',
    price: 8500,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '229.73',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 361430565,
    old_price: 3500,
    old_usd_price: '94.59',
    price: 1999,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '54.03',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 14429030,
    old_price: 3339,
    old_usd_price: '90.24',
    price: 2999,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '81.05',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 56340912,
    old_price: 2094,
    old_usd_price: '56.59',
    price: 1776,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '48.00',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 315292225,
    old_price: 1799,
    old_usd_price: '48.62',
    price: 1499,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '40.51',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 28437961,
    old_price: 42999,
    old_usd_price: '1162.14',
    price: 33999,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '918.89',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 339896833,
    old_price: 6399,
    old_usd_price: '172.95',
    price: 5899,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '159.43',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 364354149,
    old_price: 1600,
    old_usd_price: '43.24',
    price: 1500,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '40.54',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: {
      id: 106,
      discount_price: 1300,
      title: 'ціна по промокоду діє з 22.03 по 28.03',
      price_show_in_site_id: 5151,
      show_in_details: 1,
      show_in_catalog: 1,
      is_description: 1,
      promo_code: '',
      url_for_image: 'https://rozetka.com.ua/ua/promo/allgalaxies/',
      images: '',
      images_mobile: '',
      hide_price: 0,
    },
  },
  {
    id: 363184995,
    old_price: 0,
    old_usd_price: '0.00',
    price: 4499,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '121.59',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 98077846,
    old_price: 0,
    old_usd_price: '0.00',
    price: 3113,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '84.14',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 310694668,
    old_price: 0,
    old_usd_price: '0.00',
    price: 3000,
    min_month_price: 0,
    sell_status: 'unavailable',
    status: 'active',
    usd_price: '81.08',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 362812029,
    old_price: 0,
    old_usd_price: '0.00',
    price: 21700,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '586.49',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 361422708,
    old_price: 4100,
    old_usd_price: '110.81',
    price: 2699,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '72.95',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 318302257,
    old_price: 0,
    old_usd_price: '0.00',
    price: 8500,
    min_month_price: 0,
    sell_status: 'unavailable',
    status: 'active',
    usd_price: '229.73',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 310694498,
    old_price: 0,
    old_usd_price: '0.00',
    price: 2963,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '80.08',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 363651273,
    old_price: 5199,
    old_usd_price: '140.51',
    price: 4890,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '132.16',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 330747022,
    old_price: 3087,
    old_usd_price: '83.43',
    price: 2606,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '70.43',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 362617635,
    old_price: 4872,
    old_usd_price: '131.68',
    price: 2436,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '65.84',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 363614439,
    old_price: 5199,
    old_usd_price: '140.51',
    price: 4890,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '132.16',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
]
// 1) Загальну вартість (нові ціни - price)
console.log('1) Загальну вартість (нові ціни - price)')
const sumNewPrice = dataList.reduce((sprice, item) => (sprice += item.price), 0)
console.log(sumNewPrice)
// 2)Знайти кількість товарів, у яких ціна зменшилась (price < old_price).
console.log('2)Знайти кількість товарів, у яких ціна зменшилась (price < old_price).')
const countPriceChange = dataList.reduce((sum, item) => (item.price < item.old_price ? sum + 1 : sum), 0)
console.log(countPriceChange)
// 3) Товари, які доступні (sell_status:"available")
console.log('3) Товари, які доступні (sell_status:"available")')
const accessProduct = dataList.filter((item) => {
  if (item.sell_status === 'available') {
    return item
  }
})
console.log(accessProduct)
// 4) сформувати новий список об”єктів тільки доступних  для продажу товарів, які міститимуть тільки ідентифікатор товару (id), нову ціну (price), стару ціну (old_price), та ціну у доларах (usd_price)
console.log('4) сформувати новий список об”єктів тільки доступних  для продажу товарів')

const newDataList = dataList.map((item) => ({
  id: item.id,
  price: item.price,
  old_price: item.old_price,
  usd_price: item.usd_price,
}))
console.log(newDataList)
