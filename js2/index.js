
const week = Number(prompt("1-7 gacha son kiriting"))
switch (week) {
    case 1:
        let day1 = document.querySelector('#title');
        day1.textContent = "Dushanba"
        break;

        case 2:
            let day2 = document.querySelector('#title');
            day2.textContent = "Seshanba"
            break;

            case 3:
                let day3 = document.querySelector('#title');
                day3.textContent = "Chorshanba"
                break;

                case 4:
                    let day4 = document.querySelector('#title');
                    day4.textContent = "Payshanba"
                    break;

                    case 5:
                        let day5 = document.querySelector('#title');
                        day5.textContent = "Juma"
                        break;

                        case 6:
                            let day6 = document.querySelector('#title');
                            day6.textContent = "Shanba"
                            break;

                            case 7:
                                let day7 = document.querySelector('#title');
                                day7.textContent = "Yakshanba"
                                break;

    default:
        let exp = document.querySelector('#title')
       
        exp.textContent = "faqat 1-7 gacha son kiriting" 
         
              break;
}
