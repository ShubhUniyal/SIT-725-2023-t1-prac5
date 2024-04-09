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
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    console.log("Form Data Submitted: ", formData);
    $('#modal1').modal('close');

}

const getcards = () => {
    $.get('/api/cards', (response) => {
        if (response.statusCode == 200) {
            addCards(response.data);
        }
    })
}

const addCards = (cards) => {
    let cardsContainer = $("#card-container");
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