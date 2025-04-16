let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector('button');
let img = document.querySelector('img');

btn.addEventListener("click", async function () {

    await getDogImage();

});

async function getDogImage() {
    try {
        let res = await axios.get(url);
        let data = res.data;

        img.src = data.message;
        return (data.message);
    }
    catch (e) {
        console.log("Error", e);
    }
}
