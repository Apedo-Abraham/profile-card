
const fetchRandomUser = () => {
    console.log('fetching...');
    fetch("https://api.randomuser.me/?nat=US&results")
        .then(response => response.json())
        .then(data => {
            data.results.map(user => {
                const userName = document.getElementById("name")
                 const userGender = document.getElementById("gender");
                 const userLocation = document.getElementById("location");
                 const userImage = document.getElementById("hero");

                userName.innerText = user.name.first;
                userGender.innerText = user.gender;
                userLocation.innerText = user.location.state;
                userImage.innerHTML = `<img src="${user.picture.medium}"/>`;

                results
            })

        })
        .catch(error => console.log(error, 'Logging error'))
}


document.addEventListener('DOMContentLoaded', fetchRandomUser)
