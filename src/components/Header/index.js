import React from 'react';
import { HeaderContainer, Title, SubTitle, About } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Asteroids</Title>
      <SubTitle>Near Earth Object Web Service</SubTitle>
      <About>
        Have you ever witnessed a star falling out of the night sky and suddenly
        found yourself in a dilemma of not knowing what to wish for? Well, if
        you have yet to catch my error then I'm sorry to be the bearer of bad
        news, but those aren't stars, they're asteroids. Fortunately, if you
        would like to know how many are currently nearing earth, you're in the
        right place.
        {/* If not, once again my apologies. */}
      </About>
    </HeaderContainer>
  );
};

export default Header;
