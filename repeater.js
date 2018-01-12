var shellInterval = require("shell-interval");
shellInterval({
    options: {
        command: "forever restartall",
        time: 3600,
    },
});