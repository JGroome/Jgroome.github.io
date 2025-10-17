const showEmailResult = async (e) => {
    e.preventDefault();
    const result = document.getElementById('result');
    let response = await getEmailResult();
    if (response.status === 200) {
        result.innerText = "Email sent successfully!";
    } else {
        result.innerText = "There was an error sending your email. Please try again later.";
    }
};

const getEmailResult = async (e) => {
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    const object = object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById('result');
    result.innerText = "Sending...";

    try {
        const response = await fetch('https://api.web3form.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: json,
        });
        return response;
    } catch (error) {
        console.log(error);
        document.getElementById('result').innerHTML = "There was an error sending your email. Please try again later.";
    };
};

document.getElementById('contact-form').onsubmit = showEmailResult;

