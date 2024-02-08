//     Foydalanuvchidan yoshini, telefon raqamini hamda elektron pochtasini kiritishini so'rovchi dastur tuzing.
//   Telefon raqam quyidagi ko'rinishda bo'lishi shart ( +998991234567). Agar foydalanuvchi noto'g'ri formatdagi 
//   telefon raqam kiritsa uni to'g'ri kiritmaguncha qayta raqam kiritaversin. Foydalanuvchi yoshini to'g'ri kiritganiga 
//  e'tibor bering. Agar noto'g'ri kiritgan bolsa qayta kiritishini so'rang.  Foydalanuvchi email ni to'g'ri kiritsin. Agar 
//  email ni notogri kiritgan bolsa togri kiritsin.Foydalanuvchidan barcha malumotlarni to'g'ri holatda qabul qilib olgach yosi nechaga teng bo'lsa
//  yoshini teskari tartibda ekranga sanab chiqarsin (har 1 sekunddan keyin oraliq bilan) hamda 0 ga yetib kelganda barcha malumotlarini ekranga 
//  chiqarib bersin.
//  1. setInterval  2. try catch,  3. throw,   4. module  lardan foydalanilgan bolishi shart.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateAge(age) {
    if (isNaN(age) || age <= 0) {
        throw "Yoshni noto'g'ri kiritdingiz. Iltimos, qaytadan urinib ko'ring.";
    }
}

function validatePhoneNumber(phoneNumber) {
    if (!(/^\+9989\d{9}$/.test(phoneNumber))) {
        throw "Telefon raqam formati noto'g'ri. Iltimos, qaytadan urinib ko'ring (+998991234567 shaklda).";
    }
}

function validateEmail(email) {
    if (!(/^\S+@\S+\.\S+$/.test(email))) {
        throw "Emailni to'g'ri kiritmadingiz. Iltimos, qaytadan urinib ko'ring.";
    }
}

rl.question('Iltimos, yoshingizni kiriting: ', (age) => {
    try {
        validateAge(age);

        rl.question('Iltimos, telefon raqamingizni kiriting (+998991234567 shaklda): ', (phoneNumber) => {
            try {
                validatePhoneNumber(phoneNumber);
                
                rl.question('Iltimos, elektron pochtangizni kiriting: ', (email) => {
                    try {
                        validateEmail(email);
                        console.log(`Ma'lumotlar to'g'ri kiritildi. Yosh: ${age}, Telefon: ${phoneNumber}, Email: ${email}`);
                        rl.close();
                    } catch (error) {
                        console.log(error);
                        rl.close();
                    } 
                });
            } catch (error) {
                console.log(error);
                rl.close();
            }
        });
    } catch (error) {
        console.log(error);
        rl.close();
    }
});

