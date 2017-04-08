/**
 * Created by marc on 16-12-21.
 */

var loadXML = function(xmlString){ //构建xmldoc对象

    var xmlDoc=null;

    if(window.DOMParser)  //IE9+,FF,webkit
    {
        try{

            domParser = new  DOMParser();
            xmlDoc = domParser.parseFromString(xmlString, 'text/xml');
        }catch(e){
        }
    }
    else if(!window.DOMParser && window.ActiveXObject)
    {   //window.DOMParser 判断是否是非ie浏览器
        var xmlDomVersions = ['MSXML2.DOMDocument','Microsoft.XMLDOM'];
        for(var i=0;i<xmlDomVersions.length;i++){
            try{
                xmlDoc = new ActiveXObject(xmlDomVersions[i]);
                xmlDoc.async = false;
                xmlDoc.loadXML(xmlString); //loadXML方法载入xml字符串
                break;
            }catch(e){
                continue;
            }
        }
    }
    else{
        return null;
    }

    return xmlDoc;
}

var datasource = '<?xml version="1.0" encoding="utf-8" ?> ' +
    '<bookstore> ' +
    '<book id="No1"> ' +
    '<title>An Introduction to XML</title> ' +
    '<author>Chunbin</author> ' +
    '<year>2010</year> ' +
    '<price>98.0</price> ' +
    '</book> ' +
    '<book id="No2"> ' +
    '<title>The Performance of DataBase</title> ' +
    '<author>John</author> ' +
    '<year>1996</year> ' +
    '<price discount="7" data="8">56.0</price> ' +
    '</book> ' +
    '</bookstore>';

var xmlDoc = loadXML(datasource);
if(xmlDoc)  //xml的解析和html doc几乎完全相同，可以使用 xmlDoc.getElementById(),xmlDoc.getElementsByTagName()，xmlDoc.getElementsByClassName
{
    var books= xmlDoc.getElementsByTagName('book');
    var book = xmlDoc.getElementById('No2');

    if(books)
    {
        for(var i=0;i<books.length;i++)
        {
            var title = books[i].getEelementsByTagName('title')[0].firstChild.nodeValue; //确实有点长，因为
            var author = books[i].getEelementsByTagName('author')[0].innerHTML;//变短点
            var year = books[i].getEelementsByTagName('year')[0].innerHTML; //或者这样
            var price = Number(books[i].getEelementsByTagName('price')[0].innerHTML);

            //有值了，下一步不是我的事了
        }

        //获取属性使用 attributes,得到的是nodevaluemap
        var attrs = book.attributes;

        for(var i=0;i<attrs.length;i++)
        {
            var attr = attrs[i];
            var attr_name = attr.name;
            var attr_value =  attr.value;
        }
    }
}