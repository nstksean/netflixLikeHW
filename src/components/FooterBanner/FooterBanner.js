import 'bootstrap/dist/css/bootstrap.min.css';


import "./FooterBanner.css"

export default function FooterBanner() {



    return (
        <div className='FooterBanne mb-5'>
            <div className="card bg-dark text-white ">
                <img src={"https://via.placeholder.com/1440X330.png"} className="card-img d-block w-100" alt="..." />
                <div className="card-img-overlay d-flex align-items-center justify-content-center flex-column">
                    <h3 className="card-title text-center">
                        ขอหนังง่ายๆ ได้ดูใน 3 วัน</h3>
                    <h3 className="card-text text-center ">
                        เรื่องไหนก็ดูได้ฟรี พร้อมการแจ้งเตือนผ่านมือถือ                    </h3>
                    <button type="button" className="btn btn-outline-danger FBlogin">สมัคร</button>
                </div>
            </div>
        </div>
    )
}

