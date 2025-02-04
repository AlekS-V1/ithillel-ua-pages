const buttons = document.querySelectorAll('.discover__button'); // шукаєм кнопки та вкладаемо у змінну
const cards = document.querySelectorAll('.discover__cards'); // шукаєм списки/закладки та вкладаемо у змінну


buttons.forEach(button => {                   // щоб підсвітити кнопку у змінній з кнопками 
    button.addEventListener('click', () => {  //шукаем/очікуєм подію натискання користувачем на кнопку
    buttons.forEach((button) => {            // у змінній з кнопкамі 
        button.classList.remove('active')    // прибираєм стиль("активна кнопка") на усіх кнопках 
    });
        
        const cardFor = button.dataset.for; // шукаем назви кнопок з назвою пареметра for та вкладаем їх у змінну для набора карток
        cards.forEach((card) => {        // у змінній з картками
            card.classList.remove('active'); //прибираєм стиль("активний набор карткок") на усіх наборах
        });
        
        cards.forEach(card => {             // тепер в неактивному списку наборів карток
            const tab = card.dataset.tab;   // у змінну вкладаєемо назви наборів карток з назвою параметра tab
            if (tab === cardFor) {          // якщо назва набора карток tab дорівнює назві з парметром for змінної cardFor
                card.classList.add('active'); // тоді змінной card с циєю назвою набором карток присвоитик класзначення "активна"
            }
        })
        button.classList.add('active');    //а додається стиль ("активна кнопка") тільки на кнопці яка щойно була натиснута
    });
   
}
);

