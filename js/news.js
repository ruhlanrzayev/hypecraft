const news = [
    {
        id: 1,
        src: "https://c4.wallpaperflare.com/wallpaper/948/782/354/minecraft-minecraft-dungeons-ocean-view-minecraft-dungeons-hidden-depths-4k-hd-wallpaper-preview.jpg",
        heading: "News Heading",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam totam commodi recusandae suscipit voluptas reiciendis dolor earum sequi hic, tempora molestias autem laboriosam quis qui, ut voluptatem minus distinctio sed!",
        date: "16 March 2025",
        longdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 2,
        src: "https://c4.wallpaperflare.com/wallpaper/1010/613/78/minecraft-minecraft-dungeons-minecraft-the-end-enderman-minecraft-4k-hd-wallpaper-preview.jpg",
        heading: "News Heading",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam totam commodi recusandae suscipit voluptas reiciendis dolor earum sequi hic, tempora molestias autem laboriosam quis qui, ut voluptatem minus distinctio sed!",
        date: "16 March 2025",
        longdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 3,
        src: "https://c4.wallpaperflare.com/wallpaper/430/295/657/minecraft-minecraft-dungeons-minecraft-nether-blaze-minecraft-ghast-minecraft-hd-wallpaper-preview.jpg",
        heading: "News Heading",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam totam commodi recusandae suscipit voluptas reiciendis dolor earum sequi hic, tempora molestias autem laboriosam quis qui, ut voluptatem minus distinctio sed!",
        date: "16 March 2025",
        longdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 4,
        src: "https://wallpapers.com/images/hd/minecraft-dungeons-bonfire-zozj9vpi5i9rs1mj.jpg",
        heading: "News Heading",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam totam commodi recusandae suscipit voluptas reiciendis dolor earum sequi hic, tempora molestias autem laboriosam quis qui, ut voluptatem minus distinctio sed!",
        date: "16 March 2025",
        longdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 5,
        src: "https://preview.redd.it/minecraft-dungeons-anniversary-wallpapers-v0-f5r0qm27gv0d1.png?width=640&crop=smart&auto=webp&s=fcefc5f8f8ad97f31221049776695d30e332935d",
        heading: "News Heading",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam totam commodi recusandae suscipit voluptas reiciendis dolor earum sequi hic, tempora molestias autem laboriosam quis qui, ut voluptatem minus distinctio sed!",
        date: "16 March 2025",
        longdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 6,
        src: "https://i.ytimg.com/vi/7KaIG0zCzc8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDdlvUwQOS5tm77Uow4jGbB8X6rvA",
        heading: "News Heading",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam totam commodi recusandae suscipit voluptas reiciendis dolor earum sequi hic, tempora molestias autem laboriosam quis qui, ut voluptatem minus distinctio sed!",
        date: "16 March 2025",
        longdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

// Identify Values
const newsContainer = document.getElementById('newsContent')
const newsPagination = document.getElementById('newsPagination')
let newsCode = ''
let pageIndex = 0;
let newsPerPage = 3;

// Call loadNews Function
loadNews();

// Create loadNews Function
function loadNews () {
    
    newsContainer.innerHTML = ''

    for(let i = pageIndex * newsPerPage; i < (pageIndex * newsPerPage) + newsPerPage; i++){

        if(!news[i]) break;
        code = 
        `
        <div class="news-card" id="${(news[i].id)}">
            <div class="image"><img src="${news[i].src}" alt="Card Image Alt"></div>
            <div class="content">
                <div class="card-top-text">
                    <h2 class="heading">${news[i].heading}</h2>
                    <p class="description">${news[i].desc}</p>
                </div>
                <div class="card-alt-text">
                    <p class="date">${news[i].date}</p>
                    <button onclick="readMore('${news[i].id}')">Read More</button>
                </div>
            </div>|
        </div> 
        `
        newsContainer.innerHTML += code;
    }
    loadPagination();
}

// Create loadPagination Function
function loadPagination() {

    newsPagination.innerHTML = ''

    for(let i = 0; i < (news.length) / newsPerPage; i++) {

        const span = document.createElement('span');
        span.innerHTML = i+1;
        span.addEventListener('click', (event) => {
            pageIndex = event.target.innerHTML-1;
            loadNews()
        });

        if (i === pageIndex) {
            span.style.fontSize = "2em"
        }
        newsPagination.append(span);
    }
}

// Create readMore Function
const socialContainer = document.getElementById('socialContainer');
const loginContainer = document.getElementById('loginContainer');
const sliderContainer = document.getElementById('sliderContainer');
const newsContainerr = document.getElementById('newsContainer')
const detailsContent = document.getElementById('detailsContent')

function readMore(id) {
    const item = news.find(newsItem => newsItem.id === Number(id));
    
    if (!sliderContainer.classList.contains('closeTab')) {
        socialContainer.classList.add('closeTab');
        loginContainer.classList.add('closeTab');
        sliderContainer.classList.add('closeTab');
        newsContainerr.classList.add('closeTab');
    }

    detailsContent.innerHTML = 
    `
    <div class="top-text">
        <h2>News</h2>
        <p class="date">${item.date}</p>
    </div>
    <div class="details-card">
        <div class="image"><img src="${item.src}" alt="Card Image Alt"></div>
        <div class="content">
            <div class="card-top-text">
                <h2 class="heading">${item.heading}</h2>
                <p class="description">${item.desc}</p>
                <p class="long-description">${item.longdesc}</p>
            </div>
        </div>
    </div>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}