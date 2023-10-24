const url = 'https://one00x-data-analysis.onrender.com/assignment'
const assignment_id = 'dfd1ac15-0ca3-4b23-af8b-5a5b44c6c0a2'

const getData = async () => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            email: 'kshitijingale2@gmail.com'
        })

        if (response.status === 500) {
            throw new Error('Unable to fetch data')
        }
        const data = await response.json()
        processData(data)
    } catch (error) {
        console.log(error);
    }
}

const processData = (data) => {
    let maxCount = 1;
    let answer;
    for (let i = 0; i < data.length; i++) {
        let count = 1;
        for (let j = i + 1; j < data.length; j++) {
            if (data[i] == data[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            answer = data[i];
            maxCount = count;
        }
    }

    postData(answer);
}

const postData = async (answer) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                assignment_id,
                answer
            })
        })

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getData();