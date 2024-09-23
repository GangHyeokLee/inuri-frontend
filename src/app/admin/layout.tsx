export default function layout() {
    return (
        <div className="col-lg-3">
            <div className="sidebar pe-4 pb-3">
                <nav className="navbar navbar-light">
                    <h3 className="text-primary">ADMIN</h3>
                    <div className="navbar-nav w-100">
                        <a href="/admin" className="nav-item nav-link active"><i
                            className="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                               style={{cursor: "pointer"}}><i
                                className="fa fa-laptop me-2"></i>후원 아동 관리</a>
                            <div className="dropdown-menu bg-transparent border-0" style={{padding: "0", margin: 0}}>
                                <a href="/child_list" className="dropdown-item">후원 아동 목록</a>
                                <a href="/admin/children/add" className="dropdown-item">후원 아동 등록</a>
                            </div>
                        </div>
                        <a href="/admin/patrons" className="nav-item nav-link"><i className="fa fa-th me-2"></i>후원자
                            관리</a>
                        <a href="/admin/donations" className="nav-item nav-link"><i className="fa fa-th me-2"></i>후원 관리</a>
                        <a href="/admin/faq" className="nav-item nav-link"><i className="fa fa-th me-2"></i>FAQ 관리</a>
                        <a href="/admin/qalist" className="nav-item nav-link"><i className="fa fa-th me-2"></i>1:1문의</a>
                    </div>
                </nav>
            </div>
        </div>
    )
}