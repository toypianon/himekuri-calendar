const config = {
 try {
    const API_KEY = config.apiKey;
    const CLIENT_ID = config.clientId;
} catch (e) {
    showErrorMessage("config.js が読み込まれていないか、内容が不正です。");
}

};
