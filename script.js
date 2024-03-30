const yes = document.querySelector('#iya');
const no = document.querySelector('#tidak');
yes.addEventListener('click', () => {
    document.querySelectorAll('button').forEach((button) => {
        button.remove();
    });
    document.querySelector('#bg').style.backgroundColor = '#E12E2E';
    document.querySelector('#head').innerText = 'Anda Berbohong!';
    document.querySelector('#text2').innerText = 'Anda adalah seorang Teknisi';
    document.querySelector('#img').setAttribute('src','./Asset/teknisi.png')
});
no.addEventListener('click', () => {
    document.querySelectorAll('button').forEach((button) => {
        button.remove();
    });
    document.querySelector('#bg').style.backgroundColor = '#6FD240';
    document.querySelector('#head').innerText = 'Anda Benar!';
    document.querySelector('#text2').innerText = 'Anda adalah seorang Mahasiswa';
    document.querySelector('#img').setAttribute('src','./Asset/mahasiswa.png')
});