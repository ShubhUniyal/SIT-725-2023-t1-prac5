function createCard(name, desc, img) {
    return `
        <div class="col s4">
            <div class="card">
                <div class="card-image">
                    <img src=${img}>
                </div>
                <div class="card-content">
                    <span class="card-title">${name}</span>
                    <p>${desc}</p>
                </div>
            </div>
        </div>
    `;
}

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}
const submitForm = () => {
    let formData = {
        name: $('#card_title').val() + ' ' + $('#card_by').val(),
        desc: $('#card_desc').val(),
        img: $('#card_img').val() // Provide a default image URL or fetch from user input
    };

    // Send form data to the server
    $.post('/api/addCard', formData, (response) => {
        if (response.statusCode == 200) {
            getcards();
            $('#modal1').modal('close');
        } else {
            alert('Failed to add card. Please try again.');
        }
    });
};

const getcards = () => {
    $.get('/api/cards', (response) => {
        if (response.statusCode == 200) {
            addCards(response.data);
        }
    })
}

const addCards = (cards) => {
    let cardsContainer = $("#card-container");
    cardsContainer.html('');
    cards.forEach((card) => {
        cardsContainer.append(createCard(card.name, card.desc, card.img));
    });
}


$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        $('#modal1').modal('open');
    });
    getcards();
    $('.modal').modal();
    $('#formSubmit').click(() => {
        submitForm();
    })
});