const getRandomUsers = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(response => response.json())
        .then(data => setUser(data))
}
getRandomUsers();
const setUser = data => {
    const parent = document.getElementById('parent-box');
    for (const element of data.results) {
        const { first, last, title } = element.name;
        const { medium } = element.picture;
        const { country, state } = element.location;
        const email = element.email;
        // Create new Column
        const div = document.createElement('div');
        div.classList.add('col-md-3');
        const innerTem = `
        <div class="bg-light h-100 p-2 shadow rounded">
                        <div class="d-flex justify-content-center">
                            <img class="rounded-circle border border-3 border-primary" src="${medium}" alt="images">
                        </div>
                        <div class="d-flex justify-content-center">
                            <h6 class="mb-1">
                                <span>${title}</span>
                                <span>${first}</span>
                                <span>${last}</span>
                            </h6>
                        </div>
                        <div class="d-flex justify-content-center">
                            <p class="fw-light m-0"><i class="fa-solid fa-location-dot"></i> ${state}, <span>${country}.</span></p>
                        </div>
                        <cite class="d-block text-center fw-light">${email}</cite>
        </div>
        `;
        div.innerHTML = innerTem;
        parent.appendChild(div);

    }
}