const url = `${API_HOST_PREFIX}/api/email`;

const SendContactEmail = (payload) => {
    _logger("Sending Email", payload)
    const config = {
        method: 'POST',
        url: `${url}/contactus`,
        data: payload,
        crossdomain: true,
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

export default SendContactEmail
