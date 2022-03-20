var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

/*-----------------------Lọc sản phẩm-----------------------*/ 

var contentList = $('.content_list');
if(contentList){
    
    var itemTypes = $$('.navbar-item_list-item');
    itemTypes.forEach(function(itemType){
        itemType.onclick = function(){
            if(this.innerHTML == 'Tất cả sản phẩm'){
                contentList.innerHTML = '';
                products.forEach(function(product){
                    renderProduct(contentList, product);
                    renderInforProduct();
                    addCartBtn();
                })
            }else{
                contentList.innerHTML = '';
                const list = getProductOfType(this.innerHTML);
                list.forEach(function(item){
                    renderProduct(contentList, item);
                    renderInforProduct();
                    addCartBtn();
                })
            }
        }
    })
    
    function getProductOfType(type){
        return products.filter(function(product){
            return product.type === type;
        })
    }
    function renderProduct(selector, product){
        selector.innerHTML += `
            <div class="container_items col c-6 m-4 l-3">
                <img class="img-item" src="${product.img}" alt="">
                <div class="container_items-content">
                    <div class="items-content_infor">
                        <h2>${product.type}</h3>
                        <h4>${product.name}</h3>
                        <div class="items-content_cost">
                            <span class="weight">${product.weight}</span>
                            <span class="rules"></span>
                            <span class="cost">${product.cost}đ</span>
                        </div>
                    </div>
                    <div class="items-content_add">
                        <button class="items-content_addcart fas fa-shopping-cart">
                        </button>
                        <div class="addcart_text">Thêm vào giỏ hàng</div>
                    </div>
                </div>
            </div>
        `
    }
}

/*------------------Xử lý phân trang sản phẩm--------------------*/ 
const itemsFocus = $('.content__navbar-item.content__navbar-item--focus');
if(itemsFocus){
    var numberPage = parseInt(itemsFocus.innerHTML);
    // renderPageProduct(contentList, $('.content__navbar-item--focus').value+1, 8);
}

// Hàm render theo trang
function renderPageProduct(selector,numberPage, numberItem){
    const i = numberPage*numberItem - numberItem;
    selector.innerHTML = '';
    products.forEach(function(product,index){
        if(index >= i && index < numberItem*numberPage)
            renderProduct(contentList, product)
    })
}

if(contentList){
    renderPageProduct(contentList,1,8);
}

// Xử lý số trang
const btnLeft = $('.content__navbar-btn--left');
const bntRight = $('.content__navbar-btn--right');
const listPage = $('.content__navbar-list');
if(btnLeft){
    btnLeft.onclick = function(){
        var number = this.parentElement.querySelector('.content__navbar-item--focus').value;
        if(number > 0) {
            listPage.children[number].classList.remove('content__navbar-item--focus');
            listPage.children[number-1].classList.add('content__navbar-item--focus');
            renderPageProduct(contentList, this.parentElement.querySelector('.content__navbar-item--focus').value+1, 8);
            renderInforProduct();
            addCartBtn();
        }
    };
}
if(bntRight){
    bntRight.onclick = function(){
        var number = this.parentElement.querySelector('.content__navbar-item--focus').value;
        if(number < 3) {
            listPage.children[number].classList.remove('content__navbar-item--focus');
            listPage.children[number+1].classList.add('content__navbar-item--focus');
            renderPageProduct(contentList, this.parentElement.querySelector('.content__navbar-item--focus').value+1, 8);
            renderInforProduct();
            addCartBtn();
        }
    };
}


const itemsPage = $$(".content__navbar-item");
if(itemsPage){
    itemsPage.forEach(function(item){
        item.onclick = function(){
            const itemFocus = this.parentElement.querySelector('.content__navbar-item--focus');
            itemFocus.classList.remove('content__navbar-item--focus');
            this.classList.add('content__navbar-item--focus');
            renderPageProduct(contentList, this.value+1, 8);
            renderInforProduct();
            addCartBtn();
        }
    })
}


/*----------------------------------Thêm vào vỏ hàng---------------------------------*/ 

function addCartBtn(){
    var addBtns = $$('.items-content_addcart');
    addBtns.forEach(function(addBtn){
        addBtn.onclick = function(e){
            if(getuser()){
                const name = this.parentElement.parentElement.querySelector('h4').innerHTML;
                const img = this.parentElement.parentElement.parentElement.querySelector('.img-item').src.substring(21);
                const cost = this.parentElement.parentElement.querySelector('.cost').innerHTML;
                const weight = this.parentElement.parentElement.querySelector('.weight').innerHTML;
                addCart({name: name, img: img, cost: cost, weight: weight});
                renderBoxCart();
            }else{
                alert('Vui lòng đăng nhập!');
                window.location.href = './login.html';
            }
            e.stopPropagation();
        }
    })
}


var listItems = $('.cart__content-left');
if(listItems){
    var sumPrice = 0;
    function renderCartItem(item){
        const quantity = 1;
        const price = parseInt(item.cost) * quantity;
        sumPrice += price;
        listItems.innerHTML += `
            <div class="cart__content-left-item">
                <div class="cart__content-item-left">
                    <button class="delete">Xóa</button>
                    <img src="${item.img}" alt="">
                    <span class="item-name">${item.name}</span>
                    <span style="margin-right: 12px">${item.weight}</span>
                </div>
                <div class="cart__content-item-right">
                    <span class="item-cost"><b>${price}đ</b></span>
                    <div class="quanity-box">
                        <button class="reduce">-</button>
                        <span class="quantity">1</span>
                        <button class="increase">+</button>
                    </div>
                </div>
            </div>
        `
    }
    // Hiển thị danh sách sản phẩm trong vỏ hàng
    function renderCart(){
        listItems.innerHTML = '';
        if(carts.length == 0){
            listItems.innerHTML = `<img src="./img/empty-cart.png" alt="" width="100%">`;
        }else{
            carts.forEach(function(item){
                renderCartItem(item);
            })
        }
    }
    renderCart();

    // Xử lý xóa sản phẩm trong vỏ hàng
    function deleteItemCart(){
        var deleteBtns = $$('.delete');
        deleteBtns.forEach(function(btn){
            btn.onclick = function(){
                deleteItemCart();
                const name = this.parentElement.querySelector('.item-name').innerHTML;
                removeItem(name);
                renderCart();
                deleteItemCart();
                quantity();
                handlePrice();
                renderBoxCart();
            }
        })
    }
    deleteItemCart();

    // Tắng giảm số lượng sản phẩm trong vỏ
    
    function quantity(){
        var btnIncrease = $$('.increase');
        var btnReduce = $$('.reduce');
        btnIncrease.forEach(function(btn){
            btn.onclick = function(){
                var quantity = parseInt(btn.parentElement.querySelector('.quantity').innerHTML);
                var name = btn.parentElement.parentElement.parentElement.querySelector('.item-name').innerHTML
                btn.parentElement.querySelector('.quantity').innerHTML = ++quantity;
                btn.parentElement.parentElement.querySelector('.item-cost b').innerHTML = getCost(name) * quantity + 'đ';
                sumPrice += getCost(name);
                handlePrice();
            }
        })
        btnReduce.forEach(function(btn){
            btn.onclick = function(){
                var quantity = parseInt(btn.parentElement.querySelector('.quantity').innerHTML);
                var name = btn.parentElement.parentElement.parentElement.querySelector('.item-name').innerHTML
                if(quantity > 1){
                    btn.parentElement.querySelector('.quantity').innerHTML = --quantity;
                    btn.parentElement.parentElement.querySelector('.item-cost b').innerHTML = getCost(name) * quantity + 'đ';
                    sumPrice -= getCost(name);
                    handlePrice();
                }
            }
        })
    }
    quantity();

    function handlePrice(){
        const tampPrice = $('.tamp');
        const totalPrice = $('.sum');
        const items = $$('.cart__content-left-item');
        var sum = 0;
        items.forEach(function(item){
            const name = item.querySelector('.item-name').innerHTML;
            const quanity = parseInt(item.querySelector('.quantity').innerHTML);
            sum += getCost(name) * quanity;
        })
        tampPrice.innerHTML = sum + 'đ';
        totalPrice.innerHTML = sum + sum*0.05 + 40000 + 'đ';

    }
    handlePrice();
}

// modal vỏ hàng
var modalCart = $('.cart-modal');
var exitModal = $('.modal__btn-exit');
var submitModal = $('.modal__btn-submit');
var btnBuy = $('.buy-btn');
if(exitModal){
    exitModal.onclick = function(e){
        modalCart.classList.add('display--none');
    }
}
if(submitModal){
    submitModal.onclick = function(e){
        alert('Bạn đã đặt hàng thàng công!');
        modalCart.classList.add('display--none');
    }
}

if(btnBuy){
    btnBuy.onclick = function(e){
        modalCart.classList.remove('display--none');
    }
}

// render box vỏ hàng
var boxCart = $('.container_content');
if(boxCart){
    function renderBoxCart(){
        boxCart.innerHTML = '';
        if(carts.length === 0){
            boxCart.innerHTML = 
            `
                <img src="./img/no-item.png" alt="" width="250px">
                <p align="center">Không có sản phẩm</p>
            `
        }else{
            carts.forEach(function(item){
                const img = item.img.substring(27);
                boxCart.innerHTML += 
                `
                <div class="container_content-item">
                    <img class="cart_item-img" src="${item.img}" alt="">
                    <div class="cart_item-name">
                        <span><b>${item.name}</b></span>
                        <div class="cart_price">
                            <span class="quantity">${item.weight}</span>
                            x
                            <span class="price">${item.cost}đ</span>
                        </div>
                    </div>
                    <button class="cart_item-btn">X</button>
                </div>
                `
            })
    
            const deleteBtn = $$('.cart_item-btn');
            deleteBtn.forEach(function(btn){
                const name = btn.parentElement.querySelector('b').innerHTML;
                btn.onclick = function(e){
                    removeItem(name);
                    renderBoxCart();
                    if(window.location.href.substring(21) == '/cart.html')
                        renderCart();
                }
            })
        }
    }
    renderBoxCart();
}

const btnShowCart = $('.show-cart');
if(btnShowCart){
    btnShowCart.onclick = function(){
        window.location.href = './cart.html';
        renderCart();
    }
}


// Hiển thị tài khoảng 
var elementUser = $('.navbar-user');
var elementOut = $('.navbar-out');
var headerNavbar = $('.header_container-navbar');
var navbarElement = $$('.content_navbar-list')[1];
if(elementUser){
    function login(){
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            elementUser.innerHTML = user.fullname;
            elementOut.innerHTML = 'Thoát';
            if(user.fullname === 'TienZona'){
                navbarElement.innerHTML += `
                <a href="./admin.html" class="content_navbar-item content_navbar-item--admin">
                    <i class="far fa-tools"></i>
                    Quản trị
                </a href="#">
                `
            }
        }
    }
    login();
}

if(elementOut){
    function logOut(){
        localStorage.removeItem('user');
        elementUser.innerHTML = 'Đăng nhập';
        elementOut.innerHTML = 'Đăng ký';
        const admin = $('.content_navbar-item--admin')
        if(admin){
            admin.outerHTML = '';
        }
    }

    elementOut.onclick = function(){
        logOut();
    }
}

// render information product

var elementContent = $('#product-content');
if(elementContent){

    const product = JSON.parse(localStorage.getItem('productItem'));
    const typeProduct = product.type;
    elementContent.innerHTML = `
        <div class="content__item row">
            <div class="content__item-left col c-5 m-6 l-5">
                <img src="${product.img}" alt="">
            </div>
            <div class="content__item-center col c-7 m-6 l-7">
                <h2>${product.name}</h2>
                <p class="status"><b>Tình trạng:</b> <span style="color: rgb(223, 82, 26);">còn hàng</span></p>
                <div class="price">
                    <span class="nav-rule" style="color: #333;"><b>Khối lượng:</b> <span>${product.weight}</span></span> 
                    <span>${product.cost}đ</span>
                </div>
                <div class="product__item-quantity">
                    <p style="font-size: 16px;"><b>Số lượng:</b></p>
                    <div class="product__quanity-box">
                        <button class="button-left">-</button>
                        <span class="quantity">1</span>
                        <button class="button-right">+</button>
                    </div>
                </div>
                <button class="product__btn-add">THÊM VÀO VỎ HÀNG</button>
            </div>
        </div>
        <div class="content__item">
            <h1 style="margin-bottom: 20px; border-bottom: 3px solid #ccc; padding: 6px 0;">Mô tả sản phẩm</h1>
            <p style="font-size: 14px; line-height: 1.5; text-align:justify;">
               ${product.infor}
            </p>
        </div>
        <div class="content__item">
            <h1 style="margin-bottom: 20px; border-bottom: 3px solid #ccc; padding: 6px 0;">Sản phẩm cùng loại</h1>
            <div class=" product__list row col">
            </div>

        </div>
    `
    const selector = $('.product__list');
    products.forEach(function(item){
        if(item.type === typeProduct && item.name != product.name)
            renderProduct(selector, item)
            // console.log(product)
    })

    const btnAdd = $('.product__btn-add');
    btnAdd.onclick = function(){
        addCart({name: product.name, img: product.img, cost: product.cost, weight: product.weight});
        renderBoxCart();
        // renderCart();
    }
    
}

// Hàm render ra thông tin sản phấm

function renderInforProduct(){
    var productElements = $$('.container_items');
    productElements.forEach(function(element){
        element.onclick = function(e){
            const name = this.querySelector('h4').innerHTML;
            setInforProduct(getProduct(name));
            window.location.href = './information.html';
        }
    })

    function setInforProduct(product){
        localStorage.setItem('productItem', JSON.stringify(product));
    }   
}
renderInforProduct();

addCartBtn()






/*-------------------Xử lý trang quản trị sản phẩm-----------------------*/

var modalAdmin = $('.admin__container-modal');

if(modalAdmin){
    const btnAddProduct = $('.add__item');
    const btnExit = $('.modal-box-exit');
    const btnSubmit = $('.modal-box-submit');

    btnAddProduct.onclick = function(){
        modalAdmin.classList.remove('display--none');
    }

    btnExit.onclick = function(){
        modalAdmin.classList.add('display--none');
    }

    btnSubmit.onclick = function(){
        form = document.getElementById('form-addproduct');
        const img = "\\img" + form.file.value.substring(11);
        var product = {
            type: form.type.value,
            name: form.name.value,
            infor: form.infor.value,
            cost: form.cost.value,
            weight: form.weight.value,
            img: img
        }
        if(form.type.value != '' && form.name.value != '' && form.cost.value != '' && form.weight.value !='' && img != '\\img'){
            addProduct(product);
            renderListProduct();
        }
    }

    function formAddProduct(){
        const form = document.getElementById('form-addproduct');
        if(form.file.value === ''){
            alert('Vui lòng tải ảnh lên!');
            return false;
        }
        if(form.type.value === ''){
            alert('Vui lòng chọn loại sản phẩm!');
            form.type.focus();
            return false;
        }
        if(form.name.value === ''){
            alert('Vui lòng nhập tên sản phẩm!');
            form.name.focus();
            return false;
        }
        if(form.infor.value === ''){
            alert('Vui lòng điền mô tả sản phẩm!');
            form.infor.focus();
            return false;
        }
        if(form.weight.value === ''){
            alert('Vui lòng nhập khối lượng!');
            form.weight.focus();
            return false;
        }
        if(form.cost.value === ''){
            alert('Bạn chưa nhập giá!');
            form.cost.focus();
            return false;
        }
        if(form.cost.value < 0){
            alert('Giá phải lớn hơn hoặc bằng 0!');
            form.cost.focus();
            return false;
        }
        return true;
    }

    function modalProduct(product){
        form = document.getElementById('form-addproduct');
        form.type.value = product.type;
        form.name.value = product.name;
        form.infor.value = product.infor;
        form.weight.value = product.weight;
        form.cost.value = product.cost;
        form.querySelector('h1').innerHTML = 'Cập nhật sản phẩm';
        form.querySelector('img').src = product.img;
    }
}


/*Xử lý trang quản trị*/
var table = $('.container__content');

if(table){
    function renderItemTable(item, index){
        table.innerHTML += `
        <tr>
            <td class="content__number"><span>${index+1}</span></td>
            <td class="content__img"><img src="${item.img}" alt="" width="100%"></td>
            <td class="content__type"><span class="content-text">${item.type}</span></td>
            <td class="content__name"><span class="content-text">${item.name}</span></td>
            <td class="content__infor"><span class="content-text">${item.infor}</span></td>
            <td class="content__weight"><span class="content-text">${item.weight}</span></td>
            <td class="content__cost"><span class="content-text">${item.cost}đ</span></td>
            <td class="content__edit"><button class="edit-btn btn">Sửa</button></td>
            <td class="content__delete"><button class="delete-btn btn">Xóa</button></td>
        </tr>
        `
    }
    function renderListProduct(){
        table.innerHTML = `
        <tr class="header__table">
            <th class="content__number">STT</th>
            <th class="content__img">Ảnh</th>
            <th class="content__type">Loại sản phẩm</th>
            <th class="content__name">Tên sản phẩm</th>
            <th class="content__infor">Thông tin sản phẩm</th>
            <th class="content__weight">Khổi lượng</th>
            <th class="content__cost">Giá</th>
            <th class="content__edit">Sửa</th>
            <th class="content__delete">Xóa</th>
        </tr>
        `;
        products.forEach(function(item, index){
            renderItemTable(item, index);
        })
    }
    renderListProduct();
    function editProduct(){
        const btnEdits = $$('.edit-btn');
        btnEdits.forEach(function(btnEdit, index){
            btnEdit.onclick = function(){
                modalProduct(products[index]);
                modalAdmin.classList.remove('display--none');
                editProduct();
            }
        })
    }
    editProduct();
    function deleteProduct(){
        const btnDeletes = $$('.delete-btn');
        btnDeletes.forEach(function(btnDelete, index){
            btnDelete.onclick = function(){
                removeProduct(index);
                renderListProduct();
                deleteProduct();
                editProduct();
            }
        })
    }
    deleteProduct();
}


/*--------------------------Responsive-----------------*/ 

const btnCloseModal = $('.box-header-close');
const modalNavbar = $('.modal__navbar');
const modalContainer = $('.modal__navbar-contaner');
const menu = $('.modal__navbar-bars');
if(btnCloseModal){
    btnCloseModal.onclick = function(e){
        modalContainer.classList.add('display--none');
    }
    menu.onclick = function(){
        modalContainer.classList.remove('display--none');
    }
}