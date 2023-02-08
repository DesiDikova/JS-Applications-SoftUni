async function lockedProfile() {

  const url = 'http://localhost:3030/jsonstore/advanced/profiles';
  const mainElement = document.getElementById('main');

  const response = await fetch(url)
  const data = await response.json();

  const profile = document.querySelector('.profile');
  profile.remove();

  Object.values(data).forEach(info => {
    let profilsUsers = createElemnts(info._id, info.username, info.email, info.age);

    mainElement.appendChild(profilsUsers);
  });

  function createElemnts(idUser, username, email, age) {
    const divProfile = document.createElement('div');
    divProfile.classList.add('profile');

    const img = document.createElement('img');
    img.src = './iconProfile2.png';
    img.classList.add('userIcon');

    const labelLock = document.createElement('label');
    labelLock.textContent = 'Lock';

    const inputRadioLock = document.createElement('input');
    inputRadioLock.type = 'radio';
    inputRadioLock.name = `user${idUser}Locked`;
    inputRadioLock.value = 'lock';
    inputRadioLock.checked = true;

    const labelUnlock = document.createElement('label');
    labelUnlock.textContent = 'Unlock';

    const inputRadioUnlock = document.createElement('input');
    inputRadioUnlock.type = 'radio';
    inputRadioUnlock.name = `user${idUser}Locked`;
    inputRadioUnlock.value = 'unlock';

    const br = document.createElement('br');
    const hrFirst = document.createElement('hr');

    const labelUsername = document.createElement('label');
    labelUsername.textContent = 'Username';

    const inputUsername = document.createElement('input');
    inputUsername.type = 'text';
    inputUsername.name = `user${idUser}Username`;
    inputUsername.value = username;
    inputUsername.disabled = true;
    inputUsername.readonly = true;

    const div = document.createElement('div');
    div.classList.add(`user${idUser}Username`);

    const hrSecond = document.createElement('hr');

    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'Email:';

    const inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.name = `user${idUser}Email`;
    inputEmail.value = email;
    inputEmail.disabled = true;
    inputEmail.readonly = true;

    const labelAge = document.createElement('label');
    labelAge.textContent = 'Age:';

    const inputAge = document.createElement('input');
    inputAge.type = 'text';
    inputAge.name = `user${idUser}Age`;
    inputAge.value = age;
    inputAge.disabled = true;
    inputAge.readonly = true;

    div.appendChild(hrSecond);
    div.appendChild(labelEmail);
    div.appendChild(inputEmail);
    div.appendChild(labelAge);
    div.appendChild(inputAge);

    const button = document.createElement('button');
    button.textContent = 'Show more';
    button.addEventListener('click', hiddenInformation);

    divProfile.appendChild(img);
    divProfile.appendChild(labelLock);
    divProfile.appendChild(inputRadioLock);
    divProfile.appendChild(labelUnlock);
    divProfile.appendChild(inputRadioUnlock);
    divProfile.appendChild(br);
    divProfile.appendChild(hrFirst);
    divProfile.appendChild(labelUsername);
    divProfile.appendChild(inputUsername);
    divProfile.appendChild(div);
    divProfile.appendChild(button);

    return divProfile;
  }

  function hiddenInformation(e) {
    const profile = e.target.parentElement;
    const chek = profile.querySelector('input[type="radio"]:checked');
    const hiddenInfo = profile.querySelector('div');
    const buttonElement = profile.querySelector('button');

    if (chek.value !== 'unlock') {
      hiddenInfo.style.display = 'none';
      return;
    }

    if (chek) {
      if (buttonElement.textContent === 'Show more') {
        hiddenInfo.style.display = 'block';
        buttonElement.textContent = 'Hide it'
      } else {
        buttonElement.textContent = 'Show more';
        hiddenInfo.style.display = 'none';
      }
    }
  }
}
