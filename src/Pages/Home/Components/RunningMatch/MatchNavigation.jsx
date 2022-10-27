import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import styles from "./RunningMatch.module.css";
import LiveScore from "./SingleTabs/LiveScore";
const MatchNavigation = () => {
  return (
    <div className="">
      <Tabs
        defaultActiveKey="liveScore"
        id="justify-tab-example"
        className={styles.matchNavigation_wrapper}
        justify
      >
        <Tab eventKey="liveScore" title="*Live Score">
          <div className={styles.singleTab_wrapper}>
            <LiveScore />
          </div>
        </Tab>
        <Tab eventKey="scoreboard" title="Scoreboard">
          {/* <img
            src="/assets/photos/construction.png"
            alt=""
            srcset=""
            width={600}
          /> */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi repellendus similique, animi, fugiat quis ex eius quisquam vel consequuntur, nobis sequi maxime molestias. Dolore rerum quae asperiores error. Libero assumenda consectetur perspiciatis similique vitae ullam maxime, omnis veniam, adipisci, nisi quos illum corporis! Laboriosam labore facere debitis numquam quasi, repellendus, quaerat ut quis non dolorum laborum iure accusantium unde, eum autem sunt? Neque ad vero in nam voluptates animi cumque, excepturi illo earum dicta ipsa temporibus nulla, at saepe exercitationem molestias, itaque alias adipisci molestiae. Facilis voluptate fugiat nostrum cumque temporibus neque ducimus rem veritatis quos minus provident saepe corrupti facere adipisci nemo itaque necessitatibus, mollitia, soluta quod deserunt. Sunt harum dicta facere quis itaque nisi, quod debitis eveniet quisquam voluptatibus consequuntur nihil repudiandae repellat accusamus alias corporis impedit tempore laudantium eos deleniti necessitatibus possimus optio soluta reiciendis. Suscipit voluptatibus laudantium eos iste at sunt labore. Neque, dicta libero cupiditate explicabo magnam earum totam molestiae asperiores, iusto hic minima reprehenderit illum accusamus odio officia labore a eligendi fugiat nesciunt quaerat. Fugit in nisi facere? Sequi nesciunt eius fugit modi beatae necessitatibus laudantium explicabo itaque dignissimos commodi culpa veniam accusantium amet minus, tempora harum est sunt alias! Maxime incidunt cupiditate non sed! Quidem animi accusamus mollitia velit sapiente maxime, sunt at saepe voluptatem voluptates ut natus repellendus porro. Deleniti dolore atque optio sit mollitia praesentium cumque et numquam facilis quia magni ex quos, blanditiis, explicabo ea quod aliquid, architecto doloremque assumenda minima natus incidunt sed. Possimus cupiditate non pariatur tempora repellendus enim voluptatum asperiores quibusdam commodi. Vero ipsum libero quos laudantium repellendus, quibusdam doloremque eveniet expedita praesentium repudiandae commodi suscipit ratione nesciunt ipsa, sed dolores aperiam laboriosam veniam impedit modi pariatur voluptas aliquam dicta magni? Nulla quia necessitatibus nobis dolores, iste assumenda error repellat laboriosam recusandae esse quibusdam quo vitae saepe ea praesentium nostrum eligendi tempore nihil fugit tempora eveniet vero aliquid. Voluptatibus ad, beatae voluptatum nulla repudiandae impedit maxime libero recusandae, illum est sunt quo unde, at deserunt repellat! Repellat minima numquam magni veritatis dolore quibusdam tenetur ratione, dolorum excepturi vero aliquid ipsam deleniti. Totam ullam explicabo molestias corporis sequi ducimus, blanditiis autem maxime fuga saepe culpa reiciendis excepturi, minima pariatur quo tenetur sapiente tempore qui unde mollitia at harum enim. Velit voluptas id nam deserunt similique ullam eos totam. Excepturi libero assumenda animi voluptatem incidunt est illo eos eius? Labore cumque fugit est dolores nobis corporis pariatur. Sed, voluptatum.
        </Tab>
        <Tab eventKey="squads" title="Squads">
          <img
            src="/assets/photos/construction.png"
            alt=""
            srcset=""
            width={600}
          />
        </Tab>
        <Tab eventKey="commentary" title="Commentary">
          <img
            src="/assets/photos/construction.png"
            alt=""
            srcset=""
            width={600}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default MatchNavigation;
