const express = require('express');
const ebookConverter =  require('node-ebook-converter');
const app = express();
app.set('port', process.env.PORT || 3002);


/*
ebookConverter.setPoolSize(2);

ebookConverter.convert({
    input: "./input/test.pdf",
    output: "./output/test.epub",
    authors: "test",
    delete: false // Does not delete input after converting
}).then(response => console.log(response))
    .catch(error => console.error(error));
*/
//----------------------------------------------------------------------------------------
//ebook-convert 환경변수로 등록 후 사용. calibre -> 설치해야함 리액트 환경에서는 구동하지 않음, 백에서 사용해야 할 듯.
const path = require('path')
const xtend = require('xtend')
const convert = require('ebook-convert')

const options = {
    input: path.join(__dirname, './input/test.html'),
    output: path.join(__dirname, 'test.epub'),
    authors: '"Seth Vincent"',
    pageBreaksBefore: '//h:h1',
    chapter: '//h:h1',
    insertBlankLine: true,
    insertBlankLineSize: '1',
    lineHeight: '12',
    marginTop: '50',
    marginRight: '50',
    marginBottom: '50',
    marginLeft: '50'
}

convert(options, function (err) {
    if (err) console.log(err)
})
