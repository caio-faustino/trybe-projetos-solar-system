import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default class SolarSystem extends Component {
  render() {
    return (
      <div>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        <div>
          {
            planets.map((planet) => (
              <PlanetCard
                Key={ planet.name }
                planetName={ planet.name }
                planetImage={ planet.image }
              />
            ))
          }
        </div>
      </div>
    );
  }
}
