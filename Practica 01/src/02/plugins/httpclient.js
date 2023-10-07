const httpclient = {
    get: async (url) => {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Error');
        }

        const data = await response.json();
        return data;
    },
    post: async (url, body) => {
    },
    put: async (url, body) => {
    },
    delete: async (url) => {
    },
};

module.exports = { httpclient };