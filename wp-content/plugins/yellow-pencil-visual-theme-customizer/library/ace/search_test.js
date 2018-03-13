"undefined"!=typeof process&&require("amd-loader"),define(function(a,b,c){"use strict";var d=a("./edit_session").EditSession,e=a("./test/mockrenderer").MockRenderer,f=a("./editor").Editor,g=a("./search").Search,h=a("./test/assertions");c.exports={"test: configure the search object":function(){var a=new g;a.set({needle:"juhu"})},"test: find simple text in document":function(){var a=new d(["juhu kinners 123","456"]),b=(new g).set({needle:"kinners"}),c=b.find(a);h.position(c.start,0,5),h.position(c.end,0,12)},"test: find simple text in next line":function(){var a=new d(["abc","juhu kinners 123","456"]),b=(new g).set({needle:"kinners"}),c=b.find(a);h.position(c.start,1,5),h.position(c.end,1,12)},"test: find text starting at cursor position":function(){var a=new d(["juhu kinners","juhu kinners 123"]);a.getSelection().moveCursorTo(0,6);var b=(new g).set({needle:"kinners"}),c=b.find(a);h.position(c.start,1,5),h.position(c.end,1,12)},"test: wrap search is on by default":function(){var a=new d(["abc","juhu kinners 123","456"]);a.getSelection().moveCursorTo(2,1);var b=(new g).set({needle:"kinners"});h.notEqual(b.find(a),null)},"test: wrap search should wrap at file end":function(){var a=new d(["abc","juhu kinners 123","456"]);a.getSelection().moveCursorTo(2,1);var b=(new g).set({needle:"kinners",wrap:!0}),c=b.find(a);h.position(c.start,1,5),h.position(c.end,1,12)},"test: wrap search should find needle even if it starts inside it":function(){var a=new d(["abc","juhu kinners 123","456"]);a.getSelection().moveCursorTo(6,1);var b=(new g).set({needle:"kinners",wrap:!0}),c=b.find(a);h.position(c.start,1,5),h.position(c.end,1,12)},"test: wrap search with no match should return 'null'":function(){var a=new d(["abc","juhu kinners 123","456"]);a.getSelection().moveCursorTo(2,1);var b=(new g).set({needle:"xyz",wrap:!0});h.equal(b.find(a),null)},"test: case sensitive is by default off":function(){var a=new d(["abc","juhu kinners 123","456"]),b=(new g).set({needle:"JUHU"});h.range(b.find(a),1,0,1,4)},"test: case sensitive search":function(){var a=new d(["abc","juhu kinners 123","456"]),b=(new g).set({needle:"KINNERS",caseSensitive:!0}),c=b.find(a);h.equal(c,null)},"test: whole word search should not match inside of words":function(){var a=new d(["juhukinners","juhu kinners 123","456"]),b=(new g).set({needle:"kinners",wholeWord:!0}),c=b.find(a);h.position(c.start,1,5),h.position(c.end,1,12)},"test: find backwards":function(){var a=new d(["juhu juhu juhu juhu"]);a.getSelection().moveCursorTo(0,10);var b=(new g).set({needle:"juhu",backwards:!0}),c=b.find(a);h.position(c.start,0,5),h.position(c.end,0,9)},"test: find in selection":function(){var a=new d(["juhu","juhu","juhu","juhu"]);a.getSelection().setSelectionAnchor(1,0),a.getSelection().selectTo(3,5);var b=(new g).set({needle:"juhu",wrap:!0,range:a.getSelection().getRange()}),c=b.find(a);h.position(c.start,1,0),h.position(c.end,1,4),b=(new g).set({needle:"juhu",wrap:!0,range:a.getSelection().getRange()}),a.getSelection().setSelectionAnchor(0,2),a.getSelection().selectTo(3,2);var c=b.find(a);h.position(c.start,1,0),h.position(c.end,1,4)},"test: find backwards in selection":function(){var a=new d(["juhu","juhu","juhu","juhu"]);a.getSelection().setSelectionAnchor(0,2),a.getSelection().selectTo(3,2);var b=(new g).set({needle:"juhu",wrap:!0,backwards:!0,range:a.getSelection().getRange()}),c=b.find(a);h.position(c.start,2,0),h.position(c.end,2,4),b=(new g).set({needle:"juhu",wrap:!0,range:a.getSelection().getRange()}),a.getSelection().setSelectionAnchor(0,2),a.getSelection().selectTo(1,2);var c=b.find(a);h.position(c.start,1,0),h.position(c.end,1,4)},"test: edge case - match directly before the cursor":function(){var a=new d(["123","123","juhu"]),b=(new g).set({needle:"juhu",wrap:!0});a.getSelection().moveCursorTo(2,5);var c=b.find(a);h.position(c.start,2,0),h.position(c.end,2,4)},"test: edge case - match backwards directly after the cursor":function(){var a=new d(["123","123","juhu"]),b=(new g).set({needle:"juhu",wrap:!0,backwards:!0});a.getSelection().moveCursorTo(2,0);var c=b.find(a);h.position(c.start,2,0),h.position(c.end,2,4)},"test: find using a regular expression":function(){var a=new d(["abc123 123 cd","abc"]),b=(new g).set({needle:"\\d+",regExp:!0}),c=b.find(a);h.position(c.start,0,3),h.position(c.end,0,6)},"test: find using a regular expression and whole word":function(){var a=new d(["abc123 123 cd","abc"]),b=(new g).set({needle:"\\d+\\b",regExp:!0,wholeWord:!0}),c=b.find(a);h.position(c.start,0,7),h.position(c.end,0,10)},"test: use regular expressions with capture groups":function(){var a=new d(["  ab: 12px","  <h1 abc"]),b=(new g).set({needle:"(\\d+)",regExp:!0}),c=b.find(a);h.position(c.start,0,6),h.position(c.end,0,8)},"test: find all matches in selection":function(){var a=new d(["juhu","juhu","juhu","juhu"]);a.getSelection().setSelectionAnchor(0,2),a.getSelection().selectTo(3,2);var b=(new g).set({needle:"uh",wrap:!0,range:a.getSelection().getRange()}),c=b.findAll(a);h.equal(c.length,2),h.position(c[0].start,1,1),h.position(c[0].end,1,3),h.position(c[1].start,2,1),h.position(c[1].end,2,3)},"test: find all multiline matches":function(){var a=new d(["juhu","juhu","juhu","juhu"]),b=(new g).set({needle:"hu\nju",wrap:!0}),c=b.findAll(a);h.equal(c.length,3),h.position(c[0].start,0,2),h.position(c[0].end,1,2),h.position(c[1].start,1,2),h.position(c[1].end,2,2)},"test: replace() should return the replacement if the input matches the needle":function(){var a=(new g).set({needle:"juhu"});h.equal(a.replace("juhu","kinners"),"kinners"),h.equal(a.replace("","kinners"),null),h.equal(a.replace(" juhu","kinners"),null),h.equal(a.replace("Juhu","kinners"),"kinners"),a.set({caseSensitive:!0}),h.equal(a.replace("Juhu","kinners"),null)},"test: replace with a RegExp search":function(){var a=(new g).set({needle:"\\d+",regExp:!0});h.equal(a.replace("123","kinners"),"kinners"),h.equal(a.replace("01234","kinners"),"kinners"),h.equal(a.replace("","kinners"),null),h.equal(a.replace("a12","kinners"),null),h.equal(a.replace("12a","kinners"),null)},"test: replace with RegExp match and capture groups":function(){var a=(new g).set({needle:"ab(\\d\\d)",regExp:!0});h.equal(a.replace("ab12","cd$1"),"cd12"),h.equal(a.replace("ab12","-$&-"),"-ab12-"),h.equal(a.replace("ab12","$$"),"$")},"test: find all using regular expresion containing $":function(){var a=new d(["a","     b","c ","d"]),b=(new g).set({needle:"[ ]+$",regExp:!0,wrap:!0});a.getSelection().moveCursorTo(1,2);var c=b.findAll(a);h.equal(c.length,1),h.position(c[0].start,2,1),h.position(c[0].end,2,2)},"test: find all matches in a line":function(){var a=new d("foo bar foo baz foobar foo"),b=(new g).set({needle:"foo",wrap:!0,wholeWord:!0});a.getSelection().moveCursorTo(0,4);var c=b.findAll(a);h.equal(c.length,3),h.position(c[0].start,0,0),h.position(c[0].end,0,3),h.position(c[1].start,0,8),h.position(c[1].end,0,11),h.position(c[2].start,0,23),h.position(c[2].end,0,26)},"test: find all matches in a line backwards":function(){var a=new d("foo bar foo baz foobar foo"),b=(new g).set({needle:"foo",wrap:!0,wholeWord:!0,backwards:!0});a.getSelection().moveCursorTo(0,13);var c=b.findAll(a);h.equal(c.length,3),h.position(c[2].start,0,23),h.position(c[2].end,0,26),h.position(c[1].start,0,8),h.position(c[1].end,0,11),h.position(c[0].start,0,0),h.position(c[0].end,0,3)},"test: find next empty range":function(){var a=new d("foo foobar foo"),b=new f(new e,a),c={needle:"o*",wrap:!0,regExp:!0,backwards:!1},g=[4,5.2,7,8,9,10,11,12.2,14,0,1.2,3];a.selection.moveCursorTo(0,3);for(var i=0;i<12;i++){b.find(c);var j=b.selection.getRange(),k=j.start.column,l=j.end.column-k;h.equal(k+.1*l,g[i])}c.backwards=!0,g=[1.2,1,0,14,12.2,12,11,10,9,8,7,5.2,5,4,3];for(var i=0;i<16;i++){b.find(c);var j=b.selection.getRange(),k=j.start.column,l=j.end.column-k;console.log(k+.1*l)}}}}),"undefined"!=typeof module&&module===require.main&&require("asyncjs").test.testcase(module.exports).exec();