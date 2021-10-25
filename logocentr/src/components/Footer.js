import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-5">
    <div className="container-fluid text-md-left">
        <div className="row">
            <div className="col-md-8 mt-md-0 mt-3">
                <h5 className="text-uppercase">Спасибо, что выбрали Нас!</h5>
                <p>Вся дополнительная информация по телефонам!</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-4 text-md-right">
                <ul className="d-flex list-unstyled">
                    <li><a href="https://www.instagram.com/logocentr_yagovoru/"><img width="60px" height="60px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" /></a></li>
                    <li><a href="https://mssg.me/logocentr.by" ><img width="60px" height="60px" src="https://image.similarpng.com/very-thumbnail/2020/11/Viber-logo-on-transparent-background-PNG.png" /></a></li>
                    <li><a href="https://vk.com/logocentr_yagovoru" ><img width="60px" height="60px" src="https://obvk.kz/wp-content/uploads/2018/07/vk-icon.png" /></a></li>
                    <li><a href="https://www.tiktok.com/@logocentr_yagovoru" ><img width="60px" height="60px" src="https://2.bp.blogspot.com/-gFsA2g18lWQ/XD-ZejQyrfI/AAAAAAAAG6w/98a75D-YjRYMrg73zZ0UUfqdstQS7YBbwCK4BGAYYCw/s1600/Logo%2BTiktok.png" /></a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">Copyright © 2012 ЧУП «Я говорю»</div>

</footer>

export default Footer