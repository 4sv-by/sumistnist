< script >
    $(document).ready(function() {
        let t = [0];
        for (let e = 1; e < 23; e++) {
            let n = document.querySelector(`#point-${e}`).attributes[1].value.split(" ");
            t.push(+n[0].match(/[0-9/.]+/))
        }
        let e = document.querySelector("#point-bl1").attributes[1].value.split(" ")[0].match(/[0-9/.]+/),
            n = document.querySelector("#point-bl2").attributes[1].value.split(" ")[0].match(/[0-9/.]+/),
            o = document.querySelector("#point-br1").attributes[1].value.split(" ")[0].match(/[0-9/.]+/),
            r = document.querySelector("#point-br2").attributes[1].value.split(" ")[0].match(/[0-9/.]+/),
            l = document.querySelector("#point-tl1-1").attributes[1].value.split(" ")[0].match(/[0-9/.]+/),
            c = document.querySelector("#point-tl2").attributes[1].value.split(" ")[0].match(/[0-9/.]+/),
            i = document.querySelector("#point-tr1").attributes[1].value.split(" ")[0].match(/[0-9/.]+/),
            u = document.querySelector("#point-tr2").attributes[1].value.split(" ")[0].match(/[0-9/.]+/),
            y = document.querySelector("#otp-nebo").attributes[1].value.split(" ")[0].match(/[0-9/.]+/),
            a = document.querySelector("#otp-zemly").attributes[1].value.split(" ")[0].match(/[0-9/.]+/),
            m = document.querySelector("#otp-sum-nz").attributes[1].value.split(" ")[0].match(/[0-9/.]+/),
            s = document.querySelector("#otp-man").attributes[1].value.split(" ")[0].match(/[0-9/.]+/),
            p = document.querySelector("#otp-woman").attributes[1].value.split(" ")[0].match(/[0-9/.]+/),
            d = document.querySelector("#otp-sum-mw-1").attributes[1].value.split(" ")[0].match(/[0-9/.]+/),
            x = document.querySelector("#otp-otp-du").attributes[1].value.split(" ")[0].match(/[0-9/.]+/),
            S = document.querySelector("#otp-otp-pl").attributes[1].value.split(" ")[0].match(/[0-9/.]+/);

        function q() {
            let q, f;
            for (let e = 1; e < 23; e++) q = +document.querySelector(`#point-${e}`).scrollHeight / 3, f = document.querySelector(`#point-${e}`).attributes[1].value.split(" "), 1 == document.querySelector(`#point-${e}`).textContent.length ? document.querySelector(`#point-${e}`).attributes[1].value = `translate(${+t[e] + q / 3 * 1.3} ${+f[1].match(/[0-9/.]+/)})` : document.querySelector(`#point-${e}`).attributes[1].value = `translate(${+t[e]} ${+f[1].match(/[0-9/.]+/)})`;
            1 == document.querySelector("#point-bl1").textContent.length ? (q = +document.querySelector("#point-bl1").scrollHeight / 3, f = document.querySelector("#point-bl1").attributes[1].value.split(" "), document.querySelector("#point-bl1").attributes[1].value = `translate(${+e + q / 2} ${+f[1].match(/[0-9/.]+/)})`) : (q = +document.querySelector("#point-bl1").scrollHeight / 3, f = document.querySelector("#point-bl1").attributes[1].value.split(" "), document.querySelector("#point-bl1").attributes[1].value = `translate(${+e} ${+f[1].match(/[0-9/.]+/)})`), 1 == document.querySelector("#point-bl2").textContent.length ? (q = +document.querySelector("#point-bl2").scrollHeight / 3, f = document.querySelector("#point-bl2").attributes[1].value.split(" "), document.querySelector("#point-bl2").attributes[1].value = `translate(${+n + q / 2} ${+f[1].match(/[0-9/.]+/)})`) : (q = +document.querySelector("#point-bl2").scrollHeight / 3, f = document.querySelector("#point-bl2").attributes[1].value.split(" "), document.querySelector("#point-bl2").attributes[1].value = `translate(${+n} ${+f[1].match(/[0-9/.]+/)})`), 1 == document.querySelector("#point-br2").textContent.length ? (q = +document.querySelector("#point-br2").scrollHeight / 3, f = document.querySelector("#point-br2").attributes[1].value.split(" "), document.querySelector("#point-br2").attributes[1].value = `translate(${+r + q / 2} ${+f[1].match(/[0-9/.]+/)})`) : (q = +document.querySelector("#point-br2").scrollHeight / 3, f = document.querySelector("#point-br2").attributes[1].value.split(" "), document.querySelector("#point-br2").attributes[1].value = `translate(${+r} ${+f[1].match(/[0-9/.]+/)})`), 1 == document.querySelector("#point-br1").textContent.length ? (q = +document.querySelector("#point-br1").scrollHeight / 3, f = document.querySelector("#point-br1").attributes[1].value.split(" "), document.querySelector("#point-br1").attributes[1].value = `translate(${+o + q / 2} ${+f[1].match(/[0-9/.]+/)})`) : (q = +document.querySelector("#point-br1").scrollHeight / 3, f = document.querySelector("#point-br1").attributes[1].value.split(" "), document.querySelector("#point-br1").attributes[1].value = `translate(${+o} ${+f[1].match(/[0-9/.]+/)})`), 1 == document.querySelector("#point-tl1-1").textContent.length ? (q = +document.querySelector("#point-tl1-1").scrollHeight / 3, f = document.querySelector("#point-tl1-1").attributes[1].value.split(" "), document.querySelector("#point-tl1-1").attributes[1].value = `translate(${+l + q / 2} ${+f[1].match(/[0-9/.]+/)})`) : (q = +document.querySelector("#point-tl1-1").scrollHeight / 3, f = document.querySelector("#point-tl1-1").attributes[1].value.split(" "), document.querySelector("#point-tl1-1").attributes[1].value = `translate(${+l} ${+f[1].match(/[0-9/.]+/)})`), 1 == document.querySelector("#point-tl2").textContent.length ? (q = +document.querySelector("#point-tl2").scrollHeight / 3, f = document.querySelector("#point-tl2").attributes[1].value.split(" "), document.querySelector("#point-tl2").attributes[1].value = `translate(${+c + q / 2} ${+f[1].match(/[0-9/.]+/)})`) : (q = +document.querySelector("#point-tl2").scrollHeight / 3, f = document.querySelector("#point-tl2").attributes[1].value.split(" "), document.querySelector("#point-tl2").attributes[1].value = `translate(${+c} ${+f[1].match(/[0-9/.]+/)})`), 1 == document.querySelector("#point-tr2").textContent.length ? (q = +document.querySelector("#point-tr2").scrollHeight / 3, f = document.querySelector("#point-tr2").attributes[1].value.split(" "), document.querySelector("#point-tr2").attributes[1].value = `translate(${+u + q / 2} ${+f[1].match(/[0-9/.]+/)})`) : (q = +document.querySelector("#point-tr2").scrollHeight / 3, f = document.querySelector("#point-tr2").attributes[1].value.split(" "), document.querySelector("#point-tr2").attributes[1].value = `translate(${+u} ${+f[1].match(/[0-9/.]+/)})`), 1 == document.querySelector("#point-tr1").textContent.length ? (q = +document.querySelector("#point-tr1").scrollHeight / 3, f = document.querySelector("#point-tr1").attributes[1].value.split(" "), document.querySelector("#point-tr1").attributes[1].value = `translate(${+i + q / 2} ${+f[1].match(/[0-9/.]+/)})`) : (q = +document.querySelector("#point-tr1").scrollHeight / 3, f = document.querySelector("#point-tr1").attributes[1].value.split(" "), document.querySelector("#point-tr1").attributes[1].value = `translate(${+i} ${+f[1].match(/[0-9/.]+/)})`), 1 == document.querySelector("#otp-zemly").textContent.length ? (q = +document.querySelector("#otp-zemly").scrollHeight / 3, f = document.querySelector("#otp-zemly").attributes[1].value.split(" "), document.querySelector("#otp-zemly").attributes[1].value = `translate(${+a + q / 2 - 1} ${+f[1].match(/[0-9/.]+/)})`) : (q = +document.querySelector("#otp-zemly").scrollHeight / 3, f = document.querySelector("#otp-zemly").attributes[1].value.split(" "), document.querySelector("#otp-zemly").attributes[1].value = `translate(${+a} ${+f[1].match(/[0-9/.]+/)})`), 1 == document.querySelector("#otp-nebo").textContent.length ? (q = +document.querySelector("#otp-nebo").scrollHeight / 3, f = document.querySelector("#otp-nebo").attributes[1].value.split(" "), document.querySelector("#otp-nebo").attributes[1].value = `translate(${+y + q / 2 - 1} ${+f[1].match(/[0-9/.]+/)})`) : (q = +document.querySelector("#otp-nebo").scrollHeight / 3, f = document.querySelector("#otp-nebo").attributes[1].value.split(" "), document.querySelector("#otp-nebo").attributes[1].value = `translate(${+y} ${+f[1].match(/[0-9/.]+/)})`), 1 == document.querySelector("#otp-sum-nz").textContent.length ? (q = +document.querySelector("#otp-sum-nz").scrollHeight / 3, f = document.querySelector("#otp-sum-nz").attributes[1].value.split(" "), document.querySelector("#otp-sum-nz").attributes[1].value = `translate(${+m + q / 2 - 1} ${+f[1].match(/[0-9/.]+/)})`) : (q = +document.querySelector("#otp-sum-nz").scrollHeight / 3, f = document.querySelector("#otp-sum-nz").attributes[1].value.split(" "), document.querySelector("#otp-sum-nz").attributes[1].value = `translate(${+m} ${+f[1].match(/[0-9/.]+/)})`), 1 == document.querySelector("#otp-man").textContent.length ? (q = +document.querySelector("#otp-man").scrollHeight / 3, f = document.querySelector("#otp-man").attributes[1].value.split(" "), document.querySelector("#otp-man").attributes[1].value = `translate(${+s + q / 2 - 1} ${+f[1].match(/[0-9/.]+/)})`) : (q = +document.querySelector("#otp-man").scrollHeight / 3, f = document.querySelector("#otp-man").attributes[1].value.split(" "), document.querySelector("#otp-man").attributes[1].value = `translate(${+s} ${+f[1].match(/[0-9/.]+/)})`), 1 == document.querySelector("#otp-woman").textContent.length ? (q = +document.querySelector("#otp-woman").scrollHeight / 3, f = document.querySelector("#otp-woman").attributes[1].value.split(" "), document.querySelector("#otp-woman").attributes[1].value = `translate(${+p + q / 2 - 1} ${+f[1].match(/[0-9/.]+/)})`) : (q = +document.querySelector("#otp-woman").scrollHeight / 3, f = document.querySelector("#otp-woman").attributes[1].value.split(" "), document.querySelector("#otp-woman").attributes[1].value = `translate(${+p} ${+f[1].match(/[0-9/.]+/)})`), 1 == document.querySelector("#otp-sum-mw-1").textContent.length ? (q = +document.querySelector("#otp-sum-mw-1").scrollHeight / 3, f = document.querySelector("#otp-sum-mw-1").attributes[1].value.split(" "), document.querySelector("#otp-sum-mw-1").attributes[1].value = `translate(${+d + q / 2 - 1} ${+f[1].match(/[0-9/.]+/)})`) : (q = +document.querySelector("#otp-sum-mw-1").scrollHeight / 3, f = document.querySelector("#otp-sum-mw-1").attributes[1].value.split(" "), document.querySelector("#otp-sum-mw-1").attributes[1].value = `translate(${+d} ${+f[1].match(/[0-9/.]+/)})`), 1 == document.querySelector("#otp-otp-du").textContent.length ? (q = +document.querySelector("#otp-otp-du").scrollHeight / 3, f = document.querySelector("#otp-otp-du").attributes[1].value.split(" "), document.querySelector("#otp-otp-du").attributes[1].value = `translate(${+x + q / 2 - 1.5} ${+f[1].match(/[0-9/.]+/)})`) : (q = +document.querySelector("#otp-otp-du").scrollHeight / 3, f = document.querySelector("#otp-otp-du").attributes[1].value.split(" "), document.querySelector("#otp-otp-du").attributes[1].value = `translate(${+(x - 1.5)} ${+f[1].match(/[0-9/.]+/)})`), 1 == document.querySelector("#otp-otp-pl").textContent.length ? (q = +document.querySelector("#otp-otp-pl").scrollHeight / 3, f = document.querySelector("#otp-otp-pl").attributes[1].value.split(" "), document.querySelector("#otp-otp-pl").attributes[1].value = `translate(${+S + q / 2 - 1.5} ${+f[1].match(/[0-9/.]+/)})`) : (q = +document.querySelector("#otp-otp-pl").scrollHeight / 3, f = document.querySelector("#otp-otp-pl").attributes[1].value.split(" "), document.querySelector("#otp-otp-pl").attributes[1].value = `translate(${+(S - 1.5)} ${+f[1].match(/[0-9/.]+/)})`), q = 0, f = 0
        }

        function f(t) { let e = t.toString(10).replace(/\D/g, "0").split("").map(Number); for (var n = 0, o = 0; o < e.length; o++) n += e[o]; return n }
        $("#calc-matriza-bd").on("input", t => {
            ! function(t) {
                var e = t,
                    n = e.dataset.mask,
                    o = e.value,
                    r = /[0\*]/,
                    l = /[0-9]/,
                    c = "";
                try {
                    for (var i = n.length, u = 0, y = 0; y < i && !(y >= o.length) && ("0" !== n[y] || null !== o[u].match(l));) {
                        for (; null === n[y].match(r) && o[u] !== n[y];) c += n[y++];
                        c += o[u++], y++
                    }
                    e.value = c
                } catch (t) {}
            }(t.target);
            let e = t.target.value;
            if (10 == e.length) {
                document.querySelector(".calc-download-btn").classList.remove("calc-hidden");
                let n = +(e = e.split("."))[0],
                    o = +e[1],
                    r = +e[2];
                document.querySelector("#calc-matriza-vz").innerHTML = function(t) {
                    var e = parseInt(t.substring(0, 2)),
                        n = parseInt(t.substring(3, 5)),
                        o = parseInt(t.substring(6, 10)),
                        r = new Date,
                        l = new Date(o, n - 1, e),
                        c = r.getFullYear() - l.getFullYear(),
                        i = r.getMonth() - l.getMonth();
                    return (i < 0 || 0 === i && r.getDate() < l.getDate()) && c--, c
                }(t.target.value), n < 10 && 2 == n.length && (n = n.replace(/^0+/, "")), o < 10 && 2 == +o.length && (o = o.replace(/^0+/, ""));
                let l = f(r),
                    c = n;
                l > 22 && (l = f(l)), n > 22 && n <= 31 && (c = f(n));
                let i = c + l + o;
                i > 22 && (i = f(i));
                let u = c + l + o + i;
                u > 22 && (u = f(u));
                let y = u + l;
                y > 22 && (y = f(y));
                let a = u + i;
                a > 22 && (a = f(a));
                let m = y + a;
                m > 22 && (m = f(m));
                let s = m + a;
                s > 22 && (s = f(s));
                let p = m + y;
                p > 22 && (p = f(p));
                let d = a + i;
                d > 22 && (d = f(d));
                let x = u + o;
                x > 22 && (x = f(x));
                let S = x + o;
                S > 22 && (S = f(S));
                let g = x + u;
                g > 22 && (g = f(g));
                let C = c + u;
                C > 22 && (C = f(C));
                let h = C + c;
                h > 22 && (h = f(h));
                let b = C + u;
                b > 22 && (b = f(b));
                let w = c + o;
                w > 22 && (w = f(w));
                let M = l + o;
                M > 22 && (M = f(M));
                let $ = l + i;
                $ > 22 && ($ = f($));
                let k = c + i;
                k > 22 && (k = f(k));
                let v = c + l;
                v > 22 && (v = f(v));
                let z = o + i;
                z > 22 && (z = f(z));
                let H = v + z;
                H > 22 && (H = f(H));
                let T = w + $;
                T > 22 && (T = f(T));
                let P = M + k;
                P > 22 && (P = f(P));
                let L = T + P;
                L > 22 && (L = f(L));
                let A = L + H;
                A > 22 && (A = f(A));
                let R = l + y;
                R > 22 && (R = f(R));
                let _ = w + u;
                _ > 22 && (_ = f(_));
                let D = _ + w;
                D > 22 && (D = f(D));
                let I = u + M;
                I > 22 && (I = f(I));
                let B = I + M;
                B > 22 && (B = f(B));
                let F = u + $;
                F > 22 && (F = f(F));
                let Y = F + $;
                Y > 22 && (Y = f(Y));
                let N = u + k;
                N > 22 && (N = f(N));
                let O = N + k;
                O > 22 && (O = f(O));
                let j = w + c;
                j > 22 && (j = f(j));
                let E = k + c;
                E > 22 && (E = f(E));
                let G = k + i;
                G > 22 && (G = f(G));
                let J = $ + i;
                J > 22 && (J = f(J));
                let K = $ + l;
                K > 22 && (K = f(K));
                let Q = M + l;
                Q > 22 && (Q = f(Q));
                let U = M + o;
                U > 22 && (U = f(U));
                let V = w + o;
                V > 22 && (V = f(V));
                let W = j + w;
                W > 22 && (W = f(W));
                let X = j + c;
                X > 22 && (X = f(X));
                let Z = c + E;
                Z > 22 && (Z = f(Z));
                let tt = k + E;
                tt > 22 && (tt = f(tt));
                let et = k + G;
                et > 22 && (et = f(et));
                let nt = i + G;
                nt > 22 && (nt = f(nt));
                let ot = i + J;
                ot > 22 && (ot = f(ot));
                let rt = $ + J;
                rt > 22 && (rt = f(rt));
                let lt = $ + K;
                lt > 22 && (lt = f(lt));
                let ct = l + K;
                ct > 22 && (ct = f(ct));
                let it = l + Q;
                it > 22 && (it = f(it));
                let ut = Q + M;
                ut > 22 && (ut = f(ut));
                let yt = U + M;
                yt > 22 && (yt = f(yt));
                let at = U + o;
                at > 22 && (at = f(at));
                let mt = V + o;
                mt > 22 && (mt = f(mt));
                let st = V + w;
                st > 22 && (st = f(st));
                let pt = W + w;
                pt > 22 && (pt = f(pt));
                let dt = W + j;
                dt > 22 && (dt = f(dt));
                let xt = X + j;
                xt > 22 && (xt = f(xt));
                let St = X + c;
                St > 22 && (St = f(St));
                let qt = Z + c;
                qt > 22 && (qt = f(qt));
                let ft = Z + E;
                ft > 22 && (ft = f(ft));
                let gt = tt + E;
                gt > 22 && (gt = f(gt));
                let Ct = tt + k;
                Ct > 22 && (Ct = f(Ct));
                let ht = et + k;
                ht > 22 && (ht = f(ht));
                let bt = G + et;
                bt > 22 && (bt = f(bt));
                let wt = G + nt;
                wt > 22 && (wt = f(wt));
                let Mt = i + nt;
                Mt > 22 && (Mt = f(Mt));
                let $t = i + ot;
                $t > 22 && ($t = f($t));
                let kt = ot + J;
                kt > 22 && (kt = f(kt));
                let vt = J + rt;
                vt > 22 && (vt = f(vt));
                let zt = $ + rt;
                zt > 22 && (zt = f(zt));
                let Ht = $ + lt;
                Ht > 22 && (Ht = f(Ht));
                let Tt = lt + K;
                Tt > 22 && (Tt = f(Tt));
                let Pt = K + ct;
                Pt > 22 && (Pt = f(Pt));
                let Lt = ct + l;
                Lt > 22 && (Lt = f(Lt));
                let At = l + it;
                At > 22 && (At = f(At));
                let Rt = it + Q;
                Rt > 22 && (Rt = f(Rt));
                let _t = Q + ut;
                _t > 22 && (_t = f(_t));
                let Dt = ut + M;
                Dt > 22 && (Dt = f(Dt));
                let It = M + yt;
                It > 22 && (It = f(It));
                let Bt = yt + U;
                Bt > 22 && (Bt = f(Bt));
                let Ft = U + at;
                Ft > 22 && (Ft = f(Ft));
                let Yt = at + o;
                Yt > 22 && (Yt = f(Yt));
                let Nt = o + mt;
                Nt > 22 && (Nt = f(Nt));
                let Ot = mt + V;
                Ot > 22 && (Ot = f(Ot));
                let jt = V + st;
                jt > 22 && (jt = f(jt));
                let Et = st + w;
                Et > 22 && (Et = f(Et));
                let Gt = w + M + $ + k;
                Gt > 22 && (Gt = f(Gt));
                let Jt = u + Gt;
                Jt > 22 && (Jt = f(Jt)),
                    function(t, e, n, o, r, l, c, i, u, y, a, m, s, p, d, x, S, g, C, h, b, w, M, $, k, v, z, H, T, P, L, A, R, _, D, I, B, F, Y, N, O, j, E, G, J, K, Q, U, V, W, X, Z, tt, et, nt, ot, rt, lt, ct, it, ut, yt, at, mt, st, pt, dt, xt, St, qt, ft, gt, Ct, ht, bt, wt, Mt, $t, kt, vt, zt, Ht, Tt, Pt, Lt, At, Rt, _t, Dt, It, Bt, Ft, Yt, Nt, Ot) {
                        document.querySelector("#point-2").textContent = n, document.querySelector("#point-1").textContent = t, document.querySelector("#point-3").textContent = e, document.querySelector("#point-4").textContent = o, document.querySelector("#point-5").textContent = r, document.querySelector("#point-11").textContent = l, document.querySelector("#point-10").textContent = c, document.querySelector("#point-12").textContent = i, document.querySelector("#point-13").textContent = u, document.querySelector("#point-14").textContent = y, document.querySelector("#point-19").textContent = a, document.querySelector("#point-16").textContent = m, document.querySelector("#point-18").textContent = s, document.querySelector("#point-22").textContent = p, document.querySelector("#point-15").textContent = d, document.querySelector("#point-17").textContent = x, document.querySelector("#point-21").textContent = S, document.querySelector("#point-6").textContent = g, document.querySelector("#point-7").textContent = C, document.querySelector("#point-8").textContent = h, document.querySelector("#point-9").textContent = b, document.querySelector("#point-20").textContent = T, document.querySelector("#point-tl1-1").textContent = P, document.querySelector("#point-tl2").textContent = L, document.querySelector("#point-tr2").textContent = A, document.querySelector("#point-tr1").textContent = R, document.querySelector("#point-br2").textContent = D, document.querySelector("#point-br1").textContent = _, document.querySelector("#point-bl1").textContent = I, document.querySelector("#point-bl2").textContent = B, document.querySelector("#point-lt").textContent = F, document.querySelector("#point-lb").textContent = Y, document.querySelector("#point-bl").textContent = N, document.querySelector("#point-br").textContent = O, document.querySelector("#point-rb").textContent = j, document.querySelector("#point-rt").textContent = E, document.querySelector("#point-tr").textContent = G, document.querySelector("#point-tl").textContent = J, document.querySelector("#pointlm11").textContent = K, document.querySelector("#pointlm8").textContent = Q, document.querySelector("#pointlm8").textContent = Q, document.querySelector("#pointlm5").textContent = U, document.querySelector("#pointlm2").textContent = V, document.querySelector("#pointbm11").textContent = W, document.querySelector("#pointbm8").textContent = X, document.querySelector("#pointbm5").textContent = Z, document.querySelector("#pointbm2").textContent = tt, document.querySelector("#pointrm11").textContent = et, document.querySelector("#pointrm8").textContent = nt, document.querySelector("#pointrm5").textContent = ot, document.querySelector("#pointrm2").textContent = rt, document.querySelector("#pointtm11").textContent = lt, document.querySelector("#pointtm8").textContent = ct, document.querySelector("#pointtm5").textContent = it, document.querySelector("#pointtm2").textContent = ut, document.querySelector("#pointlm12").textContent = yt, document.querySelector("#pointlm10").textContent = at, document.querySelector("#pointlm9").textContent = mt, document.querySelector("#pointlm7").textContent = st, document.querySelector("#pointlm6").textContent = pt, document.querySelector("#pointlm4").textContent = dt, document.querySelector("#pointlm3").textContent = xt, document.querySelector("#pointlm1").textContent = St, document.querySelector("#pointrm6").textContent = qt, document.querySelector("#pointrm4").textContent = ft, document.querySelector("#pointrm3").textContent = gt, document.querySelector("#pointrm1").textContent = Ct, document.querySelector("#pointbm12").textContent = ht, document.querySelector("#pointbm10").textContent = bt, document.querySelector("#pointbm9").textContent = wt, document.querySelector("#pointbm7").textContent = Mt, document.querySelector("#pointbm6").textContent = $t, document.querySelector("#pointbm4").textContent = kt, document.querySelector("#pointbm3").textContent = vt, document.querySelector("#pointbm1").textContent = zt, document.querySelector("#pointrm12").textContent = Ht, document.querySelector("#pointrm10").textContent = Tt, document.querySelector("#pointrm9").textContent = Pt, document.querySelector("#pointrm7").textContent = Lt, document.querySelector("#pointtm12").textContent = At, document.querySelector("#pointtm10").textContent = Rt, document.querySelector("#pointtm9").textContent = _t, document.querySelector("#pointtm7").textContent = Dt, document.querySelector("#pointtm6").textContent = It, document.querySelector("#pointtm4").textContent = Bt, document.querySelector("#pointtm3").textContent = Ft, document.querySelector("#pointtm1").textContent = Yt, document.querySelector("#otp-zemly").textContent = w, document.querySelector("#otp-nebo").textContent = M, document.querySelector("#otp-sum-nz").textContent = $, document.querySelector("#otp-man").textContent = k, document.querySelector("#otp-woman").textContent = v, document.querySelector("#otp-sum-mw-1").textContent = z, document.querySelector("#calc-otp-sila-roda").textContent = Nt;
                        let jt = Nt + r;
                        jt > 22 && (jt = f(jt));
                        document.querySelector("#calc-otp-vnut-sila").textContent = `${r} ${Nt} ${jt}`;
                        let Et = z + $;
                        Et > 22 && (Et = f(Et));
                        let Gt = $ + z;
                        Gt > 22 && (Gt = f(Gt));
                        document.querySelector("#otp-otp-du").textContent = Gt;
                        let Jt = Gt + z;
                        Jt > 22 && (Jt = f(Jt));
                        document.querySelector("#otp-otp-pl").textContent = Jt, document.querySelector(".physics-row-1").textContent = t, document.querySelector(".energy-row-1").textContent = n, document.querySelector(".key-row-1-1").textContent = g, document.querySelector(".physics-row-2").textContent = x, document.querySelector(".energy-row-2-2").textContent = s;
                        let Kt = x + s;
                        Kt > 22 && (Kt = f(Kt));
                        document.querySelector(".key-row-2").textContent = Kt, document.querySelector(".physics-row-3").textContent = d, document.querySelector(".energy-row-3").textContent = m;
                        let Qt = d + m;
                        Qt > 22 && (Qt = f(Qt));
                        document.querySelector(".key-row-3").textContent = Qt, document.querySelector(".physics-row-4").textContent = S, document.querySelector(".energy-row-4").textContent = p;
                        let Ut = S + p;
                        Ut > 22 && (Ut = f(Ut));
                        document.querySelector(".key-row-4").textContent = Ut, document.querySelector(".physics-row-5").textContent = r, document.querySelector(".energy-row-5").textContent = r;
                        let Vt = 2 * r;
                        Vt > 22 && (Vt = f(Vt));
                        document.querySelector(".key-row-5").textContent = Vt, document.querySelector(".physics-row-6").textContent = l, document.querySelector(".energy-row-6").textContent = c, document.querySelector(".key-row-6").textContent = i, document.querySelector(".physics-row-7").textContent = e, document.querySelector(".energy-row-7").textContent = o, document.querySelector(".key-row-7").textContent = h;
                        let Wt = t + x + d + S + r + l + e;
                        Wt > 22 && (Wt = f(Wt));
                        Wt > 22 && (Wt = f(Wt));
                        document.querySelector(".physics-row-8").textContent = Wt;
                        let Xt = n + s + m + p + r + c + o;
                        Xt > 22 && (Xt = f(Xt));
                        Xt > 22 && (Xt = f(Xt));
                        document.querySelector(".energy-row-8").textContent = Xt;
                        let Zt = g + Kt + Qt + Ut + Vt + i + h;
                        Zt > 22 && (Zt = f(Zt));
                        Zt > 22 && (Zt = f(Zt));
                        document.querySelector(".key-row-8").textContent = Zt, q()
                    }(c, l, o, i, u, y, a, m, s, p, d, x, S, g, C, h, b, w, M, $, k, v, z, H, T, P, L, 0, R, _, D, B, I, F, Y, N, O, j, E, G, J, K, Q, U, V, W, X, Z, tt, et, nt, ot, rt, lt, ct, it, ut, yt, at, mt, st, pt, dt, xt, St, qt, ft, gt, Ct, At, Rt, _t, Dt, ht, bt, wt, Mt, $t, kt, vt, zt, Ht, Tt, Pt, Lt, It, Bt, Ft, Yt, Nt, Ot, jt, Et, Gt)
            } else document.querySelector("#point-2").textContent = 0, document.querySelector("#point-1").textContent = 0, document.querySelector("#point-3").textContent = 0, document.querySelector("#point-4").textContent = 0, document.querySelector("#point-5").textContent = 0, document.querySelector("#point-11").textContent = 0, document.querySelector("#point-10").textContent = 0, document.querySelector("#point-12").textContent = 0, document.querySelector("#point-13").textContent = 0, document.querySelector("#point-14").textContent = 0, document.querySelector("#point-19").textContent = 0, document.querySelector("#point-16").textContent = 0, document.querySelector("#point-18").textContent = 0, document.querySelector("#point-22").textContent = 0, document.querySelector("#point-15").textContent = 0, document.querySelector("#point-17").textContent = 0, document.querySelector("#point-21").textContent = 0, document.querySelector("#point-6").textContent = 0, document.querySelector("#point-7").textContent = 0, document.querySelector("#point-8").textContent = 0, document.querySelector("#point-9").textContent = 0, document.querySelector("#point-20").textContent = 0, document.querySelector("#point-tl1-1").textContent = 0, document.querySelector("#point-tl2").textContent = 0, document.querySelector("#point-tr2").textContent = 0, document.querySelector("#point-tr1").textContent = 0, document.querySelector("#point-br2").textContent = 0, document.querySelector("#point-br1").textContent = 0, document.querySelector("#point-bl1").textContent = 0, document.querySelector("#point-bl2").textContent = 0, document.querySelector("#point-lt").textContent = 0, document.querySelector("#point-lb").textContent = 0, document.querySelector("#point-bl").textContent = 0, document.querySelector("#point-br").textContent = 0, document.querySelector("#point-rb").textContent = 0, document.querySelector("#point-rt").textContent = 0, document.querySelector("#point-tr").textContent = 0, document.querySelector("#point-tl").textContent = 0, document.querySelector("#pointlm11").textContent = 0, document.querySelector("#pointlm8").textContent = 0, document.querySelector("#pointlm8").textContent = 0, document.querySelector("#pointlm5").textContent = 0, document.querySelector("#pointlm2").textContent = 0, document.querySelector("#pointbm11").textContent = 0, document.querySelector("#pointbm8").textContent = 0, document.querySelector("#pointbm5").textContent = 0, document.querySelector("#pointbm2").textContent = 0, document.querySelector("#pointrm11").textContent = 0, document.querySelector("#pointrm8").textContent = 0, document.querySelector("#pointrm5").textContent = 0, document.querySelector("#pointrm2").textContent = 0, document.querySelector("#pointtm11").textContent = 0, document.querySelector("#pointtm8").textContent = 0, document.querySelector("#pointtm5").textContent = 0, document.querySelector("#pointtm2").textContent = 0, document.querySelector("#pointlm12").textContent = 0, document.querySelector("#pointlm10").textContent = 0, document.querySelector("#pointlm9").textContent = 0, document.querySelector("#pointlm7").textContent = 0, document.querySelector("#pointlm6").textContent = 0, document.querySelector("#pointlm4").textContent = 0, document.querySelector("#pointlm3").textContent = 0, document.querySelector("#pointlm1").textContent = 0, document.querySelector("#pointrm6").textContent = 0, document.querySelector("#pointrm4").textContent = 0, document.querySelector("#pointrm3").textContent = 0, document.querySelector("#pointrm1").textContent = 0, document.querySelector("#pointbm12").textContent = 0, document.querySelector("#pointbm10").textContent = 0, document.querySelector("#pointbm9").textContent = 0, document.querySelector("#pointbm7").textContent = 0, document.querySelector("#pointbm6").textContent = 0, document.querySelector("#pointbm4").textContent = 0, document.querySelector("#pointbm3").textContent = 0, document.querySelector("#pointbm1").textContent = 0, document.querySelector("#pointrm12").textContent = 0, document.querySelector("#pointrm10").textContent = 0, document.querySelector("#pointrm9").textContent = 0, document.querySelector("#pointrm7").textContent = 0, document.querySelector("#pointtm12").textContent = 0, document.querySelector("#pointtm10").textContent = 0, document.querySelector("#pointtm9").textContent = 0, document.querySelector("#pointtm7").textContent = 0, document.querySelector("#pointtm6").textContent = 0, document.querySelector("#pointtm4").textContent = 0, document.querySelector("#pointtm3").textContent = 0, document.querySelector("#pointtm1").textContent = 0, document.querySelector("#otp-zemly").textContent = 0, document.querySelector("#otp-nebo").textContent = 0, document.querySelector("#otp-sum-nz").textContent = 0, document.querySelector("#otp-man").textContent = 0, document.querySelector("#otp-woman").textContent = 0, document.querySelector("#otp-sum-mw-1").textContent = 0, document.querySelector("#calc-otp-sila-roda").textContent = 0, document.querySelector("#calc-otp-vnut-sila").textContent = 0, document.querySelector("#otp-otp-du").textContent = 0, document.querySelector("#otp-otp-pl").textContent = 0, document.querySelector(".physics-row-1").textContent = 0, document.querySelector(".energy-row-1").textContent = 0, document.querySelector(".key-row-1-1").textContent = 0, document.querySelector(".physics-row-2").textContent = 0, document.querySelector(".energy-row-2-2").textContent = 0, document.querySelector(".key-row-2").textContent = 0, document.querySelector(".physics-row-3").textContent = 0, document.querySelector(".energy-row-3").textContent = 0, document.querySelector(".key-row-3").textContent = 0, document.querySelector(".physics-row-4").textContent = 0, document.querySelector(".energy-row-4").textContent = 0, document.querySelector(".key-row-4").textContent = 0, document.querySelector(".physics-row-5").textContent = 0, document.querySelector(".energy-row-5").textContent = 0, document.querySelector(".key-row-5").textContent = 0, document.querySelector(".physics-row-6").textContent = 0, document.querySelector(".energy-row-6").textContent = 0, document.querySelector(".key-row-6").textContent = 0, document.querySelector(".physics-row-7").textContent = 0, document.querySelector(".energy-row-7").textContent = 0, document.querySelector(".key-row-7").textContent = 0, document.querySelector(".physics-row-8").textContent = 0, document.querySelector(".energy-row-8").textContent = 0, document.querySelector(".key-row-8").textContent = 0, document.querySelector(".calc-download-btn").classList.add("calc-hidden"), q()
        }), document.querySelector("#point-2").textContent = 0, document.querySelector("#point-1").textContent = 0, document.querySelector("#point-3").textContent = 0, document.querySelector("#point-4").textContent = 0, document.querySelector("#point-5").textContent = 0, document.querySelector("#point-11").textContent = 0, document.querySelector("#point-10").textContent = 0, document.querySelector("#point-12").textContent = 0, document.querySelector("#point-13").textContent = 0, document.querySelector("#point-14").textContent = 0, document.querySelector("#point-19").textContent = 0, document.querySelector("#point-16").textContent = 0, document.querySelector("#point-18").textContent = 0, document.querySelector("#point-22").textContent = 0, document.querySelector("#point-15").textContent = 0, document.querySelector("#point-17").textContent = 0, document.querySelector("#point-21").textContent = 0, document.querySelector("#point-6").textContent = 0, document.querySelector("#point-7").textContent = 0, document.querySelector("#point-8").textContent = 0, document.querySelector("#point-9").textContent = 0, document.querySelector("#point-20").textContent = 0, document.querySelector("#point-tl1-1").textContent = 0, document.querySelector("#point-tl2").textContent = 0, document.querySelector("#point-tr2").textContent = 0, document.querySelector("#point-tr1").textContent = 0, document.querySelector("#point-br2").textContent = 0, document.querySelector("#point-br1").textContent = 0, document.querySelector("#point-bl1").textContent = 0, document.querySelector("#point-bl2").textContent = 0, document.querySelector("#point-lt").textContent = 0, document.querySelector("#point-lb").textContent = 0, document.querySelector("#point-bl").textContent = 0, document.querySelector("#point-br").textContent = 0, document.querySelector("#point-rb").textContent = 0, document.querySelector("#point-rt").textContent = 0, document.querySelector("#point-tr").textContent = 0, document.querySelector("#point-tl").textContent = 0, document.querySelector("#pointlm11").textContent = 0, document.querySelector("#pointlm8").textContent = 0, document.querySelector("#pointlm8").textContent = 0, document.querySelector("#pointlm5").textContent = 0, document.querySelector("#pointlm2").textContent = 0, document.querySelector("#pointbm11").textContent = 0, document.querySelector("#pointbm8").textContent = 0, document.querySelector("#pointbm5").textContent = 0, document.querySelector("#pointbm2").textContent = 0, document.querySelector("#pointrm11").textContent = 0, document.querySelector("#pointrm8").textContent = 0, document.querySelector("#pointrm5").textContent = 0, document.querySelector("#pointrm2").textContent = 0, document.querySelector("#pointtm11").textContent = 0, document.querySelector("#pointtm8").textContent = 0, document.querySelector("#pointtm5").textContent = 0, document.querySelector("#pointtm2").textContent = 0, document.querySelector("#pointlm12").textContent = 0, document.querySelector("#pointlm10").textContent = 0, document.querySelector("#pointlm9").textContent = 0, document.querySelector("#pointlm7").textContent = 0, document.querySelector("#pointlm6").textContent = 0, document.querySelector("#pointlm4").textContent = 0, document.querySelector("#pointlm3").textContent = 0, document.querySelector("#pointlm1").textContent = 0, document.querySelector("#pointrm6").textContent = 0, document.querySelector("#pointrm4").textContent = 0, document.querySelector("#pointrm3").textContent = 0, document.querySelector("#pointrm1").textContent = 0, document.querySelector("#pointbm12").textContent = 0, document.querySelector("#pointbm10").textContent = 0, document.querySelector("#pointbm9").textContent = 0, document.querySelector("#pointbm7").textContent = 0, document.querySelector("#pointbm6").textContent = 0, document.querySelector("#pointbm4").textContent = 0, document.querySelector("#pointbm3").textContent = 0, document.querySelector("#pointbm1").textContent = 0, document.querySelector("#pointrm12").textContent = 0, document.querySelector("#pointrm10").textContent = 0, document.querySelector("#pointrm9").textContent = 0, document.querySelector("#pointrm7").textContent = 0, document.querySelector("#pointtm12").textContent = 0, document.querySelector("#pointtm10").textContent = 0, document.querySelector("#pointtm9").textContent = 0, document.querySelector("#pointtm7").textContent = 0, document.querySelector("#pointtm6").textContent = 0, document.querySelector("#pointtm4").textContent = 0, document.querySelector("#pointtm3").textContent = 0, document.querySelector("#pointtm1").textContent = 0, document.querySelector("#otp-zemly").textContent = 0, document.querySelector("#otp-nebo").textContent = 0, document.querySelector("#otp-sum-nz").textContent = 0, document.querySelector("#otp-man").textContent = 0, document.querySelector("#otp-woman").textContent = 0, document.querySelector("#otp-sum-mw-1").textContent = 0, document.querySelector("#calc-otp-sila-roda").textContent = 0, document.querySelector("#calc-otp-vnut-sila").textContent = 0, document.querySelector("#otp-otp-du").textContent = 0, document.querySelector("#otp-otp-pl").textContent = 0, document.querySelector(".physics-row-1").textContent = 0, document.querySelector(".energy-row-1").textContent = 0, document.querySelector(".key-row-1-1").textContent = 0, document.querySelector(".physics-row-2").textContent = 0, document.querySelector(".energy-row-2-2").textContent = 0, document.querySelector(".key-row-2").textContent = 0, document.querySelector(".physics-row-3").textContent = 0, document.querySelector(".energy-row-3").textContent = 0, document.querySelector(".key-row-3").textContent = 0, document.querySelector(".physics-row-4").textContent = 0, document.querySelector(".energy-row-4").textContent = 0, document.querySelector(".key-row-4").textContent = 0, document.querySelector(".physics-row-5").textContent = 0, document.querySelector(".energy-row-5").textContent = 0, document.querySelector(".key-row-5").textContent = 0, document.querySelector(".physics-row-6").textContent = 0, document.querySelector(".energy-row-6").textContent = 0, document.querySelector(".key-row-6").textContent = 0, document.querySelector(".physics-row-7").textContent = 0, document.querySelector(".energy-row-7").textContent = 0, document.querySelector(".key-row-7").textContent = 0, document.querySelector(".physics-row-8").textContent = 0, document.querySelector(".energy-row-8").textContent = 0, document.querySelector(".key-row-8").textContent = 0, q()
    }); <
/script>