const happy = document.getElementById('happy'),
    calm = document.getElementById('calm'),
    sad = document.getElementById('sad'),
    depression = document.getElementById('depression'),

    relax = document.getElementById('relax'),
    walk = document.getElementById('walk'),
    extreme = document.getElementById('extreme'),
    nothing = document.getElementById('nothing');

const test1 = document.getElementById('test1'),
    test2 = document.getElementById('test2');

const lenskie = document.getElementById('lenskie'),
    geyzer = document.getElementById('geyzer'),
    baikal = document.getElementById('baikal'),
    put = document.getElementById('put'),
    elbrus = document.getElementById('elbrus'),
    altai = document.getElementById('altai');


let globalSum = '';

happy.addEventListener('click', () => {
    globalSum += 'h';
    test1.classList.add('non-active');
    test1.classList.remove('active');
    test2.classList.add('active');
    test2.classList.remove('non-active');
});
calm.addEventListener('click', () => {
    globalSum += 'c';
    test1.classList.add('non-active');
    test1.classList.remove('active');
    test2.classList.add('active');
    test2.classList.remove('non-active');
});
sad.addEventListener('click', () => {
    globalSum += 's';
    test1.classList.add('non-active');
    test1.classList.remove('active');
    test2.classList.add('active');
    test2.classList.remove('non-active');
});
depression.addEventListener('click', () => {
    globalSum += 'd';
    test1.classList.add('non-active');
    test1.classList.remove('active');
    test2.classList.add('active');
    test2.classList.remove('non-active');
});



relax.addEventListener('click', () => {
    globalSum += 'r';
    test2.classList.add('non-active');
    test2.classList.remove('active');
    switch (globalSum) {
        case 'hr':
            altai.classList.remove('non-active');
            altai.classList.add('active');
            break;
        case 'cr':
            baikal.classList.remove('non-active');
            baikal.classList.add('active');
            break;
        case 'sr':
            geyzer.classList.remove('non-active');
            geyzer.classList.add('active');
            break;
        case 'dr':
            put.classList.remove('non-active');
            put.classList.add('active');
            break;
    }
});
walk.addEventListener('click', () => {
    globalSum += 'w';
    test2.classList.add('non-active');
    test2.classList.remove('active');
    switch (globalSum) {
        case 'hw':
            elbrus.classList.remove('non-active');
            elbrus.classList.add('active');
            break;
        case 'cw':
            altai.classList.remove('non-active');
            altai.classList.add('active');
            break;
        case 'sw':
            baikal.classList.remove('non-active');
            baikal.classList.add('active');
            break;
        case 'dw':
            lenskie.classList.remove('non-active');
            lenskie.classList.add('active');
            break;
    }
});
extreme.addEventListener('click', () => {
    globalSum += 'e';
    test2.classList.add('non-active');
    test2.classList.remove('active');
    switch (globalSum) {
        case 'he':
            altai.classList.remove('non-active');
            altai.classList.add('active');
            break;
        case 'ce':
            elbrus.classList.remove('non-active');
            elbrus.classList.add('active');
            break;
        case 'se':
            lenskie.classList.remove('non-active');
            lenskie.classList.add('active');
            break;
        case 'de':
            geyzer.classList.remove('non-active');
            geyzer.classList.add('active');
            break;
    }
});
nothing.addEventListener('click', () => {
    globalSum += 'n';
    test2.classList.add('non-active');
    test2.classList.remove('active');
    switch (globalSum) {
        case 'hn':
            put.classList.remove('non-active');
            put.classList.add('active');
            break;
        case 'cn':
            geyzer.classList.remove('non-active');
            geyzer.classList.add('active');
            break;
        case 'sn':
            elbrus.classList.remove('non-active');
            elbrus.classList.add('active');
            break;
        case 'dn':
            put.classList.remove('non-active');
            put.classList.add('active');
            break;
    }
});