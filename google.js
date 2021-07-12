console.log('EPs browser extension started');



rdiv = document.getElementsByClassName("MUFPAc");

if (rdiv) {
    rdiv = rdiv[0];

    console.log('found the instruments panel..');
    console.log(rdiv);

    var ta = document.createElement('a');
    ta.href = window.location.href+"&tbs=qdr:y";
    ta.innerText = "[last year]"

    rdiv.innerHTML = ta.outerHTML + rdiv.innerHTML;
}


console.log('EPs browser extension finished');
