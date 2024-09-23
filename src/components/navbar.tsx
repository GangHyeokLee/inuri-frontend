export default function Navbar(){
    return (
        <nav className="container-fluid fixed-top" style={{top:0}}>
            <div className="container topbar bg-primary d-none d-lg-block">
                <div className="d-flex justify-content-between">
                    <div className="top-link ps-2">
                        <a href="#" className="text-white"><small className="text-white mx-2">Privacy
                            Policy</small>/</a>
                        <a href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small></a>
                    </div>
                    <div className="top-link pe-2">
                        <a href="/loginForm" className="text-white"><small className="text-white mx-2">로그인</small></a>
                        <a href="#" className="text-white"><small className="text-white mx-2">회원가입</small></a>
                        <a href="#" className="text-white"><small className="text-white mx-2">로그아웃</small></a>
                    </div>
                </div>
            </div>
            <div className="container pt-3 px-0">
                <nav className="navbar navbar-light bg-white navbar-expand-xl">
                    <a href="/news" className="navbar-brand">
                        <img src="/logo_inuri.png" alt="INURI" style={{width: "70%"}}/>
                    </a>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <a href="/child_list" className="nav-item nav-link">후원 아동</a>
                            <a href="/news" className="nav-item nav-link">소식</a>
                            <a href="/admin" className="nav-item nav-link">관리자</a>
                        </div>
                        <div className="d-flex m-3 pe-5 me-0">
                            <a href="#" className="my-auto">
                                <i className="fas fa-user fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </nav>
    )
}