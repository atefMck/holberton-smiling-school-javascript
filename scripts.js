$(document).on({
    ajaxStart: () => { $('#quotes').append('<div class="loader"></div>') },
    ajaxStop: () => { $('.loader').remove() }    
});

$(document).ready(function() {
    $.get("https://smileschool-api.hbtn.info/quotes", (data) => {
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            let quote =`\
            <div class="carousel-item carousel-item-content">\
                <div class="row">\
                    <div class="col-sm-3 text-center">\
                        <img class="rounded-circle" src="${element.pic_url}" class="d-block w-100" alt="random person image">\
                    </div>\
                    <div class="col-sm-8 ml-3 d-flex flex-column">\
                        <div>&lt;&lt; ${element.text} &gt;&gt;</div>\
                        <div class="font-weight-bold mt-3">${element.name}</div>\
                        <div>${element.title}</div>\
                    </div>\
                </div>\
            </div>`
            let quoteHTML = $.parseHTML(quote)
            if (i === 0) quoteHTML[1].classList.add("active");
            $('#quotes').append(quoteHTML)
        }
    });
});