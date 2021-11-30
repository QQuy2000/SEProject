
const  handleNews = async ()=>{
    const response = await fetch('https://617bd868d842cf001711c0fe.mockapi.io/news');
    const myJson = await response.json();
    let newJson = [];
    if(myJson.length>6)
        newJson = myJson;
    console.log(newJson);
    const html = newJson.map((items) =>{
        // console.log(items);
    return `
    <div class="news-card">
                        <img src="./assets/images/news1.jpg" alt="news1">
                        <div class="news-content">
                            <h5>${items.title}</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium ex ac urna tempor, ac ultrices justo aliquet. Aenean viverra urna eu est tincidunt venenatis. </p>
                            <div class="more-button">
                                <button>
                                    <a href="#">More</a>
                                </button>
                            </div>
                        </div>
                    </div>
    `;
                }).join(" ");
    let a = document.querySelector(".news-container");
    a.innerHTML = html;          
};

handleNews();