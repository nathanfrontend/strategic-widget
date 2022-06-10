import logo from "./logo.svg";
import styles from "./index.module.css";
import { ReactComponent as MyExplore } from "./util/explore.svg";
import { ReactComponent as MyArrow } from "./util/arrow.svg";
import { ReactComponent as MyExpand } from "./util/expand.svg";
import { fetchCardData } from "./services/api";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // added this in just to see if there would be a usecase for a more details hover feature?
  const [moreDetails, setMoreDetails] = useState(false);
  const strategicLink =
    "https://intelligence.weforum.org/topics/a1Gb0000000LHOUEA4?tab=publications";
  useEffect(() => {
    // I assume there will be a paramter that needs entering, could use a unique ID from the url to pass as a param

    fetchCardData()
      .then(function (data) {
        // handle success
        console.log(data);
        setData(data.data);
        // just in case the API doesnt work when showcasing, using this to swtch etween hard coded data
        setLoading(true);
      })
      .catch(function (error) {
        // handle error
        alert(error);
      });
  }, []);
  return (
    <div className="App">
      <div className={styles.Container}>
        <div className={styles.Header}>
          <h2>{isLoading ? data.Title : "Explore Context"}</h2>
          <span>
            <MyExplore />
          </span>
        </div>
        <span className={styles.subHeader}>
          <h3>
            {isLoading ? data.SubTitle : "Financial and Monetary Systems"}
          </h3>
          <a href={strategicLink} target="_blank" rel="link">
            <img
              className={styles.imgStrategic}
              src="https://assets.weforum.org/topic/transformation_map_image/responsive_medium_kSAv4-JRsZFgQTylLjadZR9D-Zag1ieUZA2IiQwd_zQ.png"
            />
          </a>
        </span>

        <div className={styles.link}>
          <a href={strategicLink} target="_blank" rel="link">
            {" "}
            Explore the latest strategic trends, research and analysis
          </a>
          <a href={strategicLink} target="_blank" rel="link">
            <MyArrow style={{ height: 50, width: 30 }} />
          </a>
        </div>

        <motion.div
          onHoverStart={() => setMoreDetails(!moreDetails)}
          onHoverEnd={() => setMoreDetails(!moreDetails)}
        >
          <span>
            <MyExpand
              style={{
                height: 20,
                width: 20,
                display: "flex",
                marginLeft: "50%",
                paddingTop: "5px",
                paddingBottom: "5px",
                cursor: "pointer",
              }}
            />
          </span>
          {moreDetails ? (
            <p>
              {isLoading
                ? data.description
                : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse corporis, velit porro impedit laudantium accusamus! Id velit,  illum magni rem mollitia blanditiis iste maiores optio ipsa, est dolorem fugit. Lorem ipsum dolor sit amet, consectetur adipisicing   elit. Eius esse corporis, velit porro impedit laudantium   accusamus! Id velit, illum magni rem mollitia blanditiis iste   maiores optio ipsa, est dolorem fugit."}
            </p>
          ) : null}
        </motion.div>
      </div>
    </div>
  );
}

export default App;
