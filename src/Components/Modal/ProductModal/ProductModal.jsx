import { Component } from "react";
import { useState } from 'react';
import { createPortal } from 'react-dom';

const productModalRoot = document.getElementById('product-modal-root');

// class ProductModal extends Component {
//     constructor(props) {
//         super(props);
//         this.el = document.createElement('div');
//     }

//     componentDidMount() {
//         productModalRoot.appendChild(this.el)
//     }

//     componentWillUnmount() {
//         productModalRoot.removeChild(this.el)
//     }

//     render() {
//         return createPortal(this.props.children, this.el)
//     }
// }

const ProductModal = ({ children, productModalOpen, toggleProductModal }) => {
    // const [showModal, setShowModal] = useState(false);

    return (
        createPortal(
            <div className="fixed bg-black/70 h-full w-full inset-0 flex items-center justify-center z-50">
                <button onClick={toggleProductModal}>Close</button>
            </div>
            , productModalRoot)
        // <>
        //     <button onClick={() => setShowModal(true)}>
        //         Show modal using a portal
        //     </button>
        //     {showModal && createPortal(
        //         <div className='w-full h-screen absolute'><button onClick={() => setShowModal(false)}>PORTAL</button></div>, document.body
        //     )}
        // </>
    )
};

export default ProductModal;