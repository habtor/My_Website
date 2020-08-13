function navbar_links_hide() {
    let btn = document.querySelector('.nav')
    let lnk = document.querySelector('.links')
    let orange_btn = document.querySelector(".dot1")

    btn.classList.toggle("shrink_nav")
    lnk.classList.toggle("hide_links")
    orange_btn.classList.toggle("dot1_back")
}

// ====================== Sticky navbar Hide ============

// function sticky_navbar_links_hide() {
//     let btn = document.querySelector('.sticky_nav')
//     let lnk = document.querySelector('.stiky_links')
//     let orange_btn = document.querySelector(".dot1")

//     btn.classList.toggle("shrink_sticky_nav")
//     lnk.classList.toggle("hide_sticky_links")
//     orange_btn.classList.toggle("dot1_back")
// }

// ==================== Green button ====================
function Container_size() {
    let green_btn = document.querySelector('.container')
    green_btn.classList.toggle("conainer_sz")
}

// ======================= themes container =============
function theme_hide() {
    let btn = document.querySelector('.theme_continer')
    let yellow_btn = document.querySelector(".dot2")
    let title_theme = document.querySelector(".themes_title")
    let circle_1 = document.querySelector(".circle_1")
    let circle_2 = document.querySelector(".circle_2")
    let circle_3 = document.querySelector(".circle_3")
    let circle_4 = document.querySelector(".circle_4")
    let circle_5 = document.querySelector(".circle_5")
    let circle_6 = document.querySelector(".circle_6")
    let circle_7 = document.querySelector(".circle_7")

    btn.classList.toggle("theme_show_hide")

    yellow_btn.classList.toggle("dot2_back")

    title_theme.classList.toggle("hide_title")

    circle_1.classList.toggle("circles_size")
    circle_2.classList.toggle("circles_size")
    circle_3.classList.toggle("circles_size")
    circle_4.classList.toggle("circles_size")
    circle_5.classList.toggle("circles_size")
    circle_6.classList.toggle("circles_size")
    circle_7.classList.toggle("circles_size")
}

// ================== show hide Name =============
function Show_hide_content() {

    // if (document.getElementById('show_hide_btnn').checked) {
    //     document.querySelector('.content').style.paddingRight = '0px'
    //     document.querySelector('.greeting').style.left = '300px'
    //     document.querySelector('.greeting').style.opacity = '0'
    //     document.querySelector('.line').style.width = '250px'
    //     document.querySelector('.line').style.left = '300px'
    //     document.querySelector('.line').style.opacity = '0'
    //     // document.querySelector('.fas').style.color = '#303030'
    // } else {
    //     document.querySelector('.content').style.paddingRight = '300px'
    //     document.querySelector('.greeting').style.left = '500px'
    //     document.querySelector('.greeting').style.opacity = '1'
    //     document.querySelector('.line').style.width = '700px'
    //     document.querySelector('.line').style.left = '80px'
    //     document.querySelector('.line').style.opacity = '1'
    //     // document.querySelector('.fas').style.color = '#fff'
    //     // document.querySelector('.fas').style.textShadow = '0 0 15px rgb(158, 158, 158)'
    // }


    let content = document.querySelector('.content')
    content.classList.toggle("padding_content")

    let greeting = document.querySelector(".greeting")
    greeting.classList.toggle("move_greeting")

    let line = document.querySelector(".line")
    line.classList.toggle("expand_line")



    let log_animi = document.querySelector(".logo")
    log_animi.classList.toggle("logo_animi")

    let mask_animi = document.querySelector("#path-1-outside-1")
    mask_animi.classList.toggle("mask_animi")



}

// function show_all() {
//     let content = document.querySelector('.show_btn_container')
//     let back = document.querySelector('.Back')
//     // let btnn = document.querySelector(".btnn")
//     content.classList.toggle("show_hide")
//     back.classList.toggle("show_hide")
//     // btnn.classList.toggle("show_hide")
// }


// ======================= Show Hide Links ============================

function Show_hide_links() {

    // if (document.getElementsByClassName('humbergerr').checked) {
    //     document.querySelector('.nav_links').style.transform = "translateX(120%)";

    // } else {
    //     document.querySelector('.nav_links').style.transform = "translateX(50%)";
    // }

     let humberger_btn = document.querySelector('.nav_links')
     humberger_btn.classList.toggle("show_hide_linkks")
}


// ============================= Themes ===============================

let theme_dots = document.getElementsByClassName("theme_circles")

for (let i = 0; theme_dots.length > i; i++) {
    theme_dots[i].addEventListener('click', function () {
        let theme = this.dataset.theme
        set_theme(theme)
    })
}

function set_theme(theme) {
    if (theme == "gold") {
        document.getElementById("theme_style").href = "styles/gold.css"
    }
    if (theme == "green") {
        document.getElementById("theme_style").href = "styles/green.css"
    }
    if (theme == "red") {
        document.getElementById("theme_style").href = "styles/red.css"
    }
    if (theme == "white") {
        document.getElementById("theme_style").href = "styles/white.css"
    }
    if (theme == "purble") {
        document.getElementById("theme_style").href = "styles/purble.css"
    }
    if (theme == "silver") {
        document.getElementById("theme_style").href = "styles/silver.css"
    }
    if (theme == "black") {
        document.getElementById("theme_style").href = "styles/style.css"
    }
}


//=================================== About Me =============================================



function about_navbar_maximaiz() {
    let green_btn = document.querySelector('.about_me_container')
    green_btn.classList.toggle("about_me_container_resize")
}

//=================================== My Work =============================================



function my_work_navbar_maximaiz() {
    let green_btn = document.querySelector('.my_work_background')
    green_btn.classList.toggle("my_work_resize")
}

//=================================== Contact Me ====================================

function contact_me_show_details() {
    let green_btn = document.querySelector('.social_media_container')
    green_btn.classList.toggle("show_hide_social_media")

    let github_btn = document.querySelector('.github')
    github_btn.classList.toggle("github_transform")

    let twiiter_btn = document.querySelector('.twitter')
    twiiter_btn.classList.toggle("twitter_transform")

    let linhed_btn = document.querySelector('.linked')
    linhed_btn.classList.toggle("linked_transform")

    let gmail_btn = document.querySelector('.gmail')
    gmail_btn.classList.toggle("gmail_transform")

    let contact_btn = document.querySelector('.contact_button')
    contact_btn.classList.toggle("contact_button_transform")

    let contact_btn_text = document.querySelector('.contacts_text')
    contact_btn_text.classList.toggle("contacts_text_transform")
}

// // ================================ SVG =============================================

// const logo = document.querySelectorAll(".logo path")

// for (let i = 0; i < (logo.length - 11); i++) {
//     console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
// }

// =========================== Sticky Navbar ==========================
window.onscroll = function () {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".styky_container").style.top = "2px";
    } else {
        document.querySelector(".styky_container").style.top = "-50px";
    }
};

// ===============  Contact Icons ======================================
// show_hide_iconss()

// function show_hide_iconss() {
//     let green_btn = document.querySelector('.footer_card')
//     green_btn.classList.toggle("margin_left")
//     let blue_btn = document.querySelector('.icons_grid')
//     blue_btn.classList.toggle("left")
// }

// // ============== Acknowledgments ===============

// function Show_hide_ack() {
//     let ack_btn = document.querySelector('.aknoledgment')
//     ack_btn.classList.toggle("hide_ack")
//     let ack_paragraph = document.querySelector('.acks_paragraph')
//     ack_paragraph.classList.toggle("hide_ack_paragraph")
// }

// // =============== Show hide itmes My work =============

// function show_hide_item() {
//     let show_btn = document.querySelector('.upper_part1')
//     show_btn.classList.toggle("upper_part_transform")

// }