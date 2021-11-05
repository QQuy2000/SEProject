const  handleMenuTab1 = async ()=>{
    const response = await fetch('https://617bd868d842cf001711c0fe.mockapi.io/item');
    const myJson = await response.json();
    
    const html = myJson.map((items) =>{
        // console.log(items);
    return `
    <div class="product-card">
                                <div class="product-card--image">
                                    <img src="./assets/images/coffee1.jpg" alt="">
                                </div>
                                <div class="product-card--info">
                                    <span id="product-name"><b>${items.name}</b></span>
                                    <div class="product-card--footer">
                                        <span>${items.price}d</span>
                                        <div class="product-card--button">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
    `;
                }).join(" ");
    let a = document.querySelector("#first-menu-tab");
    a.innerHTML = html;          
};

const  handleMenuTab2 = async ()=>{
    const response = await fetch('https://617bd868d842cf001711c0fe.mockapi.io/item2');
    const myJson = await response.json();
    
    const html = myJson.map((items) =>{
        // console.log(items);
    return `
    <div class="product-card">
                                <div class="product-card--image">
                                    <img src="./assets/images/coffee2.jpg" alt="">
                                </div>
                                <div class="product-card--info">
                                    <span id="product-name"><b>${items.name}</b></span>
                                    <div class="product-card--footer">
                                        <span>${items.price}d</span>
                                        <div class="product-card--button">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
    `;
                }).join(" ");
    let a = document.querySelector("#second-menu-tab");
    a.innerHTML = html;          
};

const  handleMenuTab3 = async ()=>{
    const response = await fetch('https://617bd868d842cf001711c0fe.mockapi.io/item3');
    const myJson = await response.json();
    
    const html = myJson.map((items) =>{
        // console.log(items);
    return `
    <div class="product-card">
                                <div class="product-card--image">
                                    <img src="./assets/images/coffee3.jpg" alt="">
                                </div>
                                <div class="product-card--info">
                                    <span id="product-name"><b>${items.name}</b></span>
                                    <div class="product-card--footer">
                                        <span>${items.price}d</span>
                                        <div class="product-card--button">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
    `;
                }).join(" ");
    let a = document.querySelector("#third-menu-tab");
    a.innerHTML = html;          
};

handleMenuTab1();
handleMenuTab2();
handleMenuTab3();