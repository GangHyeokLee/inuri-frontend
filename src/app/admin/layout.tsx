"use client";
import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { Dropdown } from "react-bootstrap";

export default function Layout({ children }: PropsWithChildren) {
    const router = useRouter();

    return (
        <section className="container-fluid fruite" style={{ paddingTop: "8rem" }}>
            <div className="container py-5 d-flex g-4">
                <div className="col-lg-3">
                    <div className="sidebar pe-4 pb-3">
                        <nav className="navbar navbar-light">
                            <h3 className="text-primary">ADMIN</h3>
                            <div className="navbar-nav w-100">
                                <a onClick={() => router.push("/admin")} className="nav-item nav-link active" style={{ cursor: "pointer" }}>
                                    Dashboard
                                </a>
                                <Dropdown className="nav-item dropdown">
                                    <Dropdown.Toggle
                                        className="nav-link custom-dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        style={{ cursor: "pointer", backgroundColor: "transparent", border: "none", fontWeight: "normal" }}
                                    >
                                        후원 아동 관리
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu
                                        className="dropdown-menu bg-white border-0"
                                        style={{ padding: "0", margin: 0, position: "static" }} // Change position to static
                                    >
                                        <Dropdown.Item onClick={() => router.push("/admin/children")} className="dropdown-item" style={{ cursor: "pointer" }}>
                                            후원 아동 목록
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => router.push("/admin/children/add")} className="dropdown-item" style={{ cursor: "pointer" }}>
                                            후원 아동 등록
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <a onClick={() => router.push("/admin/patrons")} className="nav-item nav-link" style={{ cursor: "pointer" }}>
                                    후원자 관리
                                </a>
                                <a onClick={() => router.push("/admin/donations")} className="nav-item nav-link" style={{ cursor: "pointer" }}>
                                    후원 관리
                                </a>
                                <a href="/admin/faq" className="nav-item nav-link">
                                    FAQ 관리
                                </a>
                                <a href="/admin/qalist" className="nav-item nav-link">
                                    1:1문의
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="col-lg-9">{children}</div> {/* Make sure children are in a separate column */}
            </div>
        </section>
    );
}