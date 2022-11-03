//// Basic Data Types
//console.log('x-----x-----x-----x-----x-----x-----x-----x-----x-----x-----')
//console.log('Basic Data Types')
//const integer_or_string = `testing_any_kind_of_words`
//console.log(integer_or_string)
//
//console.log('x-----x-----x-----x-----x-----x-----x-----x-----x-----x-----')
//// Functions are also a type of data, a fact whose implications we will explore
//// the type of function () { [ native code ] } is function
//console.log('Functions are also a type of data, a fact whose implications we will explore')
//// Python 
//// for x in x.list:
////  print('x')
//const otherValues = [true, undefined, null]
//for (let value of otherValues) {
//    console.log('the type of', value, 'is', typeof value)
//}
//console.log('x-----x-----x-----x-----x-----x-----x-----x-----x-----x-----')
////Control Flow
////rows = 5
////# outer loop
////for i in range(1, rows + 1):
////    # inner loop
////    for j in range(1, i + 1):
////        print("*", end=" ")
////    print('')
//
//const nested = [['northwhest', 'northeast'], ['southwest', 'southeast']]
//for (let outer of nested) {
//    for (let inner of outer) {
//        console.log(inner)
//    }
//}
//
//console.log('x-----x-----x-----x-----x-----x-----x-----x-----x-----x-----')
//
//const values = [0 ,1 ]
//for (let element of values) {
//    if (element == 0) {
//        console.log('element == 0')
//    } 
//    else {
//        console.log(element != 0)
//    }
//
//}
//
//console.log('x-----x-----x-----x-----x-----x-----x-----x-----x-----x-----')

//for (let color of ['red', 'green', 'blue']) {
//    const message = `color is ${color}`
//    console.log(message,  `and capitalized is ${color.toUpperCase()}`)
//}

//Objects

const creature = {
    'order':'Primates',
    'family':'Callitrichidae',
    'genus':'Callithrix',
    'species':'Jacchus'
}

console.log(`creature is ${creature}`)
console.log(`creature.genus is ${creature.genus}`)

for (let key in creature) {
    console.log(`creature[${key}] is ${creature[key]}`)
}