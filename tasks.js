//1) დაწერეთ ფუნქცია processNumbers, რომელიც პარამეტრად იღებს ორ რიცხვს და callBack ფუნქციას.
// და ამ ფუნქციის გამოძახებით უნდა შესრულდეს არითმეტიკული
//ოპერაციები ციფრებზეც მაგალითად მიმატება ან გამოკლება რომელიც უნდა გვეწეროს callBack ფუნქციაში.

// function processNumbers(num1, num2, callBack) {
//     return callBack(num1, num2);
//   }
  
//   function addNumbers(a, b) {
//     return a * b;
//   }
  
//   console.log(processNumbers(4, 5, addNumbers));

//2)შექმენით ფუნქცია isValidUser, რომელიც იღებს მომხმარებლის სახელს და პაროლს პარამეტრად
//და აბრუნებს true, თუ ორივე ცარიელი სტრიქონებია; წინააღმდეგ შემთხვევაში,
//დააბრუნეთ ყალბი. გამოიყენეთ ლოგიკური ოპერატორები.დაგჭირდებათ გაიგოთ მონაცემთა ტიპი
//და ისე შეამოწმოთ თუ სტრინგი აქვს ტიპად!!


// function isValidUser(userName,Password) {
//     if(userName === '' && Password === ''){
//         return true
//     }else if(userName !== '' || Password !== ''){
//         return false
//     }
//     else{
//         return 'something'
//     }
    
// }
// console.log(isValidUser(String(prompt('enter username')),String(prompt('enter password'))))

//3)შექმენით რეკურსიული ფუნქცია, რომელიც დააბრუნებს n რიცხვს ფიბონაჩის მიმდევრობაში.

// function retunFibonacci(n) {
//     if(n <= 1){
//         return n
//     }else{
//         return retunFibonacci(n - 1) + retunFibonacci(n - 2)
//     }
// }
// console.log(retunFibonacci(prompt('enter number'))) //ჩემი ვარიანტი


// function retunFibonacci(n) {
//     if(n <= 0){
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         return retunFibonacci(n - 1) + retunFibonacci(n - 2);
//     }
// }

// let userInput = parseInt(prompt('Enter a positive integer'));
// if (!isNaN(userInput) && userInput >= 0) {
//     console.log(retunFibonacci(userInput));
// } else {
//     console.log("Invalid Input");
// } // updated ვარიანტი





//4)შექმენით უკუმთვლელი ტაიმერი, რომელიც ითვლის 10-დან 0 წამამდე, შემდეგ დაბეჭდავს "დრო ამოიწურა!".
//გამოიყენეთ setInterval მეთოდი და დროის დასრულების შემდეგ უნდა დავამთავროთ ტაიმერი!!

// function Timer(num) {
//    let timerItnerval = setInterval(() => {
//         if(num === 0){
//             clearInterval(timerItnerval)
//             console.log('დრო ამოიწურა')
//         }
//         else{
//             console.log(num)
//             num--
//         }
//     }, 1000);
   
    
// }
// Timer(10)


//5)შექმენით ფუნქცია, რომელიც ითვლის და აბრუნებს ასაკს მოცემული დაბადების თარიღის მიხედვით თარიღის ობიექტების გამოყენებით.

// function yourAge(yourBirthDate) {
    
//     let currentDate = new Date().getFullYear()
//     let Age = currentDate - yourBirthDate
//     if(yourBirthDate > currentDate){
//         return 'wrong input'
//     }
//     return Age
    
    
// }
// console.log(yourAge(prompt('enter birth year')))




//6) დაწერეთ ფუნქცია, რომელიც ბეჭდავს კვირის მიმდინარე დღის
// სახელს თარიღის გამოყენებით.დაგჭირდებათ array-ში შეინახოთ
//კვირის დღეები და ისე შეამოწმოთ new Date() დახმარებით!!