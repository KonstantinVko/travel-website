let swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let backroundStories = 'default';

function changeBackground() {
    let storiesBlock = document.getElementById('stories');

    let title = document.querySelector('.stories h3');
    let text = document.querySelector('.stories p');

    if (backroundStories === 'default') {
        storiesBlock.style.background = "url('images/beach.jpg') no-repeat";
        storiesBlock.style.backgroundSize = 'cover';
        backroundStories = 'changed';

        title.innerText = "Evening trips to the beach are allowed!";
        text.innerText = "Trips to the seaside, the New Forest, favourite walks and cycle trails, plus top outdoor attractions such as castles, are all back within range of Londoners desperate to get out of the capital after lockdown, the Government confirmed to the Standard."

    }
    else {
        storiesBlock.style.background = "url('images/Surf-Air-Pilatus_1.jpg') no-repeat";
        backroundStories = 'default';
        storiesBlock.style.backgroundSize = 'cover';

        title.innerText = "How To Fly A Private Jet On Your Next Trip";
        text.innerText = "The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon\n" +
            "                    National Park ranks as three of the most magnificent & awe inspiring."
    }
}


function playVideo(vid, button) {

    function playAndChangeButton() {
        vid.play();
        button.children[0].style.border = "12px solid white";
        button.children[0].style.margin = "0";
        document.addEventListener('click', function (event) {
            let isClickInside = vid.contains(event.target);
            if (!isClickInside) {

            }
        });
    }
    function pauseAndChangeButton() {
        button.children[0].style.border = "none";
        button.children[0].style.borderTop = "15px solid transparent";
        button.children[0].style.borderLeft = "20px solid white";
        button.children[0].style.borderBottom = "15px solid transparent";
        button.children[0].style.marginLeft = "6px";
        vid.pause();
    }

    if (vid.paused) {
        playAndChangeButton();
    } else {
        pauseAndChangeButton();
    }
}