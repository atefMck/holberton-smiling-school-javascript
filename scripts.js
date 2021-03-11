$(document).on({
    ajaxStart: () => { $('#quotes').append('<div class="loader"></div>') },
    ajaxStop: () => { $('.loader').remove() }    
});
$(document).ready(function() {
    $.get("https://smileschool-api.hbtn.info/quotes", (data) => {
        for (let i = 0; i < data.length; i++) {
            let quote = data[i];
            let quoteSTR =`
            <div class="carousel-item carousel-item-content">
                <div class="row">
                    <div class="col-sm-3 text-center">
                        <img class="rounded-circle" src="${quote.pic_url}" class="d-block w-100" alt="random person image">
                    </div>
                    <div class="col-sm-8 ml-3 d-flex flex-column">
                        <div>&lt;&lt; ${quote.text} &gt;&gt;</div>
                        <div class="font-weight-bold mt-3">${quote.name}</div>
                        <div>${quote.title}</div>
                    </div>
                </div>
            </div>`
            let quoteHTML = $.parseHTML(quoteSTR)
            if (i === 0) $(quoteHTML[1]).addClass("active")
            $('#quotes').append(quoteHTML)
        }
    });

    $.get("https://smileschool-api.hbtn.info/popular-tutorials", (data) => {
        for (let i = 0; i < data.length; i++) {
            let card = data[i];
            starsHTML = ""
            for (let j = 0; j < 5; j++) {
                if (j < card.star) {
                    starHTML = '<img src="./images/star_on.png" class="mr-1 carousel-star-icon" alt="star icon filled in purple">'
                } else {
                    starHTML = '<img src="./images/star_off.png" class="carousel-star-icon" alt="star icon filled in grey">'
                }
                starsHTML = starsHTML + starHTML
            }
            let cardSTR =`
            <div class="text-center col-12 col-sm-6 col-md-3">
                <div class="carousel-item">
                    <img class="w-100" src="${card.thumb_url}" alt="smile image">
                    <div class="mx-3">
                        <div class="font-weight-bold text-dark text-left mt-3">
                            ${card.title}
                        </div>
                        <div class="text-secondary text-left mt-3 mb-3">
                            ${card["sub-title"]}
                        </div>
                        <div class="d-flex align-items-center mb-3">
                            <img src="${card.author_pic_url}" class="rounded-circle mr-3 video-carousel-img-profile" alt="profile image">
                            <div class="purple-text font-weight-bold">${card.author}</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="d-flex pt-1" id="stars">
                                ${starsHTML}
                            </div>
                            <div class="purple-text font-weight-bold">
                                ${card.duration}
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            let cardHTML = $.parseHTML(cardSTR)
            if (i < 5) $(cardHTML[1].children[0]).addClass("active")
            $('#videocards').append(cardHTML)
        }
    });

    $.get("https://smileschool-api.hbtn.info/latest-videos", (data) => {
        for (let i = data.length - 1; i >= 0; i--) {
            let video = data[i];
            starsHTML = ""
            for (let j = 0; j < 5; j++) {
                if (j < video.star) {
                    starHTML = '<img src="./images/star_on.png" class="mr-1 carousel-star-icon" alt="star icon filled in purple">'
                } else {
                    starHTML = '<img src="./images/star_off.png" class="carousel-star-icon" alt="star icon filled in grey">'
                }
                starsHTML = starsHTML + starHTML
            }
            let videoSTR =`
            <div class="text-center col-12 col-sm-6 col-md-3">
                <div class="carousel-item active">
                    <img class="w-100" src="${video.thumb_url}" alt="smile image">
                    <div class="mx-3">
                        <div class="font-weight-bold text-dark text-left mt-3">
                            ${video.title}
                        </div>
                        <div class="text-secondary text-left mt-3 mb-3">
                            ${video["sub-title"]}
                        </div>
                        <div class="d-flex align-items-center mb-3">
                            <img src="${video.author_pic_url}" class="rounded-circle mr-3 video-carousel-img-profile" alt="profile image">
                            <div class="purple-text font-weight-bold">${video.author}</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="d-flex pt-1">
                                ${starsHTML}
                            </div>
                            <div class="purple-text font-weight-bold">
                                ${video.duration}
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            let videoHTML = $.parseHTML(videoSTR)
            if (i < 5) $(videoHTML[1].children[0]).addClass("active")
            $('#latestvids').append(videoHTML)
        }
    });

    // $("#user_search").change(filterKeywoard())
    $("#user_search").on('change', function() {
        let value = $(this).val()
        let topic = 
        $.get("https://smileschool-api.hbtn.info/courses", (data) => {
            for (let k = 0; k < data.courses.length; k++) {
                let course = data.courses[k];
                // starsHTML = ""
                // for (let j = 0; j < 5; j++) {
                //     if (j < course.star) {
                //         starHTML = '<img src="./images/star_on.png" class="mr-1 carousel-star-icon" alt="star icon filled in purple">'
                //     } else {
                //         starHTML = '<img src="./images/star_off.png" class="carousel-star-icon" alt="star icon filled in grey">'
                //     }
                //     starsHTML = starsHTML + starHTML
                // }
                // let courseSTR =`
                // `
                // let courseHTML = $.parseHTML(courseSTR)
                // if (i < 5) $(courseHTML[1].children[0]).addClass("active")
                // $('#latestvids').append(courseHTML)
            }
        })
    });
}




/* <div class="text-center col-12 col-sm-4 col-md-3 mb-5">
    <div class="carousel-item active">
        <img class="w-100" src="./images/thumbnail_4.jpg" alt="smile image">
        <div class="mx-3">
            <div class="font-weight-bold text-dark text-left mt-3">
                Diagonal Smile
            </div>
            <div class="text-secondary text-left mt-3 mb-3">
                Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.
            </div>
            <div class="d-flex align-items-center mb-3">
                <img src="./images/profile_4.jpg" class="rounded-circle mr-3 video-carousel-img-profile" alt="profile image">
                <div class="purple-text font-weight-bold">Phillip massey</div>
            </div>
            <div class="d-flex justify-content-between">
                <div class="d-flex pt-1">
                    <img src="./images/star_on.png" class="mr-1 carousel-star-icon" alt="star icon filled in purple">
                    <img src="./images/star_on.png" class="mr-1 carousel-star-icon" alt="star icon filled in purple">
                    <img src="./images/star_on.png" class="mr-1 carousel-star-icon" alt="star icon filled in purple">
                    <img src="./images/star_on.png" class="mr-1 carousel-star-icon" alt="star icon filled in purple">
                    <img src="./images/star_off.png" class="carousel-star-icon" alt="star icon filled in grey">
                </div>
                <div class="purple-text font-weight-bold">
                    8 min
                </div>
            </div>
        </div>
    </div>
</div> */