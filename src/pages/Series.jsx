import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "./movie.css"

function  Series() {
  const [data, setData] = useState([]);
  const [isLoading,setLoading]=useState(false)


  useEffect(() => {
    getData()
  },[]);


  const filterArray = (res) => {
    console.log("start")

    const temp = res.filter((ele)=>ele.programType==="series")
      .filter((ele) => ele.releaseYear >= 2010)
      .sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    setData(temp.slice(0, 21));
  };

  const getData = async () => {
    setLoading(true)
    try {
        console.log("fetchData")
      const res = await axios.get(
        "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
      );
        console.log(res.data.entries)
        filterArray(res.data.entries)
        setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <>
      <Navbar />
      <div style={{backgroundColor:"gray",width:"100%",marginBottom:"10px",padding:"20px"}}>Popular Series</div>
      <div className="container">
      {isLoading?<div><h1>Loading....</h1></div>:
      <div className="grid">
        {data.map((item, index) => (
          <div className="outerDiv" key={index}>
            <div className="imgdiv">
              {
                <img
                  src={item.images["Poster Art"].url}
                  onError={(e) => {
                    e.currentTarget.src = "";
                  }}
                  className="image"
                  alt="image_not available"
                />
              }
              
                <p>{item.title}</p>
             
            </div>
          </div>
        ))}
      </div>
}
      </div>
      <Footer />
    </>
  );
}

export default Series;
