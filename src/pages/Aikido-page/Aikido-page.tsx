import React from 'react';
import History from '../../components/Aikido/History/History';
import EmblaCarousel from '../../components/Aikido/organisation-cards/organisation-cards';
import GlobalLayout from "../../components/layouts/globalLayout/globalLayout";

const Aikido_page = () => {
  return (
      <GlobalLayout>
          <div>
              <History/>
              <EmblaCarousel/>
          </div>
      </GlobalLayout>

  )
}

export default Aikido_page;