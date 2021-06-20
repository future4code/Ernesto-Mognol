import React, {useState} from 'react';
import styled from 'styled-components';
import Profiles from './components/Profiles.js'
import Matches from './components/Matches.js'
import Header from './components/Header.js'

const PageContainer = styled.div`
  width: 40vw;
  margin: 0 auto;
  font-family: Arial;
`;

function App() {
  const [pageValue, setPageValue] = useState ("profiles")

  const goProfiles = () => {
    setPageValue("profiles")
  }
  const goMatches = () => {
    setPageValue("matches")
  }
    if (pageValue === "profiles") {
      return(
        <PageContainer>
          <Header
            changePage = {goMatches}
            pageName = "MATCHES"
          />
          <Profiles />
        </PageContainer>
      )
    }
    else if (pageValue === "matches"){
      return(
        <PageContainer>
          <Header
            changePage = {goProfiles}
            pageName = "PERFIS"
          />
          <Matches />
        </PageContainer>
      )
    }
}


export default App;
