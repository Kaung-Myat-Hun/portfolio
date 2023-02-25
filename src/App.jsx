import "./App.css";
import { BrowserRouter } from "react-router-dom";
import View from "./components/View/View";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Mobile from "./components/Mobile/Mobile";
import { useState, useEffect } from "react";

function App() {
  const [os, setOs] = useState(null);
  useEffect(() => {
    var module = {
      options: [],
      header: [
        navigator.platform,
        navigator.userAgent,
        navigator.appVersion,
        navigator.vendor,
        window.opera,
      ],
      dataos: [
        { name: "Windows Phone", value: "Windows Phone", version: "OS" },
        { name: "Windows", value: "Win", version: "NT" },
        { name: "iPhone", value: "iPhone", version: "OS" },
        { name: "iPad", value: "iPad", version: "OS" },
        { name: "Kindle", value: "Silk", version: "Silk" },
        { name: "Android", value: "Android", version: "Android" },
        { name: "PlayBook", value: "PlayBook", version: "OS" },
        { name: "BlackBerry", value: "BlackBerry", version: "/" },
        { name: "Macintosh", value: "Mac", version: "OS X" },
        { name: "Linux", value: "Linux", version: "rv" },
        { name: "Palm", value: "Palm", version: "PalmOS" },
      ],
      databrowser: [
        { name: "Chrome", value: "Chrome", version: "Chrome" },
        { name: "Firefox", value: "Firefox", version: "Firefox" },
        { name: "Safari", value: "Safari", version: "Version" },
        { name: "Internet Explorer", value: "MSIE", version: "MSIE" },
        { name: "Opera", value: "Opera", version: "Opera" },
        { name: "BlackBerry", value: "CLDC", version: "CLDC" },
        { name: "Mozilla", value: "Mozilla", version: "Mozilla" },
      ],
      init: function () {
        var agent = this.header.join(" "),
          os = this.matchItem(agent, this.dataos),
          browser = this.matchItem(agent, this.databrowser);

        return { os: os, browser: browser };
      },
      matchItem: function (string, data) {
        var i = 0,
          j = 0,
          html = "",
          regex,
          regexv,
          match,
          matches,
          version;

        for (i = 0; i < data.length; i += 1) {
          regex = new RegExp(data[i].value, "i");
          match = regex.test(string);
          if (match) {
            regexv = new RegExp(data[i].version + "[- /:;]([\\d._]+)", "i");
            matches = string.match(regexv);
            version = "";
            if (matches) {
              if (matches[1]) {
                matches = matches[1];
              }
            }
            if (matches) {
              matches = matches.split(/[._]+/);
              for (j = 0; j < matches.length; j += 1) {
                if (j === 0) {
                  version += matches[j] + ".";
                } else {
                  version += matches[j];
                }
              }
            } else {
              version = "0";
            }
            return {
              name: data[i].name,
              version: parseFloat(version),
            };
          }
        }
        return { name: "unknown", version: 0 };
      },
    };

    var e = module.init(),
      debug = "";

    debug += "os.name = " + e.os.name + "<br/>";
    debug += "os.version = " + e.os.version + "<br/>";
    debug += "browser.name = " + e.browser.name + "<br/>";
    debug += "browser.version = " + e.browser.version + "<br/>";

    debug += "<br/>";
    debug += "navigator.userAgent = " + navigator.userAgent + "<br/>";
    debug += "navigator.appVersion = " + navigator.appVersion + "<br/>";
    debug += "navigator.platform = " + navigator.platform + "<br/>";
    debug += "navigator.vendor = " + navigator.vendor + "<br/>";

    setOs(debug);
  }, []);
  return (
    <>
      {os?.name === "Android" ? (
        <Mobile name={os?.name} />
      ) : os?.name === "iPhone" ? (
        <Mobile name={os?.name} />
      ) : (
        <div className="App bg-slate-200">
          <Navbar></Navbar>
          <BrowserRouter>
            <View></View>
          </BrowserRouter>
          <Footer></Footer>
        </div>
      )}
    </>
  );
}

export default App;
