import React from "react";
import classes from "./MoreInfo.module.scss";
import PageContainer from "../../containers/PageContainer";


import { useTheme } from '@mui/material/styles';

const MoreInfo = (props) => {
  const product = props.product;
  const theme = useTheme();
  const backgroundColor = {"backgroundColor": theme.palette.background.main};

  return ( 
    <section className={classes.section} style={backgroundColor}>
      <PageContainer>
        <nav className={classes.navigation}>
          <ul>
            <li className={classes.active}>Description</li>
            <li>Additional Info</li>
            <li>Reviews</li>
          </ul>
        </nav>
        <div className={classes.info}>
          <h3>Varius Tempor</h3>
          <p>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
            tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
            lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
            massa viverr .
          </p>
        </div>
      </PageContainer>
    </section>
  );
};

export default MoreInfo;
