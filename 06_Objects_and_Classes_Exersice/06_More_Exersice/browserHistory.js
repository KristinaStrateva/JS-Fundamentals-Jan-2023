function browserHistory(browserHistoryInfo, actions) {
    for (let currAction of actions) {
        if (currAction.includes('Open')) {
            let siteToOpen = currAction.split(' ')[1];
            browserHistoryInfo['Open Tabs'].push(siteToOpen);
            browserHistoryInfo['Browser Logs'].push(currAction);

        } else if (currAction.includes('Close')) {
            let siteToClose = currAction.split(' ')[1];

            if (browserHistoryInfo['Open Tabs'].includes(siteToClose)) {
                browserHistoryInfo['Open Tabs'].splice(browserHistoryInfo['Open Tabs'].indexOf(siteToClose), 1);
                browserHistoryInfo['Recently Closed'].push(siteToClose);
                browserHistoryInfo['Browser Logs'].push(currAction);
            }

        } else {
            browserHistoryInfo['Open Tabs'] = [];
            browserHistoryInfo['Recently Closed'] = [];
            browserHistoryInfo['Browser Logs'] = [];
        }
    }

    console.log(browserHistoryInfo['Browser Name']);
    console.log(`Open Tabs: ${browserHistoryInfo['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browserHistoryInfo['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browserHistoryInfo['Browser Logs'].join(', ')}`);
}

browserHistory(
    {"Browser Name":"Mozilla Firefox",

"Open Tabs":["YouTube"],

"Recently Closed":["Gmail",

"Dropbox"],

"Browser Logs":["Open Gmail",

"Close Gmail", "Open Dropbox",

"Open YouTube", "Close Dropbox"]},

["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);