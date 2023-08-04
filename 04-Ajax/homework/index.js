let img = $('img')
let baseUrl = 'http://localhost:5000/amigos'

img.hide()

const fetchDataFriends = () => {
    img.show()
    $.get(baseUrl, (data) => {
        // console.log(data);
        let lista = $('#lista')
        lista.empty()
        data.map((item) => {
            lista.append(`<li>${item.name}</li>`)
        })
        img.hide()
    })
}

const inputClean = () => {
    $('#input').val('')
    $('#inputDelete').val('')
}

$('#boton').click(() => {
    fetchDataFriends()
})

$('#search').click(() => {
    let id = $('#input').val()
    // console.log(id)
    $.get(`${baseUrl}/${id}`, (data) => {
        // console.log(data)
        $('#amigo').text(data.name)
    })
    inputClean()
})

$('#delete').click(() => {
    let idDelete = $('#inputDelete').val()
    $.ajax({
        url: `${baseUrl}/${idDelete}`,
        type: 'DELETE',
        success: () => {
            $('#success').text(`Youre with ${idDelete} id was delete successfull`)
            fetchDataFriends()
            inputClean()
        }
    })
})