const elInput = Number(document.querySelector('#input'))
const elParagraph = document.createElement('p');
const elBody = document.querySelector('body');
const elBtn = document.querySelector('.btn')

switch (elInput) {
    case 1:
        elParagraph.textContent= 'Dushanba'
        elBody.appendChild(elParagraph);
        break;
        case 2:
            elParagraph.textContent= 'Seshanba'
            elBody.appendChild(elParagraph);
            break;

            case 3:
                elParagraph.textContent= 'Chorshanba'
                elBody.appendChild(elParagraph);
                break;

                case 4:
                    elParagraph.textContent= 'Payshanba'
                    elBody.appendChild(elParagraph);
                    break;

                    case 5:
                        elParagraph.textContent= 'Juma'
                        elBody.appendChild(elParagraph);
                        break;
                        case 6:
                            elParagraph.textContent= 'Shanba'
                            elBody.appendChild(elParagraph);
                            break;

                            case 7:
                                elParagraph.textContent= 'Yakshanba'
                                elBody.appendChild(elParagraph);
                                break;
                        

    default:
        elParagraph.textContent= "noto'g'ri raqam kirittingiz"
         elBody.appendChild(elParagraph);
        break;
}



