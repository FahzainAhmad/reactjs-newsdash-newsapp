import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import customStyle from "../StyleSheets/Styles.module.css";
import backupImg from "../assets/picture.png";
import { useState } from "react";

function Home() {
    const { userName } = useParams();
    const [IsRediring, SetRedir] = useState(false);

    let today = new Date();
    const date = today.getDate();
    const month = today.toLocaleString("default", { month: "short" });
    const year = today.getFullYear();

    const full_date = date + " " + month + " " + year;

    const redir = () => {
        SetRedir(true);
    };

    const loaderStyle = {
        display: IsRediring ? "block" : "none",
    };

    useEffect(() => {
        fetch(
            "https://newsapi.org/v2/top-headlines?language=en&apiKey=<api_key>"
        )
            .then((response) => response.json())
            .then((data) => {
                const slideCon = document.getElementById("slideCon");
                slideCon.innerHTML = "";
                for (let i = 0; i < 3; i++) {
                    const newsimageUrl = data.articles[i].urlToImage;
                    const newstitle = data.articles[i].title;
                    const newsdate = data.articles[i].source.name;
                    slideCon.innerHTML += `
            <div class='${customStyle.slide}' style="background-image: linear-gradient(to right, rgba(26, 26, 26, 0.7), rgba(16, 16, 16, 0.7)), url('${newsimageUrl}')">
              <div class="${customStyle.newscontain}">
                <p class="${customStyle.newst}">${newstitle}</p>
                <p class="${customStyle.newsdate}">${newsdate}</p>
              </div>
            </div>
          `;
                }
            });
    }, []);

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=<api_key>")
            .then((response) => response.json())
            .then((data) => {
                const slideCon = document.getElementById("newzz");
                slideCon.innerHTML = "";
                for (let i = 0; i < 30; i++) {
                    let newsimageUrl, newstitle, newsdate, newssourse;
                    if (data.articles[i].urlToImage !== null) {
                        newsimageUrl = data.articles[i].urlToImage;
                        newstitle = data.articles[i].title;
                        newsdate = data.articles[i].source.name;
                        newssourse = data.articles[i].url;
                    } else {
                        newsimageUrl = backupImg;
                        newstitle = data.articles[i].title;
                        newsdate = data.articles[i].source.name;
                        newssourse = data.articles[i].url;
                    }

                    slideCon.innerHTML += `
            <a href="${newssourse}" style="margin-top: 10px" onclick='${redir}'>
              <div class='${customStyle.newz}'>
                <img src="${newsimageUrl}" alt="news" class='${customStyle.imgnewz}' />
                <div class='${customStyle.newscon}'>
                  <p class='${customStyle.newst}'>${newstitle}</p>
                  <p class='${customStyle.newsd}'>${newsdate}</p>
                </div>
              </div>
            </a>
          `;
                }
            });
    }, []);

    return (
        <>
            <div className={customStyle.loader} id="loader" style={loaderStyle}>
                Redirecting..
                <span></span>
            </div>
            <div className={customStyle.headcontainer}>
                <div className={customStyle.alignme}>
                    <div>
                        <h1 className={customStyle.homehead}>Hi! {userName}</h1>
                        <p className={customStyle.datestyle}>{full_date}</p>
                    </div>
                </div>
                <div className={customStyle.trends}>
                    <span className={`${customStyle.subt} ${customStyle.mno}`}>
                        Trending 🔥
                    </span>
                </div>
            </div>
            <div className={customStyle.slidecontainer} id="slideCon">
                <div
                    className={customStyle.customloader}
                    style={{ marginLeft: "45%" }}
                ></div>
            </div>
            <div
                className={customStyle.headcontainer}
                style={{ padding: "0px" }}
            >
                <p className={customStyle.subt}>Today's latest news</p>
            </div>
            <div className={customStyle.newzz} id="newzz">
                <div className={customStyle.customloader}></div>
            </div>
        </>
    );
}

export default Home;
