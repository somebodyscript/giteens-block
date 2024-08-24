// (() => {
//     const refs = {
//         openModalBtn: document.querySelector("[data-modal-open]"),
//         closeModalBtn: document.querySelector("[data-modal-close]"),
//         modal: document.querySelector("[data-modal]"),
//         form: document.querySelector("form"),
//         sendBtn: document.querySelector(".send"),
//         modal2: document.querySelector("[data-modal2]"),
//         closeModal2Btn: document.querySelector("[data-modal2-close]")
//     };
    
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
//     refs.closeModal2Btn.addEventListener("click", toggleModal2);
    
//     refs.form.addEventListener("submit", (event) => {
//         event.preventDefault();
//         closeModalAndOpenModal2();
//     });

//     function toggleModal() {
//         refs.modal.classList.toggle("is-hidden");
//     }

//     function toggleModal2() {
//         refs.modal2.classList.toggle("is-hidden");
//     }

//     function closeModalAndOpenModal2() {
//         refs.modal.classList.add("is-hidden");
//         refs.modal2.classList.remove("is-hidden");
//     }
// })();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
        form: document.querySelector("form"),
        sendBtn: document.querySelector(".send"),
        modal2: document.querySelector("[data-modal2]"),
        closeModal2Btn: document.querySelector("[data-modal2-close]")
    };
    
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.closeModal2Btn.addEventListener("click", toggleModal2);
    
    refs.form.addEventListener("submit", (event) => {
        event.preventDefault();
        toggleModal2();
    });

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }

    function toggleModal2() {
        refs.modal2.classList.toggle("is-hidden");
    }
})();