function extractingFile(path) {
    let lastSlash = path.lastIndexOf('\\');
    let lastDot = path.lastIndexOf('.');

    let fileName = path.substring(lastSlash + 1, lastDot);
    let extension = path.substring(lastDot + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractingFile('C:\\Internal\\training-internal\\Template.pptx');