module.exports = function () {
    var faker = require("faker");
    var Mock=require('mockjs')
    var random=Mock.Random;
    faker.locale = "zh_CN";
    var _ = require("lodash");
    return {
        people: _.times(100, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar()
            }
        }),
        address: _.times(11, function (n) {
            return {
                id: faker.random.uuid(),
                city: faker.address.city(),
                county: faker.address.county()
            }
        }),
        ban: _.times(10, function (n) {
            return {
               url:random.image('1903x350',random.color(),random.word(5))
            }
        }),
        amdqData: _.times(43, function (n) {
            return {
               decs:faker.random.word(),
               rate:random.integer(1,100),
               month:random.integer(1,12),
               amount:random.integer(10000,100000),
               progress:random.integer(1,100),
               soldout:random.boolean(),
               id:random.integer(1,100)
            }
        }),
        rgjl: _.times(43, function (n) {
            return {
               pc:random.integer(0,1),
               username:random.integer(13000000000,13999999999),
               money:random.integer(100,1000000),
               date:random.date("yyyy-MM-dd"),
               way:random.integer(1,2)
            }
        }),
        hkjh: _.times(43, function (n) {
            return {
               money:random.integer(100,1000000),
               date:random.date("yyyy-MM-dd"),
               status:random.integer(1,4)
            }
        }),
    }
}