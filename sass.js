let a = document.querySelector("#a");
let a2 = document.querySelector("#a span");
let b = document.querySelector("#b");
let b2 = document.querySelector("#b span");
let c = document.querySelector("#c");
let c2 = document.querySelector("#c span");
let d = document.querySelector("#d");
let d2 = document.querySelector("#d span");
let e = document.querySelector("#e");
let e2 = document.querySelector("#e span");
let f = document.querySelector("#f");
let f2 = document.querySelector("#f span");
let g = document.querySelector("#g");
let g2 = document.querySelector("#g span");
let k = document.querySelector("#k");
let k2 = document.querySelector("#k span");
let h = document.querySelector("#h");
let h2 = document.querySelector("#h span");
let y = document.querySelector(".y");
let z = document.querySelector(".z");
let i = 0;
z.classList.add("color1");
a.onclick = function() {
    if (a2.innerHTML == "O" || a2.innerHTML == "X") {
        a2.innerHTML = a2.innerHTML;
    } else {
        if (i % 2 == 0) {
            a2.innerHTML = "X";
            a.appendChild(a2);
            z.classList.remove("color1");
            y.classList.add("color2");
        }
        if (i % 2 != 0) {
            a2.innerHTML = "O";
            a.appendChild(a2);
            y.classList.remove("color2");
            z.classList.add("color1");
        }
        if (a2.innerHTML == b2.innerHTML && b2.innerHTML == c2.innerHTML || a2.innerHTML == e2.innerHTML && e2.innerHTML == h2.innerHTML || g2.innerHTML == a2.innerHTML && d2.innerHTML == g2.innerHTML) {
            setTimeout(() => {
                alert(`User ${a2.innerHTML} is Win`);
                location.reload();
            }, 200);
        }
        i++;
        if (i == 9) {
            if ((a2.innerHTML !== b2.innerHTML || b2.innerHTML !== c2.innerHTML) && (a2.innerHTML !== e2.innerHTML || e2.innerHTML !== h2.innerHTML) && (a2.innerHTML !== d2.innerHTML || d2.innerHTML !== g2.innerHTML)) {
                setTimeout(() => {
                    alert(`Not found any Winner`);
                    location.reload();
                }, 200);
            }
        }
    }
    if (a2.innerHTML == "O") {
        a.classList.add("color2");
    }
    if (a2.innerHTML == "X") {
        a.classList.add("color1");
    }
}
b.onclick = function() {
    if (b2.innerHTML == "O" || b2.innerHTML == "X") {
        b2.innerHTML = b2.innerHTML;
    } else {
        if (i % 2 == 0) {
            b2.innerHTML = "X";
            b.appendChild(b2);
            z.classList.remove("color1");
            y.classList.add("color2");
        }
        if (i % 2 != 0) {
            b2.innerHTML = "O";
            b.appendChild(b2);
            y.classList.remove("color2");
            z.classList.add("color1");
        }
        if (a2.innerHTML == b2.innerHTML && b2.innerHTML == c2.innerHTML || b2.innerHTML == e2.innerHTML && e2.innerHTML == k2.innerHTML) {
            setTimeout(() => {
                alert(`User ${b2.innerHTML} is Win`);
                location.reload();
            }, 200);
        }
        i++;
        if (i == 9) {
            if ((a2.innerHTML !== b2.innerHTML || b2.innerHTML !== c2.innerHTML) && (b2.innerHTML !== e2.innerHTML || e2.innerHTML !== k2.innerHTML)) {
                setTimeout(() => {
                    alert(`Not found any Winner`);
                    location.reload();
                }, 200);
            }
        }
    }
    if (b2.innerHTML == "O") {
        b.classList.add("color2");
    }
    if (b2.innerHTML == "X") {
        b.classList.add("color1");
    }
}
c.onclick = function() {
    if (c2.innerHTML == "O" || c2.innerHTML == "X") {
        c2.innerHTML = c2.innerHTML;
    } else {
        if (i % 2 == 0) {
            c2.innerHTML = "X";
            c.appendChild(c2);
            z.classList.remove("color1");
            y.classList.add("color2");
        }
        if (i % 2 != 0) {
            c2.innerHTML = "O";
            c.appendChild(c2);
            y.classList.remove("color2");
            z.classList.add("color1");
        }
        if (a2.innerHTML == b2.innerHTML && b2.innerHTML == c2.innerHTML || c2.innerHTML == f2.innerHTML && f2.innerHTML == h2.innerHTML || c2.innerHTML == e2.innerHTML && e2.innerHTML == g2.innerHTML) {
            setTimeout(() => {
                alert(`User ${c2.innerHTML} is Win`);
                location.reload();
            }, 200);
        }
        i++;
        if (i == 9) {
            if ((a2.innerHTML !== b2.innerHTML || b2.innerHTML !== c2.innerHTML) && (c2.innerHTML !== e2.innerHTML || e2.innerHTML !== g2.innerHTML) && (c2.innerHTML !== f2.innerHTML || f2.innerHTML !== h2.innerHTML)) {
                setTimeout(() => {
                    alert(`Not found any Winner`);
                    location.reload();
                }, 200);
            }
        }
    }
    if (c2.innerHTML == "O") {
        c.classList.add("color2");
    }
    if (c2.innerHTML == "X") {
        c.classList.add("color1");
    }
}
d.onclick = function() {
    if (d2.innerHTML == "O" || d2.innerHTML == "X") {
        d2.innerHTML = d2.innerHTML;
    } else {
        if (i % 2 == 0) {
            d2.innerHTML = "X";
            d.appendChild(d2);
            z.classList.remove("color1");
            y.classList.add("color2");
        }
        if (i % 2 != 0) {
            d2.innerHTML = "O";
            d.appendChild(d2);
            y.classList.remove("color2");
            z.classList.add("color1");
        }
        if (d2.innerHTML == e2.innerHTML && e2.innerHTML == f2.innerHTML || g2.innerHTML == a2.innerHTML && d2.innerHTML == g2.innerHTML) {
            setTimeout(() => {
                alert(`User ${d2.innerHTML} is Win`);
                location.reload();
            }, 200);
        }
        i++;
        if (i == 9) {
            if ((d2.innerHTML !== e2.innerHTML || e2.innerHTML !== f2.innerHTML) && (d2.innerHTML !== a2.innerHTML || d2.innerHTML !== g2.innerHTML)) {
                setTimeout(() => {
                    alert(`Not found any Winner`);
                    location.reload();
                }, 200);
            }
        }
    }
    if (d2.innerHTML == "O") {
        d.classList.add("color2");
    }
    if (d2.innerHTML == "X") {
        d.classList.add("color1");
    }
}
e.onclick = function() {
    if (e2.innerHTML == "O" || e2.innerHTML == "X") {
        e2.innerHTML = e2.innerHTML;
    } else {
        if (i % 2 == 0) {
            e2.innerHTML = "X";
            e.appendChild(e2);
            z.classList.remove("color1");
            y.classList.add("color2");
        }
        if (i % 2 != 0) {
            e2.innerHTML = "O";
            e.appendChild(e2);
            y.classList.remove("color2");
            z.classList.add("color1");
        }
        if (e2.innerHTML == b2.innerHTML && e2.innerHTML == k2.innerHTML || a2.innerHTML == e2.innerHTML && e2.innerHTML == h2.innerHTML || d2.innerHTML == e2.innerHTML && e2.innerHTML == f2.innerHTML || c2.innerHTML == e2.innerHTML && e2.innerHTML == g2.innerHTML) {
            setTimeout(() => {
                alert(`User ${e2.innerHTML} is Win`);
                location.reload();
            }, 200);
        }
        i++;
        if (i == 9) {
            if ((a2.innerHTML !== e2.innerHTML || e2.innerHTML !== h2.innerHTML) && (c2.innerHTML !== e2.innerHTML || e2.innerHTML !== c2.innerHTML) && (e2.innerHTML !== d2.innerHTML || d2.innerHTML !== f2.innerHTML) && (e2.innerHTML !== b2.innerHTML || e2.innerHTML !== k2.innerHTML)) {
                setTimeout(() => {
                    alert(`Not found any Winner`);
                    location.reload();
                }, 200);
            }
        }
    }
    if (e2.innerHTML == "O") {
        e.classList.add("color2");
    }
    if (e2.innerHTML == "X") {
        e.classList.add("color1");
    }
}
f.onclick = function() {
    if (f2.innerHTML == "O" || f2.innerHTML == "X") {
        f2.innerHTML = f2.innerHTML;
    } else {
        if (i % 2 == 0) {
            f2.innerHTML = "X";
            f.appendChild(f2);
            z.classList.remove("color1");
            y.classList.add("color2");
        }
        if (i % 2 != 0) {
            f2.innerHTML = "O";
            f.appendChild(f2);
            y.classList.remove("color2");
            z.classList.add("color1");
        }
        if (c2.innerHTML == f2.innerHTML && f2.innerHTML == h2.innerHTML || d2.innerHTML == e2.innerHTML && e2.innerHTML == f2.innerHTML) {
            setTimeout(() => {
                alert(`User ${f2.innerHTML} is Win`);
                location.reload();
            }, 200);
        }
        i++;
        if (i == 9) {
            if ((c2.innerHTML !== f2.innerHTML || f2.innerHTML !== h2.innerHTML) && (d2.innerHTML !== e2.innerHTML || e2.innerHTML !== f2.innerHTML)) {
                setTimeout(() => {
                    alert(`Not found any Winner`);
                    location.reload();
                }, 200);
            }
        }
    }
    if (f2.innerHTML == "O") {
        f.classList.add("color2");
    }
    if (f2.innerHTML == "X") {
        f.classList.add("color1");
    }
}
g.onclick = function() {
    if (g2.innerHTML == "O" || g2.innerHTML == "X") {
        g2.innerHTML = g2.innerHTML;
    } else {
        if (i % 2 == 0) {
            g2.innerHTML = "X";
            g.appendChild(g2);
            z.classList.remove("color1");
            y.classList.add("color2");
        }
        if (i % 2 != 0) {
            g2.innerHTML = "O";
            g.appendChild(g2);
            y.classList.remove("color2");
            z.classList.add("color1");
        }
        if (g2.innerHTML == a2.innerHTML && d2.innerHTML == g2.innerHTML || c2.innerHTML == e2.innerHTML && e2.innerHTML == g2.innerHTML || g2.innerHTML == k2.innerHTML && k2.innerHTML == h2.innerHTML) {
            setTimeout(() => {
                alert(`User ${g2.innerHTML} is Win`);
                location.reload();
            }, 200);
        }
        i++;
        if (i == 9) {
            if ((a2.innerHTML !== d2.innerHTML || d2.innerHTML !== g2.innerHTML) && (c2.innerHTML !== e2.innerHTML || e2.innerHTML !== g2.innerHTML) && (g2.innerHTML !== k2.innerHTML || k2.innerHTML !== h2.innerHTML)) {
                setTimeout(() => {
                    alert(`Not found any Winner`);
                    location.reload();
                }, 200);
            }
        }
    }
    if (g2.innerHTML == "O") {
        g.classList.add("color2");
    }
    if (g2.innerHTML == "X") {
        g.classList.add("color1");
    }
}
k.onclick = function() {
    if (k2.innerHTML == "O" || k2.innerHTML == "X") {
        k2.innerHTML = k2.innerHTML;
    } else {
        if (i % 2 == 0) {
            k2.innerHTML = "X";
            k.appendChild(k2);
            z.classList.remove("color1");
            y.classList.add("color2");
        }
        if (i % 2 != 0) {
            k2.innerHTML = "O";
            k.appendChild(k2);
            y.classList.remove("color2");
            z.classList.add("color1");
        }
        if (g2.innerHTML == k2.innerHTML && k2.innerHTML == h2.innerHTML || b2.innerHTML == e2.innerHTML && e2.innerHTML == k2.innerHTML) {
            setTimeout(() => {
                alert(`User ${k2.innerHTML} is Win`);
                location.reload();
            }, 200);
        }
        i++;
        if (i == 9) {
            if ((b2.innerHTML !== e2.innerHTML || e2.innerHTML !== k2.innerHTML) && (g2.innerHTML !== k2.innerHTML || k2.innerHTML !== h2.innerHTML)) {
                setTimeout(() => {
                    alert(`Not found any Winner`);
                    location.reload();
                }, 200);
            }
        }
    }
    if (k2.innerHTML == "O") {
        k.classList.add("color2");
    }
    if (k2.innerHTML == "X") {
        k.classList.add("color1");
    }
}
h.onclick = function() {
    if (h2.innerHTML == "O" || h2.innerHTML == "X") {
        h2.innerHTML = h2.innerHTML;
    } else {
        if (i % 2 == 0) {
            h2.innerHTML = "X";
            h.appendChild(h2);
            z.classList.remove("color1");
            y.classList.add("color2");
        }
        if (i % 2 != 0) {
            h2.innerHTML = "O";
            h.appendChild(h2);
            y.classList.remove("color2");
            z.classList.add("color1");
        }
        if (a2.innerHTML == e2.innerHTML && e2.innerHTML == h2.innerHTML || f2.innerHTML == c2.innerHTML && f2.innerHTML == h2.innerHTML || g2.innerHTML == k2.innerHTML && k2.innerHTML == h2.innerHTML) {
            setTimeout(() => {
                alert(`User ${h2.innerHTML} is Win`);
                location.reload();
            }, 200);
        }
        i++;
        if (i == 9) {
            if ((h2.innerHTML !== f2.innerHTML || f2.innerHTML !== c2.innerHTML) && (a2.innerHTML !== e2.innerHTML || e2.innerHTML !== h2.innerHTML) && (g2.innerHTML !== k2.innerHTML || k2.innerHTML !== h2.innerHTML)) {
                setTimeout(() => {
                    alert(`Not found any Winner`);
                    location.reload();
                }, 200);
            }
        }
    }
    if (h2.innerHTML == "O") {
        h.classList.add("color2");
    }
    if (h2.innerHTML == "X") {
        h.classList.add("color1");
    }
}