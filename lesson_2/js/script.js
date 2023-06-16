document.write("hello")
//task№0
// Введення
let a = parseFloat(prompt("Значення a", "0"))
let b = parseFloat(prompt("Значення b", "0"))
let c = parseFloat(prompt("Значення c", "0"))

// Обчислення
let S1 = a+12+b
let S2 = Math.sqrt((a+b)/(2*a))
let S3 = Math.cbrt((a+b)*c)
let S4 = Math.sin(a/-b)

// Виведення
document.write (`S1 = ${S1.toFixed(2)} <br>`)
document.write (`S2 = ${S2.toFixed(2)} <br>`)
document.write (`S3 = ${S3.toFixed(2)} <br>`)
document.write (`S4 = ${S4.toFixed(2)} <br>`)

// console.log(`S1 = ${S1.toFixed(2)}`);
      // console.log(`S2 = ${S2.toFixed(2)}`);
      // console.log(`S3 = ${S3.toFixed(2)}`);
      // console.log(`S4 = ${S4.toFixed(2)}`);
      
      //task1

 //Введення
 let firstNumber = parseFloat(prompt("Перше число", "0"))
 let secondNumber = parseFloat(prompt("Друге число", "0"))

 // Обчислення
 let sumNumbers = firstNumber+secondNumber;
 let productNumbers = firstNumber*secondNumber;
 let fractionNumbers = firstNumber/secondNumber;   

 // task2
 // console.log(`суму = ${sumNumbers}`);
 // console.log(`добуток = ${productNumbers}`);
 // console.log(`частку = ${fractionNumbers}`);

 document.write (`
    <table border=1px>
       <tr>
          <th></th>
          <th>СУМА</th>
          <th>ДОБУТОК</th>
          <th>ЧАСТКА</th>
       </tr>
       <tr>
          <td>РЕЗУЛЬТАТ</td>
          <td>${sumNumbers}</td>
          <td>${productNumbers}</td>
          <td>${fractionNumbers}</td>
       </tr>
    </table>
 `)

 //Задача№2
  // Введення
  let yearBirth = parseInt(prompt("Рік народження", "1991"))
  let yearCurrent = parseInt(prompt("Поточний рік", "2023"))
   // Обчислення
   let currentAge = yearCurrent-yearBirth
   // Виведення
   document.write (`Кількість років = ${currentAge}`)

   //Задача№3
   // Введення
   let priceItem = parseFloat(prompt("Вартість одиниці товару", "0"))
   let quantityItems = parseInt(prompt("Кількість товару", "0"))
   let taxPercent = 0.05
   // Обчислення
   let totalItemsPrice = priceItem*quantityItems
   let totalItemsTax = totalItemsPrice * taxPercent
   // Виведення
   document.write (`Загальна вартість товару = ${totalItemsPrice} <br>`)
   document.write (`ПДВ = ${totalItemsTax} <br>`)

   //Задача№4
    // Введення
    let lengthCentimeter = parseFloat(prompt("довжину у сантиметрах", "0"))
    const oneCentimeterPerMeter  = 0.01
    const oneMeterPerKilometer  = 0.001

    // Обчислення
    let lengthMeters = lengthCentimeter*oneCentimeterPerMeter
    let lengthKilometers = lengthMeters*oneMeterPerKilometer

    // Виведення
    document.write (`Довжина у метрах  = ${lengthMeters} <br>`)
    document.write (`Довжина у кілометрах = ${lengthKilometers} <br>`)

    //Задача№5
    // Введення
    let numberSeconds = parseInt(prompt("Кількість секунд", "0"))
    const secondsPerHour = 3600
    const minutesPerHour = 60

    //Обчислення
    let numberHours =  Math.floor(numberSeconds/secondsPerHour);
    let numberMinuts = Math.floor((numberSeconds-numberHours*secondsPerHour)/minutesPerHour);
    // let numberMinuts = Math.floor((numberSeconds%secondsPerHour)/minutesPerHour);
   
    //Виведення
    document.write (`${numberHours + "год."} ${numberMinuts + "хв."} <br>`)

    //Задача№6
     // Введення
     let quantityProductOne = parseFloat(prompt("Кількість першого товару", "0"))
     let costProductOne = parseFloat(prompt("вартість першого товару", "0"))
     let quantityProductTwo = parseFloat(prompt("Кількість другого товару", "0"))
     let costProductTwo = parseFloat(prompt("вартість другого товару", "0"))
     let quantityProductThree = parseFloat(prompt("Кількість третього товару", "0"))
     let costProductThree = parseFloat(prompt("вартість третього товару", "0"))
     
     // Обчислення
     let totalCostProductOne = costProductOne*quantityProductOne;
     let totalCostProductTwo = costProductTwo*quantityProductTwo
     let totalCostProductThree = costProductThree*quantityProductThree
     let totalPrice = totalCostProductOne+totalCostProductTwo+totalCostProductThree

     // Виведення
     document.write (`
        <table>
           <tr>
              <th>Найменування</th>
              <th>Кількість</th>
              <th>Ціна</th>
              <th>Сума</th>
           </tr>
           <tr>
              <td>Перший товар</td>
              <td>${quantityProductOne}</td>
              <td>${costProductOne}</td>
              <td>${totalCostProductOne}</td>
           </tr>
           <tr>
              <td>Другий товар</td>
              <td>${quantityProductTwo}</td>
              <td>${costProductTwo}</td>
              <td>${totalCostProductTwo}</td>
           </tr>
           <tr>
              <td>Третій товар</td>
              <td>${quantityProductThree}</td>
              <td>${costProductThree}</td>
              <td>${totalCostProductThree}</td>
           </tr>
           <tr>
              <th>Всьго</th>
              <th></th>
              <th></th>
              <th>${totalPrice}<th>
           </tr>
        </table>
     `)
     //Задача№7
       // Введення
       let minNumberMonth = 1
       let maxNumberMonth = 12
       let minNumberDay = 0
       let maxNumberDay = 6
 
       // Обчислення
       let totalRandomNumberMonth = minNumberMonth + Math.floor(Math.random()*(maxNumberMonth-minNumberMonth+1))
       let totalRandomNumberDay = minNumberDay + Math.floor(Math.random()*(maxNumberDay-minNumberDay+1))
       let sumRandom = totalRandomNumberMonth+totalRandomNumberDay
 
       // Виведення
       document.write (`Сума випадкового номера місяця = ${totalRandomNumberMonth} <br>`)
       document.write (`Сума випадкового номера дня = ${totalRandomNumberDay} <br>`)
       document.write (`Сума випадкового номера = ${sumRandom} <br>`)