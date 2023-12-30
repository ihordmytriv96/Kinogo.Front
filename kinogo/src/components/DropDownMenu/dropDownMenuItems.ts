export interface dropMenuItems {
    id:number;
    name: string;
    isHeader?: boolean;
}


const items: dropMenuItems[] = 
[
{id: 0, name: "Всі фільми", isHeader: true},
{id: 1, name: "Екнш"},
{id: 2, name: "Детективи"},
{id: 3, name: "Драми"},
{id: 4, name: "Історичні"},
{id: 5, name: "Комедії"},
{id: 6, name: "Військові"},
{id: 7, name: "Спортивні"},
{id: 8, name: "Документальні"},
]

const items2: dropMenuItems[] = 
[
{id: 0, name: "Біографічні", isHeader: true},
{id: 1, name: "Трилери"},
{id: 2, name: "Мелодрами"},
{id: 3, name: "Сімейні"},
{id: 4, name: "Фантастичні"},
{id: 5, name: "Вестерни"},
{id: 6, name: "Кримінальні"},
{id: 7, name: "Фентезійні"},
{id: 8, name: "Оригінал"},
]

const items3: dropMenuItems[] = 
[
{id: 0, name: "Пригодницькі", isHeader: true},
{id: 1, name: "подорож в часі"},
{id: 2, name: "про виживання"},
{id: 3, name: "про мандри"},
{id: 4, name: "постапокаліпсис"},
{id: 5, name: "Романтичні", isHeader: true},
{id: 6, name: "про любов"},
{id: 7, name: "історії кохання"},
{id: 8, name: "романтична комедії"},
]

const items4: dropMenuItems[] = 
[
{id: 0, name: "Жахи", isHeader: true},
{id: 1, name: "жахи з оскаром"},
{id: 2, name: "буде страшно"},
{id: 3, name: "класичні монстри"},
{id: 4, name: "Стівен Кінг"},
{id: 5, name: "За коміксами", isHeader: true},
{id: 6, name: "Marvel"},
{id: 7, name: "DC comics"},
{id: 8, name: "по манзі та аніме"},
]

const items5: dropMenuItems[] = 
[
{id: 0, name: "Студії", isHeader: true},
{id: 1, name: "Warner Bros."},
{id: 2, name: "Netflix"},
{id: 3, name: "Legendary Pictures"},
{id: 4, name: "SONY"},
]

export const dropMenuList: dropMenuItems[][] = [items, items2, items3, items4, items5];