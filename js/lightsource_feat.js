import { lightsources } from './constants_dec.js'
const setActive = (e) => {
    Array.from(e.parentElement.children).forEach(sib =>
        sib.classList.remove("active")

    );
    e.classList.add("active");
}

lightsources.forEach(btn =>
    btn.addEventListener("click", () => {
        setActive(btn);
    })
);