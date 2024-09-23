import {Child} from "@/type";
import {Button, Modal} from "react-bootstrap";

export default function ({show, handleClose, child}: { show: boolean, handleClose: () => void, child: Child }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>상세 정보</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="border rounded">
                                <img src={child.chimg} className="img-fluid rounded" alt={child.chname}/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h4 className="fw-bold mb-3">{child.chname}</h4>
                            <p><strong>생년월일:</strong> <span>{child.chdob.toLocaleDateString()}</span></p>
                            <p><strong>성별:</strong> <span>{child.chgender}</span></p>
                            <p><strong>거주지:</strong> <span>{child.chlocation}</span></p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
};