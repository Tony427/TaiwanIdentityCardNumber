var city = {
    臺北市: "10A",
    臺中市: "11B",
    基隆市: "12C",
    臺南市: "13D",
    高雄市: "14E",
    臺北縣: "15F",
    宜蘭縣: "16G",
    桃園縣: "17H",
    新竹縣: "18J",
    苗栗縣: "19K",
    臺中縣: "20L",
    南投縣: "21M",
    彰化縣: "22N",
    雲林縣: "23P",
    嘉義縣: "24Q",
    臺南縣: "25R",
    高雄縣: "26S",
    屏東縣: "27T",
    花蓮縣: "28U",
    臺東縣: "29V",
    澎湖縣: "30X",
    陽明山: "31Y",
    金門縣: "32W",
    連江縣: "33Z",
    新竹市: "35O",
    嘉義市: "34I"
};

var gender = {
    男: "1",
    女: "2"
};

function getRandom() {
    var random = (Math.random()).toString().substring(2, 9);
    return random;
}

/* 計算 sex 的加權值 */
function getGenderWeighted(gender) {
    var result = 0;
    result += gender * 8;
    return result;
}

/* 計算中間值的加權值 */
function getMidWeighted(random) {
    var result = 0;
    for (var i = 0; i < random.length; i++) {
        result = result + (7 - i) * random.substring(i, i + 1);
    }
    return result;
}

/* 計算縣市的加權值 */
function getCityWeighted(city) {
    var result = 0;
    result = city.substring(0, 1) + city.substring(1, 2) * 9;
    return result;
}

/* 計算所有的加權值 */
function calculateWeighted(city, gender, random) {
    var result = 0;
    result = getCityWeighted(city) + getGenderWeighted(gender) + getMidWeighted(random);
    result = result % 10;
    result = 10 - result;
    result = result % 10;
    return result;
}

function getID(city, gender) {
    var result = "";
    var checkSum = 0;

    var random = getRandom();
    checkSum = calculateWeighted(city, gender, random);

    result += city.substring(2, 3);
    result += gender;
    result += random;
    result += checkSum.toString();

    return result;
}

var TaiwanIdentityCardNumber = {
    getID: getID,
    city: city,
    gender: gender
};

module.exports = TaiwanIdentityCardNumber;