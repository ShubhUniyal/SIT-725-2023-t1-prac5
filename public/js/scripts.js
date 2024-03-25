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


const cards = [
    { name: 'Student Clubs', desc: 'Great way to meet like-minded individuals, develop leadership skills. ', img: 'https://img.freepik.com/premium-vector/happy-students-with-books-isolated-background_165429-745.jpg' },
    { name: 'Fitness Classes', desc: 'Attend fitness classes or utilize the college gym facilities', img: 'https://t3.ftcdn.net/jpg/02/35/79/28/360_F_235792895_0SoLUsJ2PVOnjLWRtAqd6gLDuKJaDw93.jpg' },
    { name: 'Cultural Events', desc: ' Attend cultural events, performances, art exhibitions.', img: 'https://png.pngtree.com/element_our/20200703/ourlarge/pngtree-cartoon-cute-vector-free-female-dance-student-in-dance-training-class-image_2300688.jpg' },
];
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
    clickMe();
    $('#modal1').modal('close');
    }

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        $('#modal1').modal('open');
    });
    
    $('.modal').modal();
    $('#formSubmit').click(()=>{
        submitForm();
        })
    for (let card of cards) {
        $('#card-container').append(createCard(card.name, card.desc, card.img));
    }
});



