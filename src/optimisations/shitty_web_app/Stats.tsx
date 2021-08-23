import React from 'react'
import {VictoryChart, VictoryTheme, VictoryBar, VictoryAxis} from 'victory'
import {parseJSON, getNumberOfMoviesPerYear} from './utils'
import {Title} from '../../shared/Title'
import {SimpleContainer} from '../../shared/SimpleContainer'

export function Stats () {
  const [movies, setMovies] = React.useState([])
  
  React.useEffect(() => {
    fetch('http://localhost:5000/movies')
      .then(parseJSON)
      .then(movies => {
        setMovies(movies);
      })
  }, []);

  const moviesPerYear = getNumberOfMoviesPerYear(movies)
  return (
    <SimpleContainer>
      <Title>VictoryBarNumber of movies per year in our database from 94 to 17</Title>
      <VictoryChart theme={VictoryTheme.material} animate>
        <VictoryBar x={'year'} y={'number'} data={moviesPerYear} />
        <VictoryAxis
          style={{
            axis: {stroke: '#E0F2F1'},
            axisLabel: {fontSize: 16},
            ticks: {stroke: '#ccc'},
            tickLabels: {fontSize: 14, fontWeight: 'bold'},
            grid: {stroke: '#B3E5FC', strokeWidth: 0.25},
          }}
          dependentAxis
        />
      </VictoryChart>
    </SimpleContainer>
  )
}
