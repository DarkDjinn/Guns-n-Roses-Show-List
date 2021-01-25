(function(t){function e(e){for(var o,r,i=e[0],c=e[1],l=e[2],d=0,h=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},s=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/gnr/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Home")],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),n("Table",{staticClass:"mt-1"})],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[n("div",{staticClass:"container-fluid"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("🔫 GnR Vault 🌹")]),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"}),n("Search")],1)])])},l=[],u=(n("4de4"),n("caad"),n("b0c0"),n("2532"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"d-flex ml-auto flex-column"},[n("small",[t._v("Search by Show Name / Song Name / Date")]),n("input",{staticClass:"form-control me-2",attrs:{name:"searchInput",placeholder:"Search...","aria-label":"Search"},domProps:{value:this.$store.getters.searchTerm},on:{input:t.searchInDB}})])}),d=[],h=(n("7db0"),{name:"Search",methods:{searchInDB:function(t){var e=this;if(t.preventDefault(),this.$store.commit("setSearchTerm",t.target.value),this.$store.getters.searchTerm){var n=this.$store.getters.shows.filter((function(t){return t.name.includes(e.$store.getters.searchTerm)||t.date.includes(e.$store.getters.searchTerm)||t.songs.find((function(t){return t.song_name.includes(e.$store.getters.searchTerm)}))}));n.length?this.$store.dispatch("setFilteredShows",n):this.$store.dispatch("setFilteredShows",[{name:"No Results Found!"}])}else this.$store.dispatch("setFilteredShows",[])}}}),m=h,w=n("2877"),p=Object(w["a"])(m,u,d,!1,null,null,null),f=p.exports,v={name:"Navbar",components:{Search:f},data:function(){return{searchTerm:""}},methods:{searchInDB:function(t){var e=this;if(t.preventDefault(),this.searchTerm){var n=this.$store.getters.shows.filter((function(t){return t.name.includes(e.searchTerm)||t.date.includes(e.searchTerm)}));n.length?this.$store.dispatch("setFilteredShows",n):this.$store.dispatch("setFilteredShows",[{name:"No Results Found!"}])}else this.$store.dispatch("setFilteredShows",[])}}},g=v,S=Object(w["a"])(g,c,l,!1,null,null,null),b=S.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showEditModal?n("EditShowModal",{attrs:{clickedShowId:t.clickedShowId,clickedShowName:t.clickedShowName},on:{close:function(e){t.showEditModal=!1},updateShowList:t.updateShowList}}):t._e(),t.showSongListModal?n("SongListModal",{attrs:{clickedShowId:t.clickedShowId,clickedShowName:t.clickedShowName},on:{close:function(e){t.showSongListModal=!1}}}):t._e(),n("AddShow",{on:{updateShowList:t.updateShowList}}),n("p",[t._v("* Click on the show row to open the song list for that show.")]),n("p",[t._v("** Click on a header to order by it.")]),n("table",{staticClass:"table mt-2"},[n("thead",[n("tr",[n("th",{staticStyle:{width:"5.00%"},attrs:{scope:"col"},on:{click:function(e){return t.sortBy("id")}}},[n("a",{attrs:{href:"#"}},[t._v("#")])]),n("th",{staticStyle:{width:"10.00%"},attrs:{scope:"col"},on:{click:function(e){return t.sortBy("date")}}},[n("a",{attrs:{href:"#"}},[t._v("Show Date")])]),n("th",{staticStyle:{width:"40.00%"},attrs:{scope:"col"},on:{click:function(e){return t.sortBy("name")}}},[n("a",{attrs:{href:"#"}},[t._v("Show Name")])]),n("th",{staticStyle:{width:"5.00%"},attrs:{scope:"col"},on:{click:function(e){return t.sortBy("file_type")}}},[n("a",{attrs:{href:"#"}},[t._v("Video/Audio")])]),n("th",{staticStyle:{width:"5.00%"},attrs:{scope:"col"},on:{click:function(e){return t.sortBy("quality")}}},[n("a",{attrs:{href:"#"}},[t._v("Quality")])]),n("th",{staticStyle:{width:"10.00%"},attrs:{scope:"col"},on:{click:function(e){return t.sortBy("obtained")}}},[n("a",{attrs:{href:"#"}},[t._v("Obtained")])]),n("th",{staticStyle:{width:"15.00%"},attrs:{scope:"col"}},[t._v("Update Status")]),n("th",{staticStyle:{width:"5.00%"},attrs:{scope:"col"}},[t._v("Edit")]),n("th",{staticStyle:{width:"5.00%"},attrs:{scope:"col"}},[t._v("Delete")])])]),t.filteredShowList.length&&t.filteredShowList[0]&&"No Results Found!"===t.filteredShowList[0].name?n("tbody",t._l(t.filteredShowList,(function(e){return n("tr",{key:e.name},[n("th",{attrs:{scope:"row"}}),n("td"),n("td",[t._v(t._s(e.name))]),n("td"),n("td"),n("td"),n("td"),n("td"),n("td")])})),0):t.filteredShowList.length?t.filteredShowList.length&&t.filteredShowList[0]&&"No Results Found!"!==t.filteredShowList[0].name?n("tbody",t._l(t.filteredShowList,(function(e){return n("tr",{key:e.id},[n("th",{attrs:{scope:"row"},on:{click:function(n){return t.toggleSongListModal(e)}}},[t._v(t._s(e.id))]),n("td",{on:{click:function(n){return t.toggleSongListModal(e)}}},[t._v(t._s(e.date?e.date:""))]),n("td",{on:{click:function(n){return t.toggleSongListModal(e)}}},[t._v(t._s(e.name))]),n("td",{on:{click:function(n){return t.toggleSongListModal(e)}}},[t._v(t._s(e.file_type))]),n("td",{on:{click:function(n){return t.toggleSongListModal(e)}}},[t._v(t._s(e.quality))]),n("td",{on:{click:function(n){return t.toggleSongListModal(e)}}},[t._v(" "+t._s(1===e.obtained||0===e.obtained?1===e.obtained?"✓":"❌":"")+" ")]),n("td",[n("a",{staticClass:"btn btn-primary",on:{click:function(n){return t.updateStatus(e.id,e.obtained)}}},[t._v(t._s(1===e.obtained||0===e.obtained?1===e.obtained?"I Lost It..":"I Got It!":""))])]),n("td",{on:{click:function(n){return t.toggleEditModal(e)}}},[n("a",{staticClass:"btn btn-info"},[t._v("Edit")])]),n("td",[n("a",{staticClass:"btn btn-danger",on:{click:function(n){return t.deleteShow(e.id)}}},[t._v("Delete")])])])})),0):t._e():n("tbody",t._l(t.showList,(function(e){return n("tr",{key:e.id},[n("th",{attrs:{scope:"row"},on:{click:function(n){return t.toggleSongListModal(e)}}},[t._v(t._s(e.id))]),n("td",{on:{click:function(n){return t.toggleSongListModal(e)}}},[t._v(t._s(e.date))]),n("td",{on:{click:function(n){return t.toggleSongListModal(e)}}},[t._v(t._s(e.name))]),n("td",{on:{click:function(n){return t.toggleSongListModal(e)}}},[t._v(t._s(e.file_type))]),n("td",{on:{click:function(n){return t.toggleSongListModal(e)}}},[t._v(t._s(e.quality))]),n("td",{on:{click:function(n){return t.toggleSongListModal(e)}}},[t._v(" "+t._s(1===e.obtained?"✓":"❌")+" ")]),n("td",[n("a",{staticClass:"btn btn-primary",on:{click:function(n){return t.updateStatus(e.id,e.obtained)}}},[t._v(t._s(1===e.obtained?"I Lost It..":"I Got It!"))])]),n("td",{on:{click:function(n){return t.toggleEditModal(e)}}},[n("a",{staticClass:"btn btn-info"},[t._v("Edit")])]),n("td",[n("a",{staticClass:"btn btn-danger",on:{click:function(n){return t.deleteShow(e.id)}}},[t._v("Delete")])])])})),0)])],1)},y=[],C=(n("96cf"),n("1da1")),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"row g-3"},[n("div",{staticClass:"col-auto"},[n("label",{staticClass:"visually-hidden",attrs:{for:"date"}},[t._v("Show Date")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newShowDate,expression:"newShowDate"}],staticClass:"form-control",attrs:{type:"text",id:"date"},domProps:{value:t.newShowDate},on:{input:function(e){e.target.composing||(t.newShowDate=e.target.value)}}})]),n("div",{staticClass:"col-auto"},[n("label",{staticClass:"visually-hidden",attrs:{for:"name"}},[t._v("Show Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newShowName,expression:"newShowName"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.newShowName},on:{input:function(e){e.target.composing||(t.newShowName=e.target.value)}}})]),n("div",{staticClass:"col-auto"},[n("label",{staticClass:"visually-hidden",attrs:{for:"type"}},[t._v("File Type")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.newFileType,expression:"newFileType"}],staticClass:"custom-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.newFileType=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"Audio"}},[t._v("Audio")]),n("option",{attrs:{value:"Video"}},[t._v("Video")])])]),n("div",{staticClass:"col-auto"},[n("label",{staticClass:"visually-hidden",attrs:{for:"quality"}},[t._v("File Quality")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.newFileQuality,expression:"newFileQuality"}],staticClass:"custom-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.newFileQuality=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"Very Good"}},[t._v("Very Good")]),n("option",{attrs:{value:"Good"}},[t._v("Good")]),n("option",{attrs:{value:"Mediocre"}},[t._v("Mediocre")]),n("option",{attrs:{value:"Bad"}},[t._v("Bad")]),n("option",{attrs:{value:"Very bad"}},[t._v("Very Bad")])])]),n("div",{staticClass:"col-auto align-self-end"},[n("a",{staticClass:"btn btn-primary",on:{click:t.addShow}},[t._v("Add Show")])])])},N=[],x=n("ace7"),L=n.n(x),R={name:"AddShow",data:function(){return{newShowName:"",newShowDate:"",newFileType:"",newFileQuality:""}},methods:{addShow:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.newShowName||!t.newShowDate){e.next=3;break}return e.next=3,window.axios.post("".concat(L.a.API_URL,"/gnr/show/createshow"),{name:t.newShowName,date:t.newShowDate,fileType:t.newFileType,quality:t.newFileQuality});case 3:return t.newShowName="",t.newShowDate="",e.next=7,t.$store.dispatch("setShows");case 7:t.$emit("updateShowList");case 8:case"end":return e.stop()}}),e)})))()}}},F=R,M=Object(w["a"])(F,k,N,!1,null,null,null),T=M.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",staticStyle:{display:"block"},attrs:{id:"editShowModal"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h4",{staticClass:"modal-title"},[t._v("Edit "+t._s(t.clickedShowName))]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.$emit("close")}}},[t._v(" × ")])]),n("div",{staticClass:"modal-body"},[n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"date"}},[t._v("Show Date")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newShowDate,expression:"newShowDate"}],staticClass:"form-control",attrs:{type:"text",id:"date"},domProps:{value:t.newShowDate},on:{input:function(e){e.target.composing||(t.newShowDate=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[t._v("Show Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newShowName,expression:"newShowName"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.newShowName},on:{input:function(e){e.target.composing||(t.newShowName=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{staticClass:"visually-hidden",attrs:{for:"type"}},[t._v("File Type")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.newFileType,expression:"newFileType"}],staticClass:"custom-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.newFileType=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"Audio"}},[t._v("Audio")]),n("option",{attrs:{value:"Video"}},[t._v("Video")])])]),n("div",{staticClass:"form-group"},[n("label",{staticClass:"visually-hidden",attrs:{for:"quality"}},[t._v("File Quality")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.newFileQuality,expression:"newFileQuality"}],staticClass:"custom-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.newFileQuality=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"Very Good"}},[t._v("Very Good")]),n("option",{attrs:{value:"Good"}},[t._v("Good")]),n("option",{attrs:{value:"Mediocre"}},[t._v("Mediocre")]),n("option",{attrs:{value:"Bad"}},[t._v("Bad")]),n("option",{attrs:{value:"Very bad"}},[t._v("Very Bad")])])]),n("div",{staticClass:"col-auto align-self-end d-flex justify-content-between"},[n("a",{staticClass:"btn btn-primary",on:{click:t.addShow}},[t._v("Submit")]),n("a",{staticClass:"btn btn-danger",on:{click:function(e){return t.$emit("close")}}},[t._v(" Close ")])])])])])])])},I=[],O=(n("99af"),n("a9e3"),{name:"EditShowModal",props:{clickedShowId:Number,clickedShowName:String},data:function(){return{showEditShowModal:!1,newShowName:"",newShowDate:"",newFileType:"",newFileQuality:""}},methods:{addShow:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.newShowName||!t.newShowDate){e.next=3;break}return e.next=3,window.axios.post("".concat(L.a.API_URL,"/gnr/show/updateshow"),{id:t.clickedShowId,name:t.newShowName,date:t.newShowDate,fileType:t.newFileType,quality:t.newFileQuality});case 3:return e.next=5,t.$store.dispatch("setShows");case 5:t.$emit("updateShowList"),t.$emit("close");case 7:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.axios.get("".concat(L.a.API_URL,"/gnr/show/getshows/").concat(t.clickedShowId));case 2:n=e.sent,o=n.data,t.newShowName=o.success[0].name,t.newShowDate=o.success[0].date,t.newFileType=o.success[0].file_type,t.newFileQuality=o.success[0].quality;case 8:case"end":return e.stop()}}),e)})))()}}),P=O,D=(n("cb7a"),Object(w["a"])(P,$,I,!1,null,"ffd20eae",null)),j=D.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",staticStyle:{display:"block"},attrs:{id:"songListModal"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h4",{staticClass:"modal-title"},[t._v("Song List for "+t._s(t.clickedShowName))]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.$emit("close")}}},[t._v(" × ")])]),n("div",{staticClass:"modal-body"},[n("form",{staticClass:"row g-3"},[n("div",{staticClass:"col-auto"},[n("label",{staticClass:"visually-hidden",attrs:{for:"song_number"}},[t._v("Song Number")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.songNumber,expression:"songNumber"}],staticClass:"form-control",attrs:{type:"text",id:"song_number"},domProps:{value:t.songNumber},on:{input:function(e){e.target.composing||(t.songNumber=e.target.value)}}})]),n("div",{staticClass:"col-auto"},[n("label",{staticClass:"visually-hidden",attrs:{for:"song_name"}},[t._v("Song Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.songName,expression:"songName"}],staticClass:"form-control",attrs:{type:"text",id:"song_name"},domProps:{value:t.songName},on:{input:function(e){e.target.composing||(t.songName=e.target.value)}}})]),n("div",{staticClass:"col-auto align-self-end"},[n("a",{staticClass:"btn btn-primary",on:{click:t.addSong}},[t._v("Add Song")])])])]),n("div",{staticClass:"modal-body modal-body-scrollable"},[n("table",{staticClass:"table mt-2"},[t._m(0),n("tbody",t._l(t.songs,(function(e){return n("tr",{key:e.song_number},[n("td",[t._v(t._s(e.song_number))]),n("td",[t._v(t._s(e.song_name))]),n("td",[n("a",{staticClass:"btn btn-danger",on:{click:function(n){return t.deleteSong(e.song_number)}}},[t._v("Delete")])])])})),0)])]),n("div",{staticClass:"modal-footer justify-content-start"},[n("div",[n("a",{staticClass:"btn btn-primary",on:{click:function(e){return t.$emit("close")}}},[t._v(" Close ")])])])])])])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Song #")]),n("th",{attrs:{scope:"col"}},[t._v("Song Name")]),n("th",{attrs:{scope:"col"}},[t._v("Delete")])])])}],B={name:"SongListModal",props:{clickedShowId:Number,clickedShowName:String},data:function(){return{showSongListModal:!1,songNumber:"",songName:"",songs:[]}},methods:{addSong:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(parseInt(t.songNumber)){e.next=2;break}return e.abrupt("return");case 2:if(!t.songNumber||!t.songName){e.next=5;break}return e.next=5,window.axios.post("".concat(L.a.API_URL,"/gnr/songs/createsong"),{id:t.clickedShowId,songNumber:t.songNumber,songName:t.songName});case 5:t.songNumber="",t.songName="",t.fetchSongs();case 8:case"end":return e.stop()}}),e)})))()},deleteSong:function(t){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,window.axios.post("".concat(L.a.API_URL,"/gnr/songs/deletesong"),{showId:e.clickedShowId,songNumber:t});case 2:e.fetchSongs();case 3:case"end":return n.stop()}}),n)})))()},fetchSongs:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.axios.get("".concat(L.a.API_URL,"/gnr/songs/getshowsongs/").concat(t.clickedShowId));case 2:n=e.sent,o=n.data,t.songs=o.success;case 5:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.fetchSongs();case 1:case"end":return e.stop()}}),e)})))()}},V=B,Q=(n("cc0d"),Object(w["a"])(V,A,E,!1,null,"2bd65e70",null)),U=Q.exports,G={name:"Table",components:{AddShow:T,EditShowModal:j,SongListModal:U},data:function(){return{showList:[],filteredShowList:[],showEditModal:!1,showSongListModal:!1,clickedShowId:"",clickedShowName:"",sortColumn:{name:"",direction:""}}},methods:{toggleEditModal:function(t){var e=t.id,n=t.name;this.clickedShowId=e,this.clickedShowName=n,this.showEditModal=!0},toggleSongListModal:function(t){var e=t.id,n=t.name;this.clickedShowId=e,this.clickedShowName=n,this.showSongListModal=!0},updateShowList:function(){this.showList=this.$store.getters.shows,this.checkFilteredShows()},checkFilteredShows:function(){var t=this;this.filteredShowList.length&&(this.filteredShowList=this.showList.filter((function(e){return e.name.includes(t.$store.getters.searchTerm)||e.date.includes(t.$store.getters.searchTerm)})))},updateStatus:function(t,e){var n=this;return Object(C["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,window.axios.post("".concat(L.a.API_URL,"/gnr/show/updatestatus"),{id:t,status:e});case 2:return o.next=4,n.$store.dispatch("setShows");case 4:n.updateShowList();case 5:case"end":return o.stop()}}),o)})))()},sortBy:function(t){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.sortColumn.name!==t?(e.sortColumn.name=t,e.sortColumn.direction="asc"):e.sortColumn.name===t&&"asc"===e.sortColumn.direction?e.sortColumn.direction="desc":e.sortColumn.name===t&&"desc"===e.sortColumn.direction&&(e.sortColumn.direction="asc"),n.next=3,e.$store.dispatch("setShows",e.sortColumn);case 3:e.updateShowList();case 4:case"end":return n.stop()}}),n)})))()},deleteShow:function(t){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,window.axios.post("".concat(L.a.API_URL,"/gnr/show/deleteshow"),{id:t});case 2:return n.next=4,e.$store.dispatch("setShows");case 4:e.updateShowList();case 5:case"end":return n.stop()}}),n)})))()}},mounted:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("setShows");case 2:t.updateShowList();case 3:case"end":return e.stop()}}),e)})))()},watch:{"$store.state.filteredShows":function(){this.filteredShowList=this.$store.getters.filteredShows}}},q=G,H=(n("76a5"),Object(w["a"])(q,_,y,!1,null,null,null)),J=H.exports,z={name:"Home",components:{Navbar:b,Table:J}},K=z,W=Object(w["a"])(K,r,i,!1,null,null,null),X=W.exports,Y={name:"App",components:{Home:X}},Z=Y,tt=Object(w["a"])(Z,a,s,!1,null,null,null),et=tt.exports,nt=(n("4160"),n("159b"),n("2f62")),ot=n("bc3a"),at=n.n(ot);o["a"].use(nt["a"]);var st=new nt["a"].Store({state:{shows:[],filteredShows:[],searchTerm:""},mutations:{setShows:function(t,e){t.shows=[],e.forEach((function(e){return t.shows.push(e)}))},setFilteredShows:function(t,e){t.filteredShows=[],e.length&&"No Results Found!"!==e[0].name?e.forEach((function(e){return t.filteredShows.push(e)})):e.length&&"No Results Found!"===e[0].name&&t.filteredShows.push({id:"",date:"",name:e[0].name})},setSearchTerm:function(t,e){t.searchTerm=e}},actions:{setShows:function(t,e){return Object(C["a"])(regeneratorRuntime.mark((function n(){var o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,at.a.get("".concat(L.a.API_URL,"/gnr/show/getshows").concat(e&&e.name?"?sort=".concat(e.name,"&direction=").concat(e.direction):""));case 2:o=n.sent,a=o.data,t.commit("setShows",a.success);case 5:case"end":return n.stop()}}),n)})))()},setFilteredShows:function(t,e){t.commit("setFilteredShows",e)},setSearchTerm:function(t,e){t.commit("setSearchTerm",e)}},getters:{shows:function(t){return t.shows},filteredShows:function(t){return t.filteredShows},searchTerm:function(t){return t.searchTerm}}});n("4989"),n("ab8b");window.axios=n("bc3a"),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(et)},store:st}).$mount("#app")},"694f":function(t,e,n){},"76a5":function(t,e,n){"use strict";n("694f")},ace7:function(t,e,n){var o=n("ded3"),a="production",s={IS_DEV:!0,APP_PORT:3423,API_URL:"http://localhost:3423",publicPath:"./"},r={IS_DEV:!1,APP_PORT:3423,API_URL:"http://10.0.0.49:3423",publicPath:"/gnr/"},i={dev:s,production:r};t.exports=o({},i[a])},c473:function(t,e,n){},cb7a:function(t,e,n){"use strict";n("e2dd")},cc0d:function(t,e,n){"use strict";n("c473")},e2dd:function(t,e,n){}});
//# sourceMappingURL=app.1d10ea31.js.map