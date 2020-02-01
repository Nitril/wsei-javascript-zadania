var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }

]


var iterateAll = function (obj) {


    for (var property in obj) {

        if (obj.hasOwnProperty(property) && (typeof obj[property] === "object")) {
            //if (Object.prototype.hasOwnProperty.call(obj, property)&& (typeof obj[property] === "object")) {
            iterateAll(obj[property]);
        }
        else console.log(`property : ${property}, value: ${obj[property]}\n`);



    }


}

iterateAll(animals)