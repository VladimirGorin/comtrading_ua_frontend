import '../../assets/image/map.png'
import '../../assets/image/timeWorking.png'
import '../../assets/image/tel.png'
import '../../assets/image/down.png'
import '../../assets/image/search.png'
import '../../assets/image/user.png'
import '../../assets/image/heart.png'
import '../../assets/image/shopping-cart.png'

function Header () {
    return (
        <header class="header">
            <div class="header__top">
                    <div class="header__body">
                        <h2>Черная пятница началасьhjhjgjhgjg</h2>
                        <p>19.11.21-25.11.21</p>
                        <h1>До - 60% на весь товар</h1>
                        <button>За покупками</button>
                    </div>
            </div>
            <div class="header__center">
                <div class="header__body">
                    <div class="header__pannel">
                        <select class="form-select select-One" aria-label="Default select example">
                            <option selected>Днепр</option>
                            <option value="1">Киев</option>
                        </select>
                        <img class="img-map-bg" src="../../assets/image/map.png" alt="" />

                        <select class="form-select select-To" aria-label="Default select example">
                            <option class="timeSet" selected>Время работы</option>
                            <option class="timeSet" value="1">Пн. - Пт. з 09:00 до 19:00</option>
                            <option class="timeSet" value="2">Сб. з 10:00 до 14:00</option>
                            <option class="timeSet" value="3">Вс. - выходной</option>
                        </select>
                        <img class="img-timers-bg" src="../../assets/image/timeWorking.png" alt="" />

                    </div>
                    <div class="header__navigation">
                        <ul>
                            <li>Корпоративным клиентам</li>
                            <li>Про нас</li>
                            <li>Способы доставки</li>
                            <li>Гарантия</li>
                            <li>Возврат и обмен</li>
                            <li>Распродажа</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="header__bottom">
                <div class="header__body">
                    <h1>comtrading</h1>
                    <select class="form-select select-One" aria-label="Default select example">
                        <option selected>+38 (044) 501 73 73</option>
                        <option value="1">+38 (044) 501 73 73</option>
                    </select>
                    <img class="img-tel-bg" src="../../assets/image/tel.png" alt="" />
                    <div class="header__input">
                        <div class="header__ctegore">
                            <span>Все категории <img src="../../assets/image/down.png" alt="" /></span>
                            <hr />
                            <input class="search-input" type="text" />
                            <div class="header__searchBtn">
                                <img src="../../assets/image/search.png" alt="" />
                            </div>

                        </div>
                    </div>
                    <div class="header__profile">
                        <img src="../../assets/image/user.png" alt="user" />
                        <img src="../../assets/image/heart.png" alt="heart" />
                        <img src="../../assets/image/shopping-cart.png" alt="cart" />

                        <div class="header__cartItem">
                            <h1>Корзина</h1>
                            <h2>(1) товар</h2>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
