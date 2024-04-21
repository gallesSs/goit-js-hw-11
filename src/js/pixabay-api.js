

export function getInform(str = "") {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '43506380-9b283c5280133fe541ac86218';

    const parameters = new URLSearchParams({
        key: API_KEY,
        q: str,
        image_typ: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 20,
    });
    return fetch(`${BASE_URL}?${parameters}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })

}