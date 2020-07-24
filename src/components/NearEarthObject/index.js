import React, { useEffect, useState } from 'react';
// import AsteroidContext from '../../context/asteroids/asteroidContext';
import NumberFormat from 'react-number-format';
import Modal from 'react-modal';
import {
  NEOContainer,
  NEOContainerHeader,
  AsteroidName,
  AsteroidIcon,
  AsteroidMagnitude,
  HazardPotential,
  ApproachDate,
  Speed,
  Diameter,
  MissDistance,
  Span,
  Button,
  ButtonClose,
  OfficialNasaReference,
  CloseIcon,
} from './styles';

// NEO (Near Earth Object)
// This components represents an individual asteroid,
// returned from the 'near_earth_objects', object array.

const customStyles = {
  content: {
    margin: 'auto auto',
    width: '50rem',
    height: '50rem',
    background: '#fff',
    border: 'none',
    boxShadow: ' 0px 0px 10px 5px rgba(133,133,133,0.43)',
  },
};

const responsiveStyles = {
  content: {
    margin: 'auto auto',
    width: '50%',
    height: '50%',
    background: '#fff',
    border: 'none',
    boxShadow: ' 0px 0px 10px 5px rgba(133,133,133,0.43)',
  },
};

const styles = () => {
  if (window.innerWidth < 650) {
    return responsiveStyles;
  } else {
    return customStyles;
  }
};

const NEO = ({ asteroid }) => {
  const {
    name,
    absolute_magnitude_h,
    estimated_diameter,
    is_potentially_hazardous_asteroid,
    close_approach_data,
    nasa_jpl_url,
  } = asteroid;

  // Bind Modal to #root for accessibility
  Modal.setAppElement(document.getElementById('root'));

  // Set Modal state
  const [modalIsOpen, setIsOpen] = useState(false);

  async function openModal() {
    await setIsOpen(true);
    console.log(modalIsOpen);
  }

  // const afterOpenModal = () => {};

  function closeModal() {
    setIsOpen(false);
    console.log(modalIsOpen);
  }

  return (
    <NEOContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ButtonClose onClick={closeModal}>
          {' '}
          <CloseIcon className='fas fa-times' />
        </ButtonClose>
        <NEOContainerHeader>
          <AsteroidIcon>
            <img src={require('./../../universe.png')} />
          </AsteroidIcon>
          <AsteroidName>{name}</AsteroidName>
        </NEOContainerHeader>
        <AsteroidMagnitude>
          Absolute Magnitude: <Span>{absolute_magnitude_h}</Span>
        </AsteroidMagnitude>
        <HazardPotential>
          Potentially Hazardous?
          <Span
            style={
              is_potentially_hazardous_asteroid
                ? { color: '#ee2828' }
                : { color: 'green' }
            }
          >
            {is_potentially_hazardous_asteroid ? ' Yes ' : ' Negative '}
          </Span>
        </HazardPotential>
        <ApproachDate>
          Date Approaching Earth:
          <Span>{close_approach_data[0].close_approach_date}</Span>
        </ApproachDate>
        <Speed>
          Speed:
          <Span>
            <NumberFormat
              value={Math.floor(
                close_approach_data[0].relative_velocity.miles_per_hour
              )}
              thousandSeparator={true}
              displayType={'text'}
            />{' '}
            MPH
          </Span>
        </Speed>
        <Diameter>
          Diamter:{' '}
          <Span>
            {Math.floor(estimated_diameter.feet.estimated_diameter_max)} Feet{' '}
          </Span>
        </Diameter>
        <MissDistance>
          Distance from earth:{' '}
          <Span>
            <NumberFormat
              value={Math.floor(close_approach_data[0].miss_distance.miles)}
              thousandSeparator={true}
              displayType={'text'}
            />
            Miles{' '}
          </Span>
        </MissDistance>
        <OfficialNasaReference target='_blank' href={nasa_jpl_url}>
          Offical Nasa Referance
        </OfficialNasaReference>
      </Modal>
      <NEOContainerHeader>
        <AsteroidIcon>
          {/* <i className='fas fa-meteor'></i> */}
          <img src={require('./../../universe.png')} />
        </AsteroidIcon>
        <AsteroidName>{name}</AsteroidName>
      </NEOContainerHeader>
      <HazardPotential>
        Potentially Hazardous?
        <Span
          style={
            is_potentially_hazardous_asteroid
              ? { color: '#ee2828' }
              : { color: 'green' }
          }
        >
          {is_potentially_hazardous_asteroid ? ' Yes ' : ' Negative '}
        </Span>
      </HazardPotential>
      <Speed>
        Speed:
        <Span>
          <NumberFormat
            value={Math.floor(
              close_approach_data[0].relative_velocity.miles_per_hour
            )}
            thousandSeparator={true}
            displayType={'text'}
          />{' '}
          MPH
        </Span>
      </Speed>
      <MissDistance>
        Distance from earth:{' '}
        <Span>
          <NumberFormat
            value={Math.floor(close_approach_data[0].miss_distance.miles)}
            thousandSeparator={true}
            displayType={'text'}
          />
          Miles{' '}
        </Span>
      </MissDistance>
      <Button onClick={openModal}>View More</Button>
    </NEOContainer>
  );
};

export default NEO;
