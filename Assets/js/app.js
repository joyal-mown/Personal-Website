const profilePic = document.getElementById('profile-pic');

function profileChange() {
    console.log(profilePic.src);
    if(profilePic.src == 'Assets/img/1622637220349%20(2).png'){
        profilePic.src = 'Assets/img/SNAP.jpg';
    }
    else if(profilePic.src == 'Assets/img/SNAP.jpg') {
        profilePic.src = 'Assets/img/SNAP.jpg';
    }
    else{
        profilePic.src = 'Assets/img/1622637220349 (2).png';
    }
}

profilePic.addEventListener('click', profileChange);